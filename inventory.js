

import { blocks, resources } from './block.js';

export class Inventory {

    inventoryContainer = document.getElementById('inventory');
    inventoryStockage = document.getElementById('stockage');
    inventoryCrafter = document.getElementById('crafter');
    inventoryOutput = document.getElementById('output');
    bar = document.getElementById('bar');

    selectedItemId = 27;

    // Configuration des items
    items = [
        { block: blocks.grass, quantity: 20 }, // grass
        { block: blocks.stone, quantity: 20 }, // Table de craft
        { block: blocks.craftingTable, quantity: 20 }, // Table de craft
        { block: blocks.planks, quantity: 10 }, // Planks
        { block: blocks.log, quantity: 10 }, // Log
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
        this.renderInventory();
        this.renderBar();
        // Gestion du mouvement de la souris pour suivre le curseur
        document.addEventListener('mousemove', (event) => {
            if (this.heldItem) {
                this.heldItemElement.style.left = `${event.pageX - 20}px`; // Centrer l'image sur la souris
                this.heldItemElement.style.top = `${event.pageY - 20}px`;
            }
        });
    }
    show() {
        this.inventoryContainer.style.display = 'block';
        this.bar.style.display = 'none';
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
                    img.src = item.block.item;
                    img.alt = item.block.id;
                    img.width = 200;
                    div.innerHTML = item.quantity;
                    div.style.marginBottom = '-20px';
                    div.style.float = 'right';
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
                    img.src = item.block.item;
                    img.alt = item.block.id;
                    div.innerHTML = item.quantity;
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

        if (this.heldItem) {
            // Si un objet est tenu, le poser
            if (!selectedItem) {
                // Slot vide : déplacer l'item
                this.inventory[index] = this.heldItem;
                this.heldItem = null;
                this.heldItemElement.style.display = 'none';
            } else {
                // Slot occupé : échanger les items
                [this.inventory[index], this.heldItem] = [this.heldItem, this.inventory[index]];
            }
        } else if (selectedItem) {
            // Si aucun objet n'est tenu, prendre l'item du slot
            this.heldItem = this.inventory[index];
            this.inventory[index] = null;
            this.heldItemElement.src = this.heldItem.block.item; // Affiche l'image de l'item tenu
            this.heldItemElement.style.display = 'block';
        }

        this.renderInventory();
        this.renderBar();
        console.log(this.inventory);
    }
}







