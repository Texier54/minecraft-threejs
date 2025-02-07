import * as THREE from 'three';

import { blocks, resources } from './block.js';
import { RNG } from './rng.js';

export class WorldChunk extends THREE.Group {

    chunks;
    chunkSize;
    geometry;
    height;
    meshs;

    data = [];

    constructor(size, params, dataStore) {
        super();
        this.chunks = new Map(); // Contiendra les chunks générés
        this.chunkSize = size.width;
        this.height = size.height;
        this.params = params;
        this.dataStore = dataStore;

        // Créer le terrain
        const blockSize = 1;
        this.geometry = new THREE.BoxGeometry(blockSize, blockSize, blockSize);
        this.rng = new RNG(this.params.seed);

    }

    initializeTerrain() {
        this.data = [];
        for (let x = 0; x < this.chunkSize; x++) {
            const slice = [];
            for (let y = 0; y < this.height; y++) {
                const row = [];
                for (let z = 0; z < this.chunkSize; z++) {
                    row.push({
                        id: blocks.empty.id,
                        instanceId: null,
                        inventory: null
                    });
                }
                slice.push(row);
            }
            this.data.push(slice);
        }
    }

    generate() {

        if (this.dataStore.contains(this.position.x, this.position.z)) {
            this.data = this.dataStore.get(this.position.x, this.position.z)
            this.generateMesh();
        } else {
            // Créer un Worker pour déporter la génération
            const worker = new Worker('chunkWorker.js', { type: 'module' });

            // Gestion du retour de données depuis le Worker
            worker.onmessage = (event) => {
                const { data } = event.data;

                this.data = event.data.data;
                this.dataStore.set(this.position.x, this.position.z, this.data)
                this.generateMesh();

                worker.terminate();
            };

            worker.onerror = (e) => {
                console.error(e);
                worker.terminate();
            };

            worker.onmessageerror = (e) => {
                console.error('Message error in Worker:', e);
            };


            // Envoyer les données nécessaires au Worker
            worker.postMessage({
                chunkSize: this.chunkSize,
                chunkHeight: this.height,
                params: this.params,
                position: this.position,
                rng: this.rng
            });
        }


/*
        this.initializeTerrain();
        if (this.dataStore.contains(this.position.x, this.position.z))
            this.data = this.dataStore.get(this.position.x, this.position.z)
        else {
            this.generateResources(this.params.seed);
            this.generateTerrain(this.params.seed);
            this.dataStore.set(this.position.x, this.position.z, this.data)
        }

        this.generateMesh();


 */

    }

    generateResources(seed, x, y, z) {

        const simplex = new SimplexNoise(seed);
        resources.forEach(resource => {

            const value = simplex.noise3D(
                (this.position.x + x) / resource.scale.x,
                (this.position.y + y) / resource.scale.y,
                (this.position.z + z) / resource.scale.z);
            if (value > resource.scarcity)
                this.setBlockId(x, y, z, resource.id);

        })

    }

    generateTerrain(seed) {

        const simplex = new SimplexNoise(seed);

        for (let x = 0; x < this.chunkSize; x++) {
            for (let z = 0; z < this.chunkSize; z++) {
                const noiseValue = simplex.noise2D(
                    (this.position.x + x) / this.params.terrain.scale,
                    (this.position.z + z) / this.params.terrain.scale
                );

                const scaledNoise = this.params.terrain.offset + this.params.terrain.magnitude * noiseValue;

                let height = Math.floor(scaledNoise*this.height); // Hauteur basée sur le bruit

                height = Math.max(1, Math.min(height, this.height -1));



                for (let y = 0; y < this.height; y++) {

                    if (y < height && y > height-3 && this.getBlock(x, y, z)?.id === blocks.empty.id)
                        this.setBlockId(x, y, z, blocks.dirt.id);
                    if (y < height && this.getBlock(x, y, z)?.id === blocks.empty.id) {
                        this.setBlockId(x, y, z, blocks.stone.id);
                        this.generateResources(simplex, x, y, z);
                    } else if (y == height) {
                        this.setBlockId(x, y, z, blocks.grass.id);
                        // Randomly generate a tree
                        if (Math.random() < this.params.trees.frequency) {
                            this.generateTree(seed, 1, x, height + 1, z);
                        }
                    }
                    /*
                    else if (y > height)
                        this.setBlockId(x, y, z, blocks.empty.id);

                     */
                }
            }
        }
    }

