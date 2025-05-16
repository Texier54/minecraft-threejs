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
    pig_head_front: loadTexture('images/mob/pig/pig_head_front.png'),
    pig_head_right: loadTexture('images/mob/pig/pig_head_right.png'),
    pig_head_left: loadTexture('images/mob/pig/pig_head_left.png'),
    pig_head_top: loadTexture('images/mob/pig/pig_head_top.png'),
    pig_feet: loadTexture('images/mob/pig/pig_feet_side.png'),
    pig_body_back: loadTexture('images/mob/pig/pig_body_back.png'),
    pig_body_side: loadTexture('images/mob/pig/pig_body_side.png'),
    pig_body_right: loadTexture('images/mob/pig/pig_body_right.png'),
    pig_noise_front: loadTexture('images/mob/pig/pig_noise_front.png'),
    steve_head_front: loadTexture('images/player/steve_head_front.png'),
    steve_head_back: loadTexture('images/player/steve_head_back.png'),
    steve_head_right: loadTexture('images/player/steve_head_right.png'),
    steve_head_left: loadTexture('images/player/steve_head_left.png'),
    steve_head_top: loadTexture('images/player/steve_head_top.png'),
    steve_head_bottom: loadTexture('images/player/steve_head_bottom.png'),
    steve_body_top: loadTexture('images/player/steve_body_top.png'),
    steve_body_front: loadTexture('images/player/steve_body_front.png'),
    steve_body_back: loadTexture('images/player/steve_body_back.png'),
    steve_body_right: loadTexture('images/player/steve_body_right.png'),
    steve_body_left: loadTexture('images/player/steve_body_left.png'),
    steve_arm_top: loadTexture('images/player/steve_arm_top.png'),
    steve_arm_bottom: loadTexture('images/player/steve_arm_bottom.png'),
    steve_arm_front: loadTexture('images/player/steve_arm_front.png'),
    steve_arm_right: loadTexture('images/player/steve_arm_right.png'),
    steve_arm_left: loadTexture('images/player/steve_arm_left.png'),
    steve_arm_back: loadTexture('images/player/steve_arm_back.png'),
    steve_leg_front: loadTexture('images/player/steve_leg_front.png'),
    steve_leg_back: loadTexture('images/player/steve_leg_back.png'),
    steve_leg_right: loadTexture('images/player/steve_leg_right.png'),
    steve_leg_left: loadTexture('images/player/steve_leg_left.png'),
    cow_head_front: loadTexture('images/mob/cow/cow_head_front.png'),
    cow_head_top: loadTexture('images/mob/cow/cow_head_top.png'),
    cow_head_left: loadTexture('images/mob/cow/cow_head_left.png'),
    cow_head_right: loadTexture('images/mob/cow/cow_head_right.png'),
    cow_body_left: loadTexture('images/mob/cow/cow_body_left.png'),
    cow_body_right: loadTexture('images/mob/cow/cow_body_right.png'),
    cow_body_top: loadTexture('images/mob/cow/cow_body_top.png'),
    cow_body_bottom: loadTexture('images/mob/cow/cow_body_bottom.png'),
};

