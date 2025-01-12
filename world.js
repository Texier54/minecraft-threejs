import * as THREE from 'three';

import { blocks, resources } from './block.js';
import { WorldChunk } from './worldChunk.js';

export class World extends THREE.Group {

    chunkSize = { width: 32, height: 32 };

    params = {
        seed: 0,
        terrain: {
            scale: 50, //size of our smooth simplexnoise
            magnitude: 0.5, // size of th hills
            offset: 0.2, //monter descendre
        }
    }

    constructor(seed) {
        super();
        this.seed = seed;
    }

    generate() {
        this.disposeChunks();

        for (let x = -1; x < 2; x++) {
            for (let z = -1; z < 2; z++) {
                const chunk = new WorldChunk(this.chunkSize, this.params);
                chunk.position.set(x * this.chunkSize.width, 0,z * this.chunkSize.width)
                chunk.generate(this.seed);
                chunk.userData = {x, z};
                this.add(chunk);
            }
        }

    }

    getBlock(x, y ,z ) {
        const coords = this.worldToChunkCoords(x, y, z);
        const chunk = this.getChunk(coords.chunk.x, coords.chunk.z);

        if (chunk /*&& chunk.loaded*/) {
            return chunk.getBlock(
                coords.block.x,
                coords.block.y,
                coords.block.z
            );
        } else {
            return null;
        }
    }

    worldToChunkCoords(x, y, z) {
        const chunkCoords = {
            x: Math.floor(x / this.chunkSize.width),
            z: Math.floor(z / this.chunkSize.width)
        };

        const blockCoords = {
            x: x - this.chunkSize.width * chunkCoords.x,
            y,
            z: z - this.chunkSize.width * chunkCoords.z
        };

        return {
            chunk: chunkCoords,
            block: blockCoords
        }
    }

    /**
     * Returns the WorldChunk object at the specified coordinates
     * @param {number} chunkX
     * @param {number} chunkZ
     * @returns {WorldChunk | null}
     */
    getChunk(chunkX, chunkZ) {
        return this.children.find((chunk) => (
            chunk.userData.x === chunkX &&
            chunk.userData.z === chunkZ
        ));
    }


    disposeChunks() {
        this.traverse((chunk) => {
            if (chunk.disposeInstances) {
                chunk.disposeInstances();
            }
        });
        this.clear();
    }

    addBlock(x, y, z, blockId) {
        const coords = this.worldToChunkCoords(x, y, z);
        const chunk = this.getChunk(coords.chunk.x, coords.chunk.z);

        if (chunk) {
            chunk.addBlock(
                coords.block.x,
                coords.block.y,
                coords.block.z,
                blockId
            );
/*
            // Hide neighboring blocks if they are completely obscured
            this.hideBlock(x - 1, y, z);
            this.hideBlock(x + 1, y, z);
            this.hideBlock(x, y - 1, z);
            this.hideBlock(x, y + 1, z);
            this.hideBlock(x, y, z - 1);
            this.hideBlock(x, y, z + 1);
            */
        }


    }
}