import axios from "axios";
require("dotenv").config();
// Sending an authorization header along with our request is authorizing the request
const headers = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
const TOKEN = process.env.REACT_APP_TOKEN; 
const URL = process.env.REACT_APP_API_URL;

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
    return axios.get("/api/users/favorites", headers());
  },
  saveFavorite: (selectedStock) => {
    return axios.post("/api/users/favorites", { ...selectedStock }, headers());
  },
  deleteFavorite: (favoriteStock) => {
    return axios.delete(`/api/users/favorites/${favoriteStock._id}`, headers());
  },
  getStocks: () => {
    return axios.get("/api/stocks")
  },
  getChart : (symbol,range) => {
    return axios.get(`${URL+symbol}/batch?token=${TOKEN}&types=chart,quote&range=${range}`)
  }
};
