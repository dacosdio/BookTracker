import db from '$lib/db.js';

export async function load() {
    const books = await db.getBooks();

    // Zuerst nur Favoriten filtern
    const favoriteBooks = books.filter(book => book.favorite === true);

    // Gesamtanzahl FAVORITEN Bücher
    const totalBooks = favoriteBooks.length;

    // Status zählen NUR für Favoriten
    const statusCounts = {
        read: favoriteBooks.filter(book => book.status === "read").length,
        planned: favoriteBooks.filter(book => book.status === "planned").length,
        reading: favoriteBooks.filter(book => book.status === "reading").length
    };

    // Durchschnittliches Rating NUR für Favoriten
    const ratings = favoriteBooks.map(book => book.rating);
    const avgRating = ratings.length > 0
        ? (ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(2)
        : "N/A";

    // Genres zählen NUR für Favoriten
    const genreCounts = {};
    favoriteBooks.forEach(book => {
        if (book.genre) {
            genreCounts[book.genre] = (genreCounts[book.genre] || 0) + 1;
        }
    });

    // Lieblingsautor (Autor mit meisten Büchern) NUR für Favoriten
    const authorCounts = {};
    favoriteBooks.forEach(book => {
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
