<script>
  let { children } = $props();
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <span class="navbar-brand" href="/">BookTracker</span>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/books">Bookslist</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/addabook">New Book</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/favouritebooks">Favourite Books</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/authors">Authors</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container mt-3">
  {@render children()}
</div>

