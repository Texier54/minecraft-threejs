import * as THREE from "three";
import { Entity } from "./Entity.js";
import { AudioManager } from "../AudioManager.js"
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

    this.audioManager = new AudioManager();

    this.facing = facing;
    this.hinge = hinge;
    this.open = open;

    // Group principal (attaché à Entity)
    this.mesh = new THREE.Group();

    // On centre la porte dans le bloc (Minecraft: centre X/Z, bas sur Y)
    // NOTE: si ton moteur place déjà les blocks au centre, enlève les +0.5
    this.mesh.position.set(position.x, position.y, position.z - 0.4);
    this.mesh.rotation.y = facingToYaw(facing);

    // Pivot (charnière) local
    this.pivot = new THREE.Group();


    const materialBottom = getBlockByIdFast(64).material;
    const materialTop = getBlockByIdFast(1064).material;

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
    this.pivot.position.set(hingeX, 0, 0);

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
    // animation smooth vers targetAngle
    const speed = 10; // rad/s
    const a = this.pivot.rotation.y;
    const b = this.targetAngle;
    const diff = b - a;

    if (Math.abs(diff) < 0.001) {
      this.pivot.rotation.y = b;
      return;
    }

    this.pivot.rotation.y = a + diff * Math.min(1, dt * speed);
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
  hit() {
    // debug
    // console.log("hit door");
  }

  destroy() {
    // Si Entity a déjà un destroy, garde-le. Sinon, on nettoie proprement.
    if (this.mesh?.parent) this.mesh.parent.remove(this.mesh);

    this.mesh.traverse((o) => {
      if (o.geometry) o.geometry.dispose?.();
      if (o.material) {
        if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose?.());
        else o.material.dispose?.();
      }
    });
  }
}