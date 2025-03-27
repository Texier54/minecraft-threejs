import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

const textureLoader = new THREE.TextureLoader();
const geometryBlock = new THREE.BoxGeometry(1, 1, 1);
const geometryTorch = new THREE.BoxGeometry(0.12, 0.7, 0.12)



const step1 = new THREE.BoxGeometry(1, 0.5, 1);
const step2 = new THREE.BoxGeometry(1, 0.5, 0.5);
step2.translate(0, 0.25, -0.25); // Déplacer la petite marche
step1.translate(0, -0.25, 0); // Déplacer la petite marche
const geometryStair = BufferGeometryUtils.mergeGeometries([step1, step2]);

function loadTexture(path) {
    const texture = textureLoader.load(path);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;

    //Active mipmaps pour éviter l’aliasing.
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipMapLinearFilter;

    return texture;
}

const textures = {
    dirt: loadTexture('images/dirt.png'),
    grass: loadTexture('images/grass.png'),
    grassSide: loadTexture('images/grass_block_side.png'),
    stone: loadTexture('images/stone.png'),
    cobblestone: loadTexture('images/cobblestone.png'),
    bedrock: loadTexture('images/bedrock.png'),
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
    torch: loadTexture('images/torch.png'),
    torch_top: loadTexture('images/torch_top.png'),
    diamondOre: loadTexture('images/diamond_ore.png'),
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
        geometry: geometryBlock,
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
        geometry: geometryBlock,
    },
    stone: {
        id: 3,
        name: 'Stone',
        type: 'block',
        stackable: true,
        hardness: 1.5,
        material: new THREE.MeshLambertMaterial({ map: textures.stone }),
        icon: 'images/block-icon/stone.png',
        tool: TOOL_TYPES.PICKAXE,
        need_tool: true,
        geometry: geometryBlock,
        drops: 4
    },
    cobblestone: {
        id: 4,
        name: 'Cobblestone',
        type: 'block',
        stackable: true,
        hardness: 2,
        material: new THREE.MeshLambertMaterial({ map: textures.cobblestone }),
        icon: 'images/block-icon/cobblestone.webp',
        tool: TOOL_TYPES.PICKAXE,
        need_tool: true,
        geometry: geometryBlock,
    },
    planks: {
        id: 6,
        name: 'planks',
        type: 'block',
        stackable: true,
        hardness: 2,
        material: new THREE.MeshLambertMaterial({ map: textures.planks }),
        icon: 'images/block-icon/wood.png',
        tool: TOOL_TYPES.AXE,
        geometry: geometryBlock,
    },
    bedrock: {
        id: 7,
        name: 'bedrock',
        type: 'block',
        stackable: true,
        hardness: 10000,
        material: new THREE.MeshLambertMaterial({ map: textures.bedrock }),
        geometry: geometryBlock,
    },
    sand: {
        id: 12,
        name: 'sand',
        type: 'block',
        stackable: true,
        hardness: 0.5,
        material: new THREE.MeshLambertMaterial({ map: textures.sand }),
        icon: 'images/block-icon/sand.webp',
        tool: TOOL_TYPES.SHOVEL,
        geometry: geometryBlock,
    },
    gravel: {
        id: 13,
        name: 'gravel',
        type: 'block',
        stackable: true,
        hardness: 0.6,
        material: new THREE.MeshLambertMaterial({ map: textures.gravel }),
        icon: 'images/block-icon/gravel.webp',
        tool: TOOL_TYPES.SHOVEL,
        geometry: geometryBlock,
    },
    ironOre: {
        id: 15,
        name: 'iron_ore',
        type: 'block',
        stackable: true,
        hardness: 3,
        material: new THREE.MeshLambertMaterial({ map: textures.ironOre }),
        scale: { x: 40, y: 40, z: 40 },
        scarcity: 0.9,//rareté
        icon: 'images/block-icon/iron_ore.png',
        tool: TOOL_TYPES.PICKAXE,
        need_tool: true,
        geometry: geometryBlock,
    },
    coalOre: {
        id: 16,
        name: 'coal_ore',
        type: 'block',
        stackable: true,
        hardness: 3,
        material: new THREE.MeshLambertMaterial({ map: textures.coalOre }),
        scale: { x: 20, y: 20, z: 20 },
        scarcity: 0.8,//rareté
        icon: 'images/block-icon/coal_ore.png',
        tool: TOOL_TYPES.PICKAXE,
        need_tool: true,
        geometry: geometryBlock,
        drops: 302
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
        tool: TOOL_TYPES.AXE,
        geometry: geometryBlock,
    },
    leaves: {
        id: 18,
        name: 'leaves',
        type: 'block',
        stackable: true,
        hardness: 0.2,
        material: new THREE.MeshLambertMaterial({ map: textures.leaves }),
        icon: 'images/block-icon/leaves.webp',
        geometry: geometryBlock,
    },
    glass: {
        id: 20,
        name: 'glass',
        type: 'block',
        stackable: true,
        hardness: 0.3,
        material: new THREE.MeshLambertMaterial({ map: textures.glass, transparent: true }),
        transparent: false,
        icon: 'images/block-icon/glass.webp',
        geometry: geometryBlock,
    },
    torch: {
        id: 50,
        name: 'torch',
        type: 'block',
        stackable: true,
        hardness: 0,
        material: [
            new THREE.MeshLambertMaterial({ map: textures.torch }), // right
            new THREE.MeshLambertMaterial({ map: textures.torch }), // left
            new THREE.MeshLambertMaterial({ map: textures.torch_top }), // top
            new THREE.MeshLambertMaterial({ map: textures.torch }), // bottom
            new THREE.MeshLambertMaterial({ map: textures.torch }), // front
            new THREE.MeshLambertMaterial({ map: textures.torch })  // back
        ],
        transparent: true,
        icon: 'images/block-icon/torch.webp',
        geometry: geometryTorch,
    },
    oak_stairs: {
        id: 53,
        name: 'oak_stairs',
        type: 'block',
        stackable: true,
        hardness: 2,
        material: new THREE.MeshLambertMaterial({ map: textures.planks }),
        icon: 'images/block-icon/oak_stairs.png',
        tool: TOOL_TYPES.AXE,
        geometry: geometryStair,
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
        interface: true,
        tool: TOOL_TYPES.AXE,
        geometry: geometryBlock,
    },
    diamondOre: {
        id: 56,
        name: 'diamond_ore',
        type: 'block',
        stackable: true,
        hardness: 3,
        material: new THREE.MeshLambertMaterial({ map: textures.diamondOre }),
        scale: { x: 40, y: 40, z: 40 },
        scarcity: 0.99,//rareté
        icon: 'images/block-icon/diamond_ore.png',
        tool: TOOL_TYPES.PICKAXE,
        need_tool: true,
        geometry: geometryBlock,
        drops: 304
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
        interface: true,
        tool: TOOL_TYPES.AXE,
        geometry: geometryBlock,
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
        interface: true,
        tool: TOOL_TYPES.PICKAXE,
        geometry: geometryBlock,
    },
    cobblestone_stairs: {
        id: 67,
        name: 'cobblestone_stairs',
        type: 'block',
        stackable: true,
        hardness: 2,
        material: new THREE.MeshLambertMaterial({ map: textures.cobblestone }),
        icon: 'images/block-icon/cobblestone_stairs.png',
        tool: TOOL_TYPES.PICKAXE,
        geometry: geometryStair,
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
    coal: {
        id: 302,
        name: 'Coal',
        type: 'item',
        stackable: true,
        icon: 'images/block-icon/coal.webp',
    },
    diamond: {
        id: 304,
        name: 'Diamond',
        type: 'item',
        stackable: true,
        icon: 'images/block-icon/diamond.webp',
    },
    iron_ingot: {
        id: 305,
        name: 'Iron Ingot',
        type: 'item',
        stackable: true,
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
    diamond_axe: {
        id: 319,
        name: 'Diamind Axe',
        type: 'item',
        stackable: false,
        icon: 'images/block-icon/diamond_axe.webp',
        tool_type: TOOL_TYPES.AXE,
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

