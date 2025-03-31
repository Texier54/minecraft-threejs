import express from 'express';
import cors from 'cors';  // ✅ Import CORS
import { createServer } from 'http';
import { Server } from 'socket.io';
import https from 'https';
import fs from 'fs';

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


//const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",  // ✅ Autorise le client
        methods: ["GET", "POST"]
    }
});

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

    socket.on("addBlock", (data) => {
        // Diffuser l’état du joueur à tous les autres
        log('Add block' + data);
        io.emit("addBlock", data);
    });

    socket.on("removeBlock", (data) => {
        // Diffuser l’état du joueur à tous les autres
        log('Remove block' + data);
        io.emit("removeBlock", data);
    });

    // Écoute la requête du client
    socket.on("demandeInfo", (data, callback) => {
        console.log("Requête reçue:", data);

        // Simule une réponse (exemple : envoyer un timestamp)
        const reponse = { message: "Réponse du serveur", timestamp: Date.now() };

        // Envoie la réponse au client via le callback
        callback(reponse);
    });

    socket.on('disconnect', () => {
        log(`Joueur déconnecté : ${socket.id}`);
        delete players[socket.id];
        io.emit('player-disconnect', socket.id);
    });
});

function log(message) {
    console.log(`[${new Date().toLocaleString()}] `+message);
}


// Configure une route pour vérifier que le serveur fonctionne
app.get('/d', (req, res) => {
    res.send('Serveur Node.js avec HTTPS');
});

server.listen(3000, () => console.log('Serveur WebSocket démarré sur http://localhost:3000'));