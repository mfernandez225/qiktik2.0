import axios from "axios";
require("dotenv").config();
// Sending an authorization header along with our request is authorizing the request
const headers = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default {
  signup: (firstName, lastName, email, password) => {
    return axios.post("/api/signup", {
      firstName,
      lastName,
      email,
      password,
    });
  },
  login: (email, password) => {
    return axios.post("/api/auth/login", { email, password });
  },
  getFavorites: () => {
    return axios.get("/api/users/stocks", headers());
  },
  saveFavorite: (selectedStock) => {
    return axios.post("/api/users/stocks", { ...selectedStock }, headers());
  },
  deleteFavorite: (favoriteStock) => {
    return axios.delete(`/api/users/stocks/${favoriteStock._id}`, headers());
  },
};