    /**
     * Creates a tree appropriate for the biome at (x, y, z)
     * @param {string} biome
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    generateTree(seed, biome, x, y, z) {
        const minH = this.params.trees.trunk.minHeight;
        const maxH = this.params.trees.trunk.maxHeight;
        const h = Math.round(minH + (maxH - minH) * Math.random() +1);

        for (let treeY = y; treeY < y + h; treeY++) {
            this.setBlockId(x, treeY, z, blocks.log.id);
        }

        this.generateTreeCanopy(biome, x, y + h, z, seed);


    }

    generateTreeCanopy(biome, centerX, centerY, centerZ, seed) {
        const minR = this.params.trees.canopy.minRadius;
        const maxR = this.params.trees.canopy.maxRadius;
        const r = Math.round(minR + (maxR - minR) * Math.random());


        for (let x = -r; x <= r; x++) {
            for (let y = -r; y <= r; y++) {
                for (let z = -r; z <= r; z++) {
                    const n = Math.random();

                    // Make sure the block is within the canopy radius
                    if (x * x + y * y + z * z > r * r) continue;
                    // Don't overwrite an existing block
                    const block = this.getBlock(centerX + x, centerY + y, centerZ + z);
                    if (block && block.id !== blocks.empty.id) continue;
                    // Fill in the tree canopy with leaves based on the density parameter
                    if (n < this.params.trees.canopy.density) {
                        if (this.getBlock(centerX + x, centerY + y, centerZ + z) !== null)
                            this.setBlockId(centerX + x, centerY + y, centerZ + z, blocks.leaves.id);
                    }
                }
            }
        }
    }

    generateMesh() {

        /*
                const chunkKey = `${chunkX}_${chunkZ}`;
                if (chunks.has(chunkKey)) return;

                const chunk = new THREE.Group(); // Chaque chunk est un groupe d'objets


                // Positionner le chunk en fonction de ses coordonnées globales
                chunk.position.set(chunkX * this.chunkSize, 0, chunkZ * this.chunkSize); // Définir la position globale du chunk
                chunks.set(chunkKey, chunk);
        */
        const maxBlock = this.chunkSize * this.chunkSize * 40;

        // Creating a lookup table where the key is the block id
        const meshes = {};
        Object.values(blocks)
            .filter(blockType => blockType.id !== blocks.empty.id && blockType.type === 'block')
            .forEach(blockType => {
                const mesh = new THREE.InstancedMesh(this.geometry, blockType.material, maxBlock);
                mesh.name = blockType.id;
                mesh.count = 0;
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                meshes[blockType.id] = mesh;
            });

