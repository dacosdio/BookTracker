<script>
    let { form } = $props();

    let title = $state();
    let author = $state();
    let year = $state();
    let genre = $state();
    let rating = $state();
    let favourite = $state(false);
</script>

<h1>New Book</h1>

<a href="/books" class="btn btn-primary" style="margin-bottom: 1rem;">Back</a>
<form method="Post" action="?/create">
    <div class="mb-3">
        <label for="titleInput" class="form-label">Title</label>
        <input
            id="titleInput"
            type="text"
            name="title"
            class="form-control"
            bind:value={title}
            required
        />
    </div>

    <div class="mb-3">
        <label for="authorInput" class="form-label">Author</label>
        <input
            id="authorInput"
            type="text"
            name="author"
            class="form-control"
            bind:value={author}
            required
        />
    </div>

    <div class="mb-3">
        <label for="yearInput" class="form-label">Year</label>
        <input
            id="yearInput"
            type="number"
            name="year"
            class="form-control"
            bind:value={year}
            required
        />
    </div>

    <div class="mb-3">
        <label for="genreSelect" class="form-label">Genre</label>
        <select
            id="genreSelect"
            name="genre"
            class="form-select"
            bind:value={genre}
        >
            <option>Fantasy</option>
            <option>Science Fiction</option>
            <option>Romance</option>
            <option>Thriller</option>
        </select>
    </div>

    <div class="mb-3">
        <label for="ratingInput" class="form-label">Rating (1–5)</label>
        <input
            id="ratingInput"
            type="number"
            name="rating"
            min="1"
            max="5"
            class="form-control"
            bind:value={rating}
        />
    </div>

    <div class="form-check mb-3">
        <input
            id="favCheck"
            class="form-check-input"
            type="checkbox"
            name="favourite"
            bind:checked={favourite}
        />
        <label class="form-check-label" for="favCheck">Mark as Favourite</label>
    </div>

    <button type="submit" class="btn btn-primary">Save Book</button>
</form>

{#if form?.sucsess}
    <p style="color: green;">Book added</p>
{/if}
