import db from "$lib/db.js";

export async function load() {
    const books = await db.getBooks();

    // Alle Genres berechnen (für Dropdown)
    const genres = Array.from(new Set(books.map(book => book.genre))).sort();

    return {
        books,
        genres
    };
}

export const actions = {
    addToFavorites: async ({ request }) => {
        console.log("Add to Favorites");
        let data = await request.formData();
        let id = data.get("bookId");

        let book = {
            _id: id,
            favorite: true
        };

        await db.updateBook(book);
    },

    removeFromFavorites: async ({ request }) => {
        console.log("Remove from Favorites");
        let data = await request.formData();
        let id = data.get("bookId");

        let book = {
            _id: id,
            favorite: false
        };

        await db.updateBook(book);
    }
};
