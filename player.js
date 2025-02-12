import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import {blocks, getBlockByIdFast} from "./block.js";

export class Player {

    radius = 0.5;
    height = 1.8;
    maxSpeed = 10;

    jumpSpeed = 10;
    onGround = false;

    input = new THREE.Vector3();
    velocity = new THREE.Vector3(0, 0, 0);
    #wolrdVelocity = new THREE.Vector3();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

    // Contrôle en première personne avec "PointerLockControls"
    controls = new PointerLockControls(this.camera, document.body);
    selectedCoords = null;
    selectedCoordsNormal = null;


    constructor(scene, world, inventory, ui) {

        //this.player.position.set(0, 5, 0);
        this.position.set(10, 80, 10);
        scene.add(this.camera);

        this.scene = scene;
        this.world = world;

        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));

        //wireframe mesh visualizing the palyer's bounding cylinder
        this.boundsHelper = new THREE.Mesh(
            new THREE.CylinderGeometry(this.radius, this.radius, this.height, 16),
            new THREE.MeshBasicMaterial({ wireframe: true})
        )
        //scene.add(this.boundsHelper);


        const handGeometry = new THREE.BoxGeometry(0.10, 0.10, 0.3); // Taille de la main
        const handTexture = new THREE.TextureLoader().load('images/hand.png'); // Texture pixelisée
        handTexture.colorSpace = THREE.SRGBColorSpace;
        handTexture.magFilter = THREE.NearestFilter;
        handTexture.minFilter = THREE.NearestFilter;
        const handMaterial = new THREE.MeshBasicMaterial({ map: handTexture });
        this.handMesh = new THREE.Mesh(handGeometry, handMaterial);

