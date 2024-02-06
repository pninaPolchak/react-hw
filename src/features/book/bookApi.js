import axios from "axios";

let baseUrl = "http://localhost:5000/api/books";

export const getAllBook = () => {
    return axios.get(baseUrl);
}

export const addBook = (book) => {
    return axios.post(`${baseUrl}`, book);
}
