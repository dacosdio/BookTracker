import db from '$lib/db.js';

export async function load() {
    const books = await db.getBooks();

    // Gesamtanzahl
    const totalBooks = books.length;

    // Status zählen
    const statusCounts = {
        read: books.filter(book => book.status === "read").length,
        planned: books.filter(book => book.status === "planned").length,
        reading: books.filter(book => book.status === "reading").length
    };

    // Durchschnittliches Rating
    const ratings = books.map(book => book.rating);
    const avgRating = ratings.length > 0
        ? (ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(2)
        : "N/A";

    // Genres zählen
    const genreCounts = {};
    books.forEach(book => {
        if (book.genre) {
            genreCounts[book.genre] = (genreCounts[book.genre] || 0) + 1;
        }
    });

    // Lieblingsautor (Autor mit meisten Büchern)
    const authorCounts = {};
    books.forEach(book => {
        if (book.author) {
            authorCounts[book.author] = (authorCounts[book.author] || 0) + 1;
        }
    });

    let favoriteAuthor = "N/A";
    let maxBooks = 0;
    for (const author in authorCounts) {
        if (authorCounts[author] > maxBooks) {
            favoriteAuthor = author;
            maxBooks = authorCounts[author];
        }
    }

    return {
        totalBooks,
        statusCounts,
        avgRating,
        genreCounts,
        favoriteAuthor
    };
}
