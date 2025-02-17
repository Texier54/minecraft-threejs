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
    sand: loadTexture('images/sand.png'),
    gravel: loadTexture('images/gravel.png'),
};

const TOOL_TYPES = {
    PICKAXE: "pickaxe",
    AXE: "axe",
    SHOVEL: "shovel",
    HAND: "hand"
};


const TOOL_MATERIALS = {
    WOOD: 2,
    STONE: 4,
    IRON: 6,
    GOLD: 12,
    DIAMOND: 8,
    NETHERITE: 9
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
        icon: 'images/block-icon/grass.png',
        tool: TOOL_TYPES.SHOVEL,
        need_tool: false,
    },
    dirt: {
        id: 2,
        name: 'dirt',
        type: 'block',
        stackable: true,
        hardness: 0.5,
        material: new THREE.MeshLambertMaterial({ map: textures.dirt }),
        icon: 'images/block-icon/dirt.webp',
        tool: TOOL_TYPES.SHOVEL,
        need_tool: false,
    },
    stone: {
        id: 3,
        name: 'stone',
        type: 'block',
        stackable: true,
        hardness: 1.5,
        material: new THREE.MeshLambertMaterial({ map: textures.stone }),
        scale: { x: 30, y: 30, z: 30 },
        scarcity: 0.8, //rareté
        icon: 'images/block-icon/stone.png',
        tool: TOOL_TYPES.PICKAXE,
        need_tool: true,
    },
    coalOre: {
        id: 4,
        name: 'coal_ore',
        type: 'block',
        stackable: true,
        hardness: 3,
        material: new THREE.MeshLambertMaterial({ map: textures.coalOre }),
        scale: { x: 20, y: 20, z: 20 },
        scarcity: 0.8,
        icon: 'images/block-icon/coal_ore.png',
        tool: TOOL_TYPES.PICKAXE,
        need_tool: true,
    },
    ironOre: {
        id: 5,
        name: 'iron_ore',
        type: 'block',
        stackable: true,
        hardness: 3,
        material: new THREE.MeshLambertMaterial({ map: textures.ironOre }),
        scale: { x: 40, y: 40, z: 40 },
        scarcity: 0.9,
        icon: 'images/block-icon/iron_ore.png',
        tool: TOOL_TYPES.PICKAXE,
        need_tool: true,
    },
    planks: {
        id: 6,
        name: 'planks',
        type: 'block',
        stackable: true,
        hardness: 2,
        material: new THREE.MeshLambertMaterial({ map: textures.planks }),
        icon: 'images/block-icon/wood.png'
    },
    bedrock: {
        id: 7,
        name: 'bedrock',
        type: 'block',
        stackable: true,
        material: new THREE.MeshLambertMaterial({ map: textures.stone }),
        scale: { x: 30, y: 30, z: 30 },
        scarcity: 0.8
    },
    sand: {
        id: 12,
        name: 'sand',
        type: 'block',
        stackable: true,
        hardness: 0.5,
        material: new THREE.MeshLambertMaterial({ map: textures.sand }),
        icon: 'images/block-icon/send.webp'
    },
    gravel: {
        id: 13,
        name: 'gravel',
        type: 'block',
        stackable: true,
        hardness: 0.6,
        material: new THREE.MeshLambertMaterial({ map: textures.gravel }),
        icon: 'images/block-icon/gravel.webp'
    },
    log: {
        id: 17,
        name: 'log',
        type: 'block',
        stackable: true,
        hardness: 2,
        material:  [
            new THREE.MeshLambertMaterial({ map: textures.log }), // right
            new THREE.MeshLambertMaterial({ map: textures.log }), // left
            new THREE.MeshLambertMaterial({ map: textures.log_top }), // top
            new THREE.MeshLambertMaterial({ map: textures.log_top }), // bottom
            new THREE.MeshLambertMaterial({ map: textures.log }), // front
            new THREE.MeshLambertMaterial({ map: textures.log })  // back
        ],
        icon: 'images/block-icon/log.png',
        tool: TOOL_TYPES.AXE
    },
    leaves: {
        id: 18,
        name: 'leaves',
        type: 'block',
        stackable: true,
        hardness: 0.2,
        material: new THREE.MeshLambertMaterial({ map: textures.leaves }),
        icon: 'images/block-icon/leaves.webp'
    },
    glass: {
        id: 20,
        name: 'glass',
        type: 'block',
        stackable: true,
        hardness: 0.3,
        material: new THREE.MeshLambertMaterial({ map: textures.glass, transparent: true }),
        icon: 'images/block-icon/glass.webp'
    },
    chest: {
        id: 54,
        name: 'chest',
        type: 'block',
        stackable: true,
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
        stackable: true,
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
        stackable: true,
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
    iron_pickaxe: {
        id: 297,
        name: 'Iron Pickaxe',
        type: 'item',
        stackable: false,
        icon: 'images/block-icon/iron_pickaxe.webp',
        tool_type: TOOL_TYPES.PICKAXE,
        tool_material: TOOL_MATERIALS.IRON
    },
    iron_ingot: {
        id: 305,
        name: 'Iron Ingot',
        type: 'item',
        stackable: false,
        icon: 'images/block-icon/iron_ingot.webp',
    },
    wooden_shovel: {
        id: 309,
        name: 'Wooden Shovel',
        type: 'item',
        stackable: false,
        icon: 'images/block-icon/wooden_shovel.webp',
        tool_type: TOOL_TYPES.SHOVEL,
        tool_material: TOOL_MATERIALS.WOOD
    },
    wooden_pickaxe: {
        id: 310,
        name: 'Wooden Pickaxe',
        type: 'item',
        stackable: false,
        icon: 'images/block-icon/wooden_pickaxe.png',
        tool_type: TOOL_TYPES.PICKAXE,
        tool_material: TOOL_MATERIALS.WOOD
    },
    stone_shovel: {
        id: 313,
        name: 'Stone Shovel',
        type: 'item',
        stackable: false,
        icon: 'images/block-icon/stone_shovel.webp',
        tool_type: TOOL_TYPES.SHOVEL,
        tool_material: TOOL_MATERIALS.STONE
    },
    stone_pickaxe: {
        id: 314,
        name: 'Stone Pickaxe',
        type: 'item',
        stackable: false,
        icon: 'images/block-icon/stone_pickaxe.webp',
        tool_type: TOOL_TYPES.PICKAXE,
        tool_material: TOOL_MATERIALS.STONE
    },
    stone_axe: {
        id: 315,
        name: 'Stone axe',
        type: 'item',
        stackable: false,
        icon: 'images/block-icon/stone_axe.webp',
        tool_type: TOOL_TYPES.AXE,
        tool_material: TOOL_MATERIALS.STONE
    },
    diamond_pickaxe: {
        id: 318,
        name: 'Diamind Pickaxe',
        type: 'item',
        stackable: false,
        icon: 'images/block-icon/diamond_pickaxe.webp',
        tool_type: TOOL_TYPES.PICKAXE,
        tool_material: TOOL_MATERIALS.DIAMOND
    },
    stick: {
        id: 320,
        name: 'Stick',
        type: 'item',
        stackable: true,
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

