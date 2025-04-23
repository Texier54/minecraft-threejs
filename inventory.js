

import {blocks, getBlockByIdFast, resources} from './block.js';
import { Recipes } from './recipes.js';
import { Smelting } from './smelting.js';
import { Furnace } from './furnace.js';
import {UIList} from "./ui.js";

export class Inventory {

    inventoryContainer = document.getElementById('inventory');
    inventoryStockage = document.getElementById('stockage');
    inventoryCrafter = document.getElementById('crafter');
    inventoryOutput = document.getElementById('output');
    bar = document.getElementById('bar');

    selectedItemId = 27;

    UIID = 0;

    output = 0;

    // Configuration des items
    items = [
        { block: blocks.grass.id, quantity: 20 }, // grass
        { block: blocks.stone.id, quantity: 20 }, // Table de craft
        { block: blocks.craftingTable.id, quantity: 20 }, // Table de craft
        { block: blocks.planks.id, quantity: 10 }, // Planks
        { block: blocks.log.id, quantity: 10 }, // Log
        { block: blocks.furnace.id, quantity: 10 }, // Log
        { block: blocks.chest.id, quantity: 4 }, // Log
        { block: blocks.glass.id, quantity: 40 }, // Log
        { block: blocks.stick.id, quantity: 40 }, // Log
    ];


    // État de l'inventaire
    inventory = Array(41).fill(null); // 27 slots
    blockInventory = Array(41).fill(null); // 27 slots

    player = null;
    heldItem = null; // L'objet actuellement tenu
    heldItemElement = document.getElementById('held-item'); // Élément qui suit la souris

    constructor(player, world, socket) {
        this.player = player;
        this.world = world;
        this.socket = socket;
        this.isShow = false;
        this.inventory[0] = this.items[2]; // Table de craft au premier slot
        this.inventory[1] = this.items[1]; // Table de craft au premier slot
        this.inventory[3] = this.items[8]; // Table de craft au premier slot
        this.inventory[27] = this.items[0]; // Table de craft au premier slot
        this.inventory[28] = this.items[3]; // Table de craft au premier slot
        this.inventory[29] = this.items[4]; // Table de craft au premier slot
        this.inventory[30] = this.items[5]; // Table de craft au premier slot
        this.inventory[31] = this.items[6]; // Table de craft au premier slot
        this.inventory[32] = this.items[7]; // Table de craft au premier slot
        this.inventory[33] = this.items[8]; // Table de craft au premier slot
        this.renderInventory();
        this.renderBar();
        // Gestion du mouvement de la souris pour suivre le curseur
        document.addEventListener('mousemove', (event) => {
            if (this.heldItem) {
                this.heldItemElement.style.left = `${event.pageX - 20}px`; // Centrer l'image sur la souris
                this.heldItemElement.style.top = `${event.pageY - 20}px`;
            }
        });

        this.recipes = new Recipes();
        this.furnace = new Furnace();

        document.addEventListener('keydown', this.onKeyDown.bind(this));
    }
    show(id = 0) {
        this.isShow = true;
        this.inventoryContainer.style.display = 'block';
        this.bar.style.display = 'none';
        this.UIID = id;
        console.log(this.player.selectedCoords);
        this.blockInventory = Array(41).fill(null);
        if (this.UIID) {
            console.log(this.world.getBlock(this.player.selectedCoords.x, this.player.selectedCoords.y, this.player.selectedCoords.z));
            let content = this.world.getBlock(this.player.selectedCoords.x, this.player.selectedCoords.y, this.player.selectedCoords.z).inventory;
            if (content)
                this.blockInventory = content;
        }
        this.renderInventory();
    }

    hide() {
        this.inventoryContainer.style.display = 'none';
        this.bar.style.display = 'grid';
        this.renderBar();
        if (this.UIID) {
            this.world.setBlockInventory(this.player.selectedCoords.x, this.player.selectedCoords.y, this.player.selectedCoords.z, this.blockInventory);
            this.socket.getSocket()?.emit("setBlockInventory", {
                x : this.player.selectedCoords.x, y : this.player.selectedCoords.y, z : this.player.selectedCoords.z, inventory : this.blockInventory
            });
        }
        this.isShow = false;
    }

    getBlock(position) {
        return this.inventory[position];
    }

