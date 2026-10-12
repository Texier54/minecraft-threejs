import * as THREE from 'three';
import {AudioManager} from "../AudioManager.js";
import {Pathfinder} from "./Pathfinder.js";

export class Entity {
    constructor(world, position, options = {}) {
        this.world = world;
        console.log(position);
        this.position = position.clone();
        this.velocity = new THREE.Vector3(0, 0, 0);
        this.mesh = null;
        this.boundingBox = new THREE.Box3();
        this.audioManager = new AudioManager();


        this.speed = options.speed ?? 2;
        this.height = options.height ?? 2;

        this.pathfinder = new Pathfinder(
            world,
            {
                entityHeight: Math.ceil(this.height),
                maxDistance: options.maxPathDistance ?? 32,
                maxNodes: options.maxPathNodes ?? 1500
            }
        );

        this.path = [];
        this.pathIndex = 0;

        this.target = null;

        this.repathInterval =
            options.repathInterval ?? 500;

        this.repathTimer = 0;

        this.arrivalDistance =
            options.arrivalDistance ?? 0.15;

        this.mesh = options.mesh ?? null;
    }

    update(deltaTime) {
        if (this.target) {
            if (!this.hasPath()) {
                this.updatePathfinding(deltaTime);
            }
            this.followPath(deltaTime);
        } else {
            this.velocity.x = 0;
            this.velocity.z = 0;
        }

        this.position.addScaledVector(this.velocity, deltaTime);

        if (this.mesh) {
            this.mesh.position.copy(this.position);
        }
    }

    addToScene(scene) {
        if (this.mesh) scene.add(this.mesh);
    }

    removeToScene(scene) {
        if (this.mesh) scene.remove(this.mesh);
    }


    removeFromScene(scene) {
        if (this.mesh) scene.remove(this.mesh);
    }

    action() {
        console.log('Default action');
    }

    hit(player) {
        this.health -= 0.5;
        if (this.health <= 0) {
            this.dropLoot(player);
            this.world.removeEntity(this);
        }
    }
    dropLoot(player) {
        if (!this.drops) return;
        for (const drop of this.drops) {
            const qty = Math.floor(
                Math.random() * (drop.max - drop.min + 1)
            ) + drop.min;
            for (let i = 0; i < qty; i++) {
                player.inventory.addBlock(drop.block);
            }
        }
    }

    getPosition() {
        return this.position;
    }

    setPosition(x, y, z) {
        this.position.set(x, y, z);

        if (this.mesh) {
            this.mesh.position.copy(this.position);
        }
    }

    setTarget(entity) {
        this.target = entity;
        this.invalidatePath();
    }

    clearTarget() {
        this.target = null;
        this.invalidatePath();
        this.velocity.set(0, 0, 0);
    }

    invalidatePath() {
        this.path = [];
        this.pathIndex = 0;
        this.repathTimer = 0;
    }

    updatePathfinding(deltaTime) {
        this.repathTimer -= deltaTime * 1000;

        if (this.repathTimer > 0) {
            return;
        }

        this.repathTimer = this.repathInterval;

        const newPath =
        this.pathfinder.findPath(
                this.position,
                this.target
            );

        if (!newPath) {
            this.path = [];
            this.pathIndex = 0;
            return;
        }

        this.path = newPath;

        /*
         * Le premier noeud correspond généralement
         * à la position actuelle.
         */
        this.pathIndex = 1;
    }

    followPath(deltaTime) {
        if (
            !this.path ||
            this.path.length === 0 ||
            this.pathIndex >= this.path.length
        ) {
            this.velocity.x = 0;
            this.velocity.z = 0;
            return;
        }

        const node =
            this.path[this.pathIndex];

        const targetPosition =
            new THREE.Vector3(
                node.x + 0.5,
                node.y,
                node.z + 0.5
            );

        const direction =
            targetPosition.clone()
                .sub(this.position);

        /*
         * On ignore Y pour le déplacement horizontal.
         */
        direction.y = 0;

        const distance =
            direction.length();

        if (
            distance <= this.arrivalDistance
        ) {
            this.pathIndex++;

            if (
                this.pathIndex >= this.path.length
            ) {
                this.velocity.x = 0;
                this.velocity.z = 0;
            }

            return;
        }

        direction.normalize();

        this.velocity.x =
            direction.x * this.speed;

        this.velocity.z =
            direction.z * this.speed;

        /*
         * Orientation du mob.
         */
        if (this.mesh) {
            this.mesh.rotation.y =
                Math.atan2(
                    direction.x,
                    direction.z
                );
        }
    }

    getPath() {
        return this.path;
    }

    hasPath() {
        return (
            this.path &&
            this.path.length > 0 &&
            this.pathIndex < this.path.length
        );
    }
}