import * as THREE from 'three';

import {mobs} from "./mobs.js";
import {Entity} from "./Entity.js";
import {blocks} from "../block.js";

export class Pig extends Entity {

    mesh = new THREE.Group();
    radius = 2;
    height = 1;

    // Pathfinding state
    path = [];
    pathIndex = 0;
    repathCooldown = 0; // seconds before trying to recompute a path
    stuckTime = 60;      // seconds being nearly stationary
    lastPos = new THREE.Vector3();

    health = 10;

    constructor(world, position) {
        super(world, position);

        // Création des parties du cochon
        const bodyGeometry = new THREE.BoxGeometry(0.9, 0.7, 1.6); // Corps (rectangle)
        const headGeometry = new THREE.BoxGeometry(0.7, 0.7, 0.7); // Tête (cube)
        const noiseGeometry = new THREE.BoxGeometry(0.32, 0.25, 0.1); // Tête (cube)
        const legGeometry = new THREE.BoxGeometry(0.4, 0.5, 0.4); // Pattes (petits cubes)

        // Corps
        const body = new THREE.Mesh(bodyGeometry, mobs.pig.body.material);
        body.position.set(0, 0.6, 0);
        body.userData.entity = this;
        this.mesh.add(body);


        // Tête
        const head = new THREE.Mesh(headGeometry, mobs.pig.head.material);
        head.position.set(0, 0.8, 1);
        head.userData.entity = this;
        this.mesh.add(head);

        const noise = new THREE.Mesh(noiseGeometry, mobs.pig.noise.material);
        noise.position.set(0, 0.7, 1.4);
        noise.userData.entity = this;
        this.mesh.add(noise);

        // Pattes (quatre cubes)
        for (let i = 0; i < 4; i++) {
            const leg = new THREE.Mesh(legGeometry, mobs.pig.feet.material);
            leg.userData.entity = this;
            leg.position.set(
                i < 2 ? -0.25 : 0.25, // Gauche/droite
                0, // Hauteur des pattes
                i % 2 === 0 ? -0.7 : 0.6 // Avant/arrière
            );
            leg.isLeg = true; // Identifie cet objet comme une jambe
            this.mesh.add(leg);
        }

        // Zone dans laquelle le cochon peut se déplacer
        this.BOUNDARY = {
            minX: -50, maxX: 50,
            minZ: -50, maxZ: 50
        };

        // Définir une cible initiale
        this.target = this.getRandomTarget();

        this.pigVelocity = new THREE.Vector3(0, 0, 0); // Vitesse du cochon (incluant la gravité)

        this.mesh.position.copy(this.position); // <- important

        // init pathfinding trackers
        this.lastPos.copy(this.mesh.position);

        this.hitTime = 0;
        // Store the current materials only if hitTime is 0 (to avoid overwriting while already hit)
        this.originalMaterials = this.mesh.children.map(c => c.material);

        this.redMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        this.redMaterial.needsUpdate = true;
    }


    // Générer une nouvelle cible aléatoire
    getRandomTarget() {
        const x = Math.random() * (this.BOUNDARY.maxX - this.BOUNDARY.minX) + this.BOUNDARY.minX;
        const z = Math.random() * (this.BOUNDARY.maxZ - this.BOUNDARY.minZ) + this.BOUNDARY.minZ;
        const y = this.getGroundYAt(Math.round(x), Math.round(z), Math.round(this.mesh.position.y));
        return new THREE.Vector3(x, y, z);
    }

    hit() {
        console.log('hit pig');
        this.hitTime = 0.3; // seconds
        this.runTime = 3; // seconds
        this.pigVelocity.y += 0.2; // small rebound

        this.mesh.children.forEach((child, i) => {
            if (child.material) {
                child.material = this.redMaterial;
            }
        });
        this.target = this.getRandomTarget(); // Nouvelle cible aléatoire
        this.audioManager.playBlockSound('pig', 'hurt');
        // reset current path so it replans away from the hitter
        this.path = [];
        this.pathIndex = 0;

        this.health -= 0.5;
        if (this.health <= 0) {
            this.world.removeEntity(this);
        }

    }

