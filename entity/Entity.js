import * as THREE from 'three';
import {AudioManager} from "../AudioManager.js";

export class Entity {
    constructor(world, position) {
        this.world = world;
        console.log(position);
        this.position = position.clone();
        this.velocity = new THREE.Vector3(0, 0, 0);
        this.mesh = null;
        this.boundingBox = new THREE.Box3();
        this.audioManager = new AudioManager();
    }

    update(dt) {
        this.position.addScaledVector(this.velocity, dt);
        if (this.mesh) this.mesh.position.copy(this.position);
    }

    addToScene(scene) {
        if (this.mesh) scene.add(this.mesh);
    }

    removeToScene(scene) {
        if (this.mesh) scene.remove(this.mesh);
    }


    removeFromScene(scene) {
        if (this.mesh) scene.remove(this.mesh);
    }

    action() {
        console.log('Default action');
    }

    hit(player) {
        this.health -= 0.5;
        if (this.health <= 0) {
            this.dropLoot(player);
            this.world.removeEntity(this);
        }
    }
    dropLoot(player) {
        if (!this.drops) return;
        for (const drop of this.drops) {
            const qty = Math.floor(
                Math.random() * (drop.max - drop.min + 1)
            ) + drop.min;
            for (let i = 0; i < qty; i++) {
                player.inventory.addBlock(drop.block);
            }
        }
    }
}