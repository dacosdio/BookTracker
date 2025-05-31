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

        <button>Zur Booklist hinzufügen</button>
    </div>
{:else}
    <p>Book not found.</p>
{/if}
