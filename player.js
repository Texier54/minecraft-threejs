import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

export class Player {

    radius = 0.5;
    height = 1.8;
    maxSpeed = 10;
    input = new THREE.Vector3();
    velocity = new THREE.Vector3(0, 0, 0);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

    // Contrôle en première personne avec "PointerLockControls"
    controls = new PointerLockControls(this.camera, document.body);



    constructor(scene) {

        //this.player.position.set(0, 5, 0);
        this.position.set(0, 2, 0);
        scene.add(this.camera);


        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));

        document.body.addEventListener('click', () => {
            this.controls.lock();
        });
    }

    applyInputs(dt) {
        if (this.controls.isLocked) {
            this.velocity.x = this.input.x;
            this.velocity.z = this.input.z;
            this.controls.moveRight(this.velocity.x * dt);
            this.controls.moveForward(this.velocity.z * dt);

            document.getElementById('player-position').innerHTML = this.toString();
        }
    }

    onKeyDown(event) {
        if (event.key === 'z') this.input.z = this.maxSpeed;
        if (event.key === 's') this.input.z = -this.maxSpeed;
        if (event.key === 'q') this.input.x = -this.maxSpeed;
        if (event.key === 'd') this.input.x = this.maxSpeed;
        if (event.key === ' ') keys.jump = true;
        if (event.key === 'Shift') keys.speed = true;
    }

    onKeyUp(event) {
        if (event.key === 'z') this.input.z = 0;
        if (event.key === 's') this.input.z = 0;
        if (event.key === 'q') this.input.x = 0;
        if (event.key === 'd') this.input.x = 0;
        if (event.key === ' ') keys.jump = false;
        if (event.key === 'Shift') keys.speed = false;
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