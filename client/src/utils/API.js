import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  //search books from google api
  searchBooks: function(query) {
    return axios.get(BASEURL + query)
  },

  //save books to the database
  saveBook: function(bookData){
    return axios.post("/api/books", bookData)
  },

  //get all books from the database
  getBooks: function() {
    return axios.get("/api/books");
  },

  //delete book with given id
  deleteBook: function(id){
    return axios.delete("/api/books/" + id)
  }
};
  