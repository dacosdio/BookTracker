<script>
    let { data } = $props();
    const books = data.books;
</script>

<h1>Favorite Books</h1>

{#each books as book}
    <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
        <h2>{book.title}</h2>
        <img src={book.poster} alt={"Cover of " + book.title} style="width: 150px; height: auto; margin-bottom: 0.5rem; border-radius: 5px;" />
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Year: {book.year}</p>

        <form method="post" action="?/removeFromFavorites">
            <input type="hidden" name="bookId" value={book._id} />
            <button type="submit" class="btn-red">Remove from Favorites</button>

        </form>

        <form method="post" action="?/updateStatus">
            <input type="hidden" name="bookId" value={book._id} />
            <label for={"status-" + book._id}>Change Status:</label>
            <select
                name="status"
                id={"status-" + book._id}
                style="margin: 0 0.5rem;"
            >
                <option value="planned" selected={book.status === "planned"}
                    >Planned</option
                >
                <option value="reading" selected={book.status === "reading"}
                    >Reading</option
                >
                <option value="read" selected={book.status === "read"}
                    >Read</option
                >
            </select>
            <button type="submit" class="btn btn-primary">Update Status</button>

        </form>
    </div>
{/each}
