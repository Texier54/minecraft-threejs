import { blocks, getBlockByIdFast } from "../block.js";
import { AudioManager } from "../AudioManager.js"
import {DoorEntity} from "../entity/DoorEntity.js";
import {BoatEntity} from "../entity/BoatEntity.js";
import * as THREE from "three";

export function useItemOnBlock(world, player, itemId, x, y, z, direction, scene, inventory) {
    const audioManager = new AudioManager();

    const target = world.getBlock(x, y, z);
    if (!target) return false;

    const targetDef = getBlockByIdFast(target.id);
    const itemDef = getBlockByIdFast(itemId);
    if (!itemDef) return false;


    // HOE → FARMLAND
    if (itemDef.tool_type === "hoe") {
        const above = world.getBlock(x, y + 1, z);
        const isTillable = target.id === blocks.grass.id || target.id === blocks.dirt.id;
        const airAbove = !above || above.id === blocks.empty.id;

        if (isTillable && airAbove) {
            world.removeBlock(x, y, z);
            world.addBlock(x, y, z, blocks.farmland.id, direction);
            return true;
        }
    }

    // PORTE
    if (itemDef.id == 64) {
        audioManager.playBlockSound(itemDef.soundGroup, 'place');
        const door = new DoorEntity(world, new THREE.Vector3(x, y + 1, z));
        door.addToScene(scene);
        world.addEntity(door);
        inventory.removeBlock(itemDef.id);
        return true;
    }

    // LEVER
    if (targetDef.toggleable) {
        const didToggle = world.toggleLever(x, y, z);
        if (didToggle) {
            audioManager.playBlockSound(targetDef.soundGroup, 'click');
        }
        return didToggle;
    }

    // BATEAU
    if (itemDef.id == 375) {
        const boat = new BoatEntity(world, new THREE.Vector3(x, y + 1, z));
        boat.addToScene(scene);
        world.addEntity(boat);
        inventory.removeBlock(itemDef.id);
        return true;
    }

    // SEEDS
    if (itemDef.id == 291) {
        if (target.id == blocks.farmland.id) {
            world.addBlock(x, y+1, z, blocks.wheat.id, direction);
            inventory.removeBlock(itemDef.id);
        }
        return true;
    }

    return false;
}