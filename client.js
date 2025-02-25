import * as THREE from "three";

import {mobs} from "./mobs.js";
import {io} from "socket.io-client";

export class Client {


    constructor(world, scene) {
        this.players = {}; // Stocker les joueurs affichés
        this.playersMesh = {};

        this.world = world;
        this.scene = scene;
        this.socket = null;
    }

    getSocket() {
        return this.socket;
    }

    init() {


        this.socket = io('https://baptiste-texier.ddns.net:3000');
        // Quand un joueur rejoint
        this.socket.emit('join', { username: 'Joueur1', position: { x: 0, y: 71, z: 10 }, direction : { x: 0, y: 0, z: 0 } });

        this.socket.on('player-connect', (allPlayers) => {
            console.log('Joueurs connectés:', allPlayers);
            this.updatePlayers(allPlayers);
        });

        this.socket.on('player-disconnect', (id) => {
            console.log('Joueurs déconnecté:', id);
            this.scene.remove(playersMesh[id]);
        });

        this.socket.on('addBlock', (data) => {
            this.world.addBlock(data.x, data.y, data.z, data.blockId);
        });

        this.socket.on('removeBlock', (data) => {
            this.world.removeBlock(data.x, data.y, data.z);
        });


        // Quand un joueur bouge
        this.socket.on('playerState', (allPlayers) => {
            this.updatePlayers(allPlayers);
        });
    }



// Fonction pour mettre à jour les joueurs
    updatePlayers(allPlayers) {
        for (let id in allPlayers) {
            if (id != this.socket.id) {
                if (!this.players[id]) {
                    // Si le joueur n’existe pas encore, on le crée
                    const playerMesh = createPlayerMesh();
                    this.scene.add(playerMesh);
                    this.players[id] = playerMesh;
                    this.playersMesh[id] = playerMesh;
                }

                //console.log(allPlayers);
                // Mise à jour de la position
                this.players[id].position.set(
                    allPlayers[id].position.x,
                    allPlayers[id].position.y,
                    allPlayers[id].position.z
                );

                // Mettre à jour la direction de la vue, en ignorant l'axe Y
                const playerPos = this.players[id];
                const targetX = allPlayers[id].position.x + allPlayers[id].direction.x;
                const targetY = allPlayers[id].position.y + allPlayers[id].direction.y;
                const targetZ = allPlayers[id].position.z + allPlayers[id].direction.z;

                // Corriger le décalage de 45° (ajustement de l'angle)
                const direction = new THREE.Vector3(targetX, playerPos.position.y, targetZ);

                // Calculer la direction à partir de la position du joueur pour éviter le décalage
                const angle = Math.atan2(direction.z - playerPos.position.z, direction.x - playerPos.position.x);
                this.players[id].rotation.y = angle;  // Appliquer la rotation en Y

                // Optionnel : Pour éviter que le joueur tourne dans une direction incorrecte, tu peux aussi forcer un angle spécifique :
                // players[id].rotation.y -= Math.PI / 4; // Si tu veux compenser un décalage de 45°.

                // Utilisation de lookAt pour ajuster le joueur, avec la rotation correcte appliquée
                this.players[id].lookAt(new THREE.Vector3(targetX, playerPos.position.y, targetZ));
                const head = players[id].getObjectByName("head");
                head.lookAt(new THREE.Vector3(targetX, targetY, targetZ));
            }

        }
    }

    // Fonction pour créer un joueur (un simple cube)
    createPlayerMesh() {
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
