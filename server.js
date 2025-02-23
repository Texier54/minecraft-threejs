import express from 'express';
import cors from 'cors';  // ✅ Import CORS
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
app.use(cors({ origin: '*' }));  // ✅ Autorise toutes les origines
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",  // ✅ Autorise le client
        methods: ["GET", "POST"]
    }
});

const players = {};

io.on('connection', (socket) => {
    console.log(`Joueur connecté : ${socket.id}`);

    socket.on('join', (playerData) => {
        players[socket.id] = playerData;
        io.emit('player-update', players);
    });

    // Recevoir la position et la direction du joueur
    socket.on("playerState", (data) => {
        if (players[socket.id]) {
            players[socket.id] = data;
        }

        // Diffuser l’état du joueur à tous les autres
        io.emit("playerState", players);
    });


    socket.on('disconnect', () => {
        console.log(`Joueur déconnecté : ${socket.id}`);
        delete players[socket.id];
        io.emit('player-update', players);
    });
});

server.listen(3000, () => console.log('Serveur WebSocket démarré sur http://localhost:3000'));