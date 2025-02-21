import {Smelting} from "./smelting.js";
import {blocks} from "./block.js"

export class Furnace {

    fuelList = [blocks.coal.id];

    output = 2;
    fuel = 1;
    input = 0;

    constructor() {
        this.smelting = new Smelting();
    }

    handle(inventory) {

        this.inventory = inventory;
        const ouput = this.smelting.checkSmelting(inventory);
        if (ouput && this.checkFuel(inventory)) {
            inventory[this.output] = { block : ouput.id, quantity : ouput.quantity};

            this.decreaseQuantity(this.fuel);
            this.decreaseQuantity(this.input);
        } else
            inventory[this.output] = null;
    }

    decreaseQuantity(elem) {
        if (this.inventory[elem].quantity > 1)
            this.inventory[elem].quantity -= 1;  // Modifier directement la quantité
        else
            this.inventory[elem] = null;
    }

    checkFuel (inventory) {
        if (this.fuelList.includes(inventory[this.fuel]?.block))
            return true;
        return false;
    }


}