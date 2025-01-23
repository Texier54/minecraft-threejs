import * as THREE from 'three';

import {mobs} from "./mobs.js";

export class Pig extends THREE.Group {

    constructor() {
        super();


        // Création des parties du cochon
        const bodyGeometry = new THREE.BoxGeometry(0.9, 0.7, 1.6); // Corps (rectangle)
        const headGeometry = new THREE.BoxGeometry(0.7, 0.7, 0.7); // Tête (cube)
        const noiseGeometry = new THREE.BoxGeometry(0.32, 0.25, 0.1); // Tête (cube)
        const legGeometry = new THREE.BoxGeometry(0.4, 0.5, 0.4); // Pattes (petits cubes)

        // Corps
        const body = new THREE.Mesh(bodyGeometry, mobs.pig.body.material);
        body.position.set(0, 0.6, 0);
        this.add(body);


        // Tête
        const head = new THREE.Mesh(headGeometry, mobs.pig.head.material);
        head.position.set(0, 0.8, 1);
        this.add(head);

        const noise = new THREE.Mesh(noiseGeometry, mobs.pig.noise.material);
        noise.position.set(0, 0.7, 1.4);
        this.add(noise);

        // Pattes (quatre cubes)
        for (let i = 0; i < 4; i++) {
            const leg = new THREE.Mesh(legGeometry, mobs.pig.feet.material);
            leg.position.set(
                i < 2 ? -0.25 : 0.25, // Gauche/droite
                0, // Hauteur des pattes
                i % 2 === 0 ? -0.7 : 0.6 // Avant/arrière
            );
            leg.isLeg = true; // Identifie cet objet comme une jambe
            this.add(leg);
        }

        // Position initiale du groupe
        this.position.set(6, 69, 10);

        // Ajouter le groupe à la scène
        //scene.add(pigGroup);

        // Zone dans laquelle le cochon peut se déplacer
        this.BOUNDARY = {
            minX: -50, maxX: 50,
            minZ: -50, maxZ: 50
        };

        // Définir une cible initiale
        this.target = this.getRandomTarget();

        this.pigVelocity = new THREE.Vector3(0, 0, 0); // Vitesse du cochon (incluant la gravité)
    }


    // Générer une nouvelle cible aléatoire
    getRandomTarget() {
        const x = Math.random() * (this.BOUNDARY.maxX - this.BOUNDARY.minX) + this.BOUNDARY.minX;
        const z = Math.random() * (this.BOUNDARY.maxZ - this.BOUNDARY.minZ) + this.BOUNDARY.minZ;
        return new THREE.Vector3(x, 75, z); // Y reste 0 si le sol est plat
    }


    movePig(deltaTime, world) {

        this.world = world;

        if (this.world.getBlock(Math.floor(this.position.x), Math.floor(this.position.y), Math.floor(this.position.z))?.id == 0 ) {
            console.log('down');
            this.pigVelocity.y -= 0.01;
        } else if (this.world.getBlock(Math.floor(this.position.x), Math.ceil(this.position.y), Math.floor(this.position.z))?.id > 0) {
            console.log('up');
            this.pigVelocity.y += 0.05;
        } else
            this.pigVelocity.y = 0; // Annule la gravité si le cochon est sur un bloc


        // Déplace le cochon en fonction de la vélocité
        this.position.add(this.pigVelocity);

        const speed = 2; // Vitesse en unités par seconde

        // Calculer la direction vers la cible
        const direction = this.target.clone().sub(this.position).normalize();

        direction.y = 0
        // Déplacer le groupe
        this.position.add(direction.multiplyScalar(speed * deltaTime));

        // Vérifier si le groupe est proche de la cible
        if (this.position.distanceTo(this.target) < 2) {
            this.target = this.getRandomTarget(); // Nouvelle cible aléatoire
        }
        this.target.y = this.position.y;
        // Faire tourner le groupe pour qu'il regarde la cible
        this.lookAt(this.target);
        this.animatePigLegs(deltaTime);
    }

    animatePigLegs() {
        const speed = 2; // Fréquence de l'oscillation
        const angle = Math.sin(Date.now() * 0.005 * speed); // Oscillation basée sur le temps

        this.children.forEach((child) => {
            if (child.isLeg) {
                // Anime les jambes
                child.rotation.x = angle * 0.2;
            }
        });
    }
}