import { RecipesList } from './recipes.js';
import { SmeltingList } from './smelting.js';
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

    document.getElementById('listingCraft').append(craft);

}

for (const [index, recipe] of Object.entries(SmeltingList)) {

    let smelt = document.createElement('div');
    smelt.classList.add('craft');

    let slotInput = document.createElement('div');
    slotInput.classList.add('slot')
    let imgInput = document.createElement('img');
    const blockInput = getBlockByIdFast(recipe.input);
    imgInput.src = blockInput.icon;
    imgInput.width = 43;
    slotInput.append(imgInput);
    smelt.append(slotInput);


    let arrow = document.createElement('div');
    arrow.classList.add('arrow');
    let shaft = document.createElement('div');
    shaft.classList.add('shaft');
    let head = document.createElement('div');
    head.classList.add('head');
    arrow.append(shaft);
    arrow.append(head);
    smelt.append(arrow);

    let slotOuput = document.createElement('div');
    slotOuput.classList.add('slot')
    let imgOuput = document.createElement('img');
    const blockOutput = getBlockByIdFast(recipe.output.id);
    imgOuput.src = blockOutput.icon;
    imgOuput.width = 43;
    slotOuput.append(imgOuput);
    smelt.append(slotOuput);


    document.getElementById('listingSmelt').append(smelt);
}

function startFurnaceProgress(duration) {
    const progress = document.querySelector(".progress");
    progress.style.width = "0%"; // Réinitialise à zéro

    setTimeout(() => {
        progress.style.width = "100%";
    }, 10); // Petit délai pour déclencher l'animation
}

// Exemple : Lancer la cuisson (remplissage en 3 secondes)
//startFurnaceProgress(3000);