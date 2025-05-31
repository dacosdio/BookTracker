<script>
    let { data } = $props();
    const books = data.books;
</script>

<h1>Favorite Books</h1>

{#each books as book}
    <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Year: {book.year}</p>

        <form method="post" action="?/removeFromFavorites">
            <input type="hidden" name="bookId" value={book._id} />
            <button type="submit">Remove from Favorites</button>
        </form>
    </div>
{/each}
