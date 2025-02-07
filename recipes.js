import { blocks } from './block.js';
import * as THREE from "three";


export const RecipesList = {
    planks: {
        pattern: [
            [blocks.log.id, null, null],
            [null, null, null],
            [null, null, null],
        ],
        output: blocks.planks.id,
    },
    pickaxe: {
        pattern: [
            [blocks.stone.id, blocks.stone.id, blocks.stone.id],
            [null, blocks.stick.id, null],
            [null, blocks.stick.id, null],
        ],
        output: blocks.stone_pickaxe.id,
    },
    chest: {
        pattern: [
            [blocks.planks.id, blocks.planks.id, blocks.planks.id],
            [blocks.planks.id, null, blocks.planks.id],
            [blocks.planks.id, blocks.planks.id, blocks.planks.id],
        ],
        output: blocks.chest.id,
    },
    stick: {
        pattern: [
            [blocks.planks.id, null, null],
            [blocks.planks.id, null, null],
            [null, null, null],
        ],
        output: blocks.stick.id,
    }
}

export class Recipes {

    check(resources) {
        let gain = null;
        Object.values(RecipesList).forEach((item, index) => {
            //console.log(item.needed == resources?.block);
            if (item.needed == resources?.block)
                gain = item.gain;
        });
        return gain;
    }

    checkRecipe(grid) {
        console.log(grid);
        for (const [index, recipe] of Object.entries(RecipesList)) {
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
