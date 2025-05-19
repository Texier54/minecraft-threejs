import * as THREE from 'three';

import {mobs} from "./mobs.js";
import {Entity} from "./Entity.js";
export class PlayerEntity extends Entity {

    mesh = new THREE.Group();
    radius = 2;
    height = 1;

    constructor(world, position, name) {
        super(world, position);


        const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

        const legRight = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.72, 0.25), mobs.steve.leg.material);
        legRight.position.set( -0.12, -1.45, 0 );
        legRight.userData.entity = this;
        this.mesh.add(legRight);
        const legLeft = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.72, 0.25), mobs.steve.leg.material);
        legLeft.position.set( 0.12, -1.45, 0 );
        legLeft.userData.entity = this;
        this.mesh.add(legLeft);


        const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.71, 0.25), mobs.steve.body.material);
        body.position.set( 0, -0.75, 0 );
        body.userData.entity = this;
        this.mesh.add(body);
        const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), mobs.steve.head.material);
        head.position.set( 0, -0.15, 0 );
        head.name = "head";  // Donne un nom unique
        head.userData.entity = this;
        this.mesh.add(head);
        const nameTag = this.createNameTag(name); // ou Player.name si dispo
        nameTag.name = "nameTag";
        this.mesh.add(nameTag);
        const armRight = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.71, 0.25), mobs.steve.arm.material);
        armRight.position.set( -0.38, -0.75, 0 );
        armRight.userData.entity = this;
        this.mesh.add(armRight);
        const armLeft = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.71, 0.25), mobs.steve.arm.material);
        armLeft.position.set( 0.38, -0.75, 0 );
        armLeft.userData.entity = this;
        this.mesh.add(armLeft);


        this.mesh.position.copy(this.position); // <- important

        this.hitTime = 0;
        // Store the current materials only if hitTime is 0 (to avoid overwriting while already hit)
        this.originalMaterials = this.mesh.children.map(c => c.material);

        this.redMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        this.redMaterial.needsUpdate = true;
    }

    hit() {
        console.log('hit player');
        this.hitTime = 0.3; // seconds
        this.runTime = 3; // seconds

        this.mesh.children.forEach((child, i) => {
            if (child.material && child.name != 'nameTag') {
                child.material = this.redMaterial;
            }
        });
        this.target = this.getRandomTarget(); // Nouvelle cible aléatoire
    }

    update(deltaTime) {
        let runSpeed = 0;

        //rouge
        if (this.hitTime > 0) {
            runSpeed = 2;
            this.hitTime -= deltaTime;
            if (this.hitTime <= 0) {
                this.mesh.children.forEach((child, i) => {
                    if (this.originalMaterials[i]) {
                        child.material = this.originalMaterials[i];
                    }
                });
            }
        }
    }

    updatePosition(data) {
        //console.log(data);

        this.mesh.position.set(data.position.x, data.position.y, data.position.z);

        // Mettre à jour la direction de la vue, en ignorant l'axe Y
        const targetX = this.mesh.position.x + data.direction.x;
        const targetY = this.mesh.position.y + data.direction.y;
        const targetZ = this.mesh.position.z + data.direction.z;

        // Corriger le décalage de 45° (ajustement de l'angle)
        const direction = new THREE.Vector3(targetX, this.mesh.position.y, targetZ);

        // Calculer la direction à partir de la position du joueur pour éviter le décalage
        const angle = Math.atan2(direction.z - this.mesh.position.z, direction.x - this.mesh.position.x);
        this.mesh.rotation.y = angle;  // Appliquer la rotation en Y

        // Optionnel : Pour éviter que le joueur tourne dans une direction incorrecte, tu peux aussi forcer un angle spécifique :
        // players[id].rotation.y -= Math.PI / 4; // Si tu veux compenser un décalage de 45°.

        // Utilisation de lookAt pour ajuster le joueur, avec la rotation correcte appliquée
        this.mesh.lookAt(new THREE.Vector3(targetX, this.mesh.position.y, targetZ));
        const head = this.mesh.getObjectByName("head");
        head.lookAt(new THREE.Vector3(targetX, targetY, targetZ));

        this.animateLegs(1);
    }

    animateLegs(speed) {
        const angle = Math.sin(Date.now() * 0.005 * speed * 2); // Oscillation basée sur le temps

        this.mesh.children.forEach((child) => {
            if (child.isLeg) {
                // Anime les jambes
                child.rotation.x = angle * 0.2;
            }
        });
    }

    createNameTag(name) {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 64;
        const context = canvas.getContext('2d');
        context.fillStyle = 'white';
        context.font = '24px Arial';
        context.textAlign = 'center';
        context.fillText(name, 128, 40);

        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(1.5, 0.4, 1);
        sprite.position.set(0, 0.6, 0); // légèrement au-dessus de la tête
        return sprite;
    }
}