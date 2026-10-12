import * as THREE from 'three';
import { Entity } from './Entity.js';
import { blocks } from '../block.js';

// Déplacement commun des animaux terrestres : chemins, sauts et gravité.
export class GroundAnimal extends Entity {
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
        this.animalVelocity = new THREE.Vector3();
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
        this.animalVelocity.y += 0.2; // small rebound

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

    followPath(deltaTime, speed = this.speed) {
        if (!this.hasPath()) {
            this.path = [];
            this.pathIndex = 0;
            this.velocity.x = 0;
            this.velocity.z = 0;
            return;
        }

        const node = this.path[this.pathIndex];
        const dx = node.x + 0.5 - this.position.x;
        const dz = node.z + 0.5 - this.position.z;
        const distance = Math.hypot(dx, dz);
        if (distance < 0.15 && Math.abs(node.y - this.position.y) < 0.15) {
            this.pathIndex++;
            return;
        }
        if (distance < 0.000001) return;

        // Tourner progressivement par le plus court angle, même à +/- PI.
        const desiredAngle = Math.atan2(dx, dz);
        const angle = desiredAngle - this.mesh.rotation.y;
        const shortestAngle = Math.atan2(Math.sin(angle), Math.cos(angle));
        const turn = 3 * deltaTime;
        this.mesh.rotation.y += Math.max(-turn, Math.min(turn, shortestAngle));

        const travel = Math.min(distance, speed * deltaTime);
        const nextX = this.position.x + dx / distance * travel;
        const nextZ = this.position.z + dz / distance * travel;
        const enteringStep = Math.floor(nextX) === node.x && Math.floor(nextZ) === node.z;

        if (node.y > this.position.y + 0.01 && enteringStep) {
            // Sauter depuis le sol, puis attendre de dépasser le bord de la marche.
            const groundY = Math.round(this.position.y);
            if (Math.abs(this.position.y - groundY) < 0.05 &&
                this.animalVelocity.y === 0 &&
                this.pathfinder.canStandAt(Math.floor(this.position.x), groundY, Math.floor(this.position.z)) &&
                this.pathfinder.canMoveBetween(
                    { x: Math.floor(this.position.x), y: groundY, z: Math.floor(this.position.z) }, node
                )) {
                this.animalVelocity.y = Math.sqrt(2 * 20 * (node.y - groundY + 0.2));
            }
            return;
        }

        this.velocity.x = dx / distance * speed;
        this.velocity.z = dz / distance * speed;
        this.position.x = nextX;
        this.position.z = nextZ;
    }

    updateGravity(deltaTime) {
        // La position logique est la source de vérité, comme dans Entity.update().
        const x = Math.floor(this.position.x);
        const z = Math.floor(this.position.z);
        const previousY = this.position.y;
        this.animalVelocity.y -= 20 * deltaTime;
        const nextY = previousY + this.animalVelocity.y * deltaTime;

        // Balayer tous les niveaux traversés pour ne pas passer à travers le sol.
        if (this.animalVelocity.y <= 0) {
            for (let y = Math.floor(previousY); y >= Math.floor(nextY); y--) {
                const block = this.world.getBlock(x, y - 1, z);
                if (block == null) {
                    // Attendre le chargement du chunk plutôt que tomber dans le vide.
                    this.animalVelocity.y = 0;
                    return;
                }
                if (block.id !== blocks.empty.id && block.id !== blocks.water.id &&
                    block.id != null && nextY <= y) {
                    this.position.y = y;
                    this.animalVelocity.y = 0;
                    return;
                }
            }
        }
        this.position.y = nextY;
    }

    // ---- PATHFINDING HELPERS ----
    getGroundYAt(x, z, aroundY) {
        // search small vertical window around current Y for a valid walkable cell
        const y0 = Math.max(aroundY - 3, 1);
        const y1 = aroundY + 3;
        for (let y = y1; y >= y0; y--) {
            if (this.isWalkable(x, y, z)) return y;
        }
        // fallback to aroundY
        return aroundY;
    }

    isWalkable(x, y, z) {
        const below = this.world.getBlock(x, y - 1, z)?.id || 0;
        const body  = this.world.getBlock(x, y, z)?.id || 0;
        const head  = this.world.getBlock(x, y + 1, z)?.id || 0;
        // floor must be solid (not empty/water), and body/head empty
        const solidFloor = (below && below !== blocks.empty.id && below !== blocks.water.id);
        const freeBody   = (body === 0 || body === blocks.empty.id || body === blocks.water.id);
        const freeHead   = (head === 0 || head === blocks.empty.id || head === blocks.water.id);
        return solidFloor && freeBody && freeHead;
    }

    findPath(start, goal, maxNodes = 3000, maxRadius = 32) {
        const groundedStart = { x: start.x, z: start.z,
            y: this.getGroundYAt(start.x, start.z, start.y) };
        const groundedGoal = { x: goal.x, z: goal.z,
            y: this.getGroundYAt(goal.x, goal.z, goal.y) };
        this.pathfinder.maxNodes = maxNodes;
        this.pathfinder.maxDistance = maxRadius;
        const path = this.pathfinder.findPath(groundedStart, groundedGoal);
        return path ? path.slice(1) : [];
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
