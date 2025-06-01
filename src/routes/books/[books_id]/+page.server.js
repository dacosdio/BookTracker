import db from "$lib/db";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
    console.log(params.books_id); 

    return {
        book: await db.getBook(params.books_id)
    };
}

export const actions = {
    addToFavourites: async ({ request }) => {
        console.log("Add to Favourites");
        let data = await request.formData();
        let id = data.get("bookId");

        let book = {
            _id: id,
            favorite: true
        };
        await db.updateBook(book);
    },

    removeFromFavourites: async ({ request }) => {
        console.log("Remove from Favourites");
        let data = await request.formData();
        let id = data.get("bookId");

        let book = {
            _id: id,
            favorite: false
        };
        await db.updateBook(book);
    },

    delete: async ({ params }) => {
        console.log("Deleting book with id:", params.books_id);
        await db.deleteBook(params.books_id);
        throw redirect(303, "/books"); // Nach dem Löschen → zurück zur Bücherübersicht
    }
};
