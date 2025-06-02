<!-- Hero Section -->
<div
  class="hero-section d-flex flex-column justify-content-center align-items-center text-center"
>
  <h1>Welcome to Bookstracker</h1>
  <p class="lead">Your tracker and search engine for books!</p>
  <a href="/books" class="btn btn-primary btn-lg mt-3">Get Started</a>
</div>

<!-- Cards Section -->
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
  <!-- Add New Book -->
  <div class="col">
    <div class="card h-100 bg-secondary text-white border border-secondary">
      <img
        src="/images/addabook.png"
        class="card-img-top p-3"
        alt="Add New Book"
      />
      <div class="card-body">
        <h5 class="card-title text-warning">Add New Book</h5>
        <p class="card-text text-light">
          Add a new book to your tracker. Enter the book's title, author, genre,
          and other details.
        </p>
        <a href="/addabook" class="btn btn-primary">Add a New Book</a>
      </div>
    </div>
  </div>

  <!-- Favorite Books -->
  <div class="col">
    <div class="card h-100 bg-secondary text-white border border-secondary">
      <img
        src="/images/favorites.png"
        class="card-img-top p-3"
        alt="Favorite Books"
      />
      <div class="card-body">
        <h5 class="card-title text-warning">Favorite Books</h5>
        <p class="card-text text-light">
          View your favorite books. All books that you marked as favorites are
          shown here for quick access.
        </p>
        <a href="/favouritebooks" class="btn btn-primary">View Favorites</a>
      </div>
    </div>
  </div>

  <!-- Authors -->
  <div class="col">
    <div class="card h-100 bg-secondary text-white border border-secondary">
      <img src="/images/authors.png" class="card-img-top p-3" alt="Authors" />
      <div class="card-body">
        <h5 class="card-title text-warning">Authors</h5>
        <p class="card-text text-light">
          Explore the authors of your books. View biographies and see which
          books you have from each author.
        </p>
        <a href="/authors" class="btn btn-primary">View Authors</a>
      </div>
    </div>
  </div>

  <!-- Statistics -->
  <div class="col">
    <div class="card h-100 bg-secondary text-white border border-secondary">
      <img
        src="/images/statistics.png"
        class="card-img-top p-3"
        alt="Statistics"
      />
      <div class="card-body">
        <h5 class="card-title text-warning">Statistics</h5>
        <p class="card-text text-light">
          View interesting statistics about your book collection: total books,
          ratings, genres, favorite authors, and more!
        </p>
        <a href="/statistics" class="btn btn-primary">View Statistics</a>
      </div>
    </div>
  </div>
</div>
