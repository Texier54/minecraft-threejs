import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js';
import {RNG} from "./rng.js";


const blocks = {
    empty: { id: 0, name: 'empty', visible: false },
    grass: { id: 1, name: 'grass' },
    dirt: { id: 2, name: 'dirt' },
    stone: { id: 3, name: 'stone', scale: { x: 30, y: 30, z: 30 }, scarcity: 0.8 },
    coalOre: { id: 4, name: 'coal_ore', scale: { x: 20, y: 20, z: 20 }, scarcity: 0.8 },
    ironOre: { id: 5, name: 'iron_ore', scale: { x: 40, y: 40, z: 40 }, scarcity: 0.9 },
    log: { id: 17, name: 'log' },
    leaves: { id: 18, name: 'leaves' },
    craftingTable: { id: 58, name: 'Crafting Table' },
};

const resources = [
    blocks.coalOre,
    blocks.ironOre
];

let data = [];
let params = [];
self.onmessage = function (event) {
    const { chunkData, chunkSize, chunkHeight, params, position } = event.data;

    const rng = new RNG(params.seed);
    // Simule la génération d'un chunk (remplacez par votre logique réelle)
    const generatedData = initializeTerrain(chunkSize, chunkHeight, params);
    const generatedTerrain = generateTerrain(chunkSize, chunkHeight, params, rng, position);

    // Envoyer les données générées au thread principal
    self.postMessage({ data: data });
};

function initializeTerrain(chunkSize, chunkHeight, params) {
    // Logique simplifiée pour la génération de chunks

    for (let x = 0; x < chunkSize; x++) {
        const slice = [];
        for (let y = 0; y < chunkHeight; y++) {
            const row = [];
            for (let z = 0; z < chunkSize; z++) {
                row.push({
                    id: 0, // Exemple d'identifiant de bloc
                    instanceId: null,
                });
            }
            slice.push(row);
        }
        data.push(slice);
    }
}

function generateTerrain(chunkSize, chunkHeight, params, rng, position) {

    const simplex = new SimplexNoise(rng);

    for (let x = 0; x < chunkSize; x++) {
        for (let z = 0; z < chunkSize; z++) {

            const noiseValue = simplex.noise(
                (position.x + x) / params.terrain.scale,
                (position.z + z) / params.terrain.scale
            );

            const scaledNoise = params.terrain.offset + params.terrain.magnitude * noiseValue;
            let height = Math.floor(scaledNoise*chunkHeight); // Hauteur basée sur le bruit
            height = Math.max(1, Math.min(height, chunkHeight -1));


            for (let y = 0; y < chunkHeight; y++) {

                if (y < height && y > height-3 && getBlock(x, y, z)?.id === blocks.empty.id)
                    setBlockId(x, y, z, blocks.dirt.id);
                if (y < height && getBlock(x, y, z)?.id === blocks.empty.id) {
                    setBlockId(x, y, z, blocks.stone.id);
                    generateResources(rng, x, y, z, position);
                } else if (y == height) {
                    setBlockId(x, y, z, blocks.grass.id);
                    // Randomly generate a tree
                    if (Math.random() < params.trees.frequency) {
                        generateTree(params.seed, 1, x, height + 1, z, params);
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

function setBlockId(x, y, z, id) {
    data[x][y][z].id = id;
}

function getBlock(x, y, z) {
    if (inBounds(x, y, z) && typeof data[x] !== "undefined")
        return data[x][y][z];
    return null;
}

function inBounds(x, y, z) {
    if (x >= 0 && x < 16 && z >= 0 && z < 16 && y >= 0 && y < 80)
        return true;
    return false;
}


function generateTree(seed, biome, x, y, z, params) {
    const minH = params.trees.trunk.minHeight;
    const maxH = params.trees.trunk.maxHeight;
    const h = Math.round(minH + (maxH - minH) * Math.random() +1);

    for (let treeY = y; treeY < y + h; treeY++) {
        setBlockId(x, treeY, z, blocks.log.id);
    }

    generateTreeCanopy(biome, x, y + h, z, params);


}

function generateTreeCanopy(biome, centerX, centerY, centerZ, params) {
    const minR = params.trees.canopy.minRadius;
    const maxR = params.trees.canopy.maxRadius;
    const r = Math.round(minR + (maxR - minR) * Math.random());


    for (let x = -r; x <= r; x++) {
        for (let y = -r; y <= r; y++) {
            for (let z = -r; z <= r; z++) {
                const n = Math.random();

                // Make sure the block is within the canopy radius
                if (x * x + y * y + z * z > r * r) continue;
                // Don't overwrite an existing block
                const block = getBlock(centerX + x, centerY + y, centerZ + z);
                if (block && block.id !== blocks.empty.id) continue;
                // Fill in the tree canopy with leaves based on the density parameter
                if (n < params.trees.canopy.density) {
                    if (getBlock(centerX + x, centerY + y, centerZ + z) !== null)
                        setBlockId(centerX + x, centerY + y, centerZ + z, blocks.leaves.id);
                }
            }
        }
    }
}

function generateResources(seed, x, y, z, position) {

    const simplex = new SimplexNoise(seed);
    resources.forEach(resource => {

        const value = simplex.noise(
            (position.x + x) / resource.scale.x,
            (position.y + y) / resource.scale.y,
            (position.z + z) / resource.scale.z);
        if (value > resource.scarcity)
            setBlockId(x, y, z, resource.id);

    })

}