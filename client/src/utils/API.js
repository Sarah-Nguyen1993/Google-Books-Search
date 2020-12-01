import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  getBooks: function(query) {
    return axios.get(BASEURL + query)
  }
};