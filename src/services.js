import axios from "axios";

const api = axios.create({
  baseURL: "https://delc.herokuapp.com",
});

export default api;
