import { blocks } from './block.js';

// Smelting recipes: key = input block id, value = { id, quantity }
export const SmeltingList = {
  [blocks.ironOre.id]: { id: blocks.iron_ingot.id, quantity: 1 },
  [blocks.sand.id]: { id: blocks.glass.id, quantity: 1 },
  [blocks.cobblestone.id]: { id: blocks.stone.id, quantity: 1 },
};

export class Smelting {
  /**
   * Returns the smelting output for a given slot item.
   * @param {{block:number, quantity:number}|null} item
   * @returns {{id:number, quantity:number}|null}
   */
  getOutput(item) {
    if (!item?.block) return null;
    return SmeltingList[item.block] ?? null;
  }
}