import {RNG} from "../../rng.js";
import { initializeTerrain, initializeBiomes, generateTerrain, setBlockId, getBlock, inBounds, generateTree, generateTreeCanopy, generateResources, getBiome, lerp, generateCaves } from './sharedTerrainUtils.js';


self.onmessage = function (event) {
    const { chunkData, chunkSize, chunkHeight, params, position } = event.data;

    const rng = new RNG(params.seed);
    // Simule la génération d'un chunk (remplacez par votre logique réelle)
    const data = initializeTerrain(chunkSize, chunkHeight);
    const biomes = initializeBiomes(chunkSize);
    const generatedTerrain = generateTerrain(chunkSize, chunkHeight, params, rng, position, data, biomes);

    // Envoyer les données générées au thread principal
    self.postMessage({ data: generatedTerrain.data, biomes: generatedTerrain.biomes });
};