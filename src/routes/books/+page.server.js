import db from "$lib/db.js";

export async function load() {
    const books = await db.getBooks();
    const genres = await db.getGenres();

    return {
        books,
        genres
    };
}