    update(deltaTime) {
        let runSpeed = 0;

        // --- simple stuck detector (helps trigger replanning) ---
        if (this.lastPos.distanceToSquared(this.mesh.position) < 0.0004) { // ~2 cm
            this.stuckTime += deltaTime;
        } else {
            this.stuckTime = 0;
            this.lastPos.copy(this.mesh.position);
        }

        // cooldown before recomputing a path (prevents heavy A* every frame)
        if (this.repathCooldown > 0) this.repathCooldown -= deltaTime;

        this.broadPhase();

        //rouge
        if (this.hitTime > 0) {
            runSpeed = 2;
            this.hitTime -= deltaTime;
            if (this.hitTime <= 0) {
                this.mesh.children.forEach((child, i) => {
                    if (this.originalMaterials[i]) {
                        child.material = this.originalMaterials[i];
                    }
                });
            }
        }

        //courir
        if (this.runTime > 0) {
            this.runTime -= deltaTime;
            runSpeed = 3;
        }

        // --- PATHFINDING: compute path if needed ---
        const distToTarget = this.mesh.position.distanceTo(this.target);
        if ((this.path.length === 0 && distToTarget > 2) || this.stuckTime > 0.75) {
            if (this.repathCooldown <= 0) {
                const start = new THREE.Vector3(
                    Math.round(this.mesh.position.x),
                    Math.round(this.mesh.position.y),
                    Math.round(this.mesh.position.z)
                );
                const goal = new THREE.Vector3(
                    Math.round(this.target.x),
                    Math.round(this.target.y),
                    Math.round(this.target.z)
                );
                const newPath = this.findPath(start, goal, 3000, 32);
                if (newPath && newPath.length) {
                    this.path = newPath;
                    this.pathIndex = 0;
                } else {
                    // fallback: pick a new random target if no path
                    this.target = this.getRandomTarget();
                }
                this.repathCooldown = 0.5; // limit A* frequency
                this.stuckTime = 0;
            }
        }

        if (this.world.getBlock(Math.floor(this.mesh.position.x), Math.floor(this.mesh.position.y), Math.floor(this.mesh.position.z))?.id == 0 ) {
            //console.log('down');
            this.pigVelocity.y -= 0.01;
        } else if (this.world.getBlock(Math.floor(this.mesh.position.x), Math.ceil(this.mesh.position.y), Math.floor(this.mesh.position.z))?.id > 0) {
            //console.log('up');
            this.pigVelocity.y += 0.05;
        } else
            this.pigVelocity.y = 0; // Annule la gravité si le cochon est sur un bloc


        // Déplace le cochon en fonction de la vélocité
        this.mesh.position.add(this.pigVelocity);

        const speed = 1 + runSpeed; // base speed

        // Decide current steering target: waypoint or raw target
        let steeringTarget = this.target;
        if (this.path.length > 0 && this.pathIndex < this.path.length) {
            const wp = this.path[this.pathIndex];
            steeringTarget = new THREE.Vector3(wp.x + 0.5, wp.y, wp.z + 0.5);
            if (this.mesh.position.distanceTo(steeringTarget) < 0.5) {
                this.pathIndex++;
                if (this.pathIndex >= this.path.length) {
                    // reached goal
                    this.path = [];
                    this.pathIndex = 0;
                }
            }
        }

        // Horizontal steering (ignore Y so gravity logic rules vertical axis)
        const direction = steeringTarget.clone().sub(this.mesh.position);
        direction.y = 0;
        if (direction.lengthSq() > 0.000001) direction.normalize();
        this.mesh.position.add(direction.multiplyScalar(speed * deltaTime));

        // If we reached the final target, pick another
        if (this.path.length === 0 && this.mesh.position.distanceTo(this.target) < 2) {
            this.target = this.getRandomTarget();
        }
        this.target.y = this.mesh.position.y;
        // Faire tourner le meshe pour qu'il regarde la cible
        this.mesh.lookAt(new THREE.Vector3(
            steeringTarget.x,
            this.mesh.position.y, // garde la tête horizontale
            steeringTarget.z
        ));
        this.animatePigLegs(speed);
    }