    getSelectedItem() {
        return this.inventory[this.selectedItemId];
    }

    selectItem(id) {
        if (id) {
            // Sélectionne tous les éléments avec la classe 'slot'
            const slots = document.querySelectorAll('.slot');

// Parcourt chaque élément et enlève la classe 'selected'
            slots.forEach(slot => {
                slot.classList.remove('selected');
            });
            const slot = document.querySelector('.slot[data-index_bar="'+id+'"]');
            if (slot) {
                slot.classList.add('selected');
                this.selectedItemId = id;
            }
            this.player.setBlockInHand(this.getBlock(id)?.block);
        }
    }

    // Création des slots dans le DOM
    renderInventory() {
        this.inventoryStockage.innerHTML = ''; // Réinitialise le conteneur
        this.inventoryCrafter.innerHTML = ''; // Réinitialise le conteneur
        this.inventoryOutput.innerHTML = '';
        this.inventory.forEach((item, index) => {



                const slot = document.createElement('div');
                slot.classList.add('slot');
                slot.dataset.index = index;

                // Ajout de l'item dans le slot
                if (item) {
                    const img = document.createElement('img');
                    const div = document.createElement('div');
                    const blockObject = Object.values(blocks).find(block => block.id === item.block)
                    img.src = blockObject.icon;
                    img.alt = item.block;
                    img.width = 200;
                    div.innerHTML = item.quantity;
                    div.classList.add('slot-quantity');
                    slot.appendChild(img);
                    if (blockObject.stackable)
                        slot.appendChild(div);
                }

                // Gestion du clic
                slot.addEventListener('mousedown', (event) => this.handleSlotClick(index, event));

                if (index < 36)
                    this.inventoryStockage.appendChild(slot);

        });

        const slots = UIList[this.UIID]?.slot; // Récupère les slots de l'élément avec ID 61
        const grid = UIList[this.UIID].grid;

        this.inventoryCrafter.style.gridTemplateColumns = 'repeat('+grid+', 50px)';

        console.log(this.blockInventory);

        for (const slotId in slots) {
            if (slots.hasOwnProperty(slotId)) {
                const slot = slots[slotId];
                const slotDiv = document.createElement('div');
                slotDiv.classList.add('slot');
                slotDiv.dataset.index = slot.name;
                if (this.blockInventory[slotId] !== null) {
                    console.log(this.blockInventory);
                    const img = document.createElement('img');
                    const div = document.createElement('div');
                    const blockObject = Object.values(blocks).find(block => block.id === this.blockInventory[slotId].block)
                    img.src = blockObject.icon;
                    img.alt = this.blockInventory[slotId].block;
                    img.width = 200;
                    div.innerHTML = this.blockInventory[slotId].quantity;
                    div.classList.add('slot-quantity');
                    slotDiv.appendChild(img);
                    if (blockObject.stackable)
                        slotDiv.appendChild(div);
                }

                slotDiv.addEventListener('mousedown', (event) => this.handleSlotBlockClick(slotId, event));

                if (slots[slotId].type == 'input')
                    this.inventoryCrafter.appendChild(slotDiv);
                else {
                    this.output = slotId;
                    this.inventoryOutput.appendChild(slotDiv);
                }

            }
        }
    }

    renderBar() {
        this.bar.innerHTML = ''; // Réinitialise le conteneur
        this.inventory.forEach((item, index) => {
            if (index >= 27 && index < 36) {
                const slot = document.createElement('div');
                slot.classList.add('slot');
                slot.dataset.index_bar = index;
                if (index == this.selectedItemId)
                    slot.classList.add('selected');

                // Ajout de l'item dans le slot
                if (item) {
                    const img = document.createElement('img');
                    const div = document.createElement('div');
                    const blockObject = Object.values(blocks).find(block => block.id === item.block)
                    img.src = blockObject.icon;
                    img.alt = item.block;
                    img.width = 200;
                    div.innerHTML = item.quantity;
                    div.classList.add('slot-quantity');
                    slot.appendChild(img);
                    if (blockObject.stackable)
                        slot.appendChild(div);
                }

                this.bar.appendChild(slot);
            }
        });
    }

