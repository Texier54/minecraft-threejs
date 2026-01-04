

import { blocks, resources } from './block.js';

export class Menu {

    constructor(world, player, inventory, client, chat) {
        this.world = world;
        this.player = player;
        this.inventory = inventory;
        this.client = client;
        this.chat = chat;

        const btnBTG = document.getElementById('backToGame');
        btnBTG.addEventListener('click', () => this.backToGame());

        const btnSave = document.getElementById('save');
        btnSave.addEventListener('click', () => this.save());

        const btnLoad = document.getElementById('load');
        btnLoad.addEventListener('click', () => this.load());

        const btnConnect = document.getElementById('connect');
        btnConnect.addEventListener('click', () => this.connect());

        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.inventory.isShow === false) {
                this.openMenu();
            }
        });
    }

    backToGame() {
        document.getElementById('menu').style.display = 'none';
        if (this.player.usePointerLock)
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
        this.chat.add('Saved game');
    }

    load() {
        this.world.load()
        this.inventory.load();
        this.player.load();
        this.chat.add('Load saved');
    }

    connect() {
        if (!this.client.getSocket())
            this.client.init()
    }



}







