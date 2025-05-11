import { BaseChunk } from './BaseChunk.js';
import { RNG } from '../../rng.js';
import { Worker } from 'node:worker_threads';

export class ServerChunk extends BaseChunk {
    constructor(size, params, dataStore) {
        super(size, params, dataStore);
        this.rng = new RNG(this.params.seed);
        this.error = '';
    }

    async generate() {
        return new Promise((resolve, reject) => {
            // Créer un Worker pour déporter la génération
            const worker = new Worker(new URL('../worker/chunkWorkerServer.js', import.meta.url), { type: 'module' });

            // Gestion du retour de données depuis le Worker
            worker.on('message', ({ data, biomes }) => {
                this.biomes = biomes;
                this.data = data;
                this.dataStore.set(this.position.x, this.position.z, this.data);
                worker.terminate();
                resolve(); // ✅ résout la promesse ici
            });

            worker.on('error', (e) => {
                console.log(e);
                this.error = e;
                worker.terminate();
                reject(e); //Promise échoue proprement
            });


            worker.on('messageerror', (e) => {
                this.error = e;
                console.log('Message error in Worker:', e);
                worker.terminate();
                reject(e); //Promise échoue proprement
            });


            // Envoyer les données nécessaires au Worker

            worker.postMessage({
                chunkSize: this.chunkSize,
                chunkHeight: this.height,
                params: this.params,
                position: this.position,
                seed: this.params.seed // si RNG doit être recréé côté worker
            });
        });
    }
}