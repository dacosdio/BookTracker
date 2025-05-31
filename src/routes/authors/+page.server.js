import db from '$lib/db.js';

export async function load() {
    const authors = await db.getAuthors();

    return {
        authors
    };
}
