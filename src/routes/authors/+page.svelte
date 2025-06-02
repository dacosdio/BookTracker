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


