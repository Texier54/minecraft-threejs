

// Smelting recipes: key = input block id, value = { id, quantity }
export const SmeltingList = {
    15: { id: 305, quantity: 1 }, // ironOre -> iron_ingot
    12: { id: 20,  quantity: 1 }, // sand -> glass
    4:  { id: 3,   quantity: 1 }, // cobblestone -> stone
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