import db from "$lib/db";

export async function load() {
    const allBooks = await db.getBooks();

    // Nur favorite: true Bücher filtern
    const favoriteBooks = allBooks.filter(book => book.favorite === true);

    return {
        books: favoriteBooks
    };
}
