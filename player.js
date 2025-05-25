import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { TouchControls } from './touchControls.js';
import {blocks, getBlockByIdFast} from "./block.js";
import { AudioManager } from "./AudioManager.js"
import {BoatEntity} from "./entity/BoatEntity.js";

export class Player {

    radius = 0.5;
    height = 1.8;
    maxSpeed = 7;
    maxRun = 5;
    run = 0;
    inWater = false;
    riding = null;

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
    selectedEntity = null;


    constructor(scene, world, socket) {

        const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

        if (!isMobile) {
            this.controls = new PointerLockControls(this.camera, document.body);
            this.usePointerLock = true;
        } else {
            this.controls = new TouchControls(this.camera, document.body);
            this.usePointerLock = false;
            const forward = document.getElementById('move-forward');
            const backward = document.getElementById('move-backward');
            const left = document.getElementById('move-left');
            const right = document.getElementById('move-right');
            const jump = document.getElementById('jump');

            forward.addEventListener('touchstart', () => this.input.z = this.maxSpeed);
            forward.addEventListener('touchend', () => this.input.z = 0);

            backward.addEventListener('touchstart', () => this.input.z = -this.maxSpeed);
            backward.addEventListener('touchend', () => this.input.z = 0);

            left.addEventListener('touchstart', () => this.input.x = -this.maxSpeed);
            left.addEventListener('touchend', () => this.input.x = 0);

            right.addEventListener('touchstart', () => this.input.x = this.maxSpeed);
            right.addEventListener('touchend', () => this.input.x = 0);

            jump.addEventListener('touchstart', () => {
                if (this.onGround) this.velocity.y += this.jumpSpeed;
            });

            document.getElementById('mobile-controls').style.display = 'block';

            let touchStartTime = 0;

            document.addEventListener('touchstart', (e) => {
                this.isMouseDown = true;
                setTimeout(() => {
                    const duration = Date.now() - touchStartTime;
                    if (this.isMouseDown) {
                        this.startDestroyingBlock();
                    } else {
                        this.addBlock();
                    }
                }, 200);
            });

            document.addEventListener('touchend', this.onMouseUp.bind(this));
        }

        this.socket = socket;

        //this.player.position.set(0, 5, 0);
        this.position.set(10, 60, 10);
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

        this.audioManager = new AudioManager();

        this.defaultFog = scene.fog; // ou ce que tu utilises par défaut
        this.underwaterFog = new THREE.Fog(0x3399ff, 0.1, 10);
    }

    getPlacementDirection(faceNormal) {

        let direction = new THREE.Vector3();
        this.camera.getWorldDirection(direction); // Récupère la direction de la caméra

        // Trouver l'axe dominant
        const maxAxis = Math.max(Math.abs(direction.x), 0, Math.abs(direction.z));

        // Créer le vecteur aligné sur un seul axe
        let vector = new THREE.Vector3(
            Math.abs(direction.x) === maxAxis ? Math.sign(direction.x) : 0,
            0,
            Math.abs(direction.z) === maxAxis ? Math.sign(direction.z) : 0
        );


        let placementDir = vector.negate();

        if (placementDir.x === 1) return {x:1, y:0, z:0}; // À droite
        if (placementDir.x === -1) return {x:-1, y:0, z:0}; // À gauche
        if (placementDir.z === 1) return {x:0, y:0, z:1}; // Devant
        if (placementDir.z === -1) return {x:0, y:0, z:-1}; // Derrière
        return {x:0, y:1, z:0}; // Par défaut vers le haut
    }

    onMouseDown(event) {
        if (this.usePointerLock && this.controls.isLocked) {
            this.isMouseDown = true; // Marque le clic comme enfoncé
            this.animateHand();

            if (this.selectedCoords) {
                if (event.button == 2) {
                    this.addBlock();
                } else {
                    this.startDestroyingBlock(event);
                }
            } else if (this.selectedEntity) {
                if (event.button == 2)
                    this.selectedEntity.action(this);
                else
                    this.selectedEntity.hit(this);
            }
        }
    }

