import * as THREE from 'three';
import { Entity } from './Entity.js';

let oakMaterial;

function getOakMaterial() {
    if (!oakMaterial) {
        const texture = new THREE.TextureLoader().load('images/planks_oak.png');
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestMipmapNearestFilter;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        oakMaterial = new THREE.MeshLambertMaterial({ map: texture });
    }
    return oakMaterial;
}

function createHullGeometry(width, height, depth) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const uv = geometry.getAttribute('uv');
    // Même densité de pixels sur toutes les faces (16 pixels par bloc).
    const faceSizes = [
        [depth, height], [depth, height],
        [width, depth], [width, depth],
        [width, height], [width, height]
    ];
    for (let face = 0; face < faceSizes.length; face++) {
        const [uScale, vScale] = faceSizes[face];
        for (let corner = 0; corner < 4; corner++) {
            const index = face * 4 + corner;
            uv.setXY(index, uv.getX(index) * uScale, uv.getY(index) * vScale);
        }
    }
    return geometry;
}

export class BoatEntity extends Entity {
    constructor(world, position) {
        super(world, position);

        this.mesh = new THREE.Group();


        // Boat base
        const baseGeometry = createHullGeometry(1.5, 0.2, 2.5);
        const baseMaterial = getOakMaterial();
        const base = new THREE.Mesh(baseGeometry, baseMaterial);
        base.position.y = -0.4;
        base.castShadow = true;
        base.receiveShadow = true;
        base.userData.entity = this;
        this.mesh.add(base);

        // Boat sides
        const sideGeometry = createHullGeometry(0.1, 0.3, 2.5);
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
        const backGeometry = createHullGeometry(1.5, 0.3, 0.1);
        const back = new THREE.Mesh(backGeometry, baseMaterial);
        back.position.set(0, -0.15, -1.25);
        back.castShadow = true;
        back.receiveShadow = true;
        const front = back.clone();
        back.userData.entity = this;
        this.mesh.add(back);

        // Front
        front.position.z = 1.25;
        front.userData.entity = this;
        this.mesh.add(front);



        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        this.mesh.position.copy(this.position); // <- important

        this.driver = null;
        this.input = new THREE.Vector3();
        this.acceleration = 4.8;
        this.drag = -Math.log(0.99) * 60;
        this.turnSpeed = 1.5;
        this.speed = 0.0;
        this.rotation = 0;


        this.shakeTime = 0;
        this.shakeIntensity = 0;
    }

    setInput(inputVector) {
        this.input = inputVector.clone(); // ou shallow copy si adapté
    }


    update(dt) {

        const below = this.world.getBlock(
            Math.floor(this.mesh.position.x),
            Math.floor(this.mesh.position.y - 0.5),
            Math.floor(this.mesh.position.z)
        );

        this.updateDriving(dt, below?.id === 9 ? 10 : 2);
        this.velocity.x = -Math.sin(this.rotation) * this.speed;
        this.velocity.z = -Math.cos(this.rotation) * this.speed;
        this.velocity.y = 0;

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

    updateDriving(dt, maxSpeed) {
        const throttle = this.driver ? Math.sign(this.input.z) : 0;
        if (throttle) {
            this.speed += throttle * this.acceleration * dt;
        } else {
            this.speed *= Math.exp(-this.drag * dt);
        }
        if (this.driver) {
            this.rotation -= Math.sign(this.input.x) * this.turnSpeed * dt;
        }
        this.speed = Math.max(-maxSpeed, Math.min(maxSpeed, this.speed));
        if (Math.abs(this.speed) < 0.001) this.speed = 0;
    }

    mount(player) {
        if (this.driver || player.riding) return false;
        this.driver = player;
        player.riding = this;
        this.input.set(0, 0, 0);
        player.velocity.set(0, 0, 0);
        return true;
    }

    findExitPosition(player) {
        // Chercher une place hors de la coque, avec de l'espace pour le joueur.
        for (const [dx, dz] of [[2, 0], [-2, 0], [0, 2], [0, -2], [2, 2], [-2, -2]]) {
            const x = Math.floor(this.position.x + dx);
            const z = Math.floor(this.position.z + dz);
            for (let y = Math.floor(this.position.y) + 2; y >= Math.floor(this.position.y) - 3; y--) {
                const floor = this.world.getBlock(x, y, z);
                if (!floor || floor.id == null || floor.id === 0) continue;
                let clear = true;
                // Inclure la largeur du joueur et refuser les chunks inconnus.
                const radius = player.radius ?? 0.5;
                for (let bx = Math.floor(x + 0.5 - radius); bx <= Math.floor(x + 0.5 + radius); bx++) {
                    for (let bz = Math.floor(z + 0.5 - radius); bz <= Math.floor(z + 0.5 + radius); bz++) {
                        for (let by = y + 1; by <= y + Math.ceil(player.height) + 1; by++) {
                            const block = this.world.getBlock(bx, by, bz);
                            if (!block || (block.id !== 0 && block.id !== 9)) clear = false;
                        }
                    }
                }
                if (clear) return new THREE.Vector3(x + 0.5, y + 0.5 + player.height + 0.01, z + 0.5);
            }
        }
        return null;
    }

    dismount(player) {
        if (this.driver !== player) return false;
        const exit = this.findExitPosition(player);
        if (!exit) return false;
        player.riding = null;
        this.driver = null;
        this.input.set(0, 0, 0);
        player.velocity.set(0, 0, 0);
        player.position.copy(exit);
        player.camera?.position.copy(exit);
        return true;
    }

    action(player) {
        return this.driver === player ? this.dismount(player) : this.mount(player);
    }

    hit() {
        this.shakeTime = 0.3; // seconds
        this.shakeIntensity = 0.05; // radians
    }
}