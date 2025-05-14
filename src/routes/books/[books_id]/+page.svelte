<script>
    let {data} = $props();

</script>

<a href="/books">Back</a>
<div>
    <h1>{data.books.title}</h1>
    <p>Jahr: {data.books.year}</p>
    <p>Länge: {data.books.author}</p>
</div>

