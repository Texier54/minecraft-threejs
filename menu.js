

import { blocks, resources } from './block.js';

export class Menu {

    constructor(world, player, inventory, client, chat) {
        this.world = world;
        this.player = player;
        this.inventory = inventory;
        this.client = client;
        this.chat = chat;

        const bind = (id, fn) => {
            const el = document.getElementById(id);
            if (!el) return;
            el.addEventListener('click', fn);
            // Mobile: pointerdown fires immediately and does not rely on synthetic click
            el.addEventListener('pointerdown', (e) => {
                e.preventDefault();
                fn();
            });
        };

        bind('backToGame', () => this.backToGame());
        bind('save', () => this.save());
        bind('load', () => this.load());
        bind('connect', () => this.connect());

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







