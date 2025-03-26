import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js';
import {RNG} from "./rng.js";
import * as THREE from "three";


const blocks = {
    empty: { id: 0, name: 'empty', visible: false },
    grass: { id: 1, name: 'grass' },
    dirt: { id: 2, name: 'dirt' },
    bedrock: { id: 7, name: 'bedrock' },
    sand: { id: 12, name: 'sand' },
    gravel: { id: 13, name: 'gravel' },
    stone: { id: 3, name: 'stone', scale: { x: 30, y: 30, z: 30 }, scarcity: 0.8 },
    coalOre: { id: 16, name: 'coal_ore', scale: { x: 20, y: 20, z: 20 }, scarcity: 0.8 },
    ironOre: { id: 15, name: 'iron_ore', scale: { x: 40, y: 40, z: 40 }, scarcity: 0.9 },
    diamondOre: { id: 56, name: 'diamond_ore', scale: { x: 40, y: 40, z: 40 }, scarcity: 0.99 },
    log: { id: 17, name: 'log' },
    leaves: { id: 18, name: 'leaves' },
    craftingTable: { id: 58, name: 'Crafting Table' },
};

const resources = [
    blocks.coalOre,
    blocks.ironOre,
    blocks.diamondOre
];

let data = [];
let biomes = []
let params = [];
self.onmessage = function (event) {
    const { chunkData, chunkSize, chunkHeight, params, position } = event.data;

    const rng = new RNG(params.seed);
    // Simule la génération d'un chunk (remplacez par votre logique réelle)
    const generatedData = initializeTerrain(chunkSize, chunkHeight);
    const generatedBiomes = initializeBiomes(chunkSize);
    const generatedTerrain = generateTerrain(chunkSize, chunkHeight, params, rng, position);

    // Envoyer les données générées au thread principal
    self.postMessage({ data: data, biomes: biomes });
};

function initializeTerrain(chunkSize, chunkHeight) {
    // Logique simplifiée pour la génération de chunks

    for (let x = 0; x < chunkSize; x++) {
        const slice = [];
        for (let y = 0; y < chunkHeight; y++) {
            const row = [];
            for (let z = 0; z < chunkSize; z++) {
                row.push({
                    id: 0, // Exemple d'identifiant de bloc
                    instanceId: null,
                    inventory: null,
                    direction: { x:0, y:0, z:0 } // Par défaut vers le haut
                });
            }
            slice.push(row);
        }
        data.push(slice);
    }
}

function initializeBiomes(chunkSize) {
    // Logique simplifiée pour la génération de chunks

    for (let x = 0; x < chunkSize; x++) {
        let row = [];
        for (let z = 0; z < chunkSize; z++) {
            row.push({}); // Placeholder biome
        }
        biomes.push(row);
    }
}



function generateTerrain(chunkSize, chunkHeight, params, rng, position) {

    const simplex = new SimplexNoise(rng);

    for (let x = 0; x < chunkSize; x++) {
        for (let z = 0; z < chunkSize; z++) {

            let biomeData = getBiome(simplex, x, z, position);
            let biome1 = biomeData.biome1;
            let biome = biome1;
            let biome2 = biomeData.biome2;
            let blend = biomeData.blend;

            const biome_scale1 = params.biomes[biome1].scale;
            const noiseValue1 = simplex.noise(
                (position.x + x) / biome_scale1,
                (position.z + z) / biome_scale1
            );
            let height1 = params.biomes[biome1].offset + params.biomes[biome1].magnitude * noiseValue1;

            const biome_scale2 = params.biomes[biome2].scale;
            const noiseValue2 = simplex.noise(
                (position.x + x) / biome_scale2,
                (position.z + z) / biome_scale2
            );
            let height2 = params.biomes[biome2].offset + params.biomes[biome2].magnitude * noiseValue2;

            let height = Math.floor(lerp(height1, height2, blend)*chunkHeight);
            height = Math.max(1, Math.min(height, chunkHeight - 1));

            if (typeof(biomes[x][z]) !== "undefined")
                biomes[x][z] = biome1;
            for (let y = 0; y < chunkHeight; y++) {

                if (y < height && y > height-3 && getBlock(x, y, z)?.id === blocks.empty.id)
                    setBlockId(x, y, z, blocks.dirt.id);
                if (y == 0) {
                    setBlockId(x, y, z, blocks.bedrock.id);
                } else if (y < height && getBlock(x, y, z)?.id === blocks.empty.id) {
                    setBlockId(x, y, z, blocks.stone.id);
                    generateResources(rng, x, y, z, position);
                    //generateCaves(simplex, x, y, z, position);
                } else if (y == height) {


                    if (biome == 'plains')
                        setBlockId(x, y, z, blocks.grass.id);
                    else if (biome == 'forest')
                        setBlockId(x, y, z, blocks.grass.id);
                    else if (biome == 'mountains')
                        setBlockId(x, y, z, blocks.grass.id);
                    else
                        setBlockId(x, y, z, blocks.sand.id);



                    let multiTree = 1;
                    if (biome == 'forest')
                        multiTree = 6;
                    if (biome == 'mountains')
                        multiTree = 0.5;
                    // Randomly generate a tree
                    if (biome != 'desert' && Math.random() < params.trees.frequency * multiTree) {
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
function lerp(a, b, t) {
    return a + t * (b - a);
}

function getBiome(simplex, x, z, position) {
    let noiseValue = simplex.noise((position.x + x) / 500, (position.z + z) / 500);
    noiseValue += 0.2 * simplex.noise((position.x + x) / 250, (position.z + z) / 250);

    // Normalisation pour être entre 0 et 1
    noiseValue = (noiseValue + 1) / 2;

    /*
    •	Si noiseValue = 0.1, alors blend = (0.1 - 0.1) / 0.2 = 0, donc 100% “plains”.
	•	Si noiseValue = 0.2, alors blend = (0.2 - 0.1) / 0.2 = 0.5, donc 50% “plains”, 50% “forest”.
	•	Si noiseValue = 0.3, alors blend = (0.3 - 0.1) / 0.2 = 1, donc 100% “forest”.

     */
    if (noiseValue < 0.2) return { biome1: 'desert', biome2: 'plains', blend: (noiseValue - 0.1) / 0.1 };
    if (noiseValue < 0.4) return { biome1: 'plains', biome2: 'forest', blend: (noiseValue - 0.2) / 0.2 };
    if (noiseValue < 0.6) return { biome1: 'forest', biome2: 'mountains', blend: (noiseValue - 0.4) / 0.2 };
    return { biome1: 'mountains', biome2: 'mountains', blend: (noiseValue - 0.6) / 0.4 };
}

function generateCaves(simplex, x, y, z, position) {


    const scale = 0.02; // Fréquence du bruit, à ajuster pour la taille des filons
    const noiseValue = simplex.noise(position.x + x /500, position.y + y / 500, position.z + z /500);

    let baseNoise = simplex.noise(position.x +x * 0.1, position.y+y * 0.1, position.z+z * 0.1);
    let detailNoise = simplex.noise(position.x +x * 0.05, position.y+y * 0.05, position.z+z * 0.05) * 0.5;
    let finalNoise = baseNoise + detailNoise;

    // Définition des types de minerai en fonction du bruit et de la profondeur
    if (finalNoise > 0.4) {
            setBlockId(x, y, z, blocks.coalOre.id); // Diamants en profondeur
    }


}