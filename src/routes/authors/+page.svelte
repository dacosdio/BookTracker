<script>
    let { data } = $props();
    let authors = data.authors;
</script>

<h1>Authors</h1>

<div class="row">
    {#each authors as author}
        <div class="col-md-6 mb-4">
            <div class="author-card h-100">
                <h2>{author.name}</h2>
                 <img
            src={author.photo}
            alt={"Cover of " + author.title}
            style="width: 300px; height: auto; margin-bottom: 1rem;"
        />
                <p><strong>Bio:</strong> {author.bio}</p>
                <p><strong>Birth Year:</strong> {author.birthYear}</p>
                <p><strong>Books:</strong></p>
                <ul>
                    {#each author.books as bookTitle}
                        <li>{bookTitle}</li>
                    {/each}
                </ul>
            </div>
        </div>
    {/each}
</div>

<style>
    .author-card {
        border: 1px solid #555;
        background-color: #333;
        color: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
    }

    h1 {
        margin-bottom: 1.5rem;
        color: lightblue;
    }

    h2 {
        margin-bottom: 0.5rem;
        color: #ffcc00;
    }

    ul {
        padding-left: 1.5rem;
    }

    li {
        margin-bottom: 0.3rem;
    }
</style>
