

import { blocks, resources } from './block.js';

export class Menu {

    constructor(world, player) {
        this.world = world;
        this.player = player;


        const btnBTG = document.getElementById('backToGame');
        btnBTG.addEventListener('click', () => this.backToGame());

        const btnSave = document.getElementById('save');
        btnSave.addEventListener('click', () => this.world.save());

        const btnLoad = document.getElementById('load');
        btnLoad.addEventListener('click', () => this.world.load());

        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.openMenu();
            }
        });
    }

    backToGame() {
        document.getElementById('menu').style.display = 'none';
        this.player.controls.lock();
    }

    openMenu() {
        document.getElementById('menu').style.display = 'block';
    }


}







