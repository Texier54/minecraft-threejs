import * as THREE from "three";
import { Entity } from "./Entity.js";
import {blocks, getBlockByIdFast} from "../block.js";

const DEG90 = Math.PI / 2;

// facing: 0=N,1=E,2=S,3=W
function facingToYaw(facing) {
  switch (facing) {
    case 0:
      return 0;
    case 1:
      return -Math.PI / 2;
    case 2:
      return Math.PI;
    case 3:
      return Math.PI / 2;
    default:
      return 0;
  }
}

export class DoorEntity extends Entity {
  /**
   * @param {any} world
   * @param {THREE.Vector3} position  Position du bloc bas (coordonnées monde)
   * @param {{facing?:number, hinge?:'left'|'right', open?:boolean}} [opts]
   */
  constructor(world, position, opts = {}) {
    super(world, position);

    const { facing = 0, hinge = "left", open = false } = opts;


    this.facing = facing;
    this.hinge = hinge;
    this.open = open;

    // Group principal (attaché à Entity)
    this.mesh = new THREE.Group();

    // On centre la porte dans le bloc (Minecraft: centre X/Z, bas sur Y)
    // NOTE: si ton moteur place déjà les blocks au centre, enlève les +0.5
    this.mesh.position.copy(position);
    this.destroyed = false;
    this.mesh.rotation.y = facingToYaw(facing);

    // Pivot (charnière) local
    this.pivot = new THREE.Group();


    const materialBottom = getBlockByIdFast(64).material.clone();
    const materialTop = getBlockByIdFast(1064).material.clone();
    materialBottom.alphaTest = materialTop.alphaTest = 0.5;

    // Géométries : 1 bloc de haut chacune
    const geometryHalf = new THREE.BoxGeometry(1.0, 1.0, 0.2);

    this.doorBottomMesh = new THREE.Mesh(geometryHalf, materialBottom);
    this.doorTopMesh = new THREE.Mesh(geometryHalf, materialTop);

    // Pour le raycast / interaction
    this.doorBottomMesh.userData.entity = this;
    this.doorTopMesh.userData.entity = this;

    // Positionnement : bas centré à y=0.5, haut centré à y=1.5
    this.doorBottomMesh.position.set(0, 0, 0);
    this.doorTopMesh.position.set(0, 1, 0);

    // Groupe des deux demi-portes (pivoté par la charnière)
    this.doorGroup = new THREE.Group();
    this.doorGroup.add(this.doorBottomMesh);
    this.doorGroup.add(this.doorTopMesh);

    // Position du pivot sur un bord de la porte
    const hingeX = hinge === "left" ? -0.5 : 0.5;
    this.pivot.position.set(hingeX, 0, -0.4);

    // On replace le groupe (2 demi-portes) par rapport au pivot
    // Le groupe est centré en X sur le bloc, donc on le décale selon la charnière
    this.doorGroup.position.set(-hingeX, 0, 0);

    this.pivot.add(this.doorGroup);
    this.mesh.add(this.pivot);

    // Animation
    this.targetAngle = this.open ? this._openAngle() : 0;
    this.pivot.rotation.y = this.targetAngle;

    // Ombres
    this.doorBottomMesh.castShadow = true;
    this.doorBottomMesh.receiveShadow = true;
    this.doorTopMesh.castShadow = true;
    this.doorTopMesh.receiveShadow = true;
  }

  _openAngle() {
    // rotation dépend de la charnière (tu peux raffiner selon facing si besoin)
    return this.hinge === "left" ? -DEG90 : DEG90;
  }

  setOpen(open, { instant = false } = {}) {
    if (this.destroyed || this.open === open) return;
    this.open = open;
    if (this.open)
      this.audioManager.playBlockSound('wood', 'open_door');
    else
      this.audioManager.playBlockSound('wood', 'close_door');
    this.targetAngle = open ? this._openAngle() : 0;
    if (instant) this.pivot.rotation.y = this.targetAngle;
  }

