import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js';
import {RNG} from "../../rng.js";
import { initializeTerrain, initializeBiomes, generateTerrain, setBlockId, getBlock, inBounds, generateTree, generateTreeCanopy, generateResources, getBiome, lerp, generateCaves } from './sharedTerrainUtils.js';

const isNode = typeof process !== 'undefined' && process.versions?.node;

let postMessageUniversal;
let onMessageUniversal;

if (isNode) {
    // Pour Node.js
    const { parentPort } = await import('node:worker_threads');
    postMessageUniversal = (data) => parentPort.postMessage(data);
    onMessageUniversal = (callback) => parentPort.on('message', callback);
} else {
    // Pour navigateur
    postMessageUniversal = (data) => self.postMessage(data);
    onMessageUniversal = (callback) => self.onmessage = (e) => callback(e.data);
}

onMessageUniversal((event) => {
    const dataR = event?.data ?? event; // navigateur : event.data ; node : event
    const { chunkData, chunkSize, chunkHeight, params, position } = dataR;

    const rng = new RNG(params.seed);

    const data = initializeTerrain(chunkSize, chunkHeight);
    const biomes = initializeBiomes(chunkSize);
    const generatedTerrain = generateTerrain(chunkSize, chunkHeight, params, rng, position, data, biomes);

    postMessageUniversal({ data: generatedTerrain.data, biomes: generatedTerrain.biomes });
});

