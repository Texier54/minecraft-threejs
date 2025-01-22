import { blocks } from './block.js';
import * as THREE from "three";


export const Recipes = {
    planks: {
        needed: 17,
        gain: blocks.planks.id,
    },
}

export class Crafts {

    checkRecipe(resources) {
        let gain = null;
        Object.values(Recipes).forEach((item, index) => {
            console.log(item.needed == resources?.block);
            if (item.needed == resources?.block)
                gain = item.gain;
        });
        return gain;
    }

}
