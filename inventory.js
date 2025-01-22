

import { blocks, resources } from './block.js';
import { Crafts } from './crafts.js';

export class Inventory {

    inventoryContainer = document.getElementById('inventory');
    inventoryStockage = document.getElementById('stockage');
    inventoryCrafter = document.getElementById('crafter');
    inventoryOutput = document.getElementById('output');
    bar = document.getElementById('bar');

    selectedItemId = 27;

    // Configuration des items
    items = [
        { block: blocks.grass.id, quantity: 20 }, // grass
        { block: blocks.stone.id, quantity: 20 }, // Table de craft
        { block: blocks.craftingTable.id, quantity: 20 }, // Table de craft
        { block: blocks.planks.id, quantity: 1 }, // Planks
        { block: blocks.log.id, quantity: 10 }, // Log
        { block: blocks.furnace.id, quantity: 10 }, // Log
        { block: blocks.chest.id, quantity: 4 }, // Log
        { block: blocks.glass.id, quantity: 40 }, // Log
    ];


    // État de l'inventaire
    inventory = Array(41).fill(null); // 27 slots


    heldItem = null; // L'objet actuellement tenu
    heldItemElement = document.getElementById('held-item'); // Élément qui suit la souris

    constructor() {
        this.inventory[0] = this.items[2]; // Table de craft au premier slot
        this.inventory[1] = this.items[1]; // Table de craft au premier slot
        this.inventory[27] = this.items[0]; // Table de craft au premier slot
        this.inventory[28] = this.items[3]; // Table de craft au premier slot
        this.inventory[29] = this.items[4]; // Table de craft au premier slot
        this.inventory[30] = this.items[5]; // Table de craft au premier slot
        this.inventory[31] = this.items[6]; // Table de craft au premier slot
        this.inventory[32] = this.items[7]; // Table de craft au premier slot
        this.renderInventory();
        this.renderBar();
        // Gestion du mouvement de la souris pour suivre le curseur
        document.addEventListener('mousemove', (event) => {
            if (this.heldItem) {
                this.heldItemElement.style.left = `${event.pageX - 20}px`; // Centrer l'image sur la souris
                this.heldItemElement.style.top = `${event.pageY - 20}px`;
            }
        });

        this.crafts = new Crafts();
    }
    show() {
        this.inventoryContainer.style.display = 'block';
        this.bar.style.display = 'none';
        this.renderInventory();
    }

    hide() {
        this.inventoryContainer.style.display = 'none';
        this.bar.style.display = 'grid';
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
            console.log(this.getBlock(id));
            console.log(slot);
            if (slot) {
                slot.classList.add('selected');
                this.selectedItemId = id;
            }
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
                    img.src = blockObject.item;
                    img.alt = item.block;
                    img.width = 200;
                    div.innerHTML = item.quantity;
                    div.classList.add('slot-quantity');
                    slot.appendChild(img);
                    slot.appendChild(div);
                }

                // Gestion du clic
                slot.addEventListener('click', () => this.handleSlotClick(index));

                if (index < 36)
                    this.inventoryStockage.appendChild(slot);
                else if (index < 40)
                    this.inventoryCrafter.appendChild(slot);
                else
                    this.inventoryOutput.appendChild(slot);





        });
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
                    img.src = blockObject.item;
                    img.alt = item.block;
                    img.width = 200;
                    div.innerHTML = item.quantity;
                    div.classList.add('slot-quantity');
                    slot.appendChild(img);
                    slot.appendChild(div);
                }

                this.bar.appendChild(slot);
            }
        });
    }

    // Gestion du clic sur un slot
    handleSlotClick(index) {
        const selectedItem = this.inventory[index];

        if (this.heldItem && index != 40) {
            // Si un objet est tenu, le poser
            if (!selectedItem) {
                // Slot vide : déplacer l'item
                this.inventory[index] = this.heldItem;
                this.heldItem = null;
                this.heldItemElement.style.display = 'none';
            } else {

                if (this.inventory[index].block.id == this.heldItem.block.id) {
                    this.inventory[index].quantity += this.heldItem.quantity;
                    this.heldItem = null;
                    this.heldItemElement.style.display = 'none';
                } else {
                    // Slot occupé : échanger les items
                    [this.inventory[index], this.heldItem] = [this.heldItem, this.inventory[index]];
                    this.heldItemElement.src = this.heldItem.block.item; // Affiche l'image de l'item tenu
                }


            }
        } else if (selectedItem) {
            // Si aucun objet n'est tenu, prendre l'item du slot
            this.heldItem = this.inventory[index];
            this.inventory[index] = null;
            const blockObject = Object.values(blocks).find(block => block.id === this.heldItem.block)
            this.heldItemElement.src = blockObject.item; // Affiche l'image de l'item tenu
            this.heldItemElement.style.display = 'block';
        }

        //vérifie recettes
        const gain = this.crafts.checkRecipe(this.inventory[36]);
        if (gain)
            this.inventory[40] = { block : gain, quantity : 1};
        else
            this.inventory[40] = null;

        this.renderInventory();
        this.renderBar();
    }

    addBlock(blockToAdd) {
        let saved = false;
        this.inventory.forEach((item, index) => {
            if (index < 36) {
                if (item?.block == blockToAdd.id) {
                    item.quantity += 1;
                    saved = true;
                }
            }
        });
        if (!saved) {
            this.inventory.forEach((item, index) => {
                if (index < 36 && !saved) {
                    if (item == null) {
                        console.log(blockToAdd.id);
                        this.inventory[index] = { quantity: 1, block: blockToAdd.id };
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







