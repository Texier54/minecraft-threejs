import { blocks } from './block.js';
import {RecipesList} from "./recipes.js";


export const SmeltingList = {
    iron_ingot: {
        input: blocks.ironOre.id,
        output: {
            id: blocks.iron_ingot.id,
            quantity: 1,
        },
    },
    glass: {
        input: blocks.sand.id,
        output: {
            id: blocks.glass.id,
            quantity: 1,
        },
    },
}

export class Smelting {

    check(resources) {
        let gain = null;
        Object.values(RecipesList).forEach((item, index) => {
            //console.log(item.needed == resources?.block);
            if (item.needed == resources?.block)
                gain = item.gain;
        });
        return gain;
    }

    checkSmelting(input) {
        for (const [index, recipe] of Object.entries(SmeltingList)) {
            let match = true;
            if (input[0]?.block == recipe.input) {
                return recipe.output;
            }
        };
        return null; // Pas de correspondance
    }

}