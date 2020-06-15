import axios from "axios";

export default {
    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (savedBookData) {
        return axios.post("/api/books", savedBookData);
    },
    searchBook: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    },
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    }
};