export const mobs = {
    pig: {
        id: 1,
        name: 'pig',
        head: {
            material: [
                new THREE.MeshLambertMaterial({ map: textures.pig_head_left }), // right
                new THREE.MeshLambertMaterial({ map: textures.pig_head_right }), // left
                new THREE.MeshLambertMaterial({ map: textures.pig_head_top }), // top
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side }), // bottom
                new THREE.MeshLambertMaterial({ map: textures.pig_head_front }), // front
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side })  // back
            ],
        },
        body: {
            material: [
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side }), // right
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side }), // left
                new THREE.MeshLambertMaterial({ map: textures.pig_body_right }), // top
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side }), // bottom
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side }), // front
                new THREE.MeshLambertMaterial({ map: textures.pig_body_back })  // back
            ],
        },
        feet: {
            material: [
                new THREE.MeshLambertMaterial({ map: textures.pig_feet }), // right
                new THREE.MeshLambertMaterial({ map: textures.pig_feet }), // left
                new THREE.MeshLambertMaterial({ map: textures.pig_feet }), // top
                new THREE.MeshLambertMaterial({ map: textures.pig_feet }), // bottom
                new THREE.MeshLambertMaterial({ map: textures.pig_feet }), // front
                new THREE.MeshLambertMaterial({ map: textures.pig_feet })  // back
            ],
        },
        noise: {
            material: [
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side }), // right
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side }), // left
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side }), // top
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side }), // bottom
                new THREE.MeshLambertMaterial({ map: textures.pig_noise_front }), // front
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side })  // back
            ],
        },
    },
    cow: {
        id: 2,
        name: 'cow',
        head: {
            material: [
                new THREE.MeshLambertMaterial({ map: textures.cow_head_left }), // right
                new THREE.MeshLambertMaterial({ map: textures.pig_head_right }), // left
                new THREE.MeshLambertMaterial({ map: textures.cow_head_top }), // top
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side }), // bottom
                new THREE.MeshLambertMaterial({ map: textures.cow_head_front }), // front
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side })  // back
            ],
        },
        body: {
            material: [
                new THREE.MeshLambertMaterial({ map: textures.cow_head_left }), // right
                new THREE.MeshLambertMaterial({ map: textures.cow_head_right }), // left
                new THREE.MeshLambertMaterial({ map: textures.cow_head_top }), // top
                new THREE.MeshLambertMaterial({ map: textures.cow_head_bottom }), // bottom
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side }), // front
                new THREE.MeshLambertMaterial({ map: textures.pig_body_back })  // back
            ],
        },
        feet: {
            material: [
                new THREE.MeshLambertMaterial({ map: textures.pig_feet }), // right
                new THREE.MeshLambertMaterial({ map: textures.pig_feet }), // left
                new THREE.MeshLambertMaterial({ map: textures.pig_feet }), // top
                new THREE.MeshLambertMaterial({ map: textures.pig_feet }), // bottom
                new THREE.MeshLambertMaterial({ map: textures.pig_feet }), // front
                new THREE.MeshLambertMaterial({ map: textures.pig_feet })  // back
            ],
        },
        noise: {
            material: [
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side }), // right
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side }), // left
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side }), // top
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side }), // bottom
                new THREE.MeshLambertMaterial({ map: textures.pig_noise_front }), // front
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side })  // back
            ],
        },
    },
    steve: {
        id: 1,
        name: 'pig',
        head: {
            material: [
                new THREE.MeshLambertMaterial({ map: textures.steve_head_left }), // right
                new THREE.MeshLambertMaterial({ map: textures.steve_head_right }), // left
                new THREE.MeshLambertMaterial({ map: textures.steve_head_top }), // top
                new THREE.MeshLambertMaterial({ map: textures.steve_head_bottom }), // bottom
                new THREE.MeshLambertMaterial({ map: textures.steve_head_front }), // front
                new THREE.MeshLambertMaterial({ map: textures.steve_head_back })  // back
            ],
        },
        body: {
            material: [
                new THREE.MeshLambertMaterial({ map: textures.steve_body_right }), // right
                new THREE.MeshLambertMaterial({ map: textures.steve_body_left }), // left
                new THREE.MeshLambertMaterial({ map: textures.steve_body_top }), // top
                new THREE.MeshLambertMaterial({ map: textures.pig_body_side }), // bottom
                new THREE.MeshLambertMaterial({ map: textures.steve_body_front }), // front
                new THREE.MeshLambertMaterial({ map: textures.steve_body_back })  // back
            ],
        },
        leg: {
            material: [
                new THREE.MeshLambertMaterial({ map: textures.steve_leg_right }), // right
                new THREE.MeshLambertMaterial({ map: textures.steve_leg_left }), // left
                new THREE.MeshLambertMaterial({ map: textures.pig_feet }), // top
                new THREE.MeshLambertMaterial({ map: textures.pig_feet }), // bottom
                new THREE.MeshLambertMaterial({ map: textures.steve_leg_front }), // front
                new THREE.MeshLambertMaterial({ map: textures.steve_leg_back })  // back
            ],
        },
        arm: {
            material: [
                new THREE.MeshLambertMaterial({ map: textures.steve_arm_right }), // right
                new THREE.MeshLambertMaterial({ map: textures.steve_arm_left }), // left
                new THREE.MeshLambertMaterial({ map: textures.steve_arm_top }), // top
                new THREE.MeshLambertMaterial({ map: textures.steve_arm_bottom }), // bottom
                new THREE.MeshLambertMaterial({ map: textures.steve_arm_front }), // front
                new THREE.MeshLambertMaterial({ map: textures.steve_arm_back })  // back
            ],
        },
    },
};

