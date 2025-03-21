import * as THREE from 'three';



import { Player } from './player.js';
import { World } from './world.js';
import {blocks} from "./block.js";
import {Physics} from "./physics.js";

const world = new World();

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x80a0e0);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);

//bloc fps
const fpsDisplay = document.getElementById('fps');


const player = new Player(scene, world);
const physics = new Physics(scene);



/*
// Charger les textures
const textureLoader = new THREE.TextureLoader();
let top = textureLoader.load('images/grass_top.jpg');
top.magFilter = THREE.NearestFilter; // Agrandissement : pixels nets
top.minFilter = THREE.NearestFilter; // Réduction : pixels nets

let side = textureLoader.load('images/grass_block_side.png');
side.magFilter = THREE.NearestFilter; // Agrandissement : pixels nets
side.minFilter = THREE.NearestFilter; // Réduction : pixels nets

const textures = [
    side, // face avant
    side, // face arrière
    top,
    side, // face droite
    side, // face haut
    side // face bas
];



// Créer le cube avec des matériaux différents pour chaque face
const grassMaterial = textures.map(texture => new THREE.MeshBasicMaterial({ map: texture }));


const textureStone = textureLoader.load('images/stone.png');
// Désactiver le filtrage linéaire pour préserver les pixels nets
textureStone.magFilter = THREE.NearestFilter; // Agrandissement : pixels nets
textureStone.minFilter = THREE.NearestFilter; // Réduction : pixels nets
const stoneMaterial = textures.map(texture => new THREE.MeshBasicMaterial({ map: textureStone }));
*/



// Préchargement des textures
const textureLoader = new THREE.TextureLoader();
const top = textureLoader.load('images/grass.png');
const side = textureLoader.load('images/grass_block_side.png');
const stone = textureLoader.load('images/stone.png');

// Configurer les filtres de texture
[top, side, stone].forEach(texture => {
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
});

const textures = [side, side, top, side, side, side];  // Ordre des faces pour le matériau du bloc
const grassMaterial = textures.map(texture => new THREE.MeshBasicMaterial({ map: texture }));
const stoneMaterial = new THREE.MeshBasicMaterial({ map: stone });



// Ajouter de la lumière
/*
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Lumière ambiante
scene.add(ambientLight);*/
/*
const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Lumière directionnelle
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);
*/


let sun;
function setupLights() {
    sun = new THREE.DirectionalLight();
    sun.intensity = 1.5;
    sun.position.set(50, 50, 50);
    sun.castShadow = true;

    // Set the size of the sun's shadow box
    sun.shadow.camera.left = -40;
    sun.shadow.camera.right = 40;
    sun.shadow.camera.top = 40;
    sun.shadow.camera.bottom = -40;
    sun.shadow.camera.near = 0.1;
    sun.shadow.camera.far = 200;
    sun.shadow.bias = -0.0001;
    sun.shadow.mapSize = new THREE.Vector2(2048, 2048);
    scene.add(sun);
    scene.add(sun.target);

    const ambient = new THREE.AmbientLight();
    ambient.intensity = 0.2;
    scene.add(ambient);
}





const chunks = new Map(); // Contiendra les chunks générés



/*

// Demander à l'utilisateur de cliquer pour verrouiller le pointeur
document.body.addEventListener('click', () => {
    controls.lock();
});


 */

window.addEventListener('keydown', (event) => {
    if (event.key === 'e') player.controls.unlock();
});




// Fonction de gestion du mouvement du joueur
let velocity = new THREE.Vector3(0, 0, 0);
const groundCheckDistance = 0.1;
let isOnGround = false;


// Gestion des clics (ajouter ou supprimer des blocs)
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();




window.addEventListener('mousedown', (event) => {
    // Mettre à jour le raycaster en fonction de la position de la souris
    raycaster.setFromCamera(mouse, player.camera);

    // Vérifier les intersections
    // Intersecter uniquement les chunks visibles
    const visibleChunks = Array.from(chunks.values());
    //const intersects = raycaster.intersectObjects(visibleChunks.flatMap(chunk => chunk.children), true);

    const intersects = raycaster.intersectObjects(scene, true);

    console.log(intersects);
    if (intersects.length > 0) {
        const intersected = intersects[0];

        //récupére la position du chunk parent du bloc
        const chunk = intersected.object.parent;

        // récupére transformation matrix du bloc intercepté
        const blockMatrix = new THREE.Matrix4();
        intersected.object.getMatrixAt(intersected.instanceId, blockMatrix);

        // extrait la position du bloc transformation matrix et le met dans coords
        const selectedCoords = chunk.position.clone();
        selectedCoords.applyMatrix4(blockMatrix);
        //const selectedCoords = new THREE.Vector3().applyMatrix4(blockMatrix);

        console.log(selectedCoords);
        // si clic droit
        if (event.button == 2) {
            addBlock(intersected, selectedCoords);
            // Récupérer la normale de la face cliquée
            const normal = intersected.face.normal.clone();

            // Calculer la position du nouveau bloc
            //const newBlock = new THREE.Mesh(geometry, getMaterialForItem(selectedItemId));
            //newBlock.position.copy(intersectedObject.position).add(normal.multiplyScalar(blockSize));
            //intersectedBlock.parent.add(newBlock);
        } else {
            deleteBlock(intersected);
            // Supprimer le bloc intercepté
            //intersectedBlock.parent.remove(intersectedBlock);
        }
    }
});

