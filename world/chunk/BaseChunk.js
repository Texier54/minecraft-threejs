
export class BaseChunk {

    chunkSize;
    height;
    data;
    biomes;

    constructor(size, params, dataStore) {
        this.chunkSize = size.width;
        this.height = size.height;
        this.params = params;
        this.dataStore = dataStore;
        this.data = [];
        this.biomes = [];
    }

    getBlock(x, y, z) {
        if (this.inBounds(x, y, z) && this.data[x]) {
            return this.data[x][y][z];
        }
        return null;
    }

    addBlock(x, y, z, blockId, direction) {
        if (this.inBounds(x, y, z)) {
            this.setBlockId(x, y, z, blockId);
            this.setBlockDirection(x, y, z, direction);
        }
    }

    /**
     * Removes the block at (x, y, z)
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    removeBlock(x, y, z) {
        const block = this.getBlock(x, y, z);
        if (block && block.id !== 0) {
            this.setBlockId(x, y, z, 0);
        }
    }

    setBlockId(x, y, z, id) {
        this.data[x][y][z].id = id;
    }

    setBlockDirection(x, y, z, direction) {
        this.data[x][y][z].direction = direction;
    }

    inBounds(x, y, z) {
        return x >= 0 && x < this.chunkSize &&
            z >= 0 && z < this.chunkSize &&
            y >= 0 && y < this.height;
    }

    setBiomeMap(biomes) {
        this.biomes = biomes;
    }

    getBiome(x, z) {
        return this.inBounds(x, 0, z) && this.biomes[x]?.[z] || null;
    }

    setBlockInventory(x, y, z, inventory) {
        if (this.inBounds(x, y, z)) {
            this.data[x][y][z].inventory = inventory;
        }
    }
}