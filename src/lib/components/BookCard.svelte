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

<style>
  .book-card {
    border: 1px solid #555;
    height: 100%;
    background-color: #444;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .details {
    padding: 0.5em;
  }

  .title {
    font-weight: bold;
  }

  .delete-button {
    margin-top: 0.5em;
    background-color: red;
    color: white;
    border: none;
    padding: 0.5em 1em;
    cursor: pointer;
    width: 100%;
  }

  .delete-button:hover {
    background-color: darkred;
  }
</style>
