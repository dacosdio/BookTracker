<script>
    let { data } = $props();
    const book = data.book;
</script>

<a href="/books">Back</a>

{#if book}
    <div>
        <h1>{book.title}</h1>
        <p>Autor: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Erscheinungsjahr: {book.year}</p>
        <p> Rating: {book.rating}</p>

   {#if !book.favorite}
    <form method="post" action="?/addToFavourites">
        <input type="hidden" name="bookId" value={book._id} />
        <button type="submit" class="btn-green">
            Zu Favoriten hinzufügen
        </button>
    </form>
{:else}
    <form method="post" action="?/removeFromFavourites">
        <input type="hidden" name="bookId" value={book._id} />
        <button type="submit" class="btn-red">
            Aus Favoriten entfernen
        </button>
    </form>
{/if}

    </div>
{:else}
    <p>Book not found.</p>
{/if}
