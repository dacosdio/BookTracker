<script>
    let { form } = $props();
</script>

<h1>Add A Book</h1>
<a href="/books">Back</a>
<form method="Post" action="?/create">
    <div style="margin-top: 10px;">
        <label for="exampleInputEmail1" class="form-label">Title</label>
        <input
            name="title"
            type="Text"
            id="disabledTextInput"
            class="form-control"
            placeholder="Enter Booktitle"
        />
    </div>
    <div style="margin-top: 10px;">
        <label for="exampleInputEmail1" class="form-label">Year</label>
        <input
            name="year"
            type="Number"
            id="disabledTextInput"
            class="form-control"
            placeholder="Enter Year"
        />
    </div>
    <div style="margin-top: 10px;">
        <label for="exampleInputEmail1" class="form-label">Author</label>
        <input
            name="length"
            type="text"
            id="disabledTextInput"
            class="form-control"
            placeholder="Enter Author"
        />
        <div style="margin-top: 20px;">
            <button type="submit" class="btn btn-primary">Add movie</button>
        </div>
    </div>
</form>

{#if form?.sucsess}
    <p style="color: green;">Book added</p>
{/if}
