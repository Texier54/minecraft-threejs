import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const textureLoader = new THREE.TextureLoader();
const grassTexture = textureLoader.load('grass.jpg'); // Assurez-vous d'avoir une image "grass.png"
//const grassMaterial = new THREE.MeshLambertMaterial({ map: grassTexture });

const textures = [
    textureLoader.load('grass.jpg'),  // face avant
    textureLoader.load('grass.jpg'),  // face arrière
    textureLoader.load('grass-top.jpg'),  // face gauche
    textureLoader.load('grass.jpg'),  // face droite
    textureLoader.load('grass.jpg'),  // face haut
    textureLoader.load('grass.jpg')   // face bas
];

// Créer le cube avec des matériaux différents pour chaque face
const grassMaterial = textures.map(texture => new THREE.MeshBasicMaterial({ map: texture }));

// Initialiser la scène, la caméra, et le rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Ajouter de la lumière
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10).normalize();
scene.add(light);

// Position de la caméra
camera.position.set(10, 15, 20);
camera.lookAt(0, 0, 0);

// Créer le terrain
const blockSize = 1;
const terrainSize = 10;
const geometry = new THREE.BoxGeometry(blockSize, blockSize, blockSize);
const material = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); // Couleur de "terre"

for (let x = -terrainSize; x <= terrainSize; x++) {
    for (let z = -terrainSize; z <= terrainSize; z++) {
        const height = Math.floor(/*Math.random() * 3 + */2); // Hauteur aléatoire (entre 2 et 5)
        for (let y = 0; y < height; y++) {
            const voxel = new THREE.Mesh(geometry, grassMaterial);
            voxel.position.set(x * blockSize, y * blockSize, z * blockSize);
            scene.add(voxel);
        }
    }
}

// Contrôles de caméra
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Améliore la fluidité des mouvements

// Gestion des clics (ajouter ou supprimer des blocs)
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

let placeBlock = false;
window.addEventListener('click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        const intersected = intersects[0].object;

        if (placeBlock) {
            const newBlock = new THREE.Mesh(geometry, grassMaterial);
            newBlock.position.copy(intersected.position);
            newBlock.position.y += blockSize;
            scene.add(newBlock);
        } else {
            scene.remove(intersected);
        }
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Shift') placeBlock = true;
});
window.addEventListener('keyup', (event) => {
    if (event.key === 'Shift') placeBlock = false;
});

// Joueur
let velocity = new THREE.Vector3(0, 0, 0);
const gravity = -0.02;
const playerHeight = 1.8;
const groundCheckDistance = 0.1;
let isOnGround = false;

const playerGeometry = new THREE.SphereGeometry(0.5, 16, 16);
const playerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const player = new THREE.Mesh(playerGeometry, playerMaterial);

player.position.set(0, 5, 0);
scene.add(player);

function checkGroundCollision() {
    const groundRaycaster = new THREE.Raycaster();
    groundRaycaster.set(player.position, new THREE.Vector3(0, -1, 0));
    const intersects = groundRaycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        const distanceToGround = intersects[0].distance;
        isOnGround = distanceToGround <= groundCheckDistance;
    } else {
        isOnGround = false;
    }
}

function checkHorizontalCollisions() {
    const directions = [
        new THREE.Vector3(1, 0, 0),
        new THREE.Vector3(-1, 0, 0),
        new THREE.Vector3(0, 0, 1),
        new THREE.Vector3(0, 0, -1),
    ];

    directions.forEach((direction) => {
        const raycaster = new THREE.Raycaster(player.position, direction);
        const intersects = raycaster.intersectObjects(scene.children, true);

        if (intersects.length > 0 && intersects[0].distance < 0.6) {
            if (direction.x !== 0) velocity.x = 0;
            if (direction.z !== 0) velocity.z = 0;
        }
    });
}

// Déplacement
const keys = {
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
};

window.addEventListener('keydown', (event) => {
    if (event.key === 'z') keys.forward = true;
    if (event.key === 's') keys.backward = true;
    if (event.key === 'q') keys.left = true;
    if (event.key === 'd') keys.right = true;
    if (event.key === ' ') keys.jump = true;
});

window.addEventListener('keyup', (event) => {
    if (event.key === 'z') keys.forward = false;
    if (event.key === 's') keys.backward = false;
    if (event.key === 'q') keys.left = false;
    if (event.key === 'd') keys.right = false;
    if (event.key === ' ') keys.jump = false;
});


// Variables pour la position de la souris
let mouseX = 0;
let mouseY = 0;

// Événements de la souris
document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = (event.clientY / window.innerHeight) * 2 + 1;
});

function animate() {
    requestAnimationFrame(animate);

    checkGroundCollision();

    if (!isOnGround) velocity.y += gravity;
    else velocity.y = 0;

    const moveSpeed = 0.1;
    if (keys.forward) velocity.z = -moveSpeed;
    if (keys.backward) velocity.z = moveSpeed;
    if (keys.left) velocity.x = -moveSpeed;
    if (keys.right) velocity.x = moveSpeed;
    if (keys.jump) velocity.y = 0.1;

    checkHorizontalCollisions();
    player.position.add(velocity);
    velocity.x = 0;
    velocity.z = 0;
    velocity.y = 0;

    // Faire tourner la caméra autour de la scène en fonction de la souris
    camera.position.x = Math.sin(mouseX * Math.PI) * 20; // Le mouvement X influe sur la rotation autour de l'axe Y
    camera.position.z = Math.cos(mouseX * Math.PI) * 20; // Le mouvement X influe également sur la position en Z
    camera.position.y = Math.sin(mouseY * Math.PI) * 10 + 10; // Le mouvement Y influe sur la hauteur de la caméra

    camera.lookAt(player.position);

    renderer.render(scene, camera);
}
animate();