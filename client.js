import * as THREE from "three";

import {mobs} from "./entity/mobs.js";
import {io} from "socket.io-client";
import {PlayerEntity} from "./entity/PlayerEntity.js";

export class Client {

    serverAddress = 'https://baptiste-texier.ddns.net:3000';

    constructor(world, scene, chat) {
        this.players = {}; // Stocker les joueurs affichés

        this.world = world;
        this.scene = scene;
        this.socket = null;
        this.chat = chat;
        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));

        if (process.env.NODE_ENV !== 'production') {
            this.serverAddress = 'http://localhost:3000';
        }
    }

    getSocket() {
        return this.socket;
    }

    init() {


        this.socket = io(this.serverAddress);

        this.socket.on('connect', (data) => {
            this.chat.add('Connected to server', '#FFFF55');
            // Envoyer joueur
            this.socket.emit('join', { username: 'Joueur1', position: { x: 0, y: 71, z: 10 }, direction : { x: 0, y: 0, z: 0 } });
            this.world.generate();
        });

        this.socket.on('connect_error', (err) => {
            this.chat.add('Unable to connect to server');
            this.players = {};
        });

        this.socket.on('player-connect', (Player) => {
            console.log('Joueurs connectés:', Player);
            this.chat.add(Player.id+' joined the game', '#FFFF55');
            this.updatePlayers({[Player.id]: Player});
        });

        this.socket.on('player-disconnect', (id) => {
            console.log('Joueurs déconnecté:', id);
            this.chat.add(id+' left the game');
            this.players[id].removeToScene(this.scene);
            delete(this.players[id]);
        });

        this.socket.on('addBlock', (data) => {
            this.world.addBlock(data.x, data.y, data.z, data.blockId, data.direction);
        });

        this.socket.on('removeBlock', (data) => {
            this.world.removeBlock(data.x, data.y, data.z);
        });

        this.socket.on('setBlockInventory', (data) => {
            this.world.setBlockInventory(data.x, data.y, data.z, data.inventory);
        });

        this.socket.on("furnaceUpdate", ({x,y,z,inventory,state}) => {
            inventory._furnaceState = state;
            this.world.setBlockInventory(x,y,z,inventory);
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
                    const playerEntity = new PlayerEntity(this.world, new THREE.Vector3(10,45,10), allPlayers[id].username);
                    playerEntity.addToScene(this.scene);
                    this.world.addEntity(playerEntity);
                    this.players[id] = playerEntity;
                }

                //console.log(allPlayers);
                // Mise à jour de la position
                this.players[id].updatePosition(allPlayers[id]);


            }

        }
    }


    displayPlayersList() {

        let element = document.getElementById('playerList');
        if (this.socket) {
            let content = '';

            content += '<span>'+this.socket.id+'</span><br>';
            for (const key in this.players) {
                if (this.players.hasOwnProperty(key)) {
                    //console.log(`Clé: ${key}, UUID: ${this.players[key].uuid}, Type: ${this.players[key].type}`);
                    content += '<span>'+key+'</span><br>';
                }
            }

            element.innerHTML = content;
            element.style.display = 'block';
        }

    }

    hidePlayersList() {
        let element = document.getElementById('playerList');
        element.style.display = 'none';
    }

    onKeyDown(event) {
        if (event.code === 'KeyL') this.displayPlayersList();
    }

    onKeyUp(event) {
        if (event.code === 'KeyL') this.hidePlayersList();
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
