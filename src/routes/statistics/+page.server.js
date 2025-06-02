import db from '$lib/db.js';

export async function load() {
    const stats = await db.getStatistics();

    return {
        ...stats
    };
}

