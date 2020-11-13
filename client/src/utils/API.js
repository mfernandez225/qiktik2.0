import axios from "axios";

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
  getBars : (symbol) => {
    return axios.get(`/api/stocks/${symbol}`)
  }
};
