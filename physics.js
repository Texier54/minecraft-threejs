import * as THREE from 'three';


export class Physics {
    constructor() {
    }

    update(dt, player, world) {
        this.detectCollisions(player, world);

    }

    detectCollisions(player, world) {
        const candidates = this.broadPhase(player, world);
        const collisions = this.narrowPhase(candidates, player);

        if (collisions.length > 0) {
            this.resolveCollisions(collisions, player);
        }
    }

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
                        const block = { x, y, z };
                        candidates.push(block);
                        this.addCollisionHelper(block);
                    }
                }
            }
        }

        //console.log(`Broadphase Candidates: ${candidates.length}`);

        return candidates;
    }
}
