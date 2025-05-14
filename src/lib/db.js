import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db("BookTrackerDB"); // neue Datenbank

//////////////////////////////////////////
// Books
//////////////////////////////////////////

// Get all books
async function getBooks() {
  let books = [];
  try {
    const collection = db.collection("books");
    const query = {};
    books = await collection.find(query).toArray();
    books.forEach((book) => {
      book._id = book._id.toString();
    });
  } catch (error) {
    console.log(error);
  }
  return books;
}

// Get book by id
async function getBook(id) {
  let book = null;
  try {
    const collection = db.collection("books");
    const query = { _id: new ObjectId(id) };
    book = await collection.findOne(query);
    if (book) {
      book._id = book._id.toString();
    } else {
      console.log("No book with id " + id);
    }
  } catch (error) {
    console.log(error.message);
  }
  return book;
}

// Create a new book
/* 
Example:
{
  title: "Der Schwarm",
  author: "Frank Schätzing",
  genre: "Thriller",
  year: 2004,
  status: "gelesen",
  favorite: true,
  rating: 5
}
*/
async function createBook(book) {
  try {
    const collection = db.collection("books");
    const result = await collection.insertOne(book);
    return result.insertedId.toString();
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

// Update an existing book
async function updateBook(book) {
  try {
    const id = book._id;
    delete book._id;
    const collection = db.collection("books");
    const query = { _id: new ObjectId(id) };
    const result = await collection.updateOne(query, { $set: book });

    if (result.matchedCount === 0) {
      console.log("No book with id " + id);
    } else {
      console.log("Book with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

// Delete book by ID
async function deleteBook(id) {
  try {
    const collection = db.collection("books");
    const query = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No book with id " + id);
    } else {
      console.log("Book with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

// Export functions
export default {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
