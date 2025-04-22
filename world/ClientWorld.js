import * as THREE from 'three';
import { BaseWorld } from './BaseWorld.js';
import { WorldChunk } from '../worldChunk.js';

export class ClientWorld extends THREE.Group {
    constructor() {
        super();
        this.base = new BaseWorld();
    }

    generate() {
        this.clear();

        for (let x = -this.base.drawDistance; x <= this.base.drawDistance; x++) {
            for (let z = -this.base.drawDistance; z <= this.base.drawDistance; z++) {
                const chunk = new WorldChunk(
                    this.base.chunkSize,
                    this.base.params,
                    this.base.dataStore
                );

                chunk.position.set(
                    x * this.base.chunkSize.width,
                    0,
                    z * this.base.chunkSize.width
                );

                chunk.generate();
                chunk.userData = { x, z };

                this.add(chunk);
            }
        }
    }

    // Ajoute ici hideBlock, revealBlock, etc.

    getChunk(chunkX, chunkZ) {
        return this.children.find((chunk) => (
            chunk.userData.x === chunkX &&
            chunk.userData.z === chunkZ
        ));
    }

    hideBlock(x, y, z) {
        const coords = this.worldToChunkCoords(x, y, z);
        const chunk = this.getChunk(coords.chunk.x, coords.chunk.z);

        if (chunk && chunk.isBlockObscured(coords.block.x, coords.block.y, coords.block.z)) {
            chunk.deleteBlockInstance(
                coords.block.x,
                coords.block.y,
                coords.block.z
            )
        }
    }
}