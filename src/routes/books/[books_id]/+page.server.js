import db from "$lib/db";

export async function load({params}) {
    console.log(params.books_id)
    return {
        movies: await db.getMovie(params.books_id)
    }
    
}