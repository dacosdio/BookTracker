import db from "$lib/db";

export async function load({ params }) {
    console.log(params.books_id); 

    return {
        book: await db.getBook(params.books_id)
    };
}
