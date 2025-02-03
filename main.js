import * as THREE from 'three';



import { Player } from './player.js';
import { World } from './world.js';
import {blocks, getBlockByIdFast} from "./block.js";
import {Pig} from "./pig.js";
import {Physics} from "./physics.js";
import {Inventory} from "./inventory.js";
import {Menu} from "./menu.js";
import {UI} from "./ui.js";


const scene = new THREE.Scene();


const world = new World();
world.generate();
//world.load();
scene.add(world)

scene.fog = new THREE.Fog(0x80a0e0, world.chunkSize.width*world.drawDistance*0.9, world.chunkSize.width*world.drawDistance);

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
const inventory = new Inventory(player);
const menu = new Menu(world, player, inventory);
const ui = new UI(player, inventory);

//DEBUG
player.load();
//inventory.load();


const pig = new Pig();
scene.add(pig);




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
    if (event.key === 'e') {
        if (player.controls.isLocked) {
            player.controls.unlock();
            inventory.show();
        }
        else {
            player.controls.lock();
            inventory.hide();
        }

    }
});

// Fonction de gestion du mouvement du joueur
let velocity = new THREE.Vector3(0, 0, 0);
const groundCheckDistance = 0.1;
let isOnGround = false;


window.addEventListener('mousedown', (event) => {

    if (player.controls.isLocked) {
        player.animateHand();

        if (player.selectedCoords) {
            // si clic droit
            if (event.button == 2) {
                addBlock(player.selectedCoords, player.selectedCoordsNormal);

            } else {
                deleteBlock(player.selectedCoords);
            }
        }

    }

});

// Écouteur de touche relâchée
document.addEventListener("mouseup", (event) => {
    if (event.button != 2) {
        isDestroying = false;
        clearInterval(destructionInterval);
    }
});

function addBlock(selectedCoords, selectedCoordsNormal) {


    const selectedBlock = world.getBlock(selectedCoords.x, selectedCoords.y, selectedCoords.z);

    //prend les coordonée de la face pointé


    /*
    // Ajouter une lumière ponctuelle pour simuler l'émission
    const pointLight = new THREE.PointLight(0xfff933, 4, 10); // Couleur, intensité, distance
    pointLight.position.set(selectedCoords.x, selectedCoords.y, selectedCoords.z); // Positionner la lumière au centre du cube
    scene.add(pointLight);

     */

    if (inventory.getSelectedItem()?.block !== undefined && getBlockByIdFast(selectedBlock.id).interface !== true && getBlockByIdFast(inventory.getSelectedItem()?.block).type === 'block') {
        world.addBlock(selectedCoordsNormal.x, selectedCoordsNormal.y, selectedCoordsNormal.z, inventory.getSelectedItem().block);
        inventory.removeBlock(inventory.getSelectedItem().block);
        var audio = new Audio('audio/dirt1.ogg');
        audio.play();

    } else if (getBlockByIdFast(selectedBlock.id).interface === true) {
        ui.open(selectedBlock.id);
    }
}

let isDestroying = false;
let destructionProgress = 0;
const destructionTime = 800; // Temps nécessaire (2 secondes) pour casser le bloc
let destructionInterval = null;

function deleteBlock(selectedCoords) {
    player.animateBlockBreaking(800);



    isDestroying = true;
    destructionProgress = 0;
    destructionInterval = setInterval(() => {
        destructionProgress += 100; // Augmente la progression toutes les 100ms

        // Si le temps de destruction est atteint, supprimer le bloc
        if (destructionProgress >= destructionTime) {
            const blockToRemove = world.getBlock(selectedCoords.x, selectedCoords.y, selectedCoords.z);
            inventory.addBlock(blockToRemove);
            world.removeBlock(selectedCoords.x, selectedCoords.y, selectedCoords.z);
            clearInterval(destructionInterval);
            var audio = new Audio('audio/dirt1.ogg');
            audio.play();
            isDestroying = false;
            clearInterval(destructionInterval);
        }
    }, 100);
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





// couleur du ciel
scene.background = new THREE.Color( 0x6EB1FF );

var prevTime = performance.now();
var fps = 0;
var frameCount = 0;
var prevTimeNew = 0;
const clock = new THREE.Clock(); // Gérer le temps pour un mouvement fluide

// Fonction d'animation
function animate() {

    const now = performance.now();

    const deltaTime = clock.getDelta(); // Temps écoulé depuis la dernière frame
        //checkGroundCollision();
        //checkHorizontalCollisions();

    let dt = (now - prevTimeNew)/1000;

    physics.update(dt, player, world);
    world.update(player);
    player.update(world);
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


    pig.movePig(deltaTime, world); // Déplacer le cochon
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
    if (event.key === '&') id = 27;
    if (event.key === 'é') id = 28;
    if (event.key === '"') id = 29;
    if (event.key === "'") id = 30;
    if (event.key === '(') id = 31;
    if (event.key === '§') id = 32;
    if (event.key === 'è') id = 33;
    if (event.key === '!') id = 34;
    if (event.key === 'ç') id = 35;

    if (id)
        inventory.selectItem(id);

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
    //world.generate(0, 0, chunks, scene);
    const playerChunkX = Math.floor(player.position.x / 4);
    const playerChunkZ = Math.floor(player.position.z / 16);

    for (let dx = -1; dx <= 1; dx++) {
        for (let dz = -1; dz <= 1; dz++) {
            //world.generate(playerChunkX + dx, playerChunkZ + dz, chunks, grassMaterial, scene);
        }
    }
}

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

