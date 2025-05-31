import db from '$lib/db.js';

export async function load() {
    // Alle Bücher holen
    const allBooks = await db.getBooks();

    // Nur Favoriten filtern:
    const books = allBooks.filter(book => book.favorite === true);

    // An die Seite geben:
    return {
        books
    };
}


export const actions = {
    removeFromFavourites: async ({ request }) => {
        console.log("Remove from Favourites");
        let data = await request.formData();
        let id = data.get("bookId");

        let book = {
            _id: id,
            favorite: false
        };

        await db.updateBook(book);
    }
};


