import * as THREE from 'three';
import { Entity } from './Entity.js';
import { blocks } from '../block.js';

// Physique et navigation communes aux mobs terrestres, passifs ou hostiles.
export class GroundMob extends Entity {
    constructor(world, position, options = {}) {
        super(world, position, { speed: 1.5, height: 2, ...options });
        this.verticalVelocity = new THREE.Vector3();
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
                this.verticalVelocity.y === 0 &&
                this.pathfinder.canStandAt(Math.floor(this.position.x), groundY, Math.floor(this.position.z)) &&
                this.pathfinder.canMoveBetween(
                    { x: Math.floor(this.position.x), y: groundY, z: Math.floor(this.position.z) }, node
                )) {
                this.verticalVelocity.y = Math.sqrt(2 * 20 * (node.y - groundY + 0.2));
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
        this.verticalVelocity.y -= 20 * deltaTime;
        const nextY = previousY + this.verticalVelocity.y * deltaTime;

        // Balayer tous les niveaux traversés pour ne pas passer à travers le sol.
        if (this.verticalVelocity.y <= 0) {
            for (let y = Math.floor(previousY); y >= Math.floor(nextY); y--) {
                const block = this.world.getBlock(x, y - 1, z);
                if (block == null) {
                    // Attendre le chargement du chunk plutôt que tomber dans le vide.
                    this.verticalVelocity.y = 0;
                    return;
                }
                if (block.id !== blocks.empty.id && block.id !== blocks.water.id &&
                    block.id != null && nextY <= y) {
                    this.position.y = y;
                    this.verticalVelocity.y = 0;
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

}
