import db from "$lib/db";

export const actions = {
    create: async ({ request }) => {
        let data = await request.formData();
        console.log(data);

        let book = {
            title: data.get("title"),
            year: Number(data.get("year")),       
            author: data.get("author"),
            status: data.get("status"),
            genre: data.get("genre"),
            rating: Number(data.get("rating"))     
        };

        await db.createBook(book);
    }
};
