import * as THREE from 'three';

import { Player } from './player.js';
import { ClientWorld } from './world/ClientWorld.js';
import {blocks, getBlockByIdFast} from "./block.js";
import {Pig} from "./entity/pig.js";
import {Physics} from "./physics.js";
import {Inventory} from "./inventory.js";
import {Menu} from "./menu.js";
import {UI} from "./ui.js";
import { Sun } from '/sun.js';
import { Client } from '/client.js';
import { Chat } from '/chat.js';
import { BoatEntity } from '/entity/BoatEntity.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';


const scene = new THREE.Scene();

const world = new ClientWorld();
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
const timeDisplay = document.getElementById('time');

const chat = new Chat();
const client = new Client(world, scene, chat);
world.setClient(client);
//client.init();
const player = new Player(scene, world, client);
const physics = new Physics(scene);
const inventory = new Inventory(player, world, client);
const menu = new Menu(world, player, inventory, client, chat);
const ui = new UI(player, inventory);
const sun = new Sun(scene, player,0.20);

const boat = new BoatEntity(world, new THREE.Vector3(10,50,10));
boat.addToScene(scene);
world.addEntity(boat);

const pig = new Pig(world, new THREE.Vector3(10,45,10));
pig.addToScene(scene);
world.addEntity(pig);

player.setInventory(inventory);
player.setUI(ui);

//DEBUG
if (process.env.NODE_ENV !== 'production') {
    //player.load();
    inventory.load();
}

window.addEventListener('keydown', (event) => {
    if (event.code === 'KeyE') {
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

window.addEventListener('keydown', (event) => {
    if (event.code === 'KeyF') {
        world.entities.forEach(entity => {
            const dist = player.position.distanceTo(entity.position);
            if (dist < 5 && !player.riding) {
                player.riding = entity;
                entity.driver = player; // sera conditionnel dans la logique réelle
            } else if (player.riding) {
                player.riding = null;
            }
        });
    }
});

// couleur du ciel
scene.background = new THREE.Color( 0x6EB1FF );

var prevTime = performance.now();
var fps = 0;
var frameCount = 0;
var prevTimeNew = 0;
const clock = new THREE.Clock(); // Gérer le temps pour un mouvement fluide




const stats = new Stats();
document.body.appendChild(stats.dom);

// Animation principale
let lastTime = performance.now();

// Fonction d'animation
function animate() {

    const now = performance.now();

    const deltaTime = clock.getDelta(); // Temps écoulé depuis la dernière frame

    let dt = (now - prevTimeNew)/1000;

    physics.update(dt, player, world);
    world.update(player);
    player.update(world);
    prevTimeNew = now;
    world.updateEntities(dt);
    //pig.movePig(deltaTime); // Déplacer le cochon

    frameCount++;
    // Met à jour l'affichage FPS toutes les secondes
    if (now - prevTime > 1000) {
        fps = Math.round((frameCount * 1000) / (now - prevTime));
        fpsDisplay.textContent = `FPS: ${fps}`;
        prevTime = now;
        frameCount = 0;
        timeDisplay.textContent = sun.getTime();
    }

    const currentTime = performance.now();
    const deltaTime1 = currentTime - lastTime;
    lastTime = currentTime;
    sun.update(deltaTime1);

    renderer.render(scene, player.camera);
    requestAnimationFrame(animate);


    stats.update(); // Met à jour les statistiques
}
animate();

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);

    player.camera.aspect = width / height;
    player.camera.updateProjectionMatrix();

});