import express from 'express';
import cors from 'cors';  // ✅ Import CORS
import { createServer } from 'http';
import { Server } from 'socket.io';
import { ServerWorld } from '../world/ServerWorld.js';
import https from 'https';
import { Store } from './store.js';
import fs from 'fs';
import pako from 'pako';

const store = new Store();
const app = express();
app.use(cors({ origin: '*' }));  // ✅ Autorise toutes les origines

// Lis les fichiers de certificat SSL (assurez-vous que les fichiers existent)
// Lis les fichiers de certificat SSL

// Lis les fichiers du certificat SSL
const options = {
    cert: fs.readFileSync('/etc/letsencrypt/live/baptiste-texier.ddns.net/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/baptiste-texier.ddns.net/privkey.pem'),
};

// Crée un serveur HTTPS
const server = https.createServer(options, app);

//Crée serveur HTTP
//const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",  // ✅ Autorise le client
        methods: ["GET", "POST"]
    }
});

log(`Server start`);

const players = {};

io.on('connection', (socket) => {
    log(`Joueur connecté : ${socket.id}`);

    socket.on('join', (playerData) => {
        playerData.id = socket.id;
        players[socket.id] = playerData;
        io.emit('player-connect', playerData);
    });

    // Recevoir la position et la direction du joueur
    socket.on("playerState", (data) => {
        if (players[socket.id]) {
            players[socket.id] = data;
            // Diffuser l’état du joueur à tous les autres
            io.emit("playerState", {[socket.id]: players[socket.id]} );
        }
    });

    socket.on("addBlock", async (data) => {
        // Diffuser l’état du joueur à tous les autres
        log('Add block' + data);
        io.emit("addBlock", data);
        console.log(await world.getBlock(data.x, data.y, data.z));
        await world.addBlock(data.x, data.y, data.z, data);
        console.log(await world.getBlock(data.x, data.y, data.z)+data.x, data.y, data.z);
    });

    socket.on("removeBlock", async (data) => {
        // Diffuser l’état du joueur à tous les autres
        log('Remove block' + data);
        await world.removeBlock(data.x, data.y, data.z);
        io.emit("removeBlock", data);
    });

    // Écoute la requête du client
    socket.on("getChunkData", async (data, callback) => {
        console.log("Requête reçue:", data);

        const { x, z } = data;

        const chunk = await world.getChunk(x, z);

        const chunkData = {data : chunk.data, biomes : chunk.biomes};

        const json = JSON.stringify(chunkData);
        const compressed = pako.deflate(json);

        // Envoie la réponse au client via le callback
        if (typeof callback === 'function') {
            callback(compressed);
        } else {
            console.warn('⚠️ Aucun callback fourni par le client pour getChunkData');
        }
    });

    socket.on("setBlockInventory", async (data) => {
        // Diffuser l’état du joueur à tous les autres
        log('setBlockInventory' + data);
        await world.setBlockInventory(data.x, data.y, data.z, data.inventory);
        io.emit("setBlockInventory", data);
    });


    socket.on('disconnect', () => {
        log(`Joueur déconnecté : ${socket.id}`);
        delete players[socket.id];
        io.emit('player-disconnect', socket.id);
    });
});


async function shutdownHandler(signal) {
    await log(`Server shutdown (${signal})`);
    // 👉 Ajoutez ici les actions à effectuer avant l'arrêt (sauvegarde, logs, etc.)
    setTimeout(() => process.exit(0), 200); // délai de 200ms
}

process.on('SIGINT', async () => shutdownHandler('SIGINT').catch(console.error));   // Ctrl+C
process.on('SIGTERM', async () => shutdownHandler('SIGTERM').catch(console.error)); // Arrêt système

async function log(message) {
    await store.log(`[${new Date().toLocaleString()}] `+message);
    console.log(`[${new Date().toLocaleString()}] `+message);
    return true;
}

const world = new ServerWorld();
world.generate();



// Configure une route pour vérifier que le serveur fonctionne
app.get('/d', (req, res) => {
    res.send('Serveur Node.js avec HTTPS');
});

server.listen(3000, () => console.log('Serveur WebSocket démarré sur http://localhost:3000'));