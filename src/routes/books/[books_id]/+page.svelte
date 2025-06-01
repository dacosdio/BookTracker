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

        <!-- FAVORITES ACTIONS -->
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

        <!-- DELETE BUTTON -->
        <form method="post" action="?/delete" style="margin-top: 1rem;">
            <button type="submit" class="btn-red">
                Delete book
            </button>
        </form>

    </div>
{:else}
    <p>Book not found.</p>
{/if}

<style>
    .btn-green {
        background-color: green;
        color: white;
        border: none;
        padding: 0.5em 1em;
        margin-top: 0.5em;
        cursor: pointer;
    }

    .btn-red {
        background-color: red;
        color: white;
        border: none;
        padding: 0.5em 1em;
        margin-top: 0.5em;
        cursor: pointer;
    }

    .btn-red:hover {
        background-color: darkred;
    }

    .btn-green:hover {
        background-color: darkgreen;
    }

    .book-details-box {
        margin-bottom: 1rem;
    }
</style>
