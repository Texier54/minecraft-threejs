import { BaseWorld } from './BaseWorld.js';
import { ServerChunk } from './chunk/ServerChunk.js';
import path from "path";
import fs from 'fs/promises';


export class ServerWorld extends BaseWorld {
    constructor() {
        super();
        this.chunks = new Map(); // pour stocker les chunks générés
    }

    _chunkKey(x, z) {
        return `${x},${z}`;
    }

    generate() {
        for (let x = -this.drawDistance; x <= this.drawDistance; x++) {
            for (let z = -this.drawDistance; z <= this.drawDistance; z++) {
                this.getChunk(x, z);
            }
        }
    }

    async generateChunk(x, z) {

        const chunk = new ServerChunk(this.chunkSize, this.params, this.dataStore);
        chunk.position = {
            x : x * this.chunkSize.width,
            z : z * this.chunkSize.width
        };
        await chunk.generate(); // worker ou pas
        await this.saveChunkToDisk(x, z, {
            data: chunk.data,
            biomes: chunk.biomes,
        });

        this.chunks.set(this._chunkKey(x, z), chunk);
        return chunk;
    }

    async getChunk(x, z) {
        const key = this._chunkKey(x, z);
        const chunk = this.chunks.get(key);

        if (chunk) return chunk;

        const saved = await this.loadChunkFromDisk(x, z);
        if (saved) {
            console.log('Load chunk');
            const chunk = new ServerChunk(this.chunkSize, this.params, this.dataStore);
            chunk.position = { x, z };
            chunk.data = saved.data;
            chunk.biomes = saved.biomes;
            this.chunks.set(this._chunkKey(x, z), chunk);
            return chunk;
        } else {
            console.log('Generate chunk');
            return await this.generateChunk(x, z);
        }


    }

    async getBlock(x, y, z) {
        const { chunk, block } = this.worldToChunkCoords(x, y, z);
        let targetChunk = await this.getChunk(chunk.x, chunk.z);
        return targetChunk.getBlock(block.x, block.y, block.z);
    }

    async addBlock(x, y, z, blockData) {
        const { chunk, block } = this.worldToChunkCoords(x, y, z);
        console.log(chunk);
        let targetChunk = await this.getChunk(chunk.x, chunk.z);
        const blockId = blockData.blockId;
        const direction = blockData.direction;
        targetChunk.addBlock(block.x,
            block.y,
            block.z,
            blockId,
            direction
        );
        this.saveChunkToDisk(chunk.x, chunk.z, {
            data: targetChunk.data,
            biomes: targetChunk.biomes,
        });
        return true;
    }

    async saveChunkToDisk(x, z, data) {
        const dir = path.resolve('worlddata');
        const filePath = path.join(dir, `${x}_${z}.bin`);

        await fs.mkdir(dir, { recursive: true });
        await fs.writeFile(filePath, this.encodeChunk(data.data, data.biomes));
    }

    async loadChunkFromDisk(x, z) {
        const filePath = path.resolve('worlddata', `${x}_${z}.bin`);
        try {
            const raw = await fs.readFile(filePath);
            const { data, biomes} = this.decodeChunk(raw);
            return { data: data, biomes : biomes };
        } catch {
            return null; // pas trouvé
        }
    }

    async setBlockInventory(x, y, z, inventory) {
        const coords = this.worldToChunkCoords(x, y, z);
        const chunk = await this.getChunk(coords.chunk.x, coords.chunk.z);
        if (chunk) {
            chunk.setBlockInventory(
                coords.block.x,
                coords.block.y,
                coords.block.z,
                inventory
            );

            this.saveChunkToDisk(coords.chunk.x, coords.chunk.z, {
                data: chunk.data,
                biomes: chunk.biomes,
            });
        }


    }
}