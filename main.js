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

player.setInventory(inventory);
player.setUI(ui);

//DEBUG
player.load();
inventory.load();


const pig = new Pig();
scene.add(pig);


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

