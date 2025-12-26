import { Smelting } from "./smelting.js";
import { blocks, getBlockByIdFast } from "./block.js";

export class Furnace {

    // Slot indexes in the furnace UI inventory
    output = 2;
    fuel = 1;
    input = 0;

    // Smelting timings (Minecraft-ish feel, tweak as you like)
    cookDurationSec = 5; // seconds per item

    // Fuel burn durations (seconds of burn for 1 fuel item)
    fuelBurnSecById = {
        [blocks.coal.id]: 40,
    };

    constructor() {
        this.smelting = new Smelting();
    }

    /**
     * Ensure furnace state exists on the inventory object (array).
     * We store it as a non-serialized property.
     */
    ensureState(inventory) {
        if (!inventory._furnaceState) {
            inventory._furnaceState = {
                burnLeft: 0,
                cookTime: 0,
                lastInputBlock: null,
            };
        }
        return inventory._furnaceState;
    }

    getFuelBurnSeconds(item) {
        if (!item?.block) return 0;
        return this.fuelBurnSecById[item.block] ?? 0;
    }

    canOutputAccept(outputItem, recipeOutput) {
        if (!recipeOutput) return false;
        if (!outputItem) return true;
        if (outputItem.block !== recipeOutput.id) return false;

        const blockObj = getBlockByIdFast(outputItem.block);
        const maxStack = blockObj?.stackable ? 64 : 1;
        return (outputItem.quantity + recipeOutput.quantity) <= maxStack;
    }

    produceOutput(inventory, recipeOutput) {
        const outputItem = inventory[this.output] ?? null;
        if (!outputItem) {
            inventory[this.output] = { block: recipeOutput.id, quantity: recipeOutput.quantity };
        } else {
            outputItem.quantity += recipeOutput.quantity;
        }
    }

    decreaseQuantity(inventory, idx) {
        const item = inventory[idx];
        if (!item) return;
        if (item.quantity > 1) item.quantity -= 1;
        else inventory[idx] = null;
    }

    /**
     * Tick the furnace logic.
     * Returns true if the inventory/state changed (so UI can re-render).
     */
    tick(dt, inventory) {
        if (!inventory) return false;

        const state = this.ensureState(inventory);
        let changed = false;

        const inputItem = inventory[this.input] ?? null;
        const fuelItem = inventory[this.fuel] ?? null;
        const outputItem = inventory[this.output] ?? null;

        const recipeOutput = this.smelting.getOutput(inputItem);

        // Reset cook progress if input changed
        const currentInputBlock = inputItem?.block ?? null;
        if (state.lastInputBlock !== currentInputBlock) {
            state.lastInputBlock = currentInputBlock;
            state.cookTime = 0;
            changed = true;
        }

        // If we have no recipe or output is blocked, don't progress cooking.
        const canCook = !!recipeOutput && this.canOutputAccept(outputItem, recipeOutput);

        // Consume fuel if needed
        if (state.burnLeft <= 0 && canCook) {
            const burn = this.getFuelBurnSeconds(fuelItem);
            if (burn > 0) {
                // consume 1 fuel
                this.decreaseQuantity(inventory, this.fuel);
                state.burnLeft = burn;
                changed = true;
            }
        }

        // Burn down
        if (state.burnLeft > 0) {
            const before = state.burnLeft;
            state.burnLeft = Math.max(0, state.burnLeft - dt);
            if (state.burnLeft !== before) changed = true;
        }

        // Cook if burning and we can cook
        if (state.burnLeft > 0 && canCook) {
            state.cookTime += dt;
            if (state.cookTime >= this.cookDurationSec) {
                // Produce as many items as time allows (in case of lag)
                while (state.cookTime >= this.cookDurationSec) {
                    // Re-check availability each iteration
                    const inItem = inventory[this.input] ?? null;
                    const outItem = inventory[this.output] ?? null;
                    const outRecipe = this.smelting.getOutput(inItem);
                    if (!outRecipe || !this.canOutputAccept(outItem, outRecipe)) break;

                    this.produceOutput(inventory, outRecipe);
                    this.decreaseQuantity(inventory, this.input);
                    changed = true;

                    state.cookTime -= this.cookDurationSec;
                }
            }
        } else {
            // Not cooking: slowly reset cook progress (optional)
            if (state.cookTime !== 0) {
                state.cookTime = 0;
                changed = true;
            }
        }

        return changed;
    }

    /**
     * Returns UI-friendly progress info for the given furnace inventory.
     * @returns {{cookPct:number, burnPct:number, cookTime:number, cookDuration:number, burnLeft:number, burnMax:number}}
     */
    getProgress(inventory) {
        const state = this.ensureState(inventory);
        const cookDuration = this.cookDurationSec;

        // Cook progress (0..1)
        const cookPct = cookDuration > 0 ? Math.max(0, Math.min(1, state.cookTime / cookDuration)) : 0;

        // Burn progress (0..1): remaining burn relative to the current fuel "charge"
        // If we are not burning, try to infer the next fuel burn duration from what's in the fuel slot.
        const fuelItem = inventory?.[this.fuel] ?? null;
        const burnMax = state.burnLeft > 0 ? Math.max(1e-6, state.burnLeft) : (this.getFuelBurnSeconds(fuelItem) || 0);
        const burnPct = burnMax > 0 ? Math.max(0, Math.min(1, state.burnLeft / burnMax)) : 0;

        return {
            cookPct,
            burnPct,
            cookTime: state.cookTime,
            cookDuration,
            burnLeft: state.burnLeft,
            burnMax,
        };
    }
}