import * as THREE from 'three';

const up = new THREE.Vector3(0, 1, 0);
const axis = new THREE.Vector3();
const rotation = new THREE.Quaternion();
const position = new THREE.Vector3();
const scale = new THREE.Vector3(1, 1, 1);

export function writeTorchMatrix(matrix, x, y, z, direction) {
    const wall = direction && (direction.x !== 0 || direction.z !== 0);
    position.set(x, y - 0.15, z);
    rotation.identity();
    if (wall) {
        position.set(x - direction.x * 0.36, y - 0.05, z - direction.z * 0.36);
        axis.set(direction.x * 0.35, 1, direction.z * 0.35).normalize();
        rotation.setFromUnitVectors(up, axis);
    }
    return matrix.compose(position, rotation, scale);
}
