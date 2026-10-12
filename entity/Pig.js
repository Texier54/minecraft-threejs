import * as THREE from 'three';

import {mobs} from "./mobs.js";
import {GroundAnimal} from "./GroundAnimal.js";
import {blocks} from "../block.js";

export class Pig extends GroundAnimal {

    mesh = new THREE.Group();

    health = 10;
    drops = [
        { block: blocks.porkchop.id, min: 1, max: 1 }
    ];

    constructor(world, position) {
        super(world, position, 'pig');

        // Création des parties de cochon
        const bodyGeometry = new THREE.BoxGeometry(0.9, 0.7, 1.6); // Corps (rectangle)
        const headGeometry = new THREE.BoxGeometry(0.7, 0.7, 0.7); // Tête (cube)
        const noiseGeometry = new THREE.BoxGeometry(0.32, 0.25, 0.1); // Tête (cube)
        const legGeometry = new THREE.BoxGeometry(0.4, 0.5, 0.4); // Pattes (petits cubes)

        // Corps
        const body = new THREE.Mesh(bodyGeometry, mobs.pig.body.material);
        body.position.set(0, 0.6, 0);
        body.userData.entity = this;
        this.mesh.add(body);


        // Tête
        const head = new THREE.Mesh(headGeometry, mobs.pig.head.material);
        head.position.set(0, 0.8, 1);
        head.userData.entity = this;
        this.mesh.add(head);

        const noise = new THREE.Mesh(noiseGeometry, mobs.pig.noise.material);
        noise.position.set(0, 0.7, 1.4);
        noise.userData.entity = this;
        this.mesh.add(noise);

        // Pattes (quatre cubes)
        for (let i = 0; i < 4; i++) {
            const leg = new THREE.Mesh(legGeometry, mobs.pig.feet.material);
            leg.userData.entity = this;
            leg.position.set(
                i < 2 ? -0.25 : 0.25, // Gauche/droite
                0, // Hauteur des pattes
                i % 2 === 0 ? -0.7 : 0.6 // Avant/arrière
            );
            leg.isLeg = true; // Identifie cet objet comme une jambe
            this.mesh.add(leg);
        }

        this.initializeAnimal();
    }
}
