import * as THREE from 'three';
import { BaseWorld } from './BaseWorld.js';
import { ClientChunk } from '../world/chunk/ClientChunk.js';
import {getBlockByIdFast} from "../block.js";
import {BaseChunk} from "./chunk/BaseChunk.js";

export class ClientWorld extends THREE.Group {

    static neighborOffsets = [
        [-1, 0, 0],
        [1, 0, 0],
        [0, -1, 0],
        [0, 1, 0],
        [0, 0, -1],
        [0, 0, 1]
    ];

    constructor() {
        super();
        // On instancie BaseWorld
        this.base = new BaseWorld();

        const methodClientWorld = Object.getOwnPropertyNames(ClientWorld.prototype);
        // On copie toutes les méthodes de BaseWorld dans ClientWorld qui n'y existe pas deja en lui passant this
        Object.getOwnPropertyNames(BaseWorld.prototype).forEach((name) => {
            if (!methodClientWorld.includes(name)) {
                this[name] = this.base[name].bind(this);
            }
        });

        // Et les propriétés directes (drawDistance, chunkSize, etc.)
        Object.keys(this.base).forEach((key) => {
            this[key] = this.base[key];
        });
    }

    generate() {
        this.clear();
        this.dataStore.clear();
        for (let x = -this.drawDistance; x <= this.drawDistance; x++) {
            for (let z = -this.drawDistance; z <= this.drawDistance; z++) {
                this.generateChunk();
            }
        }
    }

    generateChunk(x, z) {
        const chunk = new ClientChunk(this.chunkSize, this.params, this.dataStore);
        chunk.position.set(
            x * this.chunkSize.width,
            0,
            z * this.chunkSize.width);
        chunk.userData = { x, z };

        if (this.asyncLoading) {
            //pour garantir la valeur de this on doit bind chunk parce que la fonction est appelé plus tard
            requestIdleCallback(() => chunk.generate(this.client), { timeout: 2000 });
        } else {
            chunk.generate(this.client);
        }

        this.add(chunk);
        //console.log(`Adding chunk at X: ${x} Z: ${z}`);
    }

    getChunk(chunkX, chunkZ) {
        return this.children.find((chunk) => (
            chunk.userData.x === chunkX &&
            chunk.userData.z === chunkZ
        ));
    }

    addBlock(x, y, z, blockId, direction) {
        const coords = this.worldToChunkCoords(x, y, z);
        const chunk = this.getChunk(coords.chunk.x, coords.chunk.z);

        if (!chunk) return;

        chunk.addBlock(
            coords.block.x,
            coords.block.y,
            coords.block.z,
            blockId,
            direction
        );

        const block = getBlockByIdFast(blockId);
        if (!block.transparent) {


            for (const [dx, dy, dz] of ClientWorld.neighborOffsets) {
                this.hideBlock(x + dx, y + dy, z + dz);
            }
        }
    }

    removeBlock(x, y, z) {
        const coords = this.worldToChunkCoords(x, y, z);
        const chunk = this.getChunk(coords.chunk.x, coords.chunk.z);

        if (!chunk || coords.block.y === 0) return;

        //this.checkRemoveTree(x, y, z);

        chunk.removeBlock(
            coords.block.x,
            coords.block.y,
            coords.block.z
        );

        for (const [dx, dy, dz] of ClientWorld.neighborOffsets) {
            this.revealBlock(x + dx, y + dy, z + dz);
        }
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

    setClient(client) {
        this.client = client;
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
            //console.log(`Removing chunk at X: ${chunk.userData.x} Z: ${chunk.userData.z}`);
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