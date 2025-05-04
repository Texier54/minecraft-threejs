import { DataStore } from '../dataStore.js';

export class BaseWorld {
    chunkSize = { width: 16, height: 80 };
    drawDistance = 2;
    dataStore = new DataStore();

    params = {
        seed: 456789986,
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

    setBlockInventory(x, y, z, inventory) {
        const coords = this.worldToChunkCoords(x, y, z);
        const chunk = this.getChunk(coords.chunk.x, coords.chunk.z);
        if (chunk) {
            chunk.setBlockInventory(
                coords.block.x,
                coords.block.y,
                coords.block.z,
                inventory
            );
        }
    }

    removeBlock(x, y, z) {
        throw new Error('removeBlock must be implemented by child class');
    }

    getChunk(x, z) {
        /*
        •	Si BaseWorld.parent est défini (ce qui est le cas dans ClientWorld)
        •	Et que ce parent a bien une méthode getChunk() (ce qui est ton cas)
        •	➜ alors on l’utilise
         */
        if (typeof this.parent?.getChunk === 'function') {
            return this.parent.getChunk(x, z);
        }
        throw new Error('getChunk must be implemented by child class');
    }

    encodeChunk(chunkData, biomes) {
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
                        for (let s = 0; s < 27; s++) {
                            const slot = block.inventory?.[s] ?? { block: 0, quantity: 0 };
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

        for (let x = 0; x < this.chunkSize.width; x++) {
            for (let z = 0; z < this.chunkSize.width; z++) {
                const biomeName = biomes[x][z] ?? 'plains';
                byteArray.push(biomeName);
            }
        }

        return Uint8Array.from(byteArray);
    }

    decodeChunk(buffer) {
        const view = new DataView(buffer.buffer || buffer);
        const data = [];
        const biomes = [];
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

        for (let x = 0; x < this.chunkSize.width; x++) {
            biomes[x] = [];
            for (let z = 0; z < this.chunkSize.width; z++) {
                const biomeId = view.getUint8(i++);
                biomes[x][z] = biomeId ?? 'plains';
            }
        }

        return {data, biomes};
    }

    getPlayerBiome(x, z) {
        const coords = this.worldToChunkCoords(x, 0, z);
        const chunk = this.getChunk(coords.chunk.x, coords.chunk.z);

        if (chunk /*&& chunk.loaded*/) {
            return chunk.getBiome(
                coords.block.x,
                coords.block.z
            );
        } else {
            return null;
        }
    }

    checkRemoveTree(x, y, z) {
        const block = this.getBlock(x, y, z);
        console.log(x, y, z);
        console.log(block.id);
        if (block.id == 17) {

            for (let dx = -6; dx <= 6; dx++) {
                for (let dy = -6; dy <= 6; dy++) {
                    for (let dz = -6; dz <= 6; dz++) {
                        let newX = x + dx;
                        let newY = y + dy;
                        let newZ = z + dz;

                        // Optionnel : Exclure le point central (x, y, z) lui-même
                        if (dx === 0 && dy === 0 && dz === 0) continue;
                        if (this.getBlock(newX, newY, newZ)?.id == 18)
                            this.removeBlock( newX, newY, newZ );
                    }
                }
            }

        }
    }

    isload(x, y, z) {
        const coords = this.worldToChunkCoords(x, y, z);
        const chunk = this.getChunk(coords.chunk.x, coords.chunk.z);
        if (chunk && chunk.data.length !== 0 )
            return true;
        return false;
    }

}