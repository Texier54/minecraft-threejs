import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader();

function loadTexture(path) {
    const texture = textureLoader.load(path);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    return texture;
}

const textures = {
    dirt: loadTexture('images/dirt.png'),
    grass: loadTexture('images/grass.png'),
    grassSide: loadTexture('images/grass_block_side.png'),
    stone: loadTexture('images/stone.png'),
    coalOre: loadTexture('images/coal_ore.png'),
    ironOre: loadTexture('images/iron_ore.png'),
    crafting_table_top: loadTexture('images/crafting_table_top.png'),
    crafting_table_front: loadTexture('images/crafting_table_front.png'),
    crafting_table_side: loadTexture('images/crafting_table_side.png'),
    planks: loadTexture('images/planks_oak.png'),
    log_top: loadTexture('images/log_oak_top.png'),
    log: loadTexture('images/log_oak.png'),
    leaves: loadTexture('images/leaves.png'),
    glass: loadTexture('images/glass.png'),
    furnace_top: loadTexture('images/furnace_top.png'),
    furnace_side: loadTexture('images/furnace_side.png'),
    furnace_front: loadTexture('images/furnace_front_off.png'),
    chest_top: loadTexture('images/chest_top.png'),
    chest_side: loadTexture('images/chest_side.png'),
    chest_front: loadTexture('images/chest_front.png'),
};

