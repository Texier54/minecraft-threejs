import * as THREE from 'three';

export class TouchControls {
    constructor(camera, domElement) {
        this.camera = camera;
        this.domElement = domElement;

        //bloc roulis
        this.camera.rotation.order = 'YXZ';

        this.enabled = true;
        this.rotationSpeed = 0.005;

        this.isTouching = false;
        this.lastTouch = { x: 0, y: 0 };
        this.yaw = 0;
        this.pitch = 0;

        this.init();
    }

    init() {
        this.domElement.addEventListener('touchstart', this.onTouchStart.bind(this), false);
        this.domElement.addEventListener('touchmove', this.onTouchMove.bind(this), false);
        this.domElement.addEventListener('touchend', this.onTouchEnd.bind(this), false);
    }

    onTouchStart(event) {
        if (event.touches.length === 1) {
            this.isTouching = true;
            this.lastTouch.x = event.touches[0].clientX;
            this.lastTouch.y = event.touches[0].clientY;
        }
    }

    onTouchMove(event) {
        if (!this.enabled || !this.isTouching) return;
        if (event.touches.length !== 1) return;

        const touch = event.touches[0];

        const deltaX = touch.clientX - this.lastTouch.x;
        const deltaY = touch.clientY - this.lastTouch.y;

        this.lastTouch.x = touch.clientX;
        this.lastTouch.y = touch.clientY;

        this.yaw -= deltaX * this.rotationSpeed;
        this.pitch -= deltaY * this.rotationSpeed;
        this.pitch = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.pitch));

        this.updateCameraRotation();
    }

    onTouchEnd() {
        this.isTouching = false;
    }

    updateCameraRotation() {
        //this.camera.rotation.set(this.pitch, this.yaw, 0);
        this.camera.rotation.x = this.pitch;
        this.camera.rotation.y = this.yaw;
        this.camera.rotation.z = 0;
    }

    moveForward(distance) {
        const direction = new THREE.Vector3();
        this.camera.getWorldDirection(direction);
        direction.y = 0;
        direction.normalize();
        this.camera.position.addScaledVector(direction, distance);
    }

    moveRight(distance) {
        const direction = new THREE.Vector3();
        this.camera.getWorldDirection(direction);
        direction.y = 0;
        direction.normalize();
        direction.cross(this.camera.up);
        this.camera.position.addScaledVector(direction, distance);
    }
}