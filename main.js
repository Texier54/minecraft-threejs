import * as THREE from 'three';

import { Player } from './player.js';
import { World } from './world.js';
import {blocks, getBlockByIdFast} from "./block.js";
import {Pig} from "./pig.js";
import {Physics} from "./physics.js";
import {Inventory} from "./inventory.js";
import {Menu} from "./menu.js";
import {UI} from "./ui.js";
import { io } from 'socket.io-client';
import { Sun } from '/sun.js';

const socket = io('https://baptiste-texier.ddns.net:3000');

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
const timeDisplay = document.getElementById('time');


const player = new Player(scene, world, socket);
const physics = new Physics(scene);
const inventory = new Inventory(player, world);
const menu = new Menu(world, player, inventory);
const ui = new UI(player, inventory);
const sun = new Sun(scene, player,0.0);

player.setInventory(inventory);
player.setUI(ui);

//DEBUG
if (process.env.NODE_ENV !== 'production') {
    player.load();
    inventory.load();
}

const pig = new Pig();
scene.add(pig);


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

// couleur du ciel
scene.background = new THREE.Color( 0x6EB1FF );

var prevTime = performance.now();
var fps = 0;
var frameCount = 0;
var prevTimeNew = 0;
const clock = new THREE.Clock(); // Gérer le temps pour un mouvement fluide


import Stats from 'three/examples/jsm/libs/stats.module.js';

const stats = new Stats();
document.body.appendChild(stats.dom);

// Animation principale
let lastTime = performance.now();

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
        timeDisplay.textContent = sun.getTime();
    }

    const currentTime = performance.now();
    const deltaTime1 = currentTime - lastTime;
    lastTime = currentTime;
    sun.update(deltaTime1);

    pig.movePig(deltaTime, world); // Déplacer le cochon
    renderer.render(scene, player.camera);
    requestAnimationFrame(animate);


    stats.update(); // Met à jour les statistiques
}
animate();

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);




const players = {}; // Stocker les joueurs affichés
const playersMesh = {};

// Quand un joueur rejoint
socket.emit('join', { username: 'Joueur1', position: { x: 0, y: 71, z: 10 }, direction : { x: 0, y: 0, z: 0 } });

socket.on('player-connect', (allPlayers) => {
    console.log('Joueurs connectés:', allPlayers);
    updatePlayers(allPlayers);
});

socket.on('player-disconnect', (id) => {
    console.log('Joueurs déconnecté:', id);
    scene.remove(playersMesh[id]);
});

socket.on('addBlock', (data) => {
    world.addBlock(data.x, data.y, data.z, data.blockId);
});

socket.on('removeBlock', (data) => {
    world.removeBlock(data.x, data.y, data.z);
});


// Quand un joueur bouge
socket.on('playerState', (allPlayers) => {
    updatePlayers(allPlayers);
});

// Fonction pour mettre à jour les joueurs
function updatePlayers(allPlayers) {
    for (let id in allPlayers) {
        if (id != socket.id) {
            if (!players[id]) {
                // Si le joueur n’existe pas encore, on le crée
                const playerMesh = createPlayerMesh();
                scene.add(playerMesh);
                players[id] = playerMesh;
                playersMesh[id] = playerMesh;
            }

            //console.log(allPlayers);
            // Mise à jour de la position
            players[id].position.set(
                allPlayers[id].position.x,
                allPlayers[id].position.y,
                allPlayers[id].position.z
            );

            // Mettre à jour la direction de la vue, en ignorant l'axe Y
            const playerPos = players[id];
            const targetX = allPlayers[id].position.x + allPlayers[id].direction.x;
            const targetY = allPlayers[id].position.y + allPlayers[id].direction.y;
            const targetZ = allPlayers[id].position.z + allPlayers[id].direction.z;

            // Corriger le décalage de 45° (ajustement de l'angle)
            const direction = new THREE.Vector3(targetX, playerPos.position.y, targetZ);

            // Calculer la direction à partir de la position du joueur pour éviter le décalage
            const angle = Math.atan2(direction.z - playerPos.position.z, direction.x - playerPos.position.x);
            players[id].rotation.y = angle;  // Appliquer la rotation en Y

            // Optionnel : Pour éviter que le joueur tourne dans une direction incorrecte, tu peux aussi forcer un angle spécifique :
            // players[id].rotation.y -= Math.PI / 4; // Si tu veux compenser un décalage de 45°.

            // Utilisation de lookAt pour ajuster le joueur, avec la rotation correcte appliquée
            players[id].lookAt(new THREE.Vector3(targetX, playerPos.position.y, targetZ));
            const head = players[id].getObjectByName("head");
            head.lookAt(new THREE.Vector3(targetX, targetY, targetZ));
        }

    }
}
import {mobs} from "./mobs.js";
// Fonction pour créer un joueur (un simple cube)
function createPlayerMesh() {
    const playerMesh = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

    const legRight = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.72, 0.25), mobs.steve.leg.material);
    legRight.position.set( -0.12, -1.45, 0 );
    playerMesh.add(legRight);
    const legLeft = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.72, 0.25), mobs.steve.leg.material);
    legLeft.position.set( 0.12, -1.45, 0 );
    playerMesh.add(legLeft);


    const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.71, 0.25), mobs.steve.body.material);
    body.position.set( 0, -0.75, 0 );
    playerMesh.add(body);
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), mobs.steve.head.material);
    head.position.set( 0, -0.15, 0 );
    head.name = "head";  // Donne un nom unique
    playerMesh.add(head);
    const armRight = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.71, 0.25), mobs.steve.arm.material);
    armRight.position.set( -0.38, -0.75, 0 );
    playerMesh.add(armRight);
    const armLeft = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.71, 0.25), mobs.steve.arm.material);
    armLeft.position.set( 0.38, -0.75, 0 );
    playerMesh.add(armLeft);

    return playerMesh;

}


/*
// Envoie la position au serveur
    socket.emit('move', { x: player.position.x, y: player.position.y, z: player.position.z });

    const chunks = {}; // Stocke l’état des chunks

io.on('connection', (socket) => {
    socket.emit('load-world', chunks); // Envoie le monde au nouveau joueur

    socket.on('update-chunk', ({ position, data }) => {
        chunks[position] = data;
        socket.broadcast.emit('update-chunk', { position, data });
    });
});


socket.on('load-world', (serverChunks) => {
    Object.keys(serverChunks).forEach((pos) => {
        loadChunk(pos, serverChunks[pos]); // Charge les chunks du serveur
    });
});

socket.on('update-chunk', ({ position, data }) => {
    loadChunk(position, data); // Met à jour un chunk modifié
});

// Envoi d’une modification de chunk
function modifyBlock(chunkPos, blockPos, newBlock) {
    world[chunkPos][blockPos.x][blockPos.y][blockPos.z] = newBlock;
    socket.emit('update-chunk', { position: chunkPos, data: world[chunkPos] });
}

 */