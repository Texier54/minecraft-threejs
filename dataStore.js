export class DataStore {
    constructor() {
        this.data = {};
    }

    clear() {
        this.data = {};
    }

    contains(chunkX, chunkZ) {
        const key = this.getKey(chunkX, chunkZ);
        return this.data[key] !== undefined;
    }

    get(chunkX, chunkZ) {
        const key = this.getKey(chunkX, chunkZ);
        return this.data[key];
    }

    set(chunkX, chunkZ, data) {
        const key = this.getKey(chunkX, chunkZ);
        this.data[key] = data;
    }

    getKey(chunkX, chunkZ) {
        return `${chunkX},${chunkZ}`;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }
}