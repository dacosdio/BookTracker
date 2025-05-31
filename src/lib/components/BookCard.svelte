<script>
  let { book } = $props();
</script>

<div class="book-card">
  <div class="details">
    <div class="title">
      <a href={"/books/"+book._id}>{book.title}</a>
    </div>
    <div>
      Jahr: {book.year}
    </div>
    <div>
      Author: {book.author}
    </div>
  </div>
</div>

<style>
  .book-card {
    border: 1px solid #555;
    height: 100%;
    background-color: #444;
    color: white;
  }
  .details {
    padding: 0.5em;
  }
  .title {
    font-weight: bold;
  }
</style>