// Positionne la main dans le champ de vision du joueur
        this.handMesh.position.set(0.4, -0.25, -0.4); // Ajuste les coordonnées pour la perspective
        this.handMesh.rotation.x = 0.6;
        this.handMesh.rotation.z = -0.4;
        this.handMesh.rotation.y = -0.5;

        scene.add(this.handMesh);
        this.camera.add(this.handMesh); // Attacher la main à la caméra


        this.punchDirection = 1;

        // Helper used to highlight the currently active block
        const selectionMaterial = new THREE.MeshBasicMaterial({
            color: 0x000000, // Couleur du cube (noir ou autre)
            transparent: true, // Permet la transparence
            opacity: 0.2, // Niveau de transparence

        });

        const texture = new THREE.TextureLoader().load('images/break.png' );
        const selectionBreakMaterial = new THREE.MeshLambertMaterial({ map: texture, transparent: true });
        const selectionBreakGeometry = new THREE.BoxGeometry(1.01, 1.01, 1.01);
        this.selectionBreakHelper = new THREE.Mesh(selectionBreakGeometry, selectionBreakMaterial);
        this.scene.add(this.selectionBreakHelper);

        const selectionGeometry = new THREE.BoxGeometry(1.01, 1.01, 1.01);
        this.selectionHelper = new THREE.Mesh(selectionGeometry, selectionMaterial);
        scene.add(this.selectionHelper);

        // Gestion des clics (ajouter ou supprimer des blocs)
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.raycaster.far = 5; // Limite la portée à 10 unités

        document.addEventListener('mousedown', this.onMouseDown.bind(this));
        document.addEventListener('mouseup', this.onMouseUp.bind(this));
        this.isDestroying = false;
    }


    onMouseDown(event) {
        if (this.controls.isLocked) {
            this.isMouseDown = true; // Marque le clic comme enfoncé
            this.animateHand();

            if (this.selectedCoords) {
                if (event.button == 2) {
                    const selectedBlock = this.world.getBlock(this.selectedCoords.x, this.selectedCoords.y, this.selectedCoords.z);

                    if (this.inventory.getSelectedItem()?.block !== undefined && getBlockByIdFast(selectedBlock.id).interface !== true && getBlockByIdFast(this.inventory.getSelectedItem()?.block).type === 'block') {
                        this.world.addBlock(this.selectedCoordsNormal.x, this.selectedCoordsNormal.y, this.selectedCoordsNormal.z, this.inventory.getSelectedItem().block);
                        this.inventory.removeBlock(this.inventory.getSelectedItem().block);
                        var audio = new Audio('audio/dirt1.ogg');
                        audio.play();
                    } else if (getBlockByIdFast(selectedBlock.id).interface === true) {
                        this.ui.open(selectedBlock.id);
                    }
                } else {
                    console.log(event.button);
                    this.startDestroyingBlock(event);
                }
            }
        }
    }

    startDestroyingBlock(event) {
        if (!this.isMouseDown || !this.selectedCoords) return; // Vérifie si le clic est toujours enfoncé

        let destructionProgress = 0;
        const blockToRemove = this.world.getBlock(this.selectedCoords.x, this.selectedCoords.y, this.selectedCoords.z);
        console.log(blockToRemove);
        let destructionTime = getBlockByIdFast(blockToRemove.id).hardness * 1000;

        let speedMultiplier = 1;

        destructionTime *= 1.5;
        const toolId = this.inventory.getSelectedItem()?.block;

        let tool = null;

        if (toolId) {
            tool = getBlockByIdFast(toolId);
            if (tool.type == 'item' && tool.tool_type == getBlockByIdFast(blockToRemove.id).tool)
                speedMultiplier = tool.tool_material;
        }

        let damage = speedMultiplier/getBlockByIdFast(blockToRemove.id).hardness;

        if (getBlockByIdFast(blockToRemove.id)?.need_tool && !(tool && tool.type == 'item' && tool.tool_type == getBlockByIdFast(blockToRemove.id).tool))
            damage /= 100;
        else
            damage /= 30;

        const ticks = Math.ceil(1 / damage)

        destructionTime = (ticks / 20)*1000;

        // Instant breaking
        if (damage > 1)
            destructionTime = 0;


        console.log(destructionTime);
        this.isDestroying = true;
        this.animateBlockBreaking(destructionTime);

        this.destructionInterval = setInterval(() => {
            if (!this.isMouseDown) { // Stoppe si le clic est relâché
                clearInterval(this.destructionInterval);
                this.isDestroying = false;
                return;
            }

            destructionProgress += 100; // Augmente la progression toutes les 100ms

            if (destructionProgress >= destructionTime) {
                this.inventory.addBlock(blockToRemove);
                this.world.removeBlock(this.selectedCoords.x, this.selectedCoords.y, this.selectedCoords.z);
                var audio = new Audio('audio/dirt1.ogg');
                audio.play();
                this.isDestroying = false;
                clearInterval(this.destructionInterval);

                // Relancer la destruction si le clic est toujours maintenu
                setTimeout(() => {
                    this.startDestroyingBlock(event);
                }, 200);
            }
        }, 100);
    }


    onMouseUp(event) {
        if (this.controls.isLocked) {
            if (event.button != 2) {
                this.isDestroying = false;
                clearInterval(this.destructionInterval);
                this.isMouseDown = false;
            }
        }
    };


    animateHand() {
        this.handMesh.position.y += this.punchDirection * 0.02; // Monte et descend la main
        if (this.handMesh.position.y > -0.4 || this.handMesh.position.y < -0.6) {
            this.punchDirection *= -1; // Inverse la direction
        }
    }

    /**
     * Updates the state of the player
     * @param {World} world
     */
    update(world) {
        this.updateRaycaster(world);

        /*
        if (this.tool.animate) {
            this.updateToolAnimation();
        }*/
    }

    /**
     * Updates the raycaster used for block selection
     * @param {World} world
     */
    updateRaycaster(world) {
        const intersects = this.raycaster.intersectObjects(world.children, true);

        if (this.controls.isLocked) {

            // Mettre à jour le raycaster en fonction de la position de la souris
            this.raycaster.setFromCamera(this.mouse, this.camera);
            if (intersects.length > 0) {
                const intersected = intersects[0];

                //récupére la position du chunk parent du bloc
                const chunk = intersected.object.parent;

                // récupére transformation matrix du bloc intercepté
                const blockMatrix = new THREE.Matrix4();
                intersected.object.getMatrixAt(intersected.instanceId, blockMatrix);

                // extrait la position du bloc transformation matrix et le met dans coords
                this.selectedCoords = chunk.position.clone();
                this.selectedCoordsNormal = chunk.position.clone();
                this.selectedCoords.applyMatrix4(blockMatrix);
                this.selectedCoordsNormal.applyMatrix4(blockMatrix);

                //si on ajoute un bloc
                this.selectedCoordsNormal.add(intersected.normal);

                this.selectionHelper.position.copy(this.selectedCoords);
                this.selectionHelper.visible = true;


            } else {
                this.selectedCoords = null;
                this.selectionHelper.visible = false;
            }
        }
    }

    animateBlockBreaking(duration) {

        this.selectionBreakHelper.position.copy(this.selectedCoords);
        //console.log(this.selectionBreakHelper);
        this.selectionBreakHelper.visible = true;

        const steps = 6; // Nombre d'étapes dans la grille de "cassure"
        const interval = duration / steps; // Temps entre chaque étape
        let step = 0;

        this.nextStep(interval, step); // Démarrer l'animation
    }

    nextStep(interval, step) {
        const columns = 2; // Nombre de colonnes dans la texture
        const rows = 3;    // Nombre de lignes dans la texture

        if (step <= 6 && this.isDestroying) {
            // Calculer l'offset dans la texture
            const column = step % columns;
            const row = Math.floor(step / columns);

            //console.log( row / rows);
            // Appliquer l'offset (UV mapping) pour afficher la bonne partie
            this.selectionBreakHelper.material.map.offset.set(column / columns, row / rows);
            this.selectionBreakHelper.material.map.repeat.set(1 / columns, 1 / rows);

            step++;

            // Appeler la prochaine étape après un délai
            setTimeout(this.nextStep.bind(this), interval, interval, step);
        } else {
            this.selectionBreakHelper.visible = false;
        }
    }

    setBlockInHand(id) {

        if (getBlockByIdFast(id)?.material) {
            this.scene.remove(this.meshHandItem);
            this.camera.remove(this.meshHandItem);
            const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
            this.meshHandItem = new THREE.Mesh(geometry, getBlockByIdFast(id).material);
            //meshHand.name = blockType.id;
            this.meshHandItem.count = 0;
            this.meshHandItem.castShadow = true;
            this.meshHandItem.receiveShadow = true;
            this.meshHandItem.rotation.x = -0.2;
            this.meshHandItem.rotation.z = 0;
            this.meshHandItem.rotation.y = 0.6;
            this.meshHandItem.position.set(0.55, -0.45, -0.5); // Ajuste les coordonnées pour la perspective
            this.scene.add(this.meshHandItem);
            this.camera.add(this.meshHandItem);
            this.handMesh.visible = false;
        } else {
            if (this.meshHandItem)
                this.meshHandItem.visible = false;
            this.handMesh.visible = true;
        }

    }

    get worldVelocity() {
        this.#wolrdVelocity.copy(this.velocity);
        this.#wolrdVelocity.applyEuler(new THREE.Euler(0, this.camera.rotation.y, 0));
        return this.#wolrdVelocity;
    }

    applyWorldDeltaVelocity(dv) {
        dv.applyEuler(new THREE.Euler(0, -this.camera.rotation.y, 0));
        this.velocity.add(dv);
    }

    applyInputs(dt) {
        if (this.controls.isLocked) {
            this.velocity.x = this.input.x;
            this.velocity.z = this.input.z;
            this.controls.moveRight(this.velocity.x * dt);
            this.controls.moveForward(this.velocity.z * dt);
            this.position.y += this.velocity.y * dt;

            document.getElementById('player-position').innerHTML = this.toString();
        }
    }

    updateBoundsHelper() {
        this.boundsHelper.position.copy(this.position);
        this.boundsHelper.position.y -= this.height /2;
    }

    onKeyDown(event) {
        if (event.key === 'Shift') keys.speed = true;
        if (event.key === 'z') this.input.z = this.maxSpeed;
        if (event.key === 's') this.input.z = -this.maxSpeed;
        if (event.key === 'q') this.input.x = -this.maxSpeed;
        if (event.key === 'd') this.input.x = this.maxSpeed;
        if (event.key === ' ') if (this.onGround) this.velocity.y += this.jumpSpeed;
    }

    onKeyUp(event) {
        if (event.key === 'z') this.input.z = 0;
        if (event.key === 's') this.input.z = 0;
        if (event.key === 'q') this.input.x = 0;
        if (event.key === 'd') this.input.x = 0;
    }

    // renvoi la position du player dans le world
    get position() {
        return this.camera.position;
    }

    toString() {
        let str = '';
        str += `X: ${this.position.x.toFixed(3)} `;
        str += `Y: ${this.position.y.toFixed(3)} `;
        str += `Z: ${this.position.z.toFixed(3)}`;
        return str;
    }

    save() {
        (async () => {
            const dataSize = new Blob([JSON.stringify(this.position)]).size; // Taille en octets
            console.log(`Taille des données : ${dataSize} octets`);
            console.log(this.position);
            const minecraftData = this.position;
            await storeData(minecraftData);
        })();
    }

    /**
     * Loads the game from disk
     */
    load() {

        (async () => {
            const retrievedData = await getData();
            //console.log('Données récupérées :', retrievedData);
            this.position.set(retrievedData.x, retrievedData.y, retrievedData.z);
        })();
    }

    setInventory(inventory) {
        this.inventory = inventory;
    }

    setUI(ui) {
        this.ui = ui;
    }

}

const dbName = 'minecraftDB';
const storeName = 'minecraftData';

// Initialiser IndexedDB
function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);
        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            db.createObjectStore(storeName, { keyPath: 'id' });
        };
        request.onsuccess = function (event) {
            resolve(event.target.result);
        };
        request.onerror = function (event) {
            reject(event.target.error);
        };
    });
}

// Stocker des données
async function storeData(data) {
    const db = await initDB();
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    store.put({ id: 'minecraft_player_position', data });
    return transaction.complete;
}

// Lire des données
async function getData() {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.get('minecraft_player_position');
        request.onsuccess = function () {
            resolve(request.result?.data || null);
        };
        request.onerror = function (event) {
            reject(event.target.error);
        };
    });
}







