<script>
    let { data } = $props();
    const book = data.book;
</script>

<a href="/books" class="btn btn-primary" style="margin-bottom: 1rem;">Back</a>

{#if book}
    <div>
        <h1>{book.title}</h1>
        <img
            src={book.poster}
            alt={"Cover of " + book.title}
            style="width: 300px; height: auto; margin-bottom: 1rem;"
        />
        <div class="book-details-box">
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Year of publication:</strong> {book.year}</p>
            <p><strong>Rating:</strong> {book.rating}</p>
        </div>

        {#if !book.favorite}
            <form method="post" action="?/addToFavourites">
                <input type="hidden" name="bookId" value={book._id} />
                <button type="submit" class="btn-green">
                    Add to favorites
                </button>
            </form>
        {:else}
            <form method="post" action="?/removeFromFavourites">
                <input type="hidden" name="bookId" value={book._id} />
                <button type="submit" class="btn-red">
                    Remove from favorites
                </button>
            </form>
        {/if}
    </div>
{:else}
    <p>Book not found.</p>
{/if}
