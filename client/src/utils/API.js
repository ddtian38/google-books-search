import axios from "axios";

export default {

  search: function(query){
      console.log(query)
      return axios.get("/search", { params: { q: query } });

  },

  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