        const matrix = new THREE.Matrix4();
        for (let x = 0; x < this.chunkSize; x++) {
            for (let z = 0; z < this.chunkSize; z++) {

                for (let y = 0; y < this.height; y++) {


                    if (!this.isBlockObscured(x, y, z) && this.getBlock(x, y, z) != null && this.getBlock(x, y, z).id != blocks.empty.id) {
                        matrix.setPosition(x, y, z);
                        meshes[this.getBlock(x, y, z).id].setMatrixAt(meshes[this.getBlock(x, y, z).id].count, matrix);
                        const mesh = meshes[this.getBlock(x, y, z).id];
                        const instanceId = mesh.count;
                        this.setBlockInstanceId(x, y, z, instanceId);
                        meshes[this.getBlock(x, y, z).id].count++;
                    }
                }
                //chunk.add(mesh);
            }
        }
        this.meshs = meshes;
        this.add(...Object.values(meshes));


    }

    setBlockId(x, y, z, id) {
        this.data[x][y][z].id = id;
    }

    getBlock(x, y, z) {
        if (this.inBounds(x, y, z) && typeof this.data[x] !== "undefined")
            return this.data[x][y][z];
        return null;
    }

    inBounds(x, y, z) {
        if (x >= 0 && x < this.chunkSize && z >= 0 && z < this.chunkSize && y >= 0 && y < this.height)
            return true;
        return false;
    }

    setBlockInstanceId(x, y, z, instanceId) {
        if (this.inBounds(x, y, z)) {
            this.data[x][y][z].instanceId = instanceId;
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

    isBlockObscured(x, y ,z) {
        //console.log(x+'-'+ y+'-' +z);
        const up = this.getBlock(x, y + 1, z)?.id ?? blocks.empty.id;
        const down = this.getBlock(x, y - 1, z)?.id ?? blocks.empty.id;
        const left = this.getBlock(x + 1, y, z)?.id ?? blocks.empty.id;
        const right = this.getBlock(x - 1, y, z)?.id ?? blocks.empty.id;
        const forward = this.getBlock(x, y, z + 1)?.id ?? blocks.empty.id;
        const back = this.getBlock(x, y, z - 1)?.id ?? blocks.empty.id;


        //console.log('up'+this.getBlock(x, y + 1, z).id);
        //console.log('b'+blocks.empty.id);
        // If any of the block's sides is exposed, it is not obscured
        if (up === blocks.empty.id ||
            down === blocks.empty.id ||
            left === blocks.empty.id ||
            right === blocks.empty.id ||
            forward === blocks.empty.id ||
            back === blocks.empty.id) {
            return false;
        } else {
            return true;
        }
    }

    disposeInstances() {
        //parcour tous les enfants du chunk, instanceMesg
        this.traverse((obj) => {
            // si ils ont la methode dispose on l'appel
            if (obj.dipose) obj.dispose();
        });
        //supprime tous les enfants
        this.clear;
    }

    /**
     * Adds a new block at (x,y,z) of type `blockId`
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} blockId
     */
    addBlock(x, y, z, blockId) {
        if (this.getBlock(x, y, z).id === blocks.empty.id) {
            this.setBlockId(x, y, z, blockId);
            this.addBlockInstance(x, y, z);
            //this.dataStore.set(this.position.x, this.position.z, x, y, z, blockId);
            this.dataStore.set(this.position.x, this.position.z, this.data)
        }
    }

    /**
     * Create a new instance for the block at (x,y,z)
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    addBlockInstance(x, y, z) {
        const block = this.getBlock(x, y, z);

        // Verify the block exists, it isn't an empty block type, and it doesn't already have an instance
        if (block && block.id !== blocks.empty.id && block.instanceId === null) {
            // Get the mesh and instance id of the block
            const mesh = this.children.find((instanceMesh) => instanceMesh.name === block.id);
            const instanceId = mesh.count++;
            this.setBlockInstanceId(x, y, z, instanceId);

            // Compute the transformation matrix for the new instance and update the instanced
            const matrix = new THREE.Matrix4();
            matrix.setPosition(x, y, z);
            mesh.setMatrixAt(instanceId, matrix);
            mesh.instanceMatrix.needsUpdate = true;
            mesh.computeBoundingSphere();
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
        if (block && block.id !== blocks.empty.id) {
            this.deleteBlockInstance(x, y, z);
            this.setBlockId(x, y, z, blocks.empty.id);
            //this.dataStore.set(this.position.x, this.position.z, x, y, z, blocks.empty.id);
            this.dataStore.set(this.position.x, this.position.z, this.data)
        }
    }

    /**
     * Removes the mesh instance associated with `block` by swapping it
     * with the last instance and decrementing the instance count.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    deleteBlockInstance(x, y, z) {
        const block = this.getBlock(x, y, z);
//console.log(block);
        if (block.id === blocks.empty.id || block.instanceId === null) return;

        // Get the mesh and instance id of the block
        const mesh = this.children.find((instanceMesh) => instanceMesh.name === block.id);
        const instanceId = block.instanceId;

        // Swapping the transformation matrix of the block in the last position
        // with the block that we are going to remove
        const lastMatrix = new THREE.Matrix4();
        mesh.getMatrixAt(mesh.count - 1, lastMatrix);

        // Updating the instance id of the block in the last position to its new instance id
        const v = new THREE.Vector3();
        v.applyMatrix4(lastMatrix);
        this.setBlockInstanceId(v.x, v.y, v.z, instanceId);

        // Swapping the transformation matrices
        mesh.setMatrixAt(instanceId, lastMatrix);

        // This effectively removes the last instance from the scene
        mesh.count--;

        // Notify the instanced mesh we updated the instance matrix
        // Also re-compute the bounding sphere so raycasting works
        mesh.instanceMatrix.needsUpdate = true;
        mesh.computeBoundingSphere();

        // Remove the instance associated with the block and update the data model
        this.setBlockInstanceId(x, y, z, null);
    }
}