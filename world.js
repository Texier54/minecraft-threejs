import * as THREE from 'three';

import { blocks } from './block.js';
export class World {

    chunks;
    chunkSize;
    geometry;

    constructor() {
        this.chunks = new Map(); // Contiendra les chunks générés
        this.chunkSize = 16; // Taille d'un chunk (en blocs)

        // Créer le terrain
        const blockSize = 1;
        this.geometry = new THREE.BoxGeometry(blockSize, blockSize, blockSize);
    }

    createChunk(chunkX, chunkZ, chunks, grassMaterial, scene) {

        const simplex = new SimplexNoise();
        const chunkKey = `${chunkX}_${chunkZ}`;
        if (chunks.has(chunkKey)) return;

        const chunk = new THREE.Group(); // Chaque chunk est un groupe d'objets

        // Positionner le chunk en fonction de ses coordonnées globales
        chunk.position.set(chunkX * this.chunkSize, 0, chunkZ * this.chunkSize); // Définir la position globale du chunk
        chunks.set(chunkKey, chunk);

        const maxBlock = this.chunkSize * this.chunkSize * 40;

        const mesh = new THREE.InstancedMesh(this.geometry, blocks.grass.material, maxBlock);
        mesh.name = blocks.grass.name;
        mesh.count = 0;
        const matrix = new THREE.Matrix4();
        for (let x = 0; x < this.chunkSize; x++) {
            for (let z = 0; z < this.chunkSize; z++) {
                const noiseValue = simplex.noise2D(x / 10, z / 10);
                const height = Math.floor(noiseValue * 2) +10; // Hauteur basée sur le bruit

                for (let y = 0; y < height; y++) {
                    matrix.setPosition(x, y, z);
                    mesh.setMatrixAt(mesh.count++, matrix)
                }

                chunk.add(mesh);
            }
        }

        scene.add(chunk);
    }
}