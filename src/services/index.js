import axios from "axios";

const API = axios.create({
  baseURL: "https://kabit-api.herokuapp.com",
});

export default API;
