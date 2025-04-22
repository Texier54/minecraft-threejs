import { DataStore } from '../dataStore.js';

export class BaseWorld {
    chunkSize = { width: 16, height: 80 };
    drawDistance = 2;
    dataStore = new DataStore();

    params = {
        seed: 45678,
        terrain: {
            scale: 40,
            magnitude: 0.1,
            offset: 0.5,
        },
        biomes: {
            mountains: { scale: 40, magnitude: 0.2, offset: 0.5 },
            plains: { scale: 80, magnitude: 0.1, offset: 0.5 },
            forest: { scale: 40, magnitude: 0.1, offset: 0.5 },
            desert: { scale: 120, magnitude: 0.1, offset: 0.5 },
        },
        trees: {
            trunk: { minHeight: 4, maxHeight: 7 },
            canopy: { minRadius: 3, maxRadius: 3, density: 0.7 },
            frequency: 0.005,
        }
    };

    constructor() {}

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

        return { chunk: chunkCoords, block: blockCoords };
    }

    getBlock(x, y, z) {
        // À surcharger ou connecter avec dataStore/chunks
    }

    setBlockInventory(x, y, z, inventory) {
        // À surcharger si besoin
    }


}