import * as THREE from 'three';

import {mobs} from "./mobs.js";
import {Entity} from "./Entity.js";
import {blocks} from "../block.js";

export class Pig extends Entity {

    mesh = new THREE.Group();
    radius = 2;
    height = 1;

    constructor(world, position) {
        super(world, position);

        // Création des parties du cochon
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

        // Zone dans laquelle le cochon peut se déplacer
        this.BOUNDARY = {
            minX: -50, maxX: 50,
            minZ: -50, maxZ: 50
        };

        // Définir une cible initiale
        this.target = this.getRandomTarget();

        this.pigVelocity = new THREE.Vector3(0, 0, 0); // Vitesse du cochon (incluant la gravité)

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
        console.log('hit pig');
        this.hitTime = 0.3; // seconds
        this.runTime = 3; // seconds
        this.pigVelocity.y += 0.2; // small rebound

        this.mesh.children.forEach((child, i) => {
            if (child.material) {
                child.material = this.redMaterial;
            }
        });
        this.target = this.getRandomTarget(); // Nouvelle cible aléatoire
    }

    update(deltaTime) {
        let runSpeed = 0;

        this.broadPhase();

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

        //courir
        if (this.runTime > 0) {
            this.runTime -= deltaTime;
            runSpeed = 3;
        }

        if (this.world.getBlock(Math.floor(this.mesh.position.x), Math.floor(this.mesh.position.y), Math.floor(this.mesh.position.z))?.id == 0 ) {
            //console.log('down');
            this.pigVelocity.y -= 0.01;
        } else if (this.world.getBlock(Math.floor(this.mesh.position.x), Math.ceil(this.mesh.position.y), Math.floor(this.mesh.position.z))?.id > 0) {
            //console.log('up');
            this.pigVelocity.y += 0.05;
        } else
            this.pigVelocity.y = 0; // Annule la gravité si le cochon est sur un bloc


        // Déplace le cochon en fonction de la vélocité
        this.mesh.position.add(this.pigVelocity);

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
        this.animatePigLegs(speed);
    }

    broadPhase() {
        const candidates = [];

        // Get the block extents of the player
        const minX = Math.floor(this.mesh.position.x - this.radius);
        const maxX = Math.ceil(this.mesh.position.x + this.radius);
        const minY = Math.floor(this.mesh.position.y - this.height);
        const maxY = Math.ceil(this.mesh.position.y);
        const minZ = Math.floor(this.mesh.position.z - this.radius);
        const maxZ = Math.ceil(this.mesh.position.z + this.radius);

        // Loop through all blocks next to the block the center of the player is in
        // If they aren't empty, then they are a possible collision candidate
        for (let x = minX; x <= maxX; x++) {
            for (let y = minY; y <= maxY; y++) {
                for (let z = minZ; z <= maxZ; z++) {
                    const blockId = this.world.getBlock(x, y, z)?.id;
                    if (blockId && blockId !== blocks.empty.id && blockId !== blocks.water.id) {
                        let size = {};
                        let hasStep = false;
                        if (blockId == 53 || blockId == 67) {
                            size = { x: 1, y: 1, z: 1 };
                            hasStep = true; // Ajout d'une propriété pour détecter les escaliers
                        }
                        else if (blockId == 50)
                            size = { x: 0.1, y: 0.1 };
                        else
                            size = { x: 1, y: 1, z: 1 };
                        const block = { x, y, z,  size: size, hasStep: hasStep };
                        candidates.push(block);
                        //this.addCollisionHelper(block);
                    }
                }
            }
        }

        //console.log(`Broadphase Candidates: ${candidates.length}`);

        return candidates;
    }

    animatePigLegs(speed) {
        const angle = Math.sin(Date.now() * 0.005 * speed * 2); // Oscillation basée sur le temps

        this.mesh.children.forEach((child) => {
            if (child.isLeg) {
                // Anime les jambes
                child.rotation.x = angle * 0.2;
            }
        });
    }
}