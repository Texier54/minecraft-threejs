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

    encodeChunk(chunkData) {
        const byteArray = [];

        for (let x = 0; x < this.chunkSize.width; x++) {
            for (let y = 0; y < this.chunkSize.height; y++) {
                for (let z = 0; z < this.chunkSize.width; z++) {
                    const block = chunkData[x][y][z];

                    byteArray.push(block.id ?? 0);

                    const instanceId = block.instanceId ?? -1;
                    byteArray.push(...new Uint8Array(new Int32Array([instanceId]).buffer));

                    byteArray.push(
                        block.direction?.x ?? 0,
                        block.direction?.y ?? 0,
                        block.direction?.z ?? 0
                    );

                    const hasInventory = block.inventory?.length > 0;
                    byteArray.push(hasInventory ? 1 : 0);

                    if (hasInventory) {
                        console.log(x,y,z);
                        for (let s = 0; s < 27; s++) {
                            const slot = block.inventory?.[s] ?? { block: 0, quantity: 0 };
                            console.log(slot)
                            byteArray.push(
                                (slot.block & 0xff00) >> 8,
                                slot.block & 0x00ff,
                                slot.quantity
                            );
                        }
                    }
                }
            }
        }

        return Uint8Array.from(byteArray);
    }

    decodeChunk(buffer) {
        const view = new DataView(buffer.buffer || buffer);
        const data = [];
        let i = 0;

        for (let x = 0; x < this.chunkSize.width; x++) {
            data[x] = [];
            for (let y = 0; y < this.chunkSize.height; y++) {
                data[x][y] = [];
                for (let z = 0; z < this.chunkSize.width; z++) {
                    const id = view.getUint8(i++);

                    const instanceId = view.getInt32(i); i += 4;

                    const dir = {
                        x: view.getInt8(i++),
                        y: view.getInt8(i++),
                        z: view.getInt8(i++)
                    };

                    const hasInventory = view.getUint8(i++);
                    let inventory = null;

                    if (hasInventory) {
                        inventory = [];
                        console.log('inventory')
                        for (let s = 0; s < 27; s++) {
                            const block = view.getUint16(i); i += 2;
                            const quantity = view.getUint8(i++);
                            if (block !== 0 && quantity > 0) {
                                inventory.push({ block, quantity });
                            } else
                                inventory.push(null);
                        }
                    }

                    data[x][y][z] = { id, instanceId, direction: dir, inventory };
                }
            }
        }

        return data;
    }

}