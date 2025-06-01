<script>
  let { data } = $props();
  import BookCard from "$lib/components/BookCard.svelte";

  let books = data.books;

  // Genre Filter → Standard: Alle
  let selectedGenre = $state("all");
  let selectedRating = $state("all");

  // Automatisch alle Genres berechnen
  let genres = Array.from(new Set(books.map((book) => book.genre))).sort();

  // Funktion zum Filtern
  function getFilteredBooks() {
    let filtered = books;

    // Genre-Filter
    if (selectedGenre !== "all") {
      filtered = filtered.filter((book) => book.genre === selectedGenre);
    }

    // Rating-Filter
    if (selectedRating !== "all") {
      filtered = filtered.filter(
        (book) => book.rating === Number(selectedRating),
      );
    }

    return filtered;
  }
</script>

<p><i>Daten und Bilder generiert mit ChatGPT und DALL-E</i></p>

<label for="genre-filter">Filter by Genre:</label>
<select
  id="genre-filter"
  bind:value={selectedGenre}
  style="margin-bottom: 1rem;"
>
  <option value="all">All Genres</option>
  {#each genres as genre}
    <option value={genre}>{genre}</option>
  {/each}
</select>

<label for="rating-filter">Filter by Rating:</label>
<select
  id="rating-filter"
  bind:value={selectedRating}
  style="margin-bottom: 1rem;"
>
  <option value="all">All Ratings</option>
  {#each [1, 2, 3, 4, 5] as r}
    <option value={r}>{r} Stars</option>
  {/each}
</select>

<div class="row">
  {#each getFilteredBooks() as book}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <BookCard {book} />

    </div>
  {/each}
</div>
