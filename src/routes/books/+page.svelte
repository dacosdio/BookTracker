<script>
    let {data} = $props();
    import BookCard from "$lib/components/BookCard.svelte";
    
    let books = data.books;

    // Genre Filter → Standard: Alle
      let selectedGenre = $state("all");

    // Automatisch alle Genres berechnen
    let genres = Array.from(new Set(books.map(book => book.genre))).sort();

    // Funktion zum Filtern
    function getFilteredBooks() {
        return selectedGenre === "all"
            ? books
            : books.filter(book => book.genre === selectedGenre);
    }
</script>

<p><i>Daten und Bilder generiert mit ChatGPT und DALL-E</i></p>

<label for="genre-filter">Filter by Genre:</label>
<select id="genre-filter" bind:value={selectedGenre} style="margin-bottom: 1rem;">
    <option value="all">All Genres</option>
    {#each genres as genre}
        <option value={genre}>{genre}</option>
    {/each}
</select>

<div class="row">
  {#each getFilteredBooks() as book}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <BookCard book={book}></BookCard>
    </div>
  {/each}
</div>