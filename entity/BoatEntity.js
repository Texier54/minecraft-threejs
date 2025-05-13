import * as THREE from 'three';
import { Entity } from '/Users/texier/Documents/repos/test/entity/Entity.js';

export class BoatEntity extends Entity {
    constructor(world, position) {
        super(world, position);

        this.mesh = new THREE.Group();


        // Boat base
        const baseGeometry = new THREE.BoxGeometry(1.5, 0.2, 2.5);
        const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
        const base = new THREE.Mesh(baseGeometry, baseMaterial);
        base.position.y = -0.4;
        base.castShadow = true;
        base.receiveShadow = true;
        base.userData.entity = this;
        this.mesh.add(base);

        // Boat sides
        const sideGeometry = new THREE.BoxGeometry(0.1, 0.3, 2.5);
        const sideLeft = new THREE.Mesh(sideGeometry, baseMaterial);
        sideLeft.position.set(-0.8, -0.15, 0);
        sideLeft.castShadow = true;
        sideLeft.receiveShadow = true;

        const sideRight = sideLeft.clone();
        sideLeft.userData.entity = this;
        sideRight.position.x = 0.8;
        sideRight.userData.entity = this;
        this.mesh.add(sideLeft);
        this.mesh.add(sideRight);

        // Back
        const backGeometry = new THREE.BoxGeometry(1.5, 0.3, 0.1);
        const back = new THREE.Mesh(backGeometry, baseMaterial);
        back.position.set(0, -0.15, -1.25);
        back.castShadow = true;
        back.receiveShadow = true;
        const front = back.clone();
        back.userData.entity = this;
        this.mesh.add(back);

        // Front
        front.position.z = 1.25;
        this.mesh.add(front);



        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        this.mesh.position.copy(this.position); // <- important

        this.speed = 0.0;
        this.rotation = 0;


        this.shakeTime = 0;
        this.shakeIntensity = 0;
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

        } else {
            //si on conduit plus on ralenti
            this.speed *= 0.99;
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

        const below = this.world.getBlock(
            Math.floor(this.mesh.position.x),
            Math.floor(this.mesh.position.y - 0.5),
            Math.floor(this.mesh.position.z)
        );

        // Simple gravity and ground collision
        if (!below || below.id === 0) {
            this.velocity.y -= 3; // Apply gravity
        } else {
            this.velocity.y = 0;
            this.position.y = Math.floor(this.mesh.position.y); // Snap to ground level
        }


        this.position.addScaledVector(this.velocity, dt);
        this.mesh.position.copy(this.position);


        if (this.shakeTime > 0) {
            this.shakeTime -= dt;
            const shakeAngle = Math.sin(Date.now() * 0.05) * this.shakeIntensity;
            this.mesh.rotation.z = shakeAngle;
        } else {
            this.mesh.rotation.z = 0;
        }


        this.mesh.rotation.y = this.rotation;

    }

    action(player) {
        if (this.driver === null) {
            player.riding = this;
            this.driver = player; // sera conditionnel dans la logique réelle
        } else {
            player.riding = null;
            this.driver = null; // sera conditionnel dans la logique réelle
        }
    }


    hit() {
        this.shakeTime = 0.3; // seconds
        this.shakeIntensity = 0.05; // radians
    }
}