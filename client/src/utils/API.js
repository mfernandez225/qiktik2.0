import axios from "axios";

const headers = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default {
  signup: (firstName, lastName, email, password) => {
    return axios.post("/api/signup/new", {
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
    return axios.get("/api/users/favorite-stocks", headers());
  },
  saveFavorite: (selectedStock) => {
    return axios.post("/api/users/save-stock", { ...selectedStock }, headers());
  },
};
