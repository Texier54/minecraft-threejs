import * as THREE from 'three';
import { BaseChunk } from './BaseChunk.js';
import {blocks, getBlockByIdFast} from "../../block.js";
import pako from "pako";
import {RNG} from "../../rng.js";

export class ClientChunk extends THREE.Group {

    meshs;
    activeLights = [];

    // Reusable transformation objects for addBlockInstance to reduce allocations
    static _addBlockInstanceMatrix = new THREE.Matrix4();
    static _addBlockInstanceQuaternion = new THREE.Quaternion();
    static _addBlockInstanceDirection = new THREE.Vector3();
    static _addBlockInstanceSize = new THREE.Vector3();


    constructor(size, params, dataStore) {
        super();
        this.params = params;

        // Créer le terrain
        this.rng = new RNG(this.params.seed);

        // On instancie BaseChunk
        this.base = new BaseChunk(size, params, dataStore);

        const methodClientChunk = Object.getOwnPropertyNames(ClientChunk.prototype);
        // On copie toutes les méthodes de BaseWorld dans ClientWorld qui n'y existe pas deja en lui passant this
        Object.getOwnPropertyNames(BaseChunk.prototype).forEach((name) => {
            if (!methodClientChunk.includes(name)) {
                this[name] = this.base[name].bind(this);
            }
        });

        // Et les propriétés directes (drawDistance, chunkSize, etc.)
        Object.keys(this.base).forEach((key) => {
            this[key] = this.base[key];
        });

    }

