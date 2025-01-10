import * as THREE from 'three';

import { blocks } from './block.js';

export class World {

    chunks;
    chunkSize;
    geometry;
    height;

    data = [];

    params = {
        terrain: {
            scale: 50, //size of our smooth simplexnoise
            magnitude: 0.5, // size of th hills
            offset: 0.2, //monter descendre
        }
    }

    constructor() {
        this.chunks = new Map(); // Contiendra les chunks générés
        this.chunkSize = 64; // Taille d'un chunk (en blocs)
        this.height = 30;

        // Créer le terrain
        const blockSize = 1;
        this.geometry = new THREE.BoxGeometry(blockSize, blockSize, blockSize);
        this.initializeTerrain();
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
                        instanceId: null
                    });
                }
                slice.push(row);
            }
            this.data.push(slice);
        }
    }

    generate(chunkX, chunkZ, chunks, scene) {
        this.generateTerrain(chunkX, chunkZ, chunks, scene);
        this.generateMesh(chunkX, chunkZ, chunks, scene);
    }

    generateTerrain(chunkX, chunkZ, chunks, scene) {

        const simplex = new SimplexNoise();

        for (let x = 0; x < this.chunkSize; x++) {
            for (let z = 0; z < this.chunkSize; z++) {
                const noiseValue = simplex.noise2D(
                    x / this.params.terrain.scale,
                    z / this.params.terrain.scale
                );

                const scaledNoise = this.params.terrain.offset + this.params.terrain.magnitude * noiseValue;

                let height = Math.floor(scaledNoise*this.height); // Hauteur basée sur le bruit

                height = Math.max(1, Math.min(height, this.height -1));


                for (let y = 0; y <= height; y++) {
                    if (y < height)
                        this.setBlockId(x, y, z, blocks.stone.id);
                    else if (y == height)
                        this.setBlockId(x, y, z, blocks.grass.id);
                    else
                        this.setBlockId(x, y, z, blocks.empty.id);
                }
            }
        }

console.log(this.getBlock(0,0,0));

    }

    generateMesh(chunkX, chunkZ, chunks, scene) {

/*
        const chunkKey = `${chunkX}_${chunkZ}`;
        if (chunks.has(chunkKey)) return;

        const chunk = new THREE.Group(); // Chaque chunk est un groupe d'objets


        // Positionner le chunk en fonction de ses coordonnées globales
        chunk.position.set(chunkX * this.chunkSize, 0, chunkZ * this.chunkSize); // Définir la position globale du chunk
        chunks.set(chunkKey, chunk);
*/
        const maxBlock = this.chunkSize * this.chunkSize * 40;

        const meshGrass = new THREE.InstancedMesh(this.geometry, blocks.grass.material, maxBlock);
        const meshStone = new THREE.InstancedMesh(this.geometry, blocks.stone.material, maxBlock);
        meshGrass.name = blocks.grass.name;
        meshGrass.count = 0;
        meshStone.count = 0;
        const matrix = new THREE.Matrix4();
        for (let x = 0; x < this.chunkSize; x++) {
            for (let z = 0; z < this.chunkSize; z++) {

                for (let y = 0; y < this.height; y++) {


                    if (!this.isBlockObscured(x, y, z) && this.getBlock(x, y, z) != null && this.getBlock(x, y, z).id != blocks.empty.id) {
                        matrix.setPosition(x, y, z);

                        if (this.getBlock(x, y, z).id == 1)
                            meshGrass.setMatrixAt(meshGrass.count++, matrix)
                        else if (this.getBlock(x, y, z).id == 3)
                            meshStone.setMatrixAt(meshStone.count++, matrix)

                    }
                }
                //chunk.add(mesh);
            }
        }

        scene.add(meshGrass);
        scene.add(meshStone);


    }

    setBlockId(x, y, z, id) {
        this.data[x][y][z].id = id;
    }

    getBlock(x, y, z) {
        if (this.inBounds(x, y, z))
            return this.data[x][y][z];
        return null;
    }

    inBounds(x, y, z) {
        if (x > 0 && x < this.chunkSize && z > 0 && z < this.chunkSize && y > 0 && y < this.height)
            return true;
        return false;
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
}