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
        material: [
            new THREE.MeshLambertMaterial({ map: textures.grassSide }), // right
            new THREE.MeshLambertMaterial({ map: textures.grassSide }), // left
            new THREE.MeshLambertMaterial({ map: textures.grass }), // top
            new THREE.MeshLambertMaterial({ map: textures.dirt }), // bottom
            new THREE.MeshLambertMaterial({ map: textures.grassSide }), // front
            new THREE.MeshLambertMaterial({ map: textures.grassSide })  // back
        ],
        item: 'images/grass.png'
    },
    dirt: {
        id: 2,
        name: 'dirt',
        material: new THREE.MeshLambertMaterial({ map: textures.dirt })
    },
    stone: {
        id: 3,
        name: 'stone',
        material: new THREE.MeshLambertMaterial({ map: textures.stone }),
        scale: { x: 30, y: 30, z: 30 },
        scarcity: 0.8, //rareté
        item: 'images/stone.png'
    },
    coalOre: {
        id: 4,
        name: 'coal_ore',
        material: new THREE.MeshLambertMaterial({ map: textures.coalOre }),
        scale: { x: 20, y: 20, z: 20 },
        scarcity: 0.8
    },
    ironOre: {
        id: 5,
        name: 'iron_ore',
        material: new THREE.MeshLambertMaterial({ map: textures.ironOre }),
        scale: { x: 40, y: 40, z: 40 },
        scarcity: 0.9
    },
    bedrock: {
        id: 6,
        name: 'bedrock',
        material: new THREE.MeshLambertMaterial({ map: textures.stone }),
        scale: { x: 30, y: 30, z: 30 },
        scarcity: 0.8
    },
    crafting_table: {
        id: 58,
        name: 'Crafting Table',
        material: [
            new THREE.MeshLambertMaterial({ map: textures.crafting_table_side }), // right
            new THREE.MeshLambertMaterial({ map: textures.crafting_table_side }), // left
            new THREE.MeshLambertMaterial({ map: textures.crafting_table_top }), // top
            new THREE.MeshLambertMaterial({ map: textures.crafting_table_side }), // bottom
            new THREE.MeshLambertMaterial({ map: textures.crafting_table_front }), // front
            new THREE.MeshLambertMaterial({ map: textures.crafting_table_side })  // back
        ],
        item: 'images/crafting_table_top.png'
    },
};

export const resources = [
    blocks.stone,
    blocks.coalOre,
    blocks.ironOre
];