    /**
     * Adds a new block at (x,y,z) of type `blockId`
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} blockId
     */
    addBlock(x, y, z, blockId, direction) {
        if (this.getBlock(x, y, z).id === blocks.empty.id) {
            this.setBlockId(x, y, z, blockId);
            this.setBlockDirection(x, y, z, direction);
            this.addBlockInstance(x, y, z);
            //this.dataStore.set(this.position.x, this.position.z, x, y, z, blockId);
            this.dataStore.set(this.position.x, this.position.z, this.data)
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
            this.dataStore.set(this.position.x, this.position.z, this.data);
            //suprimme lumière
            this.activeLights = this.activeLights.filter(l => {
                if (Math.abs(l.position.x - x) < 1 && Math.abs(l.position.y - y) < 1 && Math.abs(l.position.z - z) < 1) {
                    this.remove(l);
                    return false;
                }
                return true;
            });
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
        //this.setBlockInstanceId(v.x, v.y, v.z, instanceId); PROBLEME TORCH
        this.setBlockInstanceId(v.x, Math.round(v.y), v.z, instanceId);

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


    generate(socket = null) {

        if (!this.dataStore.contains(this.position.x, this.position.z) && socket && socket.getSocket()) {
            socket.getSocket()?.emit("getChunkData", {
                x : this.position.x/this.chunkSize, z : this.position.z/this.chunkSize
            }, (response) => {

                const decompressed = pako.inflate(response, { to: 'string' });
                const chunkData = JSON.parse(decompressed);
                console.log(chunkData);
                this.data = chunkData.data;
                this.biomes = chunkData.biomes;
                this.dataStore.set(this.position.x, this.position.z, this.data);
                this.generateMesh();
            });

        } else if (this.dataStore.contains(this.position.x, this.position.z)) {
            this.data = this.dataStore.get(this.position.x, this.position.z)
            this.generateMesh();
        } else {
            // Créer un Worker pour déporter la génération
            const worker = new Worker(new URL('../../chunkWorker.js', import.meta.url), { type: 'module' });

            // Gestion du retour de données depuis le Worker
            worker.onmessage = (event) => {
                const { data, biomes } = event.data;

                this.biomes = biomes;
                this.data = data;
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

    }

    generateMesh() {
        const maxBlock = this.chunkSize * this.chunkSize * 40;

        // Creating a lookup table where the key is the block id
        const meshes = {};
        // Reuse transformation objects
        const matrix = ClientChunk._addBlockInstanceMatrix;
        const direction = ClientChunk._addBlockInstanceDirection;
        const size = ClientChunk._addBlockInstanceSize;

        // Compute bounding boxes once per block type
        Object.values(blocks)
            .filter(blockType => blockType.id !== blocks.empty.id && blockType.type === 'block')
            .forEach(blockType => {
                blockType.geometry.computeBoundingBox(); // Ensure bounding box is computed once
                const mesh = new THREE.InstancedMesh(blockType.geometry, blockType.material, maxBlock);
                mesh.name = blockType.id;
                mesh.count = 0;
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                meshes[blockType.id] = mesh;
            });

        for (let x = 0; x < this.chunkSize; x++) {
            for (let z = 0; z < this.chunkSize; z++) {
                for (let y = 0; y < this.height; y++) {
                    const block = this.getBlock(x, y, z);
                    // Use a single truthy check for block and skip empty
                    if (!this.isBlockObscured(x, y, z) && block && block.id !== blocks.empty.id) {

                        let geometry = getBlockByIdFast(block.id).geometry;
                        //geometry.computeBoundingBox(); // Assure que la bounding box est bien calculée

                        geometry.boundingBox.getSize(size);//boundingBox.getSize(size) récupère la taille réelle de l’objet.

                        if (block.direction) {
                            // Transformation matrix pour positionner et tourner le bloc
                            direction.set(block.direction.x, block.direction.y, block.direction.z);
                            const quaternion = ClientChunk.getQuaternionFromDirection(direction);

                            matrix.compose(
                                new THREE.Vector3(x, y, z),  // Position
                                quaternion,                  // Rotation
                                new THREE.Vector3(1, 1, 1)    // Échelle
                            );
                        }

                        const offsetHeight = (1-(size.y))/2;

                        matrix.setPosition(x, y - offsetHeight, z); // Décalage de la moitié de la hauteur
                        meshes[block.id].setMatrixAt(meshes[block.id].count, matrix);
                        const mesh = meshes[block.id];
                        const instanceId = mesh.count;
                        this.setBlockInstanceId(x, y, z, instanceId);
                        meshes[block.id].count++;

                        if (block.id == blocks.torch.id) {
                            this.addLight(x, y, z);
                        }
                    }
                }
            }
        }
        this.meshs = meshes;
        this.add(...Object.values(meshes));
        this.updateBoundingSpheres();
    }

    disposeInstances() {
        //parcour tous les enfants du chunk, instanceMesg
        this.traverse((obj) => {
            // si ils ont la methode dispose on l'appel
            if (obj.dispose) obj.dispose();
        });
        //supprime tous les enfants
        this.clear();
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

    /**
     * Create a new instance for the block at (x,y,z)
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    addBlockInstance(x, y, z) {
        const block = this.getBlock(x, y, z);
        // Verify the block exists, it isn't an empty block type, and it doesn't already have an instance
        if (!block || block.id === blocks.empty.id || block.instanceId > 1) {
            return;
        }

        // Get the mesh and instance id of the block
        //const mesh = this.children.find((instanceMesh) => instanceMesh.name === block.id);
        // Accès direct
        const mesh = this.meshs[block.id];

        const instanceId = mesh.count++;
        this.setBlockInstanceId(x, y, z, instanceId);

        // Transformation matrix pour positionner et tourner le bloc
        // Reuse transformation objects
        const matrix = ClientChunk._addBlockInstanceMatrix;
        const direction = ClientChunk._addBlockInstanceDirection;
        const size = ClientChunk._addBlockInstanceSize;
        direction.set(block.direction.x, block.direction.y, block.direction.z);

        const quaternion = ClientChunk.getQuaternionFromDirection(direction);

        matrix.compose(
            new THREE.Vector3(x, y, z),  // Position
            quaternion,                  // Rotation
            new THREE.Vector3(1, 1, 1)    // Échelle
        );

        //const offsetHeight = (1-mesh.geometry.parameters.height)/2;


        //let geometry = getBlockByIdFast(block.id).geometry;
        const geometry = this.meshs[block.id]?.geometry;
        //geometry.computeBoundingBox(); // Assure que la bounding box est bien calculée

        geometry.boundingBox.getSize(size);//boundingBox.getSize(size) récupère la taille réelle de l’objet.

        const offsetHeight = (1-(size.y))/2;

        matrix.setPosition(x, y - offsetHeight, z); // Décalage de la moitié de la hauteur
        mesh.setMatrixAt(instanceId, matrix);
        mesh.instanceMatrix.needsUpdate = true;
        mesh.computeBoundingSphere();

        if (block.id == blocks.torch.id) {
            this.addLight(x, y, z);
        }

    }

    addLight(x, y, z) {
        if (!this.activeLights) this.activeLights = [];

        if (this.activeLights.length >= 8) return; // max reached

        const light = new THREE.PointLight(0xfffee0, 2, 14, 0.1);
        light.position.set(x, y + 0.1, z);
        light.castShadow = false;

        this.add(light);
        this.activeLights.push(light);
    }

    static getQuaternionFromDirection(direction) {
        const q = ClientChunk._addBlockInstanceQuaternion;
        // Reset orientation
        q.identity();

        if (direction.x === 1 && direction.y === 0 && direction.z === 0) {
            q.setFromEuler(new THREE.Euler(0, Math.PI / 2, 0)); // droite
        } else if (direction.x === -1 && direction.y === 0 && direction.z === 0) {
            q.setFromEuler(new THREE.Euler(0, -Math.PI / 2, 0)); // gauche
        } else if (direction.x === 0 && direction.y === 0 && direction.z === 1) {
            q.setFromEuler(new THREE.Euler(0, 0, 0)); // avant
        } else if (direction.x === 0 && direction.y === 0 && direction.z === -1) {
            q.setFromEuler(new THREE.Euler(0, Math.PI, 0)); // arrière
        } else if (direction.x === 0 && direction.y === 1 && direction.z === 0) {
            q.setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0)); // haut
        } else if (direction.x === 0 && direction.y === -1 && direction.z === 0) {
            q.setFromEuler(new THREE.Euler(Math.PI / 2, 0, 0)); // bas
        }

        return q;
    }

    updateBoundingSpheres() {
        /*
        Ceci force Three.js à recalculer la bounding sphere (sphère englobante) du mesh instancié.
        C’est essentiel pour certaines fonctionnalités — notamment le raycasting (clic sur un bloc) et l’optimisation du rendu.
         */
        for (const mesh of Object.values(this.meshs)) {
            mesh.computeBoundingSphere();
        }
    }
}