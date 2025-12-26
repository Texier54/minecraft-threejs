import * as THREE from 'three';

import {mobs} from "./mobs.js";
import {Entity} from "./Entity.js";

export class Cow extends Entity {

    mesh = new THREE.Group();
    health = 10;

    constructor(world, position) {
        super(world, position);

        // Création des parties du cochon
        const bodyGeometry = new THREE.BoxGeometry(0.9, 0.8, 1.6); // Corps (rectangle)
        const headGeometry = new THREE.BoxGeometry(0.7, 0.7, 0.5); // Tête
        const noiseGeometry = new THREE.BoxGeometry(0.32, 0.25, 0.1); // Tête (cube)
        const legGeometry = new THREE.BoxGeometry(0.3, 0.8, 0.3); // Pattes (petits cubes)

        // Corps
        const body = new THREE.Mesh(bodyGeometry, mobs.cow.body.material);
        body.position.set(0, 0.8, 0);
        body.userData.entity = this;
        this.mesh.add(body);


        // Tête
        const head = new THREE.Mesh(headGeometry, mobs.cow.head.material);
        head.position.set(0, 1, 1);
        head.userData.entity = this;
        this.mesh.add(head);

        // Pattes (quatre cubes)
        for (let i = 0; i < 4; i++) {
            const leg = new THREE.Mesh(legGeometry, mobs.cow.feet.material);
            leg.userData.entity = this;
            leg.position.set(
                i < 2 ? -0.25 : 0.25, // Gauche/droite
                0, // Hauteur des pattes
                i % 2 === 0 ? -0.6 : 0.6 // Avant/arrière
            );
            leg.isLeg = true; // Identifie cet objet comme une jambe
            this.mesh.add(leg);
        }

        // Zone dans laquelle le cochon peut se déplacer
        this.BOUNDARY = {
            minX: -50, maxX: 50,
            minZ: -50, maxZ: 50
        };

        // Définir une cible initiale
        this.target = this.getRandomTarget();

        this.cowVelocity = new THREE.Vector3(0, 0, 0); // Vitesse du cochon (incluant la gravité)

        this.mesh.position.copy(this.position); // <- important

        this.hitTime = 0;
        // Store the current materials only if hitTime is 0 (to avoid overwriting while already hit)
        this.originalMaterials = this.mesh.children.map(c => c.material);

        this.redMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        this.redMaterial.needsUpdate = true;
    }


    // Générer une nouvelle cible aléatoire
    getRandomTarget() {
        const x = Math.random() * (this.BOUNDARY.maxX - this.BOUNDARY.minX) + this.BOUNDARY.minX;
        const z = Math.random() * (this.BOUNDARY.maxZ - this.BOUNDARY.minZ) + this.BOUNDARY.minZ;
        return new THREE.Vector3(x, 75, z); // Y reste 0 si le sol est plat
    }

    hit() {
        console.log('hit cow');
        this.hitTime = 0.3; // seconds
        this.runTime = 3; // seconds
        this.cowVelocity.y += 0.2; // small rebound

        this.mesh.children.forEach((child, i) => {
            if (child.material) {
                child.material = this.redMaterial;
            }
        });
        this.target = this.getRandomTarget(); // Nouvelle cible aléatoire
        this.audioManager.playBlockSound('cow', 'hurt');

        this.health -= 0.5;
        if (this.health <= 0) {
            this.world.removeEntity(this);
        }
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
        return;
        //courir
        if (this.runTime > 0) {
            this.runTime -= deltaTime;
            runSpeed = 3;
        }

        if (this.world.getBlock(Math.floor(this.mesh.position.x), Math.floor(this.mesh.position.y), Math.floor(this.mesh.position.z))?.id == 0 ) {
            //console.log('down');
            this.cowVelocity.y -= 0.01;
        } else if (this.world.getBlock(Math.floor(this.mesh.position.x), Math.ceil(this.mesh.position.y), Math.floor(this.mesh.position.z))?.id > 0) {
            //console.log('up');
            this.cowVelocity.y += 0.05;
        } else
            this.cowVelocity.y = 0; // Annule la gravité si le cochon est sur un bloc


        // Déplace le cochon en fonction de la vélocité
        this.mesh.position.add(this.cowVelocity);

        const speed = 1+runSpeed; // Vitesse en unités par seconde

        // Calculer la direction vers la cible
        const direction = this.target.clone().sub(this.mesh.position).normalize();

        direction.y = 0
        // Déplacer le meshe
        this.mesh.position.add(direction.multiplyScalar(speed * deltaTime));

        // Vérifier si le meshe est proche de la cible
        if (this.mesh.position.distanceTo(this.target) < 2) {
            this.target = this.getRandomTarget(); // Nouvelle cible aléatoire
        }
        this.target.y = this.mesh.position.y;
        // Faire tourner le meshe pour qu'il regarde la cible
        this.mesh.lookAt(this.target);
        this.animatecowLegs(speed);
    }

    animatecowLegs(speed) {
        const angle = Math.sin(Date.now() * 0.005 * speed * 2); // Oscillation basée sur le temps

        this.mesh.children.forEach((child) => {
            if (child.isLeg) {
                // Anime les jambes
                child.rotation.x = angle * 0.2;
            }
        });
    }
}