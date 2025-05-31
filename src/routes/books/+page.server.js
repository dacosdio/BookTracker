import db from "$lib/db";

export async function load() {
    return {
        books: await db.getBooks() 
    }
    
}

export const actions = {
    addToFavorites: async ({ request }) => {
        console.log("Add to Favorites");
        let data = await request.formData();
        let id = data.get("bookId");

        let book = {
            _id: id,
            favorite: true
        };

        await db.updateBook(book);
    },

    removeFromFavorites: async ({ request }) => {
        console.log("Remove from Favorites");
        let data = await request.formData();
        let id = data.get("bookId");

        let book = {
            _id: id,
            favorite: false
        };

        await db.updateBook(book);
    }
};