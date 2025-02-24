

import { blocks, resources } from './block.js';

export class Menu {

    constructor(world, player, inventory) {
        this.world = world;
        this.player = player;
        this.inventory = inventory;


        const btnBTG = document.getElementById('backToGame');
        btnBTG.addEventListener('click', () => this.backToGame());

        const btnSave = document.getElementById('save');
        btnSave.addEventListener('click', () => this.save());

        const btnLoad = document.getElementById('load');
        btnLoad.addEventListener('click', () => this.load());

        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.inventory.isShow === false) {
                this.openMenu();
            }
        });
    }

    backToGame() {
        document.getElementById('menu').style.display = 'none';
        this.player.controls.lock();
        this.inventory.hide();
    }

    openMenu() {
        document.getElementById('menu').style.display = 'block';
        this.inventory.hide();
    }

    save() {
        this.world.save()
        this.inventory.save();
        this.player.save();
    }

    load() {
        this.world.load()
        this.inventory.load();
        this.player.load();
    }


}







