import * as THREE from 'three';
import { GroundMob } from './GroundMob.js';

function pixelMaterial(color, face = false) {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 16;
    const context = canvas.getContext('2d');
    const base = new THREE.Color(color);
    for (let y = 0; y < 16; y++) {
        for (let x = 0; x < 16; x++) {
            const shade = 0.85 + ((x * 13 + y * 7) % 11) / 40;
            context.fillStyle = `#${base.clone().multiplyScalar(shade).getHexString()}`;
            context.fillRect(x, y, 1, 1);
        }
    }
    if (face) {
        context.fillStyle = '#17241b';
        context.fillRect(3, 6, 3, 2);
        context.fillRect(10, 6, 3, 2);
        context.fillRect(5, 11, 6, 2);
        context.fillStyle = '#527e44';
        context.fillRect(7, 8, 2, 3);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    return new THREE.MeshLambertMaterial({ map: texture });
}

export class Zombie extends GroundMob {
    constructor(world, position, player) {
        super(world, position, { speed: 1.2 });
        this.player = player;
        this.health = 10;
        this.detectionRange = 16;
        this.attackRange = 1.4;
        this.stopDistance = 0.75;
        this.attackCooldown = 0;
        this.repathCooldown = 0;
        this.hitTime = 0;
        this.animationTime = 0;
        this.mesh = new THREE.Group();
        const skin = pixelMaterial(0x628a47);
        const shirt = pixelMaterial(0x278b8e);
        const pants = pixelMaterial(0x514475);
        const face = pixelMaterial(0x628a47, true);
        const part = (size, position, material) => {
            const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
            mesh.position.set(...position);
            mesh.userData.entity = this;
            mesh.castShadow = mesh.receiveShadow = true;
            this.mesh.add(mesh);
            return mesh;
        };
        this.legs = [-0.15, 0.15].map(x => part([0.28, 0.7, 0.28], [x, 0.35, 0], pants));
        part([0.6, 0.7, 0.3], [0, 1.05, 0], shirt);
        part([0.5, 0.5, 0.5], [0, 1.65, 0], [skin, skin, skin, skin, face, skin]);
        for (const x of [-0.43, 0.43]) {
            const arm = part([0.25, 0.7, 0.25], [x, 1.25, 0.3], skin);
            arm.rotation.x = -Math.PI / 2;
        }
        // Les blocs sont centrés sur Y entier : leur dessus est à Y + 0.5,
        // alors que le pathfinder place le nœud des pieds à Y + 1.
        this.mesh.children.forEach(child => child.position.y -= 0.5);
        this.originalMaterials = this.mesh.children.map(child => child.material);
        this.redMaterial = new THREE.MeshLambertMaterial({ color: 0xff5555 });
        this.mesh.position.copy(this.position);
    }

    hasLineOfSight(target) {
        const from = this.position.clone().add(new THREE.Vector3(0, 1, 0));
        const to = target.clone().add(new THREE.Vector3(0, 1, 0));
        const steps = Math.ceil(from.distanceTo(to) * 5);
        for (let i = 1; i < steps; i++) {
            const point = from.clone().lerp(to, i / steps);
            const block = this.world.getBlock(Math.floor(point.x), Math.floor(point.y), Math.floor(point.z));
            if (!block || (block.id !== 0 && block.id !== 9)) return false;
        }
        return true;
    }

    update(dt) {
        if (this.health <= 0) return;
        this.attackCooldown = Math.max(0, this.attackCooldown - dt);
        this.repathCooldown -= dt;
        if (this.hitTime > 0) {
            this.hitTime -= dt;
            if (this.hitTime <= 0) {
                this.mesh.children.forEach((child, index) => child.material = this.originalMaterials[index]);
            }
        }

        // La position du joueur est à hauteur des yeux ; les nœuds sont aux pieds.
        const feet = this.player.position.clone();
        feet.y -= this.player.height;
        const distance = this.position.distanceTo(feet);
        const alive = this.player.health?.health > 0;
        if (!alive || distance > this.detectionRange) {
            this.invalidatePath();
        } else {
            const visible = distance <= this.attackRange && this.hasLineOfSight(feet);
            if (visible && this.attackCooldown === 0) {
                this.player.takeDamage(2, { type: 'mob', cooldownMs: 500 });
                this.attackCooldown = 1;
                if (!this.hasPath()) this.repathCooldown = 0;
            }

            // Une attaque ne bloque pas la navigation pendant son cooldown.
            if (visible && distance <= this.stopDistance) {
                this.invalidatePath();
                this.repathCooldown = 0;
            } else if (this.repathCooldown <= 0) {
                const start = this.toGroundNode(this.position);
                const goal = this.toGroundNode(feet);
                this.path = this.findPath(start, goal, 1500, 24);
                this.pathIndex = 0;
                this.repathCooldown = 0.75;
            }
        }

        this.followPath(dt);
        this.updateGravity(dt);
        this.mesh.position.copy(this.position);
        this.animationTime += dt;
        this.legs.forEach((leg, index) => {
            leg.rotation.x = this.hasPath() ? Math.sin(this.animationTime * 7 + index * Math.PI) * 0.35 : 0;
        });
    }

    toGroundNode(position) {
        return { x: Math.floor(position.x), y: Math.round(position.y), z: Math.floor(position.z) };
    }

    hit(player) {
        if (this.health <= 0) return;
        super.hit(player);
        this.audioManager.playBlockSound('zombie', this.health <= 0 ? 'death' : 'hurt');
        if (this.health <= 0) return;
        this.hitTime = 0.3;
        this.mesh.children.forEach(child => child.material = this.redMaterial);
        this.invalidatePath();
        this.repathCooldown = 0;
    }
}
