import * as THREE from 'three';

import {blocks, getBlockByIdFast, resources} from './block.js';
import { WorldChunk } from './worldChunk.js';

import { DataStore } from './dataStore.js';

export class World extends THREE.Group {

    asyncLoading = true;

    drawDistance = 2;

    chunkSize = { width: 16, height: 80 };

    params = {
        seed: 45678,
        terrain: {
            scale: 40, //size of our smooth simplexnoise
            magnitude: 0.1, // size of th hills
            offset: 0.5, //monter descendre
        },
        biomes: {
            mountains: {
                scale: 40, //size of our smooth simplexnoise
                magnitude: 0.2, // size of th hills
                offset: 0.5, //monter descendre
            },
            plains: {
                scale: 80, //size of our smooth simplexnoise
                magnitude: 0.1, // size of th hills
                offset: 0.5, //monter descendre
            },
            forest: {
                scale: 40, //size of our smooth simplexnoise
                magnitude: 0.1, // size of th hills
                offset: 0.5, //monter descendre
            },
            desert: {
                scale: 120, //size of our smooth simplexnoise
                magnitude: 0.1, // size of th hills
                offset: 0.5, //monter descendre
            }
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

    dataStore = new DataStore();

    constructor() {
        super();
    }

    worldToUint8Array(world) {
        let data = [];

        for (const key in world) {
            if (Object.hasOwn(world, key)) {
                const chunk = world[key]; // chunk = tableau de 16 lignes

                for (const row of chunk) {
                    data.push(...row); // Ajouter chaque ligne (Array(80)) au tableau principal
                }
            }
        }
console.log(data);
        return new Uint8Array(data);
    }

    /**
     * Saves the world data to local storage
     */
    save() {

        /*
        (async () => {
            const chunkId = "chunk_0_0";

            // Génère un chunk de test (16x16x256 blocs, chaque bloc est un entier entre 0 et 255)
            console.log(this.dataStore.data);
            const chunkData = new Uint8Array(this.worldToUint8Array(this.dataStore.data));

            console.log("\n=== Test de stockage ===");
            await storeData(chunkId, chunkData);

            console.log("\n=== Test de chargement ===");
            const loadedChunk = await loadData(chunkId);

            if (loadedChunk) {
                console.log("[Vérification] Les données chargées correspondent-elles aux données originales ?",
                    chunkData.every((val, index) => val === loadedChunk[index]) ? "✅ OUI" : "❌ NON"
                );
            }
        })();
*/


        (async () => {
            const dataSize = new Blob([JSON.stringify(this.dataStore.getData())]).size; // Taille en octets
            console.log(`Taille des données : ${dataSize/1000000} Mo`);
            //console.log(this.dataStore.getData());
            const minecraftData = this.dataStore.getData();
            console.log(minecraftData);
            await storeData(minecraftData);
        })();
    }

    /**
     * Loads the game from disk
     */
    load() {

        (async () => {
            const retrievedData = await getData();
            //console.log('Données récupérées :', retrievedData);
            this.dataStore.setData(retrievedData);
            //console.log(this.dataStore.getData());
            this.generate();
        })();

    }

    generate() {
        this.disposeChunks();

        for (let x = -this.drawDistance; x <= this.drawDistance; x++) {
            for (let z = -this.drawDistance; z <= this.drawDistance; z++) {
                const chunk = new WorldChunk(this.chunkSize, this.params, this.dataStore);
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
            //console.log(`Removing chunk at X: ${chunk.userData.x} Z: ${chunk.userData.z}`);
        }
    }

    /**
     * Generates the chunk at the (x, z) coordinates
     * @param {number} x
     * @param {number} z
     */
    generateChunk(x, z) {
        const chunk = new WorldChunk(this.chunkSize, this.params, this.dataStore);
        chunk.position.set(
            x * this.chunkSize.width,
            0,
            z * this.chunkSize.width);
        chunk.userData = { x, z };

        if (this.asyncLoading) {
            //pour garantir la valeur de this on doit bind chunk parce que la fonction est appelé plus tard
            requestIdleCallback(chunk.generate.bind(chunk), { timeout: 2000 });
        } else {
            chunk.generate();
        }

        this.add(chunk);
        //console.log(`Adding chunk at X: ${x} Z: ${z}`);
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

            if (getBlockByIdFast(blockId).transparent !== true) {
                // Hide neighboring blocks if they are completely obscured
                this.hideBlock(x - 1, y, z);
                this.hideBlock(x + 1, y, z);
                this.hideBlock(x, y - 1, z);
                this.hideBlock(x, y + 1, z);
                this.hideBlock(x, y, z - 1);
                this.hideBlock(x, y, z + 1);
            }

        }


    }

    /**
     * Removes the block at (x, y, z) and sets it to empty
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    removeBlock(x, y, z) {
        //console.log(x, y, z);

        const coords = this.worldToChunkCoords(x, y, z);
        const chunk = this.getChunk(coords.chunk.x, coords.chunk.z);

        // Don't allow removing the first layer of blocks
        if (coords.block.y === 0) return;

        if (chunk) {
            this.checkRemoveTree(x, y, z);
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

    checkRemoveTree(x, y, z) {
        const block = this.getBlock(x, y, z);
        if (block.id == blocks.log.id) {

            for (let dx = -6; dx <= 6; dx++) {
                for (let dy = -6; dy <= 6; dy++) {
                    for (let dz = -6; dz <= 6; dz++) {
                        let newX = x + dx;
                        let newY = y + dy;
                        let newZ = z + dz;

                        // Optionnel : Exclure le point central (x, y, z) lui-même
                        if (dx === 0 && dy === 0 && dz === 0) continue;

                        if (this.getBlock(newX, newY, newZ)?.id == blocks.leaves.id)
                            this.removeBlock( newX, newY, newZ );
                    }
                }
            }

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

    /**
     * Hides the block at (x,y,z) by removing the mesh instance
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
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

const dbName = 'minecraftDB';
const storeName = 'minecraftData';

// Initialiser IndexedDB
function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);
        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            db.createObjectStore(storeName, { keyPath: 'id' });
        };
        request.onsuccess = function (event) {
            resolve(event.target.result);
        };
        request.onerror = function (event) {
            reject(event.target.error);
        };
    });
}

/*
// Initialiser IndexedDB
async function initDB() {
    return new Promise((resolve, reject) => {
        console.log("[IndexedDB] Initialisation...");

        const request = indexedDB.open(dbName, 1);

        request.onupgradeneeded = (event) => {
            console.log("[IndexedDB] Mise à jour de la base...");
            const db = event.target.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName);
                console.log("[IndexedDB] Table "+storeName+" créée.");
            }
        };

        request.onsuccess = () => {
            console.log("[IndexedDB] Base de données ouverte avec succès !");
            resolve(request.result);
        };

        request.onerror = () => {
            console.error("[IndexedDB] Erreur d'ouverture :", request.error);
            reject(request.error);
        };
    });
}

 */



import pako from "pako"; // npm install pako

/*
async function storeData(chunkId, chunkData) {

    console.log(`[IndexedDB] Sauvegarde du chunk ${chunkId}...`);


    const db = await initDB();
    const transaction = db.transaction([storeName], "readwrite");
    const store = transaction.objectStore(storeName);

    // Compression des données
    const compressedData = pako.deflate(chunkData);
    console.log(`[Compression] Taille originale : ${chunkData.byteLength} octets`);
    console.log(`[Compression] Taille compressée : ${compressedData.byteLength} octets`);

    return new Promise((resolve, reject) => {
        //const request = store.put({ data : compressedData, id: chunkId});
        const request = store.put({ data : compressedData }, chunkId);

        request.onsuccess = () => {
            console.log(`[IndexedDB] Chunk ${chunkId} stocké avec succès !`);
            resolve(true);
        };

        request.onerror = () => {
            console.error(`[IndexedDB] Erreur lors du stockage du chunk ${chunkId} :`, request.error);
            reject(request.error);
        };
    });
}

 */


// Stocker des données
async function storeData(data) {
    const db = await initDB();
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    store.put({ id: 'minecraft_data', data });
    return transaction.oncomplete;
}

async function loadData(chunkId) {
    console.log(`[IndexedDB] Chargement du chunk ${chunkId}...`);

    const db = await initDB();
    const transaction = db.transaction([storeName], "readonly");
    const store = transaction.objectStore(storeName);

    return new Promise((resolve, reject) => {
        const request = store.get(chunkId);

        request.onsuccess = () => {
            if (request.result) {
                console.log(request.result.data);
                console.log(`[IndexedDB] Chunk ${chunkId} trouvé ! Taille compressée : ${request.result.data.byteLength} octets`);

                // Décompression des données
                const decompressedData = pako.inflate(request.result.data);
                console.log(`[Decompression] Taille après décompression : ${decompressedData.byteLength} octets`);

                resolve(decompressedData);
            } else {
                console.warn(`[IndexedDB] Chunk ${chunkId} non trouvé.`);
                resolve(null);
            }
        };

        request.onerror = () => {
            console.error(`[IndexedDB] Erreur lors du chargement du chunk ${chunkId} :`, request.error);
            reject(request.error);
        };
    });
}

// Lire des données
async function getData() {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.get('minecraft_data');
        request.onsuccess = function () {
            resolve(request.result?.data || null);
        };
        request.onerror = function (event) {
            reject(event.target.error);
        };
    });
}