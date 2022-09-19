import axios from "axios";

const api = axios.create({
  baseURL: "https://geek-jokes.sameerkumar.website/",
});

export default api;
