import db from "$lib/db";

export const actions = {
    create: async ({request}) => {
        let data = await request.formData();
        console.log(data);

        let book = {
            title: data.get("title"),
            year: data.get("year"),
            author: data.get("author"),
        }
        await db.createMovie(book);
    }
}