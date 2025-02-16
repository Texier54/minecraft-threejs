import { RecipesList } from './recipes.js';
import {element} from "three/tsl";
import { getBlockByIdFast } from './block.js';

for (const [index, recipe] of Object.entries(RecipesList)) {

    let craft = document.createElement('div');
    craft.classList.add('craft');
    let title = document.createElement('h2');
    title.classList.add('title');
    title.innerHTML = index;
    craft.append(title);

    let grid = document.createElement('div');
    grid.classList.add('grid');
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {

            let slot = document.createElement('div');
            slot.classList.add('slot')
            const blockId = recipe.pattern[x][y];
            if (blockId) {
                let img = document.createElement('img');
                const block = getBlockByIdFast(blockId);
                img.src = block.icon;
                img.width = 43;
                slot.append(img);
            }
            grid.append(slot);
        }
    }

    craft.append(grid);

    let slot = document.createElement('div');
    let quantity = document.createElement('div');
    slot.classList.add('slot')
    let img = document.createElement('img');
    const block = getBlockByIdFast(recipe.output.id);
    img.src = block.icon;
    img.width = 43;
    quantity.innerHTML = recipe.output.quantity;
    quantity.classList.add('slot-quantity');
    slot.append(img);
    slot.append(quantity);
    craft.append(slot);

    document.getElementById('listing').append(craft);

}