export const blocks = {
    empty: {
        id: 0,
        name: 'empty',
        visible: false
    },
    grass: {
        id: 1,
        name: 'grass',
        type: 'block',
        stackable: true,
        hardness: 0.6,
        material: [
            new THREE.MeshLambertMaterial({ map: textures.grassSide }), // right
            new THREE.MeshLambertMaterial({ map: textures.grassSide }), // left
            new THREE.MeshLambertMaterial({ map: textures.grass }), // top
            new THREE.MeshLambertMaterial({ map: textures.dirt }), // bottom
            new THREE.MeshLambertMaterial({ map: textures.grassSide }), // front
            new THREE.MeshLambertMaterial({ map: textures.grassSide })  // back
        ],
        icon: 'images/block-icon/grass.png'
    },
    dirt: {
        id: 2,
        name: 'dirt',
        type: 'block',
        hardness: 0.5,
        material: new THREE.MeshLambertMaterial({ map: textures.dirt }),
        icon: 'images/block-icon/dirt.webp'
    },
    stone: {
        id: 3,
        name: 'stone',
        type: 'block',
        hardness: 1.5,
        material: new THREE.MeshLambertMaterial({ map: textures.stone }),
        scale: { x: 30, y: 30, z: 30 },
        scarcity: 0.8, //rareté
        icon: 'images/block-icon/stone.png'
    },
    coalOre: {
        id: 4,
        name: 'coal_ore',
        type: 'block',
        material: new THREE.MeshLambertMaterial({ map: textures.coalOre }),
        scale: { x: 20, y: 20, z: 20 },
        scarcity: 0.8,
        icon: 'images/block-icon/coal_ore.png'
    },
    ironOre: {
        id: 5,
        name: 'iron_ore',
        type: 'block',
        material: new THREE.MeshLambertMaterial({ map: textures.ironOre }),
        scale: { x: 40, y: 40, z: 40 },
        scarcity: 0.9,
        icon: 'images/block-icon/iron_ore.png'
    },
    planks: {
        id: 6,
        name: 'planks',
        type: 'block',
        hardness: 2,
        material: new THREE.MeshLambertMaterial({ map: textures.planks }),
        icon: 'images/block-icon/wood.png'
    },
    bedrock: {
        id: 7,
        name: 'bedrock',
        type: 'block',
        material: new THREE.MeshLambertMaterial({ map: textures.stone }),
        scale: { x: 30, y: 30, z: 30 },
        scarcity: 0.8
    },
    log: {
        id: 17,
        name: 'log',
        type: 'block',
        hardness: 2,
        material:  [
            new THREE.MeshLambertMaterial({ map: textures.log }), // right
            new THREE.MeshLambertMaterial({ map: textures.log }), // left
            new THREE.MeshLambertMaterial({ map: textures.log_top }), // top
            new THREE.MeshLambertMaterial({ map: textures.log_top }), // bottom
            new THREE.MeshLambertMaterial({ map: textures.log }), // front
            new THREE.MeshLambertMaterial({ map: textures.log })  // back
        ],
        icon: 'images/block-icon/log.png'
    },
    leaves: {
        id: 18,
        name: 'leaves',
        type: 'block',
        hardness: 0.2,
        material: new THREE.MeshLambertMaterial({ map: textures.leaves }),
        icon: 'images/block-icon/leaves.webp'
    },
    glass: {
        id: 20,
        name: 'glass',
        type: 'block',
        hardness: 0.3,
        material: new THREE.MeshLambertMaterial({ map: textures.glass, transparent: true }),
        icon: 'images/block-icon/glass.webp'
    },
    chest: {
        id: 54,
        name: 'chest',
        type: 'block',
        hardness: 2.5,
        material: [
            new THREE.MeshLambertMaterial({ map: textures.chest_side }), // right
            new THREE.MeshLambertMaterial({ map: textures.chest_side }), // left
            new THREE.MeshLambertMaterial({ map: textures.chest_top }), // top
            new THREE.MeshLambertMaterial({ map: textures.chest_side }), // bottom
            new THREE.MeshLambertMaterial({ map: textures.chest_front }), // front
            new THREE.MeshLambertMaterial({ map: textures.chest_side })  // back
        ],
        icon: 'images/block-icon/chest.webp',
        interface: true
    },
    craftingTable: {
        id: 58,
        name: 'Crafting Table',
        type: 'block',
        hardness: 2.5,
        material: [
            new THREE.MeshLambertMaterial({ map: textures.crafting_table_side }), // right
            new THREE.MeshLambertMaterial({ map: textures.crafting_table_side }), // left
            new THREE.MeshLambertMaterial({ map: textures.crafting_table_top }), // top
            new THREE.MeshLambertMaterial({ map: textures.crafting_table_side }), // bottom
            new THREE.MeshLambertMaterial({ map: textures.crafting_table_front }), // front
            new THREE.MeshLambertMaterial({ map: textures.crafting_table_side })  // back
        ],
        icon: 'images/block-icon/crafting_table.webp',
        interface: true
    },
    furnace: {
        id: 61,
        name: 'Furnace',
        type: 'block',
        hardness: 3.5,
        material: [
            new THREE.MeshLambertMaterial({ map: textures.furnace_side }), // right
            new THREE.MeshLambertMaterial({ map: textures.furnace_side }), // left
            new THREE.MeshLambertMaterial({ map: textures.furnace_top }), // top
            new THREE.MeshLambertMaterial({ map: textures.furnace_side }), // bottom
            new THREE.MeshLambertMaterial({ map: textures.furnace_front }), // front
            new THREE.MeshLambertMaterial({ map: textures.furnace_side })  // back
        ],
        icon: 'images/block-icon/furnace.webp',
        interface: true
    },
    stone_pickaxe: {
        id: 314,
        name: 'Stone Pickaxe',
        type: 'item',
        icon: 'images/block-icon/stone_pickaxe.webp',
    },
    stick: {
        id: 320,
        name: 'Stick',
        type: 'item',
        icon: 'images/block-icon/stick.webp',
    },
};

// Générer un index par ID
const blockById = Object.fromEntries(
    Object.values(blocks).map(block => [block.id, block])
);

// Fonction pour récupérer un bloc par ID
export function getBlockByIdFast(id) {
    return blockById[id] || null; // Retourne null si l'ID n'existe pas
}

export const resources = [
    blocks.coalOre,
    blocks.ironOre
];