// Blocs pleins et sans danger sur lesquels un joueur peut apparaître.
const safeGroundIds = new Set([1, 2, 3, 4, 5, 7, 12, 13, 24]);

export function findSpawnPosition(world, origin, { height = 1.8, radius = 0.5, searchRadius = 8 } = {}) {
    const maxY = world.chunkSize.height - 1;
    const originX = Math.round(origin.x);
    const originZ = Math.round(origin.z);

    for (let ring = 0; ring <= searchRadius; ring++) {
        for (let dx = -ring; dx <= ring; dx++) {
            for (let dz = -ring; dz <= ring; dz++) {
                if (Math.max(Math.abs(dx), Math.abs(dz)) !== ring) continue;
                const x = originX + dx;
                const z = originZ + dz;
                for (let y = maxY - Math.ceil(height); y >= 0; y--) {
                    const floor = world.getBlock(x, y, z);
                    if (!floor) break; // Terrain encore inconnu : réessayer plus tard.
                    if (!safeGroundIds.has(floor.id)) continue;
                    let clear = true;
                    // Les blocs sont centrés sur leurs coordonnées entières.
                    for (let bx = Math.floor(x - radius + 0.5 + 1e-6); bx <= Math.floor(x + radius + 0.5 - 1e-6); bx++) {
                        for (let bz = Math.floor(z - radius + 0.5 + 1e-6); bz <= Math.floor(z + radius + 0.5 - 1e-6); bz++) {
                            for (let by = y + 1; by <= y + Math.ceil(height); by++) {
                                if (world.getBlock(bx, by, bz)?.id !== 0) clear = false;
                            }
                        }
                    }
                    if (clear) return { x, y: y + 0.5 + height + 0.01, z };
                }
            }
        }
    }
    return null;
}
