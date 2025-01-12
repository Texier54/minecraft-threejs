import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

export class Player {

    radius = 0.5;
    height = 1.8;
    maxSpeed = 10;

    jumpSpeed = 10;
    onGround = false;

    input = new THREE.Vector3();
    velocity = new THREE.Vector3(0, 0, 0);
    #wolrdVelocity = new THREE.Vector3();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

    // Contrôle en première personne avec "PointerLockControls"
    controls = new PointerLockControls(this.camera, document.body);



    constructor(scene) {

        //this.player.position.set(0, 5, 0);
        this.position.set(10, 20, 10);
        scene.add(this.camera);


        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));

        //wireframe mesh visualizing the palyer's bounding cylinder
        this.boundsHelper = new THREE.Mesh(
            new THREE.CylinderGeometry(this.radius, this.radius, this.height, 16),
            new THREE.MeshBasicMaterial({ wireframe: true})
        )
        scene.add(this.boundsHelper);

        document.body.addEventListener('click', () => {
            this.controls.lock();
        });
    }

    get worldVelocity() {
        this.#wolrdVelocity.copy(this.velocity);
        this.#wolrdVelocity.applyEuler(new THREE.Euler(0, this.camera.rotation.y, 0));
        return this.#wolrdVelocity;
    }

    applyWorldDeltaVelocity(dv) {
        dv.applyEuler(new THREE.Euler(0, -this.camera.rotation.y, 0));
        this.velocity.add(dv);
    }

    applyInputs(dt) {
        if (this.controls.isLocked) {
            this.velocity.x = this.input.x;
            this.velocity.z = this.input.z;
            this.controls.moveRight(this.velocity.x * dt);
            this.controls.moveForward(this.velocity.z * dt);
            this.position.y += this.velocity.y * dt;

            document.getElementById('player-position').innerHTML = this.toString();
        }
    }

    updateBoundsHelper() {
        this.boundsHelper.position.copy(this.position);
        this.boundsHelper.position.y -= this.height /2;
    }

    onKeyDown(event) {
        if (event.key === 'Shift') keys.speed = true;
        if (event.key === 'z') this.input.z = this.maxSpeed;
        if (event.key === 's') this.input.z = -this.maxSpeed;
        if (event.key === 'q') this.input.x = -this.maxSpeed;
        if (event.key === 'd') this.input.x = this.maxSpeed;
        if (event.key === ' ') if (this.onGround) this.velocity.y += this.jumpSpeed;
    }

    onKeyUp(event) {
        if (event.key === 'z') this.input.z = 0;
        if (event.key === 's') this.input.z = 0;
        if (event.key === 'q') this.input.x = 0;
        if (event.key === 'd') this.input.x = 0;
    }

    // renvoi la position du player dans le world
    get position() {
        return this.camera.position;
    }

    toString() {
        let str = '';
        str += `X: ${this.position.x.toFixed(3)} `;
        str += `Y: ${this.position.y.toFixed(3)} `;
        str += `Z: ${this.position.z.toFixed(3)}`;
        return str;
    }

}