  toggle({ instant = false } = {}) {
    this.setOpen(!this.open, { instant });
  }

  update(dt) {
    if (this.destroyed) return;
    // animation smooth vers targetAngle
    const speed = 10; // rad/s
    const a = this.pivot.rotation.y;
    const b = this.targetAngle;
    const diff = b - a;

    if (Math.abs(diff) < 0.001) {
      this.pivot.rotation.y = b;
      return;
    }

    this.pivot.rotation.y = a + diff * (1 - Math.exp(-dt * speed));
  }

  /**
   * Appelé quand le joueur "utilise" la porte.
   */
  action(player) {
    // Ici on toggle l'état, l'animation se fera dans update(dt)
    this.toggle();
  }

  /**
   * Optionnel: appelé quand la porte est touchée/visée.
   */
  hit(player) {
    if (this.destroyed) return;
    player?.inventory?.addBlock(blocks.oak_door.id);
    this.audioManager.playBlockSound('wood', 'break');
    this.destroy();
  }

  resolvePlayerCollision(player) {
    if (this.destroyed || this.position.distanceToSquared(player.position) > 25) return;
    this.mesh.updateMatrixWorld(true);
    const inverse = this.doorGroup.matrixWorld.clone().invert();
    const center = player.position.clone();
    center.y -= player.height / 2;
    center.applyMatrix4(inverse);
    if (center.y + player.height / 2 <= -0.5 || center.y - player.height / 2 >= 1.5) return;
    const closestX = THREE.MathUtils.clamp(center.x, -0.5, 0.5);
    const closestZ = THREE.MathUtils.clamp(center.z, -0.1, 0.1);
    const normal = new THREE.Vector3(center.x - closestX, 0, center.z - closestZ);
    const distance = normal.length();
    let overlap = player.radius - distance;
    if (overlap <= 0) return;
    if (distance > 1e-8) normal.divideScalar(distance);
    else {
      // Le centre est dans le panneau : sortir par le bord le plus proche.
      const toX = 0.5 - Math.abs(center.x);
      const toZ = 0.1 - Math.abs(center.z);
      if (toX < toZ) normal.set(center.x < 0 ? -1 : 1, 0, 0);
      else normal.set(0, 0, center.z < 0 ? -1 : 1);
      overlap += Math.min(toX, toZ);
    }
    normal.transformDirection(this.doorGroup.matrixWorld);
    player.position.addScaledVector(normal, overlap + 0.0001);
    const inward = player.worldVelocity.dot(normal);
    if (inward < 0) player.applyWorldDeltaVelocity(normal.clone().multiplyScalar(-inward));
    const externalInward = player.externalVelocity.dot(normal);
    if (externalInward < 0) player.externalVelocity.addScaledVector(normal, -externalInward);
  }

  static facingFromDirection(direction) {
    if (direction.x > 0) return 1;
    if (direction.x < 0) return 3;
    return direction.z > 0 ? 2 : 0;
  }

  static canPlace(world, position) {
    const { x, y, z } = position;
    const support = world.getBlock(x, y - 1, z);
    const definition = support && getBlockByIdFast(support.id);
    if (!definition || definition.type !== 'block' || definition.transparent || support.id === 0) return false;
    if (world.getBlock(x, y, z)?.id !== 0 || world.getBlock(x, y + 1, z)?.id !== 0) return false;
    return !(world.entities || []).some(entity => entity instanceof DoorEntity && !entity.destroyed &&
      entity.position.x === x && entity.position.z === z && Math.abs(entity.position.y - y) < 2);
  }

  destroy() {
    if (this.destroyed) return;
    this.destroyed = true;
    this.world.removeEntity(this);
    this.mesh.removeFromParent();
    this.doorBottomMesh.geometry.dispose();
    this.doorBottomMesh.material.dispose();
    this.doorTopMesh.material.dispose();
  }
}
