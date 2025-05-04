export const soundGroups = {
    stone: {
        break: 'stone_break',
        place: 'stone_place',
        step: 'stone_step',
        hit: 'stone_hit',
        fall: 'stone_fall',
    },
    grass: {
        break: 'grass_break',
        place: 'grass_place',
        step: 'grass_step',
        hit: 'grass_hit',
        fall: 'grass_fall',
    },
    wood: {
        break: 'wood_break',
        place: 'wood_place',
        step: 'wood_step',
        hit: 'wood_hit',
        fall: 'wood_fall',
    },
    gravel: {
        break: 'gravel_break',
        place: 'gravel_place',
        step: 'gravel_step',
        hit: 'gravel_hit',
        fall: 'gravel_fall',
    },
    sand: {
        break: 'sand_break',
        place: 'sand_place',
        step: 'sand_step',
        hit: 'sand_hit',
        fall: 'sand_fall',
    },
    snow: {
        break: 'snow_break',
        place: 'snow_place',
        step: 'snow_step',
        hit: 'snow_hit',
        fall: 'snow_fall',
    },
    nether_bricks: {
        break: 'nether_bricks_break',
        place: 'nether_bricks_place',
        step: 'nether_bricks_step',
        hit: 'nether_bricks_hit',
        fall: 'nether_bricks_fall',
    },
    glass: {
        break: 'glass_break',
        place: 'glass_place',
        step: 'glass_step',
        hit: 'glass_hit',
        fall: 'glass_fall',
    },
    slime: {
        break: 'slime_break',
        place: 'slime_place',
        step: 'slime_step',
        hit: 'slime_hit',
        fall: 'slime_fall',
    }
};

const sources = {
    grass_place : 'audio/grass1.ogg',
    grass_break : 'audio/grass1.ogg',
    wood_place : 'audio/wood3.ogg',
    wood_break : 'audio/wood3.ogg',
    stone_place : 'audio/stone1.ogg',
    stone_break : 'audio/stone1.ogg',
    gravel_place : 'audio/gravel1.ogg',
    gravel_break : 'audio/gravel1.ogg',
    glass_place : 'audio/glass1.ogg',
    glass_break : 'audio/glass1.ogg',
}

export class AudioManager {
    constructor() {
        this.sounds = {};
    }

    load(name) {
        const src = sources[name];
        if (!src) {
            console.warn(`No source registered for sound: ${name}`);
            return;
        }
        const audio = new Audio(src);
        audio.preload = 'auto';
        this.sounds[name] = audio;
    }

    play(name, clone = true) {
        let base = this.sounds[name];
        console.log(name);
        if (!base) {
            this.load(name);
            base = this.sounds[name];
            if (!base) return;
        }
        const audio = clone ? base.cloneNode() : base;
        audio.volume = 0.8;
        audio.play();
    }

    playBlockSound(block, action) {
        console.log(block);
        const group = block?.soundGroup;
        const soundName = soundGroups[group]?.[action];

        if (soundName) {
            this.play(soundName);
        }
    }
}