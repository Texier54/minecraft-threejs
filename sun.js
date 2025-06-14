import * as THREE from "three";

export class Sun {


    constructor(scene, player, time) {
        this.scene = scene;
        this.sun = new THREE.DirectionalLight();
        this.time = time;
        this.setupLights();
        this.player = player
        this.dayDuration = 1200 * 1000; // Durée d'un cycle complet (60 secondes par exemple)

        /*
        const sunGeometry = new THREE.BoxGeometry(5, 5, 5);
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Couleur jaune éclatante
        sunMaterial.fog = false;
        this.sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
        //this.sunMesh.rotation.set(2, 0, 0);
        this.sunMesh.position.set(50, 100, 50); // Même position que la DirectionalLight
        scene.add(this.sunMesh);
        */


        const tex = new THREE.TextureLoader().load('images/environment/sun_light.png');
        tex.magFilter = tex.minFilter = THREE.NearestFilter;
        tex.generateMipmaps = false;
        this.sunMesh  = new THREE.Sprite(new THREE.SpriteMaterial({map: tex, transparent: true, fog: false}));
        this.sunMesh.position.set(0, 100, 0);      // dans le champ
        this.sunMesh.scale.set(8, 8, 1);          // carré 16×16 « pixel art »
        scene.add(this.sunMesh);
    }

    setupLights() {
        this.sun.intensity = 1.5;
        this.sun.position.set(50, 120, -10);
        this.sun.castShadow = true;

        // Set the size of the sun's shadow box
        this.sun.shadow.camera.left = -40;
        this.sun.shadow.camera.right = 40;
        this.sun.shadow.camera.top = 40;
        this.sun.shadow.camera.bottom = -40;
        this.sun.shadow.camera.near = 0.1;
        this.sun.shadow.camera.far = 200;
        this.sun.shadow.bias = -0.0001;
        this.sun.shadow.mapSize = new THREE.Vector2(2048, 2048);
        this.scene.add(this.sun);
        this.scene.add(this.sun.target);

        //helper pour la position du sun
        const shadownHelper = new THREE.CameraHelper(this.sun.shadow.camera)
        //this.scene.add(shadownHelper);

        const ambient = new THREE.AmbientLight();
        ambient.intensity = 0.1;
        this.scene.add(ambient);
    }

    update(deltaTime) {
        // Position the sun relative to the player. Need to adjust both the
        // position and target of the sun to keep the same sun angle
        //this.sun.position.copy(this.player.camera.position);
        //this.sun.position.sub(new THREE.Vector3(-50, -80, -50));
        //this.sun.target.position.copy(this.player.camera.position);
        this.updateDayNightCycle(deltaTime);
    }


    updateDayNightCycle(deltaTime) {
        this.time += deltaTime / this.dayDuration;
        if (this.time > 1) this.time = 0; // Recommence un nouveau cycle

        // Calculer l'angle du soleil
        const angle = this.time * Math.PI * 2; // De 0 à 360°

        this.sun.position.copy(this.player.camera.position);
        this.sun.position.sub(new THREE.Vector3(-Math.cos(angle) * 50, -(Math.sin(angle) * 50), -10));

        this.sunMesh.position.copy(this.player.camera.position);
        this.sunMesh.position.sub(new THREE.Vector3(-Math.cos(angle) * 50, -(Math.sin(angle) * 50), -10));

        //this.sun.position.set(Math.cos(angle) * 50, Math.sin(angle) * 50+60, -10);


        // Modifier l'intensité en fonction de la hauteur du soleil
        //this.sunLight.intensity = Math.max(0, Math.sin(angle)); // Plus bas = plus sombre

        this.sunMesh.material.rotation = -this.player.camera.rotation.z;

        this.sun.target.position.copy(this.player.camera.position);
        /*
        // Modifier la couleur du ciel
        const skyColor = new THREE.Color().lerpColors(
            new THREE.Color(0x80a0e0), // Bleu ciel (jour)
            new THREE.Color(0x000011), // Nuit noire
            Math.max(0, 1 - Math.sin(angle))
        );
        scene.background = skyColor;

         */
    }

    getTime() {
        let total_minutes = this.time * 24 * 60
        let hours = parseInt(total_minutes / 60)
        let minutes = parseInt(total_minutes % 60)
        return hours+'H'+minutes;
    }


}