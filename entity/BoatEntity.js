import * as THREE from 'three';
import { Entity } from '/Users/texier/Documents/repos/test/entity/Entity.js';

export class BoatEntity extends Entity {
    constructor(world, position) {
        super(world, position);

        const geometry = new THREE.BoxGeometry(1.5, 0.5, 2.5);
        const material = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.userData.entity = this;
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        this.mesh.position.copy(this.position); // <- important

        this.speed = 0.0;
        this.rotation = 0;
    }

    setInput(inputVector) {
        this.input = inputVector.clone(); // ou shallow copy si adapté
    }


    update(dt) {

        if (this.driver) {
            if (this.input) {
                if (this.input.z > 0) {
                    this.speed += 0.08;
                } else if (this.input.z < 0) {
                    this.speed -= 0.08;
                } else {
                    // apply natural slowdown
                    this.speed *= 0.99;
                }
                if (this.input.x > 0) this.rotation -= 1.5 * dt;
                if (this.input.x < 0) this.rotation += 1.5 * dt;
            }

            // Clamp speed to a max value
            const maxSpeed = 7;
            this.speed = Math.max(-maxSpeed, Math.min(maxSpeed, this.speed));

            // Stop movement if speed is very low
            if (Math.abs(this.speed) < 0.001) {
                this.speed = 0;
            }


            const dir = new THREE.Vector3(-Math.sin(this.rotation), 0, -Math.cos(this.rotation));
            this.velocity.copy(dir.multiplyScalar(this.speed));
            this.position.addScaledVector(this.velocity, dt);
            this.mesh.position.copy(this.position);
            this.mesh.rotation.y = this.rotation;
        }

    }

    action(player) {
        player.riding = this;
        this.driver = player; // sera conditionnel dans la logique réelle
    }
}