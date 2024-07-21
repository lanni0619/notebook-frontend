import axios from "axios";
import Cookies from "js-cookie";
const api_URL = "http://localhost:8080/auth";

const AuthService = {
  signup(username, email, password) {
    return axios.post(api_URL + "/signup", {
      username,
      email,
      password,
    });
  },

  login(email, password) {
    return axios.post(api_URL + "/login", {
      email,
      password,
    });
  },

  logout() {
    localStorage.removeItem("user");
    Cookies.remove("jwt");
  },

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },

  getGoogleUser(jwt) {
    return axios.get(api_URL + "/google/user", {
      headers: {
        Authorization: "jwt " + jwt,
      },
    });
  },
};

export default AuthService;
