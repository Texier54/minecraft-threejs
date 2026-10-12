import * as THREE from 'three';

import {mobs} from "./mobs.js";
import {GroundAnimal} from "./GroundAnimal.js";
import {blocks} from "../block.js";

export class Cow extends GroundAnimal {

    mesh = new THREE.Group();
    health = 10;
    drops = [
        { block: blocks.beef.id, min: 1, max: 1 }
    ];

    constructor(world, position) {
        super(world, position, 'cow');

        // Création des parties de la vache
        const bodyGeometry = new THREE.BoxGeometry(0.9, 0.8, 1.6); // Corps (rectangle)
        const headGeometry = new THREE.BoxGeometry(0.7, 0.7, 0.5); // Tête
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

        this.initializeAnimal();
    }
}
