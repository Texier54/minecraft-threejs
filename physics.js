import * as THREE from 'three';

import { blocks } from './block.js';

const collisionMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    transparent: true,
    opacity: 0.2
});
const collisionGeometry = new THREE.BoxGeometry(1.001, 1.001, 1.001);

const contactMaterial = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x00ff00 });
const contactGeometry = new THREE.SphereGeometry(0.05, 6, 6);

export class Physics {
    simulationRate = 250;
    timestep = 1/this.simulationRate;
    accumulator = 0;
    gravity = 32;

    constructor(scene) {
        this.helpers = new THREE.Group();
        scene.add(this.helpers);
    }

    update(dt, player, world) {
        this.accumulator += dt;
        while (this.accumulator >= this.timestep) {
            //console.log(world.getBlock(Math.round(player.position.x), 0, Math.round(player.position.z))?.id);
            if(!player.usePointerLock || player.controls.isLocked)
                player.velocity.y -= this.gravity * this.timestep;
            player.applyInputs(this.timestep);
            player.updateBoundsHelper();
            this.detectCollisions(player, world);
            this.accumulator -= this.timestep;
        }


    }

    detectCollisions(player, world) {

        player.onGround = false;
        this.helpers.clear();

        const candidates = this.broadPhase(player, world);
        const collisions = this.narrowPhase(candidates, player);

        if (collisions.length > 0) {
            this.resolveCollisions(collisions, player);
        }
    }

    /**
     * Performs a rough search against the world to return all
     * possible blocks the player may be colliding with
     * @returns {{ id: number, instanceId: number }[]}
     */
    broadPhase(player, world) {
        const candidates = [];

        // Get the block extents of the player
        const minX = Math.floor(player.position.x - player.radius);
        const maxX = Math.ceil(player.position.x + player.radius);
        const minY = Math.floor(player.position.y - player.height);
        const maxY = Math.ceil(player.position.y);
        const minZ = Math.floor(player.position.z - player.radius);
        const maxZ = Math.ceil(player.position.z + player.radius);

        // Loop through all blocks next to the block the center of the player is in
        // If they aren't empty, then they are a possible collision candidate
        for (let x = minX; x <= maxX; x++) {
            for (let y = minY; y <= maxY; y++) {
                for (let z = minZ; z <= maxZ; z++) {
                    const blockId = world.getBlock(x, y, z)?.id;
                    if (blockId && blockId !== blocks.empty.id) {
                        let size = {};
                        let hasStep = false;
                        if (blockId == 53 || blockId == 67) {
                            size = { x: 1, y: 1, z: 1 };
                            hasStep = true; // Ajout d'une propriété pour détecter les escaliers
                        }
                        else if (blockId == 50)
                            size = { x: 0.1, y: 0.1 };
                        else
                            size = { x: 1, y: 1, z: 1 };
                        const block = { x, y, z,  size: size, hasStep: hasStep };
                        candidates.push(block);
                        //this.addCollisionHelper(block);
                    }
                }
            }
        }

        //console.log(`Broadphase Candidates: ${candidates.length}`);

        return candidates;
    }

