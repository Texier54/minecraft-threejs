import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js';

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
    cactus: { id: 81, name: 'cactus' },
    water: { id: 9, name: 'water' },
    lava: { id: 11, name: 'lava' },
    sandstone: { id : 24, name: 'sandstone' },
    obsidian: { id : 49, name: 'obsidian' }
};

const resources = [
    blocks.coalOre,
    blocks.ironOre,
    blocks.diamondOre
];

export function initializeTerrain(chunkSize, chunkHeight) {
    let data = [];
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
    return data;
}

export function initializeBiomes(chunkSize) {
    // Logique simplifiée pour la génération de chunks
    let biomes = [];
    for (let x = 0; x < chunkSize; x++) {
        let row = [];
        for (let z = 0; z < chunkSize; z++) {
            row.push({}); // Placeholder biome
        }
        biomes.push(row);
    }
    return biomes;
}



export function generateTerrain(chunkSize, chunkHeight, params, rng, position, data, biomes) {

    const simplex = new SimplexNoise(rng);
    const seaLevel = params.seaLevel;
    //const seaLevel = Math.floor(chunkHeight * 0.3); // 30% de la hauteur = niveau de l'eau

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

                //if (biome === 'beach' && y > seaLevel + 2) continue; // plage max à seaLevel + 2

                if (y < height && y > height-3 && getBlock(data, x, y, z)?.id === blocks.empty.id)
                    if (biome == 'desert' || biome == 'beach')
                        setBlockId(data, x, y, z, blocks.sandstone.id);
                    else
                        setBlockId(data, x, y, z, blocks.dirt.id);
                if (y == 0) {
                    setBlockId(data, x, y, z, blocks.bedrock.id);
                } else if (y < height && getBlock(data, x, y, z)?.id === blocks.empty.id) {
                    setBlockId(data, x, y, z, blocks.stone.id);
                    generateResources(rng, x, y, z, position, data);
                    generateCaves(simplex, x, y, z, position, data);
                } else if (y == height) {

                    if (biome == 'plains')
                        setBlockId(data, x, y, z, blocks.grass.id);
                    else if (biome == 'forest')
                        setBlockId(data, x, y, z, blocks.grass.id);
                    else if (biome == 'mountains')
                        setBlockId(data, x, y, z, blocks.grass.id);
                    else if (biome == 'beach')
                        setBlockId(data, x, y, z, blocks.sand.id);
                    else
                        setBlockId(data, x, y, z, blocks.sand.id);



                    let multiTree = 1;
                    if (biome == 'forest')
                        multiTree = 6;
                    if (biome == 'mountains')
                        multiTree = 0.5;
                    // Randomly generate a tree
                    if (biome != 'ocean' && biome != 'beach' && Math.random() < params.trees.frequency * multiTree) {
                        generateTree(params.seed, biome, x, height + 1, z, params, data);
                    }
                } else if (biome === 'ocean' && y < height) {
                    setBlockId(data, x, y, z, blocks.stone.id);
                } else if (biome === 'ocean' && y >= height && y < seaLevel) {
                    setBlockId(data, x, y, z, blocks.water?.id || 9);
                }
                /*
                else if (y > height)
                    this.setBlockId(x, y, z, blocks.empty.id);

                 */
            }
        }
    }
    return {data, biomes};
}

export function setBlockId(data, x, y, z, id) {
    if (inBounds(x, y, z))
        data[x][y][z].id = id;
}

export function getBlock(data, x, y, z) {
    if (inBounds(x, y, z) && typeof data[x] !== "undefined")
        return data[x][y][z];
    return null;
}

export function inBounds(x, y, z) {
    if (x >= 0 && x < 16 && z >= 0 && z < 16 && y >= 0 && y < 80)
        return true;
    return false;
}


export function generateTree(seed, biome, x, y, z, params, data) {
    const minH = params.trees.trunk.minHeight;
    const maxH = params.trees.trunk.maxHeight;
    const h = Math.round(minH + (maxH - minH) * Math.random() +1);

    for (let treeY = y; treeY < y + h; treeY++) {
        if (biome == 'desert')
            setBlockId(data, x, treeY, z, blocks.cactus.id);
        else
            setBlockId(data, x, treeY, z, blocks.log.id);
    }

    if (biome != 'desert') {
        generateTreeCanopy(biome, x, y + h, z, params, data);
    }

}

export function generateTreeCanopy(biome, centerX, centerY, centerZ, params, data) {
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
                const block = getBlock(data, centerX + x, centerY + y, centerZ + z);
                if (block && block.id !== blocks.empty.id) continue;
                // Fill in the tree canopy with leaves based on the density parameter
                if (n < params.trees.canopy.density) {
                    if (getBlock(data, centerX + x, centerY + y, centerZ + z) !== null)
                        setBlockId(data, centerX + x, centerY + y, centerZ + z, blocks.leaves.id);
                }
            }
        }
    }
}