    inventoryToGrid() {
        const gridNumber = UIList[this.UIID].grid;
        let grid = [];
        for (let x = 0; x < gridNumber; x++) {
            const slice = [];
            for (let y = 0; y < gridNumber; y++) {
                slice.push(null);
            }
            grid.push(slice);
        }
        const slots = UIList[this.UIID]?.slot; // Récupère les slots de l'élément avec ID 61

        let x = 0;
        let y = 0;
        for (const slotId in slots) {
            if (y >= gridNumber) {
                y = 0;
                x++;
                if (x >= gridNumber)
                    break;
            }
            //console.log(x+'-'+y)
            if (this.blockInventory[slotId]?.block)
                grid[x][y] = this.blockInventory[slotId]?.block;
            else
                grid[x][y] = null;
            y++;
        };
        return grid;
    }

    // Gestion du clic sur un slot
    handleSlotClick(index, event) {
        const selectedItem = this.inventory[index];

        if (this.heldItem) {
            // Si un objet est tenu, le poser
            if (!selectedItem) {
                if (event.button == 0) {
                    // Slot vide : déplacer l'item
                    this.inventory[index] = this.heldItem;
                    this.clearHeldItem();
                } else {
                    this.inventory[index] = { ...this.heldItem };
                    this.inventory[index].quantity = 1;
                    this.setHeldItem(this.heldItem.block, this.heldItem.quantity -= 1);
                }
            } else {

                if (this.inventory[index].block == this.heldItem.block && getBlockByIdFast(this.inventory[index].block).stackable) {
                    this.inventory[index].quantity += this.heldItem.quantity;
                    this.clearHeldItem();
                } else {
                    // Slot occupé : échanger les items
                    [this.inventory[index], this.heldItem] = [this.heldItem, this.inventory[index]];
                    const blockObject = Object.values(blocks).find(block => block.id === this.heldItem.block)
                    this.heldItemElement.src = blockObject.icon; // Affiche l'image de l'item tenu
                }


            }
        } else if (selectedItem) {
            // Si aucun objet n'est tenu, prendre l'item du slot
            if (event.button == 0) {
                // si clic gauche
                this.heldItem = this.inventory[index];
                this.inventory[index] = null;
                const blockObject = Object.values(blocks).find(block => block.id === this.heldItem.block)
                this.heldItemElement.src = blockObject.icon; // Affiche l'image de l'item tenu
                this.heldItemElement.style.display = 'block';
            } else {
                //si clic droit
                this.heldItem = { ...this.inventory[index] };
                this.heldItem.quantity = Math.round(this.heldItem.quantity/2);
                this.inventory[index].quantity = Math.floor(this.inventory[index].quantity/2);
                const blockObject = Object.values(blocks).find(block => block.id === this.heldItem.block)
                this.heldItemElement.src = blockObject.icon; // Affiche l'image de l'item tenu
                this.heldItemElement.style.display = 'block';
            }

        }

        this.renderInventory();
    }

    handleSlotBlockClick(index, event) {
        const selectedItem = this.blockInventory[index];

        if (this.heldItem) {
            // Si un objet est tenu, le poser
            if (!selectedItem) {
                if (event.button == 0) {
                    if (index != this.output) {
                        // Slot vide : déplacer l'item
                        this.blockInventory[index] = this.heldItem;
                        this.clearHeldItem();
                    }
                } else {
                    this.blockInventory[index] = { ...this.heldItem };
                    this.blockInventory[index].quantity = 1;
                    this.setHeldItem(this.heldItem.block, this.heldItem.quantity -= 1);
                }
            } else {

                if (this.blockInventory[index].block == this.heldItem.block && getBlockByIdFast(this.blockInventory[index].block).stackable) {
                    if (index == this.output) {
                        this.setHeldItem(this.heldItem.block, this.heldItem.quantity += this.blockInventory[index].quantity);
                    } else {
                        this.blockInventory[index].quantity += this.heldItem.quantity;
                        this.clearHeldItem();
                    }

                } else if (index != this.output) {
                    // Slot occupé : échanger les items
                    [this.blockInventory[index], this.heldItem] = [this.heldItem, this.blockInventory[index]];
                    const blockObject = Object.values(blocks).find(block => block.id === this.heldItem.block)
                    this.heldItemElement.src = blockObject.icon; // Affiche l'image de l'item tenu
                }


            }
        } else if (selectedItem) {
            if (event.button == 0) {
            // Si aucun objet n'est tenu, prendre l'item du slot
                this.setHeldItem(this.blockInventory[index].block, this.blockInventory[index].quantity);
                this.blockInventory[index] = null;
            } else {
                //si clic droit
                this.setHeldItem(this.blockInventory[index].block, Math.round(this.blockInventory[index].quantity/2));
                this.blockInventory[index].quantity = Math.floor(this.blockInventory[index].quantity/2);
            }
        }



        if (this.UIID == 0 || this.UIID == 58) {
            //vérifie recettes
            const ouput = this.recipes.checkRecipe(this.inventoryToGrid());
            if (ouput)
                this.blockInventory[this.output] = { block : ouput.id, quantity : ouput.quantity};
            else
                this.blockInventory[this.output] = null;
        } else if (this.UIID == blocks.furnace.id) {
            this.furnace.handle(this.blockInventory);
        }


        this.renderInventory();

    }

