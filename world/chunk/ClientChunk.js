import * as THREE from 'three';
import { BaseChunk } from './BaseChunk.js';
import {blocks, getBlockByIdFast} from "../../block.js";
import pako from "pako";
import {RNG} from "../../rng.js";

export class ClientChunk extends THREE.Group {

    meshs;

    constructor(size, params, dataStore) {
        super();
        this.params = params;

        // Créer le terrain
        this.rng = new RNG(this.params.seed);

        // On instancie BaseChunk
        this.base = new BaseChunk(size, params, dataStore);
        this.base.parent = this; // ➔ injection du parent

        // On copie toutes les propriétés et méthodes de BaseWorld dans ClientWorld
        Object.getOwnPropertyNames(BaseChunk.prototype).forEach((name) => {
            if (name !== 'constructor' && name !=='getBlock' && name !== 'inBounds') {
                this[name] = this.base[name].bind(this.base);
            }
        });

        // Et les propriétés directes (drawDistance, chunkSize, etc.)
        Object.keys(this.base).forEach((key) => {
            this[key] = this.base[key];
        });

    }

    getBlock(x, y, z) {
        if (this.inBounds(x, y, z) && this.data[x]) {
            return this.data[x][y][z];
        }
        return null;
    }
    inBounds(x, y, z) {
        return x >= 0 && x < this.chunkSize &&
            z >= 0 && z < this.chunkSize &&
            y >= 0 && y < this.height;
    }
    generate(socket = null) {

        if (socket && socket.getSocket()) {
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
        Object.values(blocks)
            .filter(blockType => blockType.id !== blocks.empty.id && blockType.type === 'block')
            .forEach(blockType => {
                const mesh = new THREE.InstancedMesh(blockType.geometry, blockType.material, maxBlock);
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

                    const block = this.getBlock(x, y, z);
                    if (!this.isBlockObscured(x, y, z) && block != null && block.id != blocks.empty.id) {

                        let geometry = getBlockByIdFast(block.id).geometry;
                        geometry.computeBoundingBox(); // Assure que la bounding box est bien calculée

                        let size = new THREE.Vector3();
                        geometry.boundingBox.getSize(size);//boundingBox.getSize(size) récupère la taille réelle de l’objet.

                        if (block.direction) {
                            // Transformation matrix pour positionner et tourner le bloc
                            const quaternion = new THREE.Quaternion();
                            const direction = new THREE.Vector3(block.direction.x, block.direction.y, block.direction.z);

                            // Appliquer une rotation en fonction de la direction
                            if (direction.equals(new THREE.Vector3(1, 0, 0))) {
                                quaternion.setFromEuler(new THREE.Euler(0, Math.PI / 2, 0)); // Rotation à droite
                            } else if (direction.equals(new THREE.Vector3(-1, 0, 0))) {
                                quaternion.setFromEuler(new THREE.Euler(0, -Math.PI / 2, 0)); // Rotation à gauche
                            } else if (direction.equals(new THREE.Vector3(0, 0, 1))) {
                                quaternion.setFromEuler(new THREE.Euler(0, 0, 0)); // Face avant
                            } else if (direction.equals(new THREE.Vector3(0, 0, -1))) {
                                quaternion.setFromEuler(new THREE.Euler(0, Math.PI, 0)); // Face arrière
                            } else if (direction.equals(new THREE.Vector3(0, 1, 0))) {
                                quaternion.setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0)); // Haut
                            } else if (direction.equals(new THREE.Vector3(0, -1, 0))) {
                                quaternion.setFromEuler(new THREE.Euler(Math.PI / 2, 0, 0)); // Bas
                            }

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
                    }
                }
                //chunk.add(mesh);
            }
        }
        this.meshs = meshes;
        this.add(...Object.values(meshes));


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

}