function addBlock(intersected, selectedCoords) {

    //prend les coordonée de la face pointé
    selectedCoords.add(intersected.normal);

    // Get the mesh and instance id of the block
    const mesh = intersected.object;
    const instanceId = mesh.count++;
    //this.setBlockInstanceId(x, y, z, instanceId);

    // Compute the transformation matrix for the new instance and update the instanced
    const matrix = new THREE.Matrix4();
    matrix.setPosition(selectedCoords.x - intersected.object.parent.position.x, selectedCoords.y, selectedCoords.z - intersected.object.parent.position.z);
    mesh.setMatrixAt(instanceId, matrix);
    mesh.instanceMatrix.needsUpdate = true;
    mesh.computeBoundingSphere();
}

function deleteBlock(intersected) {

    const lastMatrix = new THREE.Matrix4();
    intersected.object.getMatrixAt(intersected.object.count -1, lastMatrix);

    const v = new THREE.Vector3();
    v.applyMatrix4(lastMatrix);

    // inverse le dernier bloc et le séléctionné
    intersected.object.setMatrixAt(intersected.instanceId, lastMatrix)

    // informer instanced mesh ( intersected.object) que l'on a mis à jour l'instance matrix
    // et re-compute the bounding sphere pour le raycasting fonctionne
    intersected.object.count--;
    intersected.object.instanceMatrix.needsUpdate = true;
    intersected.object.computeBoundingSphere();
    console.log(intersected.object.count);
}



// Fonction pour récupérer le matériau basé sur l'item sélectionné
function getMaterialForItem(itemId) {
    switch (itemId) {
        case 1: return grassMaterial; // Exemple de matériau 1
        case 2: return stoneMaterial; // Exemple de matériau 2
    }
}

function checkGroundCollision() {
    const groundRaycaster = new THREE.Raycaster();
    groundRaycaster.set(player.position, new THREE.Vector3(0, -1, 0));
    const visibleChunks = Array.from(chunks.values());
    const intersects = groundRaycaster.intersectObjects(visibleChunks.flatMap(chunk => chunk.children), true);

    if (intersects.length > 0) {
        const distanceToGround = intersects[0].distance;
        isOnGround = distanceToGround <= groundCheckDistance;
    } else {
        isOnGround = false;
    }
}

function checkHorizontalCollisions() {

    let directionZ
    if (velocity.z < 0)
        directionZ = new THREE.Vector3(0, 0, -1);//devant
    else if (velocity.z > 0)
        directionZ = new THREE.Vector3(0, 0, 1);//derriere
    const raycasterZ = new THREE.Raycaster(player.position, directionZ);

    const visibleChunks = Array.from(chunks.values());
    const intersectsZ = raycasterZ.intersectObjects(visibleChunks.flatMap(chunk => chunk.children), true);

    if (intersectsZ.length > 0 && intersectsZ[0].distance < 0.6)
        velocity.z = 0;

    let directionX;
    if (velocity.x > 0)
        directionX = new THREE.Vector3(1, 0, 0);//gauche
    else if (velocity.x < 0)
        directionX = new THREE.Vector3(-1, 0, 0);//droite
    const raycasterX = new THREE.Raycaster(player.position, directionX);
    const intersectsX = raycasterX.intersectObjects(visibleChunks.flatMap(chunk => chunk.children), true);
    if (intersectsX.length > 0 && intersectsX[0].distance < 0.6)
        velocity.x = 0;
}




// Gestion des mouvements de la souris pour la caméra et la rotation du personnage
document.addEventListener('mousemove', (event) => {
    if (player.controls.isLocked) {

    }
});

// couleur du ciel
scene.background = new THREE.Color( 0x6EB1FF );

var prevTime = performance.now();
var fps = 0;
var frameCount = 0;
var prevTimeNew = 0;

