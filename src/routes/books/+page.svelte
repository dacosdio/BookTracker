<script>
    let {data} = $props();
    import BookCard from "$lib/components/BookCard.svelte";
</script>

<p><i>Daten und Bilder generiert mit ChatGPT und DALL-E</i></p>
<a style="margin-bottom: 20px;" class="btn btn-primary" href="books/create" role="button"> Add New Book</a>
<div class="row">
  {#each data.books as book}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <BookCard book={book}></BookCard>
    </div>
  {/each}
</div>