export function generateResources(seed, x, y, z, position, data) {

    const simplex = new SimplexNoise(seed);
    resources.forEach(resource => {

        const value = simplex.noise(
            (position.x + x) / resource.scale.x,
            (position.y + y) / resource.scale.y,
            (position.z + z) / resource.scale.z);
        if (value > resource.scarcity)
            setBlockId(data, x, y, z, resource.id);

    })

}


export function getBiome(simplex, x, z, position) {
    let noiseValue = simplex.noise((position.x + x) / 500, (position.z + z) / 500);
    noiseValue += 0.2 * simplex.noise((position.x + x) / 250, (position.z + z) / 250);

    // Normalisation pour être entre 0 et 1
    noiseValue = (noiseValue + 1) / 2;

    /*
    •	Si noiseValue = 0.1, alors blend = (0.1 - 0.1) / 0.2 = 0, donc 100% “plains”.
	•	Si noiseValue = 0.2, alors blend = (0.2 - 0.1) / 0.2 = 0.5, donc 50% “plains”, 50% “forest”.
	•	Si noiseValue = 0.3, alors blend = (0.3 - 0.1) / 0.2 = 1, donc 100% “forest”.
        blend = (noiseValue - seuil_min) / (seuil_max - seuil_min)
     */
    if (noiseValue < 0.07) return { biome1: 'ocean', biome2: 'ocean', blend: 0 };
    if (noiseValue < 0.09) return { biome1: 'ocean', biome2: 'beach', blend: (noiseValue - 0.07) / 0.02 };
    if (noiseValue < 0.115) return { biome1: 'beach', biome2: 'plains', blend: (noiseValue - 0.09) / 0.025 };
    if (noiseValue < 0.2) return { biome1: 'plains', biome2: 'desert', blend: (noiseValue - 0.09) / 0.11 };
    if (noiseValue < 0.4) return { biome1: 'desert', biome2: 'forest', blend: (noiseValue - 0.2) / 0.2 };
    if (noiseValue < 0.6) return { biome1: 'forest', biome2: 'mountains', blend: (noiseValue - 0.4) / 0.2 };
    return { biome1: 'mountains', biome2: 'mountains', blend: (noiseValue - 0.6) / 0.4 };
}

export function lerp(a, b, t) {
    return a + t * (b - a);
}

export function generateCaves(simplex, x, y, z, position, data) {
    /*  Caves v3 : « spaghetti » 3-D
     *  – moyenne de trois permutations du bruit Simplex ⇒ moins linéaire
     *  – “gate” aléatoire pour casser les couloirs infinis
     *  – on creuse une mini-sphère (rayon 1) pour élargir le tunnel
     */

    // Ne pas toucher à la surface, à la mer ni à la bedrock
    if (y <= 4 || y >= 60) return;

    // Coordonnées absolues (continuité inter-chunks)
    const ax = position.x + x;
    const ay = position.y + y;
    const az = position.z + z;

    // 1) Bruit combiné : trois permutations → valeurs moins directionnelles
    const freq = 0.035;
    const v =
        (simplex.noise(ax * freq, ay * freq, az * freq) +
            simplex.noise(ay * freq, az * freq, ax * freq) +
            simplex.noise(az * freq, ax * freq, ay * freq)) / 3;

    // 2) Gate : évite qu’un même fil soit creusé indéfiniment
    const gate = simplex.noise((ax + 57) * 0.11, (ay - 13) * 0.11, (az + 29) * 0.11);

    // 3) Si v est dans une fine bande et que gate > 0 ⇒ on creuse
    if (v > 0.18 && v < 0.24 && gate > 0) { //Modifier la bande (v > 0.18 && v < 0.24) pour contrôler la fréquence de ces salles.
        const R = 2;                             // rayon élargi
        for (let dx = -R; dx <= R; dx++) {
            for (let dy = -R; dy <= R; dy++) {
                for (let dz = -R; dz <= R; dz++) {
                    if (dx * dx + dy * dy + dz * dz <= R * R) {
                        const nx = x + dx, ny = y + dy, nz = z + dz;
                        if (inBounds(nx, ny, nz)) {
                            setBlockId(data, nx, ny, nz, blocks.empty.id);
                        }
                    }
                }
            }
        }
        /* ----- Lave occasionnelle au fond des cavernes ----- */
        if (y <= 30 && Math.random() < 0.02) {   // 2 % de chance en dessous de Y=30
            for (let dx2 = -R; dx2 <= R; dx2++) {
                for (let dz2 = -R; dz2 <= R; dz2++) {
                    if (dx2 * dx2 + dz2 * dz2 <= R * R) {
                        const nx = x + dx2, nz = z + dz2, ny = y - 1; // couche inférieure
                        if (inBounds(nx, ny, nz)) {
                            const blk = getBlock(data, nx, ny, nz);
                            if (blk && blk.id === blocks.empty.id) {
                                setBlockId(data, nx, ny, nz, blocks.lava.id);
                            }
                        }
                    }
                }
            }
        }
    }
}