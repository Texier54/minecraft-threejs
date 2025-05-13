import * as THREE from 'three';
export class Entity {
    constructor(world, position) {
        this.world = world;
        console.log(position);
        this.position = position.clone();
        this.velocity = new THREE.Vector3(0, 0, 0);
        this.mesh = null;
        this.boundingBox = new THREE.Box3();
    }

    update(dt) {
        this.position.addScaledVector(this.velocity, dt);
        if (this.mesh) this.mesh.position.copy(this.position);
    }

    addToScene(scene) {
        if (this.mesh) scene.add(this.mesh);
    }

    removeFromScene(scene) {
        if (this.mesh) scene.remove(this.mesh);
    }

    action() {
        console.log('Default action');
    }

    hit() {
        console.log('Default hit');
    }
}