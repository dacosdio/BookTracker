import db from "$lib/db.js";

export async function load() {
    const books = await db.getBooks();

    // Genres berechnen (optional, für Filter)
   const genres = Array.from(new Set(books.map(book => book.genre))).sort();

    return {
        books,
        genres
    };
}


