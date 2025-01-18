import * as THREE from 'three';

import { blocks, resources } from './block.js';
import { WorldChunk } from './worldChunk.js';

export class World extends THREE.Group {

    asyncLoading = true;

    drawDistance = 3;

    chunkSize = { width: 32, height: 80 };

    params = {
        seed: 45678,
        terrain: {
            scale: 40, //size of our smooth simplexnoise
            magnitude: 0.1, // size of th hills
            offset: 0.8, //monter descendre
        },
        trees: {
            trunk: {
                minHeight: 4,
                maxHeight: 7
            },
            canopy: {
                minRadius: 3,
                maxRadius: 3,
                density: 0.7 // Vary between 0.0 and 1.0
            },
            frequency: 0.005
        }
    }

    constructor() {
        super();
    }

    generate() {
        this.disposeChunks();

        for (let x = -this.drawDistance; x <= this.drawDistance; x++) {
            for (let z = -this.drawDistance; z <= this.drawDistance; z++) {
                const chunk = new WorldChunk(this.chunkSize, this.params);
                chunk.position.set(x * this.chunkSize.width, 0,z * this.chunkSize.width)
                chunk.generate();
                chunk.userData = {x, z};
                this.add(chunk);
            }
        }

    }

    /**
     * Updates the visible portions of the world based on the
     * current player position
     * @param {Player} player
     */
    update(player) {
        const visibleChunks = this.getVisibleChunks(player);

        const chunksToAdd = this.getChunksToAdd(visibleChunks);

        this.removeUnusedChunks(visibleChunks);

        for (const chunk of chunksToAdd) {
            this.generateChunk(chunk.x, chunk.z);
        }


    }

    getVisibleChunks(player) {
        const visibleChunks = [];

        const coords = this.worldToChunkCoords(
            player.position.x,
            player.position.y,
            player.position.z
        );

        const chunkX= coords.chunk.x;
        const chunkZ= coords.chunk.z;

        for (let x = chunkX - this.drawDistance; x <= chunkX + this.drawDistance; x++) {
            for (let z = chunkZ - this.drawDistance; z <= chunkZ + this.drawDistance; z++) {
                visibleChunks.push({ x, z });
            }
        }

        return visibleChunks;

    }

    getChunksToAdd(visibleChunks) {
        return visibleChunks.filter((chunk) => {
            const chunkExists = this.children
                .map((obj) => obj.userData)
                .find(({x, z}) => (
                    chunk.x === x && chunk.z === z
                ));
            return !chunkExists;
        })
    }

    /**
     * Removes current loaded chunks that are no longer visible to the player
     * @param {{ x: number, z: number}[]} visibleChunks
     */
    removeUnusedChunks(visibleChunks) {
        // Filter down the visible chunks to those not already in the world
        const chunksToRemove = this.children.filter((chunk) => {
            const { x, z } = chunk.userData;
            const chunkExists = visibleChunks
                .find((visibleChunk) => (
                    visibleChunk.x === x && visibleChunk.z === z
                ));

            return !chunkExists;
        });

        for (const chunk of chunksToRemove) {
            chunk.disposeInstances();
            this.remove(chunk);
            console.log(`Removing chunk at X: ${chunk.userData.x} Z: ${chunk.userData.z}`);
        }
    }

    /**
     * Generates the chunk at the (x, z) coordinates
     * @param {number} x
     * @param {number} z
     */
    generateChunk(x, z) {
        const chunk = new WorldChunk(this.chunkSize, this.params);
        chunk.position.set(
            x * this.chunkSize.width,
            0,
            z * this.chunkSize.width);
        chunk.userData = { x, z };

        if (this.asyncLoading) {
            //pour garantir la valeur de this on doit bind chunk parce que la fonction est appelé plus tard
            requestIdleCallback(chunk.generate.bind(chunk), { timeout: 5000 });
        } else {
            chunk.generate();
        }

        this.add(chunk);
        console.log(`Adding chunk at X: ${x} Z: ${z}`);
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

    /**
     * Removes the block at (x, y, z) and sets it to empty
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    removeBlock(x, y, z) {
        console.log(x, y, z);

        const coords = this.worldToChunkCoords(x, y, z);
        const chunk = this.getChunk(coords.chunk.x, coords.chunk.z);

        // Don't allow removing the first layer of blocks
        if (coords.block.y === 0) return;

        if (chunk) {
            chunk.removeBlock(
                coords.block.x,
                coords.block.y,
                coords.block.z
            );

            // Reveal adjacent neighbors if they are hidden
            this.revealBlock(x - 1, y, z);
            this.revealBlock(x + 1, y, z);
            this.revealBlock(x, y - 1, z);
            this.revealBlock(x, y + 1, z);
            this.revealBlock(x, y, z - 1);
            this.revealBlock(x, y, z + 1);
        }
    }

    /**
     * Reveals the block at (x,y,z) by adding a new mesh instance
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    revealBlock(x, y, z) {
        const coords = this.worldToChunkCoords(x, y, z);
        const chunk = this.getChunk(coords.chunk.x, coords.chunk.z);

        if (chunk) {
            chunk.addBlockInstance(
                coords.block.x,
                coords.block.y,
                coords.block.z
            )
        }
    }
}