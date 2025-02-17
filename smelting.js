import { blocks } from './block.js';
import {RecipesList} from "./recipes.js";


export const SmeltingList = {
    planks: {
        pattern: [
            [blocks.log.id, null, null],
            [null, null, null],
            [null, null, null],
        ],
        output: {
            id: blocks.planks.id,
            quantity: 4,
        },
    },
    wooden_shovel: {
        pattern: [
            [null, blocks.planks.id, null],
            [null, blocks.stick.id, null],
            [null, blocks.stick.id, null],
        ],
        output: {
            id: blocks.wooden_shovel.id,
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

    checkSmelting(grid) {
        console.log(grid);
        for (const [index, recipe] of Object.entries(SmeltingList)) {
            let match = true;
            for (let x = 0; x < grid.length; x++) {
                for (let y = 0; y < grid[0].length; y++) {

                    if (grid[x][y] !== recipe.pattern[x][y]) {
                        match = false;
                        break;
                    }
                }
            }
            if (match) {
                return recipe.output;
            }
        };
        return null; // Pas de correspondance
    }

}