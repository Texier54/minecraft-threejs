/**
 * Pathfinder A* pour les mobs terrestres.
 *
 * Le chemin est calculé sur la grille des blocs et non sur le mesh Three.js.
 *
 * Un noeud { x, y, z } représente la position des pieds du mob.
 */
export class Pathfinder {
    constructor(world, options = {}) {
        this.world = world;

        this.maxDistance = options.maxDistance ?? 32;
        this.maxNodes = options.maxNodes ?? 1500;

        this.maxStepUp = options.maxStepUp ?? 1;
        this.maxStepDown = options.maxStepDown ?? 3;

        // Hauteur du mob en blocs.
        this.entityHeight = options.entityHeight ?? 2;

        // Permet de réduire les recalculs.
        this.cacheDuration = options.cacheDuration ?? 500;
        this.cache = new Map();
    }

    findPath(startPosition, targetPosition) {
        const start = this.toNode(startPosition);
        const target = this.toNode(targetPosition);
        if (!this.canStandAt(start.x, start.y, start.z) ||
            !this.canStandAt(target.x, target.y, target.z) ||
            !this.isInsideSearchDistance(start, target)) {
            return null;
        }

        const now = Date.now();
        for (const [key, entry] of this.cache) {
            if (now - entry.time >= this.cacheDuration) this.cache.delete(key);
        }

        if (this.sameNode(start, target)) {
            return [start];
        }

        const cacheKey =
            `${start.x},${start.y},${start.z}|` +
            `${target.x},${target.y},${target.z}`;

        const cached = this.cache.get(cacheKey);

        if (cached && cached.path.every((node, index, path) =>
            this.canStandAt(node.x, node.y, node.z) &&
            (index === 0 || this.canMoveBetween(path[index - 1], node))
        )) {
            return cached.path.map(node => ({ ...node }));
        }

        const path = this.aStar(start, target);
        if (path) {
            this.cache.set(cacheKey, {
                time: Date.now(),
                path: path.map(node => ({ ...node }))
            });
        }

        return path;
    }

    aStar(start, target) {
        const openSet = new Map();
        const closedSet = new Set();

        const cameFrom = new Map();
        const gScore = new Map();
        const fScore = new Map();

        const startKey = this.key(start);

        gScore.set(startKey, 0);
        fScore.set(startKey, this.heuristic(start, target));
        openSet.set(startKey, start);

        let processedNodes = 0;

        while (openSet.size > 0) {
            processedNodes++;

            if (processedNodes > this.maxNodes) {
                return null;
            }

            const current = this.getLowestFScore(openSet, fScore);

            const currentKey = this.key(current);

            if (this.sameNode(current, target)) {
                return this.reconstructPath(
                    cameFrom,
                    current
                );
            }

            openSet.delete(currentKey);
            closedSet.add(currentKey);

            const neighbors = this.getNeighbors(current, target);

            for (const neighbor of neighbors) {
                const neighborKey = this.key(neighbor);

                if (closedSet.has(neighborKey)) {
                    continue;
                }

                const distance =
                    this.distance(current, neighbor);

                const tentativeG =
                    (gScore.get(currentKey) ?? Infinity) +
                    distance;

                if (
                    !gScore.has(neighborKey) ||
                    tentativeG < gScore.get(neighborKey)
                ) {
                    cameFrom.set(neighborKey, current);

                    gScore.set(
                        neighborKey,
                        tentativeG
                    );

                    fScore.set(
                        neighborKey,
                        tentativeG +
                        this.heuristic(neighbor, target)
                    );

                    openSet.set(
                        neighborKey,
                        neighbor
                    );
                }
            }
        }

        return null;
    }