// Fonction d'animation
function animate() {

    const now = performance.now();


    //checkGroundCollision();
    //checkHorizontalCollisions();

    let dt = (now - prevTimeNew)/1000;

    physics.update(dt, player, world);
    prevTimeNew = now;


    frameCount++;
    // Met à jour l'affichage FPS toutes les secondes
    if (now - prevTime > 1000) {
        fps = Math.round((frameCount * 1000) / (now - prevTime));
        fpsDisplay.textContent = `FPS: ${fps}`;
        prevTime = now;
        frameCount = 0;
        updateChunkLOD();
        //checkCreateChunk();
    }

    renderer.render(scene, player.camera);
    requestAnimationFrame(animate);
}

animate();

checkCreateChunk();
setupLights();

let selectedItemId = null;

window.addEventListener('keydown', (event) => {

    document.querySelectorAll('.item').forEach(el => el.classList.remove('selected'));
    let id = null;
    if (event.key === '&') id = 1;
    if (event.key === 'é') id = 2;
    if (event.key === '"') id = 3;

    if (id) {
        document.getElementById(id).classList.add('selected');
        selectedItemId = id;
    }
});

function updateChunkLOD() {
    chunks.forEach((chunk, key) => {
        const distance = player.position.distanceTo(chunk.position);
        if (distance > 128) {
            chunk.visible = false; // Masquer les chunks éloignés
        } else {
            chunk.visible = true;
        }
    });
}



function checkCreateChunk() {
    world.generate(0, 0, chunks, scene);
    const playerChunkX = Math.floor(player.position.x / 4);
    const playerChunkZ = Math.floor(player.position.z / 16);

    for (let dx = -1; dx <= 1; dx++) {
        for (let dz = -1; dz <= 1; dz++) {
            //world.generate(playerChunkX + dx, playerChunkZ + dz, chunks, grassMaterial, scene);
        }
    }
}

const inventory = [
    { type: 'stone', quantity: 64, icon: 'images/stone.png' },
    { type: 'wood', quantity: 32, icon: 'images/grass.png' },
    { type: 'cobble', quantity: 42, icon: 'images/grass.png' },
    { type: null, quantity: 0, icon: null }, // Slot vide
];

function renderInventory() {
    const inventoryElement = document.getElementById('inventory');
    inventoryElement.innerHTML = ''; // Efface le contenu actuel

    inventory.forEach((item, index) => {
        const slot = document.createElement('div');
        slot.className = 'slot';
        slot.dataset.slot = index;

        // Rendre le slot "draggable"
        slot.draggable = true;
        slot.addEventListener('dragstart', onDragStart);
        slot.addEventListener('dragover', onDragOver);
        slot.addEventListener('drop', onDrop);

        if (item.type) {
            const img = document.createElement('img');
            img.src = `${item.icon}`;
            slot.appendChild(img);

            const quantity = document.createElement('span');
            quantity.innerText = item.quantity;
            quantity.style.position = 'absolute';
            quantity.style.bottom = '5px';
            quantity.style.right = '5px';
            slot.appendChild(quantity);
        }

        inventoryElement.appendChild(slot);
    });
}

let draggedSlotIndex = null;

function onDragStart(event) {
    draggedSlotIndex = event.target.dataset.slot;
    event.dataTransfer.effectAllowed = 'move';
}

function onDragOver(event) {
    event.preventDefault();
    const slot = event.target.closest('.slot');
    if (slot) slot.classList.add('drag-over');
}

function onDrop(event) {
    event.preventDefault();
    const slot = event.target.closest('.slot');
    if (slot) slot.classList.remove('drag-over');

    const targetSlotIndex = event.target.closest('.slot').dataset.slot;

    if (draggedSlotIndex !== null && targetSlotIndex !== null) {
        // Échanger les objets entre les slots
        const temp = inventory[draggedSlotIndex];
        inventory[draggedSlotIndex] = inventory[targetSlotIndex];
        inventory[targetSlotIndex] = temp;

        // Réinitialiser l'index de l'objet en cours de déplacement
        draggedSlotIndex = null;

        // Rafraîchir l'inventaire
        renderInventory();
    }
}

function onDragLeave(event) {
    const slot = event.target.closest('.slot');
    if (slot) slot.classList.remove('drag-over');
}

// Initialiser l'affichage de l'inventaire
renderInventory();

document.getElementById('inventory').addEventListener('click', (e) => {
    const slot = e.target.closest('.slot');
    if (!slot) return;

    const slotIndex = parseInt(slot.dataset.slot, 10);
    const item = inventory[slotIndex];

    if (item && item.type) {
        console.log(`Vous avez cliqué sur ${item.type} (quantité : ${item.quantity})`);
    }
});

