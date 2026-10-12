import * as THREE from 'three';
import { GroundMob } from './GroundMob.js';

// Déplacement commun des animaux terrestres : chemins, sauts et gravité.
export class GroundAnimal extends GroundMob {
    repathCooldown = 0;
    stuckTime = 60;
    lastPos = new THREE.Vector3();

    constructor(world, position, soundName) {
        super(world, position, {
            speed: 1.5,
            height: 2,
            maxPathDistance: 32,
            maxPathNodes: 1500,
            repathInterval: 2000
        });
        this.soundName = soundName;
        this.BOUNDARY = { minX: -50, maxX: 50, minZ: -50, maxZ: 50 };
        this.hitTime = 0;
        this.runTime = 0;
    }

    // Appelé après la création du mesh et de ses matériaux par chaque animal.
    initializeAnimal() {
        this.mesh.position.copy(this.position);
        this.lastPos.copy(this.position);
        this.setTarget(this.getRandomTarget());
        this.originalMaterials = this.mesh.children.map(child => child.material);
        this.redMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    }

    // Générer une nouvelle cible aléatoire
    getRandomTarget() {
        const x = Math.random() * (this.BOUNDARY.maxX - this.BOUNDARY.minX) + this.BOUNDARY.minX;
        const z = Math.random() * (this.BOUNDARY.maxZ - this.BOUNDARY.minZ) + this.BOUNDARY.minZ;
        const y = this.getGroundYAt(Math.floor(x), Math.floor(z), Math.floor(this.position.y));
        return {x: x, y: y, z: z};
    }

    hit(player) {
        if (this.health <= 0) return;

        super.hit(player);
        if (this.health <= 0) {
            this.audioManager.playBlockSound(this.soundName, 'death');
            return;
        }

        this.hitTime = 0.3; // seconds
        this.runTime = 3; // seconds
        this.verticalVelocity.y += 0.2; // small rebound

        this.mesh.children.forEach(child => {
            if (child.material) {
                child.material = this.redMaterial;
            }
        });
        this.target = this.getRandomTarget(); // Nouvelle cible aléatoire
        this.audioManager.playBlockSound(this.soundName, 'hurt');
        // reset current path so it replans away from the hitter
        this.path = [];
        this.pathIndex = 0;

    }

    update(deltaTime) {
        let runSpeed = 0;

        // --- simple stuck detector (helps trigger replanning) ---
        if (this.lastPos.distanceToSquared(this.mesh.position) < 0.0004) { // ~2 cm
            this.stuckTime += deltaTime;
        } else {
            this.stuckTime = 0;
            this.lastPos.copy(this.mesh.position);
        }

        // cooldown before recomputing a path (prevents heavy A* every frame)
        if (this.repathCooldown > 0) this.repathCooldown -= deltaTime;

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

        // --- PATHFINDING: compute path if needed ---
        const distToTarget = this.mesh.position.distanceTo(this.target);
        if ((this.path.length === 0 && distToTarget > 2) || this.stuckTime > 0.75) {
            if (this.repathCooldown <= 0) {
                const start = new THREE.Vector3(
                    Math.floor(this.mesh.position.x),
                    Math.floor(this.mesh.position.y),
                    Math.floor(this.mesh.position.z)
                );
                const goal = new THREE.Vector3(
                    Math.floor(this.target.x),
                    Math.floor(this.target.y),
                    Math.floor(this.target.z)
                );
                const newPath = this.findPath(start, goal, 3000, 32);
                if (newPath && newPath.length) {
                    this.path = newPath;
                    this.pathIndex = 0;
                } else {
                    // fallback: pick a new random target if no path
                    this.target = this.getRandomTarget();
                }
                this.repathCooldown = 0.5; // limit A* frequency
                this.stuckTime = 0;
            }
        }

        const speed = 1 + runSpeed; // base speed

        if (!this.hasPath() && distToTarget < 2) {
            this.target = this.getRandomTarget();
        }
        this.followPath(deltaTime, speed);
        this.animateLegs(this.hasPath() ? speed : 0);

        this.updateGravity(deltaTime);
        this.mesh.position.copy(this.position);
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
}