    getNeighbors(node, target) {
        const neighbors = [];

        const directions = [
            { x: 1, z: 0 },
            { x: -1, z: 0 },
            { x: 0, z: 1 },
            { x: 0, z: -1 }
        ];

        for (const direction of directions) {
            const x = node.x + direction.x;
            const z = node.z + direction.z;

            /*
             * On cherche d'abord la hauteur directement devant nous.
             *
             * Exemple :
             *
             *       █
             *     M █
             *   █ █ █
             *
             * Le mob peut monter d'un bloc.
             */

            // Essayer le niveau actuel, puis les montées et les descentes.
            const heights = [0];
            for (let dy = 1; dy <= this.maxStepUp; dy++) heights.push(dy);
            for (let dy = 1; dy <= this.maxStepDown; dy++) heights.push(-dy);

            for (const dy of heights) {
                const y = node.y + dy;

                const candidate = { x, y, z };

                if (!this.isInsideSearchDistance(candidate, target)) {
                    continue;
                }

                if (!this.canStandAt(x, y, z)) {
                    continue;
                }

                /*
                 * On ne veut pas traverser un bloc qui coupe
                 * horizontalement le déplacement.
                 */
                if (!this.canMoveBetween(node, candidate)) {
                    continue;
                }

                neighbors.push(candidate);

                // Le premier niveau valide est le plus intéressant.
                break;
            }
        }

        return neighbors;
    }

    canStandAt(x, y, z) {
        /*
         * y représente la position des pieds.
         *
         *        bloc libre
         *        bloc libre
         *        --------
         *        SOL
         */

        // Il faut un bloc solide sous les pieds.
        if (!this.isSolidBlock(x, y - 1, z)) {
            return false;
        }
        // Et suffisamment d'espace au-dessus.
        for (let dy = 0; dy < this.entityHeight; dy++) {
            if (!this.isPassableBlock(x, y + dy, z)) {
                return false;
            }
        }

        return true;
    }

    canMoveBetween(from, to) {
        const horizontal = Math.abs(from.x - to.x) + Math.abs(from.z - to.z);
        const rise = to.y - from.y;
        if (horizontal !== 1 || rise > this.maxStepUp || -rise > this.maxStepDown) {
            return false;
        }

        // Monter dans la colonne de départ, puis avancer ; pour descendre,
        // avancer à la hauteur actuelle avant de tomber dans la colonne cible.
        const top = Math.max(from.y, to.y) + this.entityHeight;
        for (let y = from.y; y < top; y++) {
            if (!this.isPassableBlock(from.x, y, from.z)) return false;
        }
        for (let y = to.y; y < top; y++) {
            if (!this.isPassableBlock(to.x, y, to.z)) return false;
        }
        return true;
    }

    isSolidBlock(x, y, z) {
        if (y < 0) {
            return true;
        }

        const block = this.getBlock(x, y, z);

        return block != null && block.id !== null &&
            block.id !== undefined &&
            block.id !== 0;
    }

    isPassableBlock(x, y, z) {
        const block = this.getBlock(x, y, z);

        // Un chunk absent est inconnu, et ne doit pas être traversé.
        return block != null && block.id === 0;
    }

    getBlock(x, y, z) {
        if (!this.world || !this.world.getBlock) {
            return null;
        }

        return this.world.getBlock(
            Math.floor(x),
            Math.floor(y),
            Math.floor(z)
        );
    }

    isInsideSearchDistance(node, target) {
        const dx = node.x - target.x;
        const dy = node.y - target.y;
        const dz = node.z - target.z;

        return (
            Math.sqrt(dx * dx + dy * dy + dz * dz)
            <= this.maxDistance
        );
    }

    toNode(position) {
        return {
            x: Math.floor(position.x),
            y: Math.floor(position.y),
            z: Math.floor(position.z)
        };
    }

    key(node) {
        return `${node.x},${node.y},${node.z}`;
    }

    sameNode(a, b) {
        return (
            a.x === b.x &&
            a.y === b.y &&
            a.z === b.z
        );
    }

    distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dz = a.z - b.z;

        return Math.sqrt(
            dx * dx +
            dy * dy +
            dz * dz
        );
    }

    heuristic(a, b) {
        // La distance euclidienne reste une borne inférieure des coûts réels.
        return this.distance(a, b);
    }

    getLowestFScore(openSet, fScore) {
        let best = null;
        let bestScore = Infinity;

        for (const [key, node] of openSet) {
            const score = fScore.get(key) ?? Infinity;

            if (score < bestScore) {
                bestScore = score;
                best = node;
            }
        }

        return best;
    }

    reconstructPath(cameFrom, current) {
        const path = [current];
        let currentKey = this.key(current);

        while (cameFrom.has(currentKey)) {
            current = cameFrom.get(currentKey);
            currentKey = this.key(current);

            path.push(current);
        }

        return path.reverse();
    }

    clearCache() {
        this.cache.clear();
    }
}