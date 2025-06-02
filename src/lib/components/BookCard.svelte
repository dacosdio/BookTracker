<script>
  let { book } = $props();
</script>

<div class="book-card">
  <div>
    <img class="img-fluid" src={book.poster} alt="" />
  </div>
  <div class="details">
    <div class="title">
      <a href={"/books/" + book._id}>{book.title}</a>
    </div>
    <div>
      Author: {book.author}
    </div>
    <div>
      Jahr: {book.year}
    </div>
    <div>
      Genre: {book.genre}
    </div>
    <div>
      Rating: {book.rating}
    </div>

    <!-- LÖSCHEN BUTTON (ohne Bestätigung) -->
    <form method="post" action={"/books/" + book._id + "?/delete"}>
      <button type="submit" class="delete-button">
        Buch löschen
      </button>
    </form>

  </div>
</div>
