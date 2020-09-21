import axios from "axios";
require("dotenv").config();
// Sending an authorization header along with our request is authorizing the request
const headers = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
const IEX_TOKEN = process.env.REACT_APP_IEX_TOKEN 

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
  getStockInfo : (symbol)=>{
    return axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${IEX_TOKEN}`)
  },
  getChart : (symbol,range) => {
    return axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/batch?token=${IEX_TOKEN}&types=chart,quote&range=${range}`)
  }
};
