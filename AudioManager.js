export const soundGroups = {
    stone: {
        break: ['stone_1','stone_2','stone_3','stone_4'],
        place: ['stone_1','stone_2','stone_3','stone_4'],
        step: 'stone_step',
        hit: 'stone_hit',
        fall: 'stone_fall',
    },
    grass: {
        break: ['grass_1','grass_2','grass_3','grass_4'],
        place: ['grass_1','grass_2','grass_3','grass_4'],
        step: 'grass_step',
        hit: 'grass_hit',
        fall: 'grass_fall',
    },
    wood: {
        break: ['wood_1','wood_2','wood_3','wood_4'],
        place: ['wood_1','wood_2','wood_3','wood_4'],
        step: 'wood_step',
        hit: 'wood_hit',
        fall: 'wood_fall',
        open: 'chest_open',
        close: 'chest_close',
        open_door: 'door_open',
        close_door: 'door_close'
    },
    gravel: {
        break: 'gravel_break',
        place: 'gravel_place',
        step: 'gravel_step',
        hit: 'gravel_hit',
        fall: 'gravel_fall',
    },
    sand: {
        break: ['sand_1','sand_2','sand_3','sand_4'],
        place: ['sand_1','sand_2','sand_3','sand_4'],
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
    },
    pig: {
        hurt: 'pig_hurt'
    },
    cow: {
        hurt: ['cow_hurt_1','cow_hurt_2','cow_hurt_3']
    },
    player: {
        hurt: ['classic_hurt','classic_hurt2']
    }
};

const sources = {
    grass_1 : 'audio/grass1.ogg',
    grass_2 : 'audio/grass2.ogg',
    grass_3 : 'audio/grass3.ogg',
    grass_4 : 'audio/grass4.ogg',
    wood_1 : 'audio/wood1.ogg',
    wood_2 : 'audio/wood2.ogg',
    wood_3 : 'audio/wood3.ogg',
    wood_4 : 'audio/wood4.ogg',
    stone_1 : 'audio/stone1.ogg',
    stone_2 : 'audio/stone2.ogg',
    stone_3 : 'audio/stone3.ogg',
    stone_4 : 'audio/stone4.ogg',
    sand_1 : 'audio/sand1.ogg',
    sand_2 : 'audio/sand2.ogg',
    sand_3 : 'audio/sand3.ogg',
    sand_4 : 'audio/sand4.ogg',
    gravel_place : 'audio/gravel1.ogg',
    gravel_break : 'audio/gravel1.ogg',
    glass_place : 'audio/glass1.ogg',
    glass_break : 'audio/glass1.ogg',
    pig_hurt : 'audio/pig/pighurt1.ogg',
    cow_hurt_1 : 'audio/cow/cowhurt1.ogg',
    cow_hurt_2 : 'audio/cow/cowhurt2.ogg',
    cow_hurt_3 : 'audio/cow/cowhurt3.ogg',
    chest_open : 'audio/chestopen.ogg',
    chest_close : 'audio/chestclose.ogg',
    door_close : 'audio/door_close.ogg',
    door_open : 'audio/door_open.ogg',
    classic_hurt : 'audio/damage/classic_hurt.ogg',
    classic_hurt2 : 'audio/damage/classic_hurt2.ogg',
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
        if (!base) {
            this.load(name);
            base = this.sounds[name];
            if (!base) return;
        }
        const audio = clone ? base.cloneNode() : base;
        audio.volume = 0.8;
        audio.play();
    }

    playBlockSound(group, action) {
        let soundName = soundGroups[group]?.[action];

        if (Array.isArray(soundName) && soundName.length) {
            const index = Math.floor(Math.random() * soundName.length);
            soundName = soundName[index];
        }

        if (soundName) {
            this.play(soundName);
        }
    }
}