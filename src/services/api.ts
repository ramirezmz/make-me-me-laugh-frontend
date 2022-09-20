import axios from "axios";

const api = axios.create({
  baseURL: "https://geek-jokes.sameerkumar.website/",
});

export default {
  getJoke() {
    return api.get("api?format=json");
  },
};
