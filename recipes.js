import { blocks } from './block.js';
import * as THREE from "three";


export const RecipesList = {
    crafting_table: {
        pattern: [
            [blocks.planks.id, blocks.planks.id, null],
            [blocks.planks.id, blocks.planks.id, null],
            [null, null, null],
        ],
        output: {
            id: blocks.craftingTable.id,
            quantity: 1,
        },
    },
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
    wooden_pickaxe: {
        pattern: [
            [blocks.planks.id, blocks.planks.id, blocks.planks.id],
            [null, blocks.stick.id, null],
            [null, blocks.stick.id, null],
        ],
        output: {
            id: blocks.wooden_pickaxe.id,
            quantity: 1,
        },
    },
    stone_pickaxe: {
        pattern: [
            [blocks.cobblestone.id, blocks.cobblestone.id, blocks.cobblestone.id],
            [null, blocks.stick.id, null],
            [null, blocks.stick.id, null],
        ],
        output: {
            id: blocks.stone_pickaxe.id,
            quantity: 1,
        },
    },
    stone_shovel: {
        pattern: [
            [null, blocks.cobblestone.id, null],
            [null, blocks.stick.id, null],
            [null, blocks.stick.id, null],
        ],
        output: {
            id: blocks.stone_shovel.id,
            quantity: 1,
        },
    },
    stone_axe: {
        pattern: [
            [blocks.cobblestone.id, blocks.cobblestone.id, null],
            [blocks.cobblestone.id, blocks.stick.id, null],
            [null, blocks.stick.id, null],
        ],
        output: {
            id: blocks.stone_axe.id,
            quantity: 1,
        },
    },
    iron_pickaxe: {
        pattern: [
            [blocks.iron_ingot.id, blocks.iron_ingot.id, blocks.iron_ingot.id],
            [null, blocks.stick.id, null],
            [null, blocks.stick.id, null],
        ],
        output: {
            id: blocks.iron_pickaxe.id,
            quantity: 1,
        },
    },
    diamond_pickaxe: {
        pattern: [
            [blocks.diamond.id, blocks.diamond.id, blocks.diamond.id],
            [null, blocks.stick.id, null],
            [null, blocks.stick.id, null],
        ],
        output: {
            id: blocks.diamond_pickaxe.id,
            quantity: 1,
        },
    },
    diamond_axe: {
        pattern: [
            [blocks.diamond.id, blocks.diamond.id, null],
            [blocks.diamond.id, blocks.stick.id, null],
            [null, blocks.stick.id, null],
        ],
        output: {
            id: blocks.diamond_axe.id,
            quantity: 1,
        },
    },
    chest: {
        pattern: [
            [blocks.planks.id, blocks.planks.id, blocks.planks.id],
            [blocks.planks.id, null, blocks.planks.id],
            [blocks.planks.id, blocks.planks.id, blocks.planks.id],
        ],
        output: {
            id: blocks.chest.id,
            quantity: 1,
        },
    },
    furnace: {
        pattern: [
            [blocks.cobblestone.id, blocks.cobblestone.id, blocks.cobblestone.id],
            [blocks.cobblestone.id, null, blocks.cobblestone.id],
            [blocks.cobblestone.id, blocks.cobblestone.id, blocks.cobblestone.id],
        ],
        output: {
            id: blocks.furnace.id,
            quantity: 1,
        },
    },
    stick: {
        pattern: [
            [blocks.planks.id, null, null],
            [blocks.planks.id, null, null],
            [null, null, null],
        ],
        output: {
            id: blocks.stick.id,
            quantity: 4,
        },
    },
    torch: {
        pattern: [
            [blocks.coal.id, null, null],
            [blocks.stick.id, null, null],
            [null, null, null],
        ],
        output: {
            id: blocks.torch.id,
            quantity: 4,
        },
    },
    oak_stairs: {
        pattern: [
            [blocks.planks.id, null, null],
            [blocks.planks.id, blocks.planks.id, null],
            [blocks.planks.id, blocks.planks.id, blocks.planks.id],
        ],
        output: {
            id: blocks.oak_stairs.id,
            quantity: 6,
        },
    },
    cobblestone_stairs: {
        pattern: [
            [blocks.cobblestone.id, null, null],
            [blocks.cobblestone.id, blocks.cobblestone.id, null],
            [blocks.cobblestone.id, blocks.cobblestone.id, blocks.cobblestone.id],
        ],
        output: {
            id: blocks.cobblestone_stairs.id,
            quantity: 6,
        },
    },
    oak_boat: {
        pattern: [
            [null, null, null],
            [blocks.planks.id, null, blocks.planks.id],
            [blocks.planks.id, blocks.planks.id, blocks.planks.id],
        ],
        output: {
            id: blocks.oak_boat.id,
            quantity: 1,
        },
    },
    oak_door: {
        pattern: [
            [blocks.planks.id, blocks.planks.id, null],
            [blocks.planks.id, blocks.planks.id, null],
            [blocks.planks.id, blocks.planks.id, null],
        ],
        output: {
            id: blocks.oak_door.id,
            quantity: 1,
        },
    },
    oak_fence: {
        pattern: [
            [null, null, null],
            [blocks.planks.id, blocks.stick.id, blocks.planks.id],
            [blocks.planks.id, blocks.stick.id, blocks.planks.id],
        ],
        output: {
            id: blocks.oak_fence.id,
            quantity: 3,
        },
    },
    sandstone: {
        pattern: [
            [blocks.sand.id, blocks.sand.id, null],
            [blocks.sand.id, blocks.sand.id, null],
            [null, null, null],
        ],
        output: {
            id: blocks.sandstone.id,
            quantity: 1,
        },
    },
    bucket: {
        pattern: [
            [blocks.iron_ingot.id, null, blocks.iron_ingot.id],
            [null, blocks.iron_ingot.id, null],
            [null, null, null],
        ],
        output: {
            id: blocks.bucket.id,
            quantity: 1,
        },
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