    clearHeldItem() {
        this.heldItem = null;
        this.heldItemElement.style.display = 'none';
    }

    setHeldItem(id, quantity) {
        this.heldItem = { block: id, quantity: quantity};
        const blockObject = getBlockByIdFast(id);
        this.heldItemElement.src = blockObject.icon; // Affiche l'image de l'item tenu
        this.heldItemElement.style.display = 'block';
        if (quantity < 1)
            this.clearHeldItem();
    }

    addBlock(blockToAdd) {
        let saved = false;
        this.inventory.forEach((item, index) => {
            if (index < 36) {
                if (item?.block == blockToAdd) {
                    item.quantity += 1;
                    saved = true;
                }
            }
        });
        if (!saved) {
            this.inventory.forEach((item, index) => {
                if (index < 36 && !saved) {
                    if (item == null) {
                        console.log(blockToAdd);
                        this.inventory[index] = { quantity: 1, block: blockToAdd };
                        saved = true;
                    }
                }
            });
        }
        this.renderBar();
    }

    removeBlock(block) {
        this.inventory.forEach((item, index) => {
            if (index < 36) {
                if (item?.block == block) {
                    item.quantity -= 1;
                    if (item.quantity <= 0)
                        this.inventory[index] = null;
                }
            }
        });
        this.renderBar();
    }

    save() {
        (async () => {
            const dataSize = new Blob([JSON.stringify(this.inventory)]).size; // Taille en octets
            //console.log(`Taille des données : ${dataSize} octets`);
            //console.log(this.inventory);
            const minecraftData = this.inventory;
            await storeData(minecraftData);
        })();
    }

    /**
     * Loads the game from disk
     */
    load() {

        (async () => {
            const retrievedData = await getData();
            //console.log('Données récupérées :', retrievedData);
            this.inventory = retrievedData;
            //console.log(this.inventory);
            this.renderBar();
        })();
    }


    onKeyDown(event) {

        document.querySelectorAll('.item').forEach(el => el.classList.remove('selected'));
        let id = null;
        if (event.code === 'Digit1') id = 27;
        if (event.code === 'Digit2') id = 28;
        if (event.code === 'Digit3') id = 29;
        if (event.code === "Digit4") id = 30;
        if (event.code === 'Digit5') id = 31;
        if (event.code === 'Digit6') id = 32;
        if (event.code === 'Digit7') id = 33;
        if (event.code === 'Digit8') id = 34;
        if (event.code === 'Digit9') id = 35;

        if (id)
            this.selectItem(id);

        if (event.key === 'Escape' && this.isShow) {
            this.hide();
            this.player.controls.lock();
        }

    };

}

const dbName = 'minecraftDB';
const storeName = 'minecraftData';

// Initialiser IndexedDB
function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);
        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            db.createObjectStore(storeName, { keyPath: 'id' });
        };
        request.onsuccess = function (event) {
            resolve(event.target.result);
        };
        request.onerror = function (event) {
            reject(event.target.error);
        };
    });
}

// Stocker des données
async function storeData(data) {
    const db = await initDB();
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    store.put({ id: 'minecraft_inventory', data });
    return transaction.complete;
}

// Lire des données
async function getData() {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.get('minecraft_inventory');
        request.onsuccess = function () {
            resolve(request.result?.data || null);
        };
        request.onerror = function (event) {
            reject(event.target.error);
        };
    });
}







