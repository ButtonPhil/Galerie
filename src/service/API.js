import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5173/Eternelles",
});

export default API;