    /**
     * Narrows down the blocks found in the broad-phase to the set
     * of blocks the player is actually colliding with
     * @param {{ id: number, instanceId: number }[]} candidates
     * @returns
     */
    narrowPhase(candidates, player) {
        const collisions = [];

        for (const block of candidates) {
            const halfSize = { x: block.size.x / 2, y: block.size.y / 2, z: block.size.z / 2 };

            // Calculer le point le plus proche du joueur sur le bloc
            const closestPoint = {
                x: Math.max(block.x - halfSize.x, Math.min(player.position.x, block.x + halfSize.x)),
                y: Math.max(block.y - halfSize.y, Math.min(player.position.y - (player.height / 2), block.y + halfSize.y)),
                z: Math.max(block.z - halfSize.z, Math.min(player.position.z, block.z + halfSize.z))
            };

            // Get distance along each axis between closest point and the center
            // of the player's bounding cylinder
            const dx = closestPoint.x - player.position.x;
            const dy = closestPoint.y - (player.position.y - (player.height / 2));
            const dz = closestPoint.z - player.position.z;

            if (this.pointInPlayerBoundingCylinder(closestPoint, player)) {
                // Compute the overlap between the point and the player's bounding
                // cylinder along the y-axis and in the xz-plane
                const overlapY = (player.height / 2) - Math.abs(dy);
                const overlapXZ = player.radius - Math.sqrt(dx * dx + dz * dz);

                // Compute the normal of the collision (pointing away from the contact point)
                // and the overlap between the point and the player's bounding cylinder
                let normal, overlap;
                if (overlapY < overlapXZ) {
                    normal = new THREE.Vector3(0, -Math.sign(dy), 0);
                    overlap = overlapY;
                    player.onGround = true;
                } else {
                    normal = new THREE.Vector3(-dx, 0, -dz).normalize();
                    overlap = overlapXZ;
                }

                // 🚀 Gestion spéciale pour les escaliers
                if (block.hasStep && dy > -0.6 && dy < 1.2) {

                    //player.position.y += block.size.y; // Monte automatiquement l'escalier
                    player.position.y += Math.min(block.size.y, 0.1); // Monte doucement
                    player.onGround = true;
                    continue; // Ignore la collision normale
                }

                collisions.push({
                    block,
                    contactPoint: closestPoint,
                    normal,
                    overlap
                });

                this.addContactPointerHelper(closestPoint);
            }
        }

        //console.log(`Narrowphase Collisions: ${collisions.length}`);

        return collisions;

    }


    /**
     * Resolves each of the collisions found in the narrow-phase
     * @param {*} collisions
     * @param {Player} player
     */
    resolveCollisions(collisions, player) {
        // Resolve the collisions in order of the smallest overlap to the largest
        collisions.sort((a, b) => {
            return a.overlap < b.overlap;
        });

        for (const collision of collisions) {
            // We need to re-check if the contact point is inside the player bounding
            // cylinder for each collision since the player position is updated after
            // each collision is resolved
            if (!this.pointInPlayerBoundingCylinder(collision.contactPoint, player)) continue;

            // Adjust position of player so the block and player are no longer overlapping
            let deltaPosition = collision.normal.clone();
            deltaPosition.multiplyScalar(collision.overlap);
            player.position.add(deltaPosition);


            // Get the magnitude of the player's velocity along the collision normal
            let magnitude = player.worldVelocity.dot(collision.normal);
            // Remove that part of the velocity from the player's velocity
            let velocityAdjustment = collision.normal.clone().multiplyScalar(magnitude);

            // Apply the velocity to the player
            player.applyWorldDeltaVelocity(velocityAdjustment.negate());


        }
    }

    /**
     * Returns true if the point 'p' is inside the player's bounding cylinder
     * @param {{ x: number, y: number, z: number }} p
     * @param {Player} player
     * @returns {boolean}
     */
    pointInPlayerBoundingCylinder(p, player) {
        const dx = p.x - player.position.x;
        const dy = p.y - (player.position.y - (player.height / 2));
        const dz = p.z - player.position.z;
        const r_sq = dx * dx + dz * dz;

        // Check if contact point is inside the player's bounding cylinder
        return (Math.abs(dy) < player.height / 2) && (r_sq < player.radius * player.radius);
    }

    /**
     * Visualizes the block the player is colliding with
     * @param {THREE.Object3D} block
     */
    addCollisionHelper(block) {
        const blockMesh = new THREE.Mesh(collisionGeometry, collisionMaterial);
        blockMesh.position.copy(block);
        this.helpers.add(blockMesh);
    }

    /**
     * Visualizes the contact at the point 'p'
     * @param {{ x, y, z }} p
     */
    addContactPointerHelper(p) {
        const contactMesh = new THREE.Mesh(contactGeometry, contactMaterial);
        contactMesh.position.copy(p);
        this.helpers.add(contactMesh);
    }
}
