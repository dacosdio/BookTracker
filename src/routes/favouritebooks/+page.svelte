<script>
    let { data } = $props();
    const books = data.books;
</script>

<h1 class="mb-4">Favorite Books</h1>

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {#each books as book}
        <div class="col">
            <div class="card h-100 bg-dark text-white border-secondary">
                <img 
    src={book.poster} 
    class="card-img-top" 
    style="height: 300px; width: 100%; object-fit: cover;" 
    alt={"Cover of " + book.title} 
/>
                <div class="card-body">
                    <h5 class="text-warning">{book.title}</h5>
                    <p class="card-text">Author: {book.author}</p>
                    <p class="card-text">Genre: {book.genre}</p>
                    <p class="card-text">Year: {book.year}</p>
                </div>
                <div class="card-footer d-flex flex-column gap-2">
                    <!-- Remove from Favorites -->
                    <form method="post" action="?/removeFromFavorites" class="d-grid">
                        <input type="hidden" name="bookId" value={book._id} />
                        <button type="submit" class="btn btn-danger">Remove from Favorites</button>
                    </form>

                    <!-- Update Status -->
                    <form method="post" action="?/updateStatus" class="d-flex align-items-center">
                        <input type="hidden" name="bookId" value={book._id} />
                        <label for={"status-" + book._id} class="me-2 mb-0">Change Status:</label>
                        <select
                            name="status"
                            id={"status-" + book._id}
                            class="form-select me-2"
                            style="width: auto;"
                        >
                            <option value="planned" selected={book.status === "planned"}>Planned</option>
                            <option value="reading" selected={book.status === "reading"}>Reading</option>
                            <option value="read" selected={book.status === "read"}>Read</option>
                        </select>
                        <button type="submit" class="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        </div>
    {/each}
</div>
