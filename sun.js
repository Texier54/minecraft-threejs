import * as THREE from 'three';

export class Sun {
    constructor(scene, player, time = 0.35) {
        this.scene = scene;
        this.player = player;
        this.time = time;
        this.dayDuration = 20 * 60 * 1000;
        this.elapsed = 0;
        this.dayCount = 0;
        this.direction = new THREE.Vector3();
        this.dayHorizon = new THREE.Color(0xb5d5f5);
        this.dayZenith = new THREE.Color(0x6b9fe8);
        this.nightHorizon = new THREE.Color(0x111b35);
        this.nightZenith = new THREE.Color(0x030714);
        this.sunset = new THREE.Color(0xec9d72);
        this.airFog = scene.fog;
        this.setupSky();
        this.setupLights();
        this.update(0);
    }

    setupSky() {
        this.skyMaterial = new THREE.ShaderMaterial({
            uniforms: {
                horizon: { value: new THREE.Color() },
                zenith: { value: new THREE.Color() }
            },
            vertexShader: `
                varying vec3 skyDirection;
                void main() {
                    skyDirection = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 horizon;
                uniform vec3 zenith;
                varying vec3 skyDirection;
                void main() {
                    float height = max(normalize(skyDirection).y, 0.0);
                    gl_FragColor = vec4(mix(horizon, zenith, smoothstep(0.0, 0.8, height)), 1.0);
                    #include <tonemapping_fragment>
                    #include <colorspace_fragment>
                }
            `,
            side: THREE.BackSide,
            depthWrite: false,
            fog: false
        });
        this.sky = new THREE.Mesh(new THREE.SphereGeometry(80, 24, 16), this.skyMaterial);
        this.sky.renderOrder = -1000;
        this.sky.frustumCulled = false;
        this.scene.add(this.sky);

        const load = path => {
            const texture = new THREE.TextureLoader().load(path);
            texture.colorSpace = THREE.SRGBColorSpace;
            texture.magFilter = texture.minFilter = THREE.NearestFilter;
            texture.generateMipmaps = false;
            return texture;
        };
        const sprite = texture => {
            const object = new THREE.Sprite(new THREE.SpriteMaterial({
                map: texture, transparent: true, blending: THREE.AdditiveBlending,
                depthWrite: false, fog: false, toneMapped: false
            }));
            object.scale.set(28, 28, 1);
            this.scene.add(object);
            return object;
        };
        this.sunMesh = sprite(load('images/environment/sun.png'));
        this.moonTexture = load('images/environment/moon_phases.png');
        this.moonTexture.repeat.set(0.25, 0.5);
        this.moonTexture.offset.set(0, 0.5);
        this.moonMesh = sprite(this.moonTexture);

        // Répartition déterministe sur une sphère, sans texture supplémentaire.
        const vertices = [];
        for (let i = 0; i < 450; i++) {
            const y = 1 - 2 * (i + 0.5) / 450;
            const angle = i * Math.PI * (3 - Math.sqrt(5));
            const radius = Math.sqrt(1 - y * y);
            vertices.push(Math.cos(angle) * radius * 65, y * 65, Math.sin(angle) * radius * 65);
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        this.stars = new THREE.Points(geometry, new THREE.PointsMaterial({
            color: 0xdce7ff, size: 0.18, transparent: true, opacity: 0,
            depthWrite: false, fog: false, toneMapped: false
        }));
        this.scene.add(this.stars);
    }

    setupLights() {
        this.sun = new THREE.DirectionalLight(0xffffff, 1.5);
        this.sun.castShadow = true;
        Object.assign(this.sun.shadow.camera, { left: -40, right: 40, top: 40, bottom: -40, near: 0.1, far: 200 });
        this.sun.shadow.bias = -0.0001;
        this.sun.shadow.mapSize.set(2048, 2048);
        this.ambient = new THREE.HemisphereLight(0xc5dfff, 0x6d6853, 0.6);
        this.moonLight = new THREE.DirectionalLight(0x809acb, 0.1);
        this.scene.add(this.sun, this.sun.target, this.ambient, this.moonLight, this.moonLight.target);
    }

    update(deltaTime) {
        const advanced = this.time + deltaTime / this.dayDuration;
        this.dayCount += Math.floor(advanced);
        this.time = ((advanced % 1) + 1) % 1;
        this.elapsed += deltaTime / 1000;
        const angle = (this.time - 0.25) * Math.PI * 2;
        this.direction.set(Math.cos(angle), Math.sin(angle), 0).normalize();
        const daylight = THREE.MathUtils.smoothstep(this.direction.y, -0.12, 0.18);
        const twilight = (1 - THREE.MathUtils.smoothstep(Math.abs(this.direction.y), 0.02, 0.25)) * 0.6;
        const horizon = this.skyMaterial.uniforms.horizon.value;
        const zenith = this.skyMaterial.uniforms.zenith.value;
        horizon.lerpColors(this.nightHorizon, this.dayHorizon, daylight).lerp(this.sunset, twilight);
        zenith.lerpColors(this.nightZenith, this.dayZenith, daylight);
        if (this.scene.background?.isColor) this.scene.background.copy(horizon);
        // Modifier uniquement le brouillard de l'air, même lorsque le joueur plonge.
        this.airFog?.color.copy(horizon);

        const center = this.player.camera.position;
        this.sky.position.copy(center);
        this.stars.position.copy(center);
        this.stars.rotation.z = angle;
        this.stars.material.opacity = (1 - daylight) * 0.8;
        this.sunMesh.position.copy(center).addScaledVector(this.direction, 55);
        this.moonMesh.position.copy(center).addScaledVector(this.direction, -55);
        this.sunMesh.material.opacity = THREE.MathUtils.smoothstep(this.direction.y, -0.08, 0.05);
        this.moonMesh.material.opacity = 1 - daylight;
        this.sunMesh.material.rotation = this.moonMesh.material.rotation = -this.player.camera.rotation.z;
        const phase = this.dayCount % 8;
        this.moonTexture.offset.set((phase % 4) / 4, phase < 4 ? 0.5 : 0);

        this.sun.position.copy(center).addScaledVector(this.direction, 70);
        this.sun.target.position.copy(center);
        this.sun.intensity = 1.5 * THREE.MathUtils.smoothstep(this.direction.y, -0.02, 0.3);
        this.sun.color.set(0xffffff).lerp(this.sunset, twilight);
        this.ambient.intensity = 0.12 + daylight * 0.58;
        this.moonLight.position.copy(center).addScaledVector(this.direction, -70);
        this.moonLight.target.position.copy(center);
        this.moonLight.intensity = (1 - daylight) * 0.14;
    }

    getTime() {
        const totalMinutes = Math.floor(this.time * 24 * 60);
        return `${Math.floor(totalMinutes / 60)}H${String(totalMinutes % 60).padStart(2, '0')}`;
    }
}
