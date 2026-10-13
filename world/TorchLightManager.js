import * as THREE from 'three';

// Un nombre constant de lumières évite de recompiler les shaders à chaque pose.
export class TorchLightManager {
    constructor(scene, maxLights = 8) {
        this.sources = new Map();
        this.slots = Array.from({ length: maxLights }, () => {
            const light = new THREE.PointLight(0xffc778, 0, 12, 2);
            light.castShadow = false;
            scene.add(light);
            return { light, source: null };
        });
    }

    register(owner, key, position) {
        if (!this.sources.has(owner)) this.sources.set(owner, new Map());
        const entries = this.sources.get(owner);
        const existing = entries.get(key);
        if (existing) existing.position.copy(position);
        else entries.set(key, { position: position.clone() });
    }

    remove(owner, key) {
        const entries = this.sources.get(owner);
        const source = entries?.get(key);
        entries?.delete(key);
        if (entries?.size === 0) this.sources.delete(owner);
        this.release(source);
    }

    removeOwner(owner) {
        for (const source of this.sources.get(owner)?.values() ?? []) this.release(source);
        this.sources.delete(owner);
    }

    release(source) {
        if (!source) return;
        for (const slot of this.slots) {
            if (slot.source === source) {
                slot.source = null;
                slot.light.intensity = 0;
            }
        }
    }

    update(position, timeSeconds) {
        const active = new Set(this.slots.map(slot => slot.source));
        const candidates = [];
        for (const entries of this.sources.values()) {
            for (const source of entries.values()) {
                const distance = source.position.distanceToSquared(position);
                if (distance <= 24 * 24) {
                    // Une marge empêche les lumières d'alterner à chaque petit mouvement.
                    candidates.push({ source, score: distance * (active.has(source) ? 0.85 : 1) });
                }
            }
        }
        candidates.sort((a, b) => a.score - b.score);
        const selected = new Set(candidates.slice(0, this.slots.length).map(entry => entry.source));
        for (const slot of this.slots) {
            if (!selected.has(slot.source)) slot.source = null;
            else selected.delete(slot.source);
        }
        for (const slot of this.slots) {
            if (!slot.source && selected.size) {
                slot.source = selected.values().next().value;
                selected.delete(slot.source);
            }
            if (!slot.source) {
                slot.light.intensity = 0;
                continue;
            }
            slot.light.position.copy(slot.source.position);
            const phase = slot.source.position.x * 1.7 + slot.source.position.z * 2.3;
            slot.light.intensity = 20 * (0.97 + 0.03 * Math.sin(timeSeconds * 6 + phase));
        }
    }
}
