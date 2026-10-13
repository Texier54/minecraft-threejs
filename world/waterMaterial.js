import * as THREE from 'three';

const waterTime = { value: 0 };

export const waterSurfaceMaterial = new THREE.MeshLambertMaterial({
    color: 0x4389cc,
    transparent: true,
    opacity: 0.62,
    depthWrite: false,
    side: THREE.DoubleSide
});

waterSurfaceMaterial.onBeforeCompile = shader => {
    shader.uniforms.waterTime = waterTime;
    shader.vertexShader = shader.vertexShader.replace(
        '#include <common>',
        '#include <common>\nvarying vec2 waterWorldXZ;'
    ).replace('#include <begin_vertex>', `
        #include <begin_vertex>
        vec4 waterPosition = vec4(position, 1.0);
        #ifdef USE_INSTANCING
            waterPosition = instanceMatrix * waterPosition;
        #endif
        waterWorldXZ = (modelMatrix * waterPosition).xz;
    `);
    shader.fragmentShader = shader.fragmentShader.replace(
        '#include <common>',
        '#include <common>\nuniform float waterTime;\nvarying vec2 waterWorldXZ;'
    ).replace('#include <color_fragment>', `
        #include <color_fragment>
        // Motif à 16 pixels par bloc, continu aux frontières des chunks.
        vec2 waterPixel = floor(waterWorldXZ * 16.0) / 16.0;
        float ripple = sin(waterPixel.x * 2.4 + waterPixel.y * 1.7 + waterTime * 0.75)
                     * sin(waterPixel.y * 3.1 - waterPixel.x * 1.3 - waterTime * 0.5);
        float fleck = sin(waterPixel.x * 17.0 + waterPixel.y * 23.0) * 0.025;
        diffuseColor.rgb *= 0.94 + ripple * 0.10 + fleck;
        float crest = smoothstep(0.72, 0.95, ripple);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.45, 0.72, 0.86), crest * 0.12);
    `);
};
waterSurfaceMaterial.customProgramCacheKey = () => 'pixel-water-v1';

export function updateWater(timeSeconds) {
    waterTime.value = timeSeconds;
}
