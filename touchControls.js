import * as THREE from 'three';

export class TouchControls {
    constructor(camera, domElement) {
        this.camera = camera;
        this.domElement = domElement;

        //bloc roulis
        this.camera.rotation.order = 'YXZ';

        this.enabled = true;
        this.rotationSpeed = 0.005;

        // ✅ on suit UN doigt pour la rotation, même si un autre doigt est sur les boutons
        this.lookTouchId = null;
        this.lastTouch = { x: 0, y: 0 };

        this.yaw = 0;
        this.pitch = 0;

        this.init();
    }

    init() {
        this.domElement.addEventListener('touchstart', this.onTouchStart.bind(this), { passive: false });
        this.domElement.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: false });
        this.domElement.addEventListener('touchend', this.onTouchEnd.bind(this), { passive: false });
        this.domElement.addEventListener('touchcancel', this.onTouchEnd.bind(this), { passive: false });
    }

    onTouchStart(event) {
        if (!this.enabled) return;
        event.preventDefault();

        // Si on n’a pas encore de doigt “look”, on prend le premier touch qui commence sur le canvas
        if (this.lookTouchId === null && event.changedTouches.length > 0) {
            const t = event.changedTouches[0];
            this.lookTouchId = t.identifier;
            this.lastTouch.x = t.clientX;
            this.lastTouch.y = t.clientY;
        }
    }

    onTouchMove(event) {
        if (!this.enabled || this.lookTouchId === null) return;
        event.preventDefault();

        // Retrouver le touch qu’on suit (même si event.touches.length === 2+)
        let touch = null;
        for (let i = 0; i < event.touches.length; i++) {
            const t = event.touches[i];
            if (t.identifier === this.lookTouchId) {
                touch = t;
                break;
            }
        }
        if (!touch) return;

        const deltaX = touch.clientX - this.lastTouch.x;
        const deltaY = touch.clientY - this.lastTouch.y;

        this.lastTouch.x = touch.clientX;
        this.lastTouch.y = touch.clientY;

        this.yaw -= deltaX * this.rotationSpeed;
        this.pitch -= deltaY * this.rotationSpeed;
        this.pitch = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.pitch));

        this.updateCameraRotation();
    }

    onTouchEnd(event) {
        if (this.lookTouchId === null) return;

        for (let i = 0; i < event.changedTouches.length; i++) {
            if (event.changedTouches[i].identifier === this.lookTouchId) {
                this.lookTouchId = null;
                break;
            }
        }
    }

    updateCameraRotation() {
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