    addBlock() {
        if (this.selectedCoords === null)
            return;

        const selectedBlock = this.world.getBlock(this.selectedCoords.x, this.selectedCoords.y, this.selectedCoords.z);
        const block = getBlockByIdFast(this.inventory.getSelectedItem()?.block);

        if (this.inventory.getSelectedItem()?.block !== undefined && getBlockByIdFast(selectedBlock.id).interface !== true && block.type === 'block') {
            const direction = this.getPlacementDirection(this.selectedNormal);
            this.world.addBlock(this.selectedCoordsNormal.x, this.selectedCoordsNormal.y, this.selectedCoordsNormal.z, this.inventory.getSelectedItem().block, direction);
            this.inventory.removeBlock(this.inventory.getSelectedItem().block);

            this.audioManager.playBlockSound(block, 'place');

            this.socket.getSocket()?.emit("addBlock", {
                x: this.selectedCoordsNormal.x, y: this.selectedCoordsNormal.y, z: this.selectedCoordsNormal.z, blockId: this.inventory.getSelectedItem().block, direction: direction
            });
        } else if (getBlockByIdFast(selectedBlock.id).interface === true) {
            this.ui.open(selectedBlock.id);
        } else if (getBlockByIdFast(selectedBlock.id).openable) {
            if (!selectedBlock.isOpen) {
                selectedBlock.mesh.rotation.y = -Math.PI / 2;
                selectedBlock.isOpen = true;
            } else {
                selectedBlock.mesh.rotation.y = 0;
                selectedBlock.isOpen = false;
            }
        } else if (this.inventory.getSelectedItem()?.block == 375) {
            //BATEAU
            const boat = new BoatEntity(this.world, new THREE.Vector3(this.selectedCoords.x, this.selectedCoords.y+1, this.selectedCoords.z));
            boat.addToScene(this.scene);
            this.world.addEntity(boat);
        }
    }