    broadPhase() {
        const candidates = [];

        // Get the block extents of the player
        const minX = Math.floor(this.mesh.position.x - this.radius);
        const maxX = Math.ceil(this.mesh.position.x + this.radius);
        const minY = Math.floor(this.mesh.position.y - this.height);
        const maxY = Math.ceil(this.mesh.position.y);
        const minZ = Math.floor(this.mesh.position.z - this.radius);
        const maxZ = Math.ceil(this.mesh.position.z + this.radius);

        // Loop through all blocks next to the block the center of the player is in
        // If they aren't empty, then they are a possible collision candidate
        for (let x = minX; x <= maxX; x++) {
            for (let y = minY; y <= maxY; y++) {
                for (let z = minZ; z <= maxZ; z++) {
                    const blockId = this.world.getBlock(x, y, z)?.id;
                    if (blockId && blockId !== blocks.empty.id && blockId !== blocks.water.id) {
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

    // ---- PATHFINDING HELPERS ----
    getGroundYAt(x, z, aroundY) {
        // search small vertical window around current Y for a valid walkable cell
        const y0 = Math.max(aroundY - 3, 1);
        const y1 = aroundY + 3;
        for (let y = y1; y >= y0; y--) {
            if (this.isWalkable(x, y, z)) return y;
        }
        // fallback to aroundY
        return aroundY;
    }

    isWalkable(x, y, z) {
        const below = this.world.getBlock(x, y - 1, z)?.id || 0;
        const body  = this.world.getBlock(x, y, z)?.id || 0;
        const head  = this.world.getBlock(x, y + 1, z)?.id || 0;
        // floor must be solid (not empty/water), and body/head empty
        const solidFloor = (below && below !== blocks.empty.id && below !== blocks.water.id);
        const freeBody   = (body === 0 || body === blocks.empty.id || body === blocks.water.id);
        const freeHead   = (head === 0 || head === blocks.empty.id || head === blocks.water.id);
        return solidFloor && freeBody && freeHead;
    }

    neighbors(x, y, z) {
        const n = [];
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
        for (const [dx, dz] of dirs) {
            // same level
            if (this.isWalkable(x + dx, y, z + dz)) { n.push({x: x + dx, y, z: z + dz}); continue; }
            // step up
            if (this.isWalkable(x + dx, y + 1, z + dz)) { n.push({x: x + dx, y: y + 1, z: z + dz}); continue; }
            // step down
            if (this.isWalkable(x + dx, y - 1, z + dz)) { n.push({x: x + dx, y: y - 1, z: z + dz}); continue; }
        }
        return n;
    }

    findPath(start, goal, maxNodes = 3000, maxRadius = 32) {
        // Guard: if start/goal not walkable, project to nearest ground
        const sY = this.getGroundYAt(start.x, start.z, start.y);
        const gY = this.getGroundYAt(goal.x, goal.z, goal.y);
        start = { x: start.x, y: sY, z: start.z };
        goal  = { x: goal.x,  y: gY,  z: goal.z  };

        const key = (p) => `${p.x}|${p.y}|${p.z}`;
        const h = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.z - b.z) + Math.abs(a.y - b.y) * 0.5; // favor flat

        const open = new Map();
        const openPQ = [];
        const came = new Map();
        const gScore = new Map();

        const push = (p, f) => {
            open.set(key(p), p);
            openPQ.push({ p, f });
        };
        const popBest = () => {
            let best = 0;
            for (let i = 1; i < openPQ.length; i++) if (openPQ[i].f < openPQ[best].f) best = i;
            const item = openPQ.splice(best, 1)[0];
            open.delete(key(item.p));
            return item.p;
        };

        push(start, 0);
        gScore.set(key(start), 0);
        const closed = new Set();
        let nodes = 0;

        while (openPQ.length && nodes++ < maxNodes) {
            const current = popBest();
            if (current.x === goal.x && current.y === goal.y && current.z === goal.z) {
                // reconstruct
                const path = [];
                let k = key(current);
                let cur = current;
                while (came.has(k)) {
                    path.push(cur);
                    cur = came.get(k);
                    k = key(cur);
                }
                path.reverse();
                return path; // array of {x,y,z}
            }
            closed.add(key(current));

            // bound search within a square around start
            if (Math.abs(current.x - start.x) > maxRadius || Math.abs(current.z - start.z) > maxRadius) continue;

            for (const nb of this.neighbors(current.x, current.y, current.z)) {
                const nk = key(nb);
                if (closed.has(nk)) continue;
                const tentative = (gScore.get(key(current)) || 0) + 1;
                if (!open.has(nk) || tentative < (gScore.get(nk) || Infinity)) {
                    came.set(nk, current);
                    gScore.set(nk, tentative);
                    const f = tentative + h(nb, goal);
                    if (!open.has(nk)) push(nb, f);
                }
            }
        }
        return [];
    }

    animatePigLegs(speed) {
        const angle = Math.sin(Date.now() * 0.005 * speed * 2); // Oscillation basée sur le temps

        this.mesh.children.forEach((child) => {
            if (child.isLeg) {
                // Anime les jambes
                child.rotation.x = angle * 0.2;
            }
        });
    }
}