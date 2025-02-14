import { RecipesList } from './recipes.js';
import {element} from "three/tsl";
import { getBlockByIdFast } from './block.js';

for (const [index, recipe] of Object.entries(RecipesList)) {

    let craft = document.createElement('div');
    craft.classList.add('craft');
    let grid = document.createElement('div');
    grid.classList.add('grid');
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {

            let blockDiv = document.createElement('div');
            blockDiv.classList.add('block')
            const blockId = recipe.pattern[x][y];
            if (blockId) {
                let img = document.createElement('img');
                const block = getBlockByIdFast(blockId);
                img.src = block.icon;
                img.width = 50;
                blockDiv.append(img);
            }
            grid.append(blockDiv);




        }
    }

    craft.append(grid);

    let blockDiv = document.createElement('div');
    blockDiv.classList.add('block')
    let img = document.createElement('img');
    const block = getBlockByIdFast(recipe.output);
    img.src = block.icon;
    img.width = 50;
    blockDiv.append(img);

    craft.append(blockDiv);

    document.getElementById('listing').append(craft);

}