    startDestroyingBlock(event) {
        if (!this.isMouseDown || !this.selectedCoords) return; // Vérifie si le clic est toujours enfoncé

        let destructionProgress = 0;
        const blockToRemove = this.world.getBlock(this.selectedCoords.x, this.selectedCoords.y, this.selectedCoords.z);
        //console.log(blockToRemove);
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


        //console.log(destructionTime);
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
                const blockToRemoveO = getBlockByIdFast(blockToRemove.id);
                if (Object.hasOwn(blockToRemoveO, 'drops'))
                    this.inventory.addBlock(blockToRemoveO.drops);
                else
                    this.inventory.addBlock(blockToRemove.id);
                this.world.removeBlock(this.selectedCoords.x, this.selectedCoords.y, this.selectedCoords.z);
                this.socket.getSocket()?.emit("removeBlock", {
                     x: this.selectedCoords.x, y: this.selectedCoords.y, z: this.selectedCoords.z
                });
                this.audioManager.playBlockSound(blockToRemoveO, 'break');
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
        if (!this.usePointerLock || this.controls.isLocked) {
            if (!this.usePointerLock || event.button != 2) {
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
        //const intersects = this.raycaster.intersectObjects(world.children, true);

        const intersectObjects = [...world.children];
        // Add entities with meshes to the raycaster target
        for (const entity of this.world.entities || []) {
            if (entity.mesh) {
                intersectObjects.push(entity.mesh);
            }
        }

        // Mettre à jour le raycaster en fonction de la position de la souris
        this.raycaster.setFromCamera(this.mouse, this.camera);
        this.raycaster.camera = this.camera;

        const intersects = this.raycaster.intersectObjects(intersectObjects, true);

        if (!this.usePointerLock || this.controls.isLocked) {
            if (intersects.length > 0) {
                const intersected = intersects[0];
                if (intersected.instanceId !== undefined) {
                    // Block

                    //récupére la position du chunk parent du bloc
                    const chunk = intersected.object.parent;

                    // récupére transformation matrix du bloc intercepté
                    const blockMatrix = new THREE.Matrix4();
                    intersected.object.getMatrixAt(intersected.instanceId, blockMatrix);


                    // Récupère la position du chunk (grille globale)
                    this.selectedCoords = chunk.position.clone();

                    // Extraire la position du bloc sans la rotation
                    // decompose envoie les de blockMatrix dans des variables, nous on veut que la position
                    const blockPosition = new THREE.Vector3();
                    // Extraire le quaternion (rotation) du bloc
                    const blockQuaternion = new THREE.Quaternion();
                    blockMatrix.decompose(blockPosition, blockQuaternion, new THREE.Vector3());

                    // Ajoute la position du bloc à la position du chunk
                    this.selectedCoords.add(blockPosition);

                    // Arrondir les coordonnées à des entiers (alignement sur la grille)
                    this.selectedCoords.set(
                        Math.round(this.selectedCoords.x),
                        Math.round(this.selectedCoords.y),
                        Math.round(this.selectedCoords.z)
                    );

                    // Clone la normale pour ne pas modifier l'original
                    this.selectedNormal = intersected.face.normal.clone();


                    // Appliquer la rotation du bloc à la normale
                    this.selectedNormal.applyQuaternion(blockQuaternion).normalize();

                    // Déterminer où placer le bloc adjacent (pour placer un bloc en face de la normale)
                    this.selectedCoordsNormal = this.selectedCoords.clone().add(this.selectedNormal);

                    const blockSelected = this.world.getBlock(this.selectedCoords.x, this.selectedCoords.y, this.selectedCoords.z)

                    if (blockSelected && blockSelected.id !== blocks.empty.id) {

                        //adapater taille mesh au block highligt
                        let geometry = getBlockByIdFast(blockSelected.id).geometry;
                        geometry.computeBoundingBox(); // Assure que la bounding box est bien calculée

                        let size = new THREE.Vector3();
                        geometry.boundingBox.getSize(size);//boundingBox.getSize(size) récupère la taille réelle de l’objet.
                        this.selectionHelper.scale.set(size.x + 0.01, size.y + 0.01, size.z + 0.01);

                        this.selectedEntity = null;
                    }


                    this.selectionHelper.position.copy(this.selectedCoords);
                    this.selectionHelper.visible = true;

                } else {
                    this.selectedCoords = null;
                    this.selectionHelper.visible = false;
                    //Entity
                    const entity = intersected.object.userData.entity;
                    if (entity) {
                        //console.log("Entité touchée :", entity);
                        this.selectedEntity = entity;
                    }
                }
            } else {
                this.selectedCoords = null;
                this.selectionHelper.visible = false;
                this.selectedEntity = null;
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

        const block = getBlockByIdFast(id);
        if (block?.material) {
            this.scene.remove(this.meshHandItem);
            this.camera.remove(this.meshHandItem);
            const geometryHand = block.geometry.clone();
            geometryHand.scale(0.3, 0.3, 0.3);
            this.meshHandItem = new THREE.Mesh(geometryHand, block.material);
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
        if (!this.usePointerLock || this.controls.isLocked) {
            const currentBlock = this.world.getBlock(
                Math.floor(this.position.x),
                Math.floor((this.position.y) + this.height / 2), // centre joueur
                Math.floor(this.position.z)
            );
            this.inWater = currentBlock?.id === blocks.water.id;

            this.velocity.x = this.input.x;
            this.velocity.z = this.input.z;
            if (this.inWater) {
                this.velocity.x *= 0.4;
                this.velocity.z *= 0.4;
            }
            this.controls.moveRight(this.velocity.x * dt);
            this.controls.moveForward(this.velocity.z * dt);
            this.position.y += this.velocity.y * dt;

            let biome = this.world.getPlayerBiome(Math.floor(this.position.x), Math.floor(this.position.z));
            document.getElementById('player-position').innerHTML = this.toString()+' - '+biome;

            const direction = new THREE.Vector3();
            this.camera.getWorldDirection(direction);
            this.socket.getSocket()?.emit("playerState", {
                id: this.socket.id, // Identifiant unique du joueur
                position: { x: this.position.x, y: this.position.y, z: this.position.z },
                direction : { x: direction.x, y: direction.y, z: direction.z }
            });

            //Apply water effect
            this.scene.fog = this.inWater ? this.underwaterFog : this.defaultFog;

            if (this.riding) {
                // Transmet les inputs au contrôleur (ex: BoatEntity)
                if (typeof this.riding.setInput === 'function') {
                    this.riding.setInput(this.input);
                }

                // Met le joueur au-dessus de l'entité
                this.position.copy(this.riding.position.clone().add(new THREE.Vector3(0, 1, 0)));
                this.camera.position.copy(this.position);
            }
        }
    }

    updateBoundsHelper() {
        this.boundsHelper.position.copy(this.position);
        this.boundsHelper.position.y -= this.height /2;
    }

    onKeyDown(event) {
        if (event.code === 'ShiftLeft') this.run = this.maxRun;
        if (event.code === 'KeyW') this.input.z = this.maxSpeed+this.run;
        if (event.code === 'KeyS') this.input.z = -this.maxSpeed+this.run;
        if (event.code === 'KeyA') this.input.x = -this.maxSpeed+this.run;
        if (event.code === 'KeyD') this.input.x = this.maxSpeed+this.run;
        if (event.code === 'Space') if (this.onGround) this.velocity.y += this.jumpSpeed;
        if (event.code === 'F5') this.camera.position.set(this.camera.position.x, this.camera.position.y+1, this.camera.position.z);
    }

    onKeyUp(event) {
        if (event.code === 'ShiftLeft') this.run = 0;
        if (event.code === 'KeyW') this.input.z = 0;
        if (event.code === 'KeyS') this.input.z = 0;
        if (event.code === 'KeyA') this.input.x = 0;
        if (event.code === 'KeyD') this.input.x = 0;
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
            //console.log(`Taille des données : ${dataSize} octets`);
            //console.log(this.position);
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







