import axios from "axios";

const api = axios.create({
  // baseURL: "https://eventregistration-yx8b.onrender.com/api/",
  // baseURL: "https://eventregistration-main.onrender.com/api/",
    baseURL: "https://jcds-registration.onrender.com/api/",
  // baseURL: "http://localhost:5000/api/",
  withCredentials: true,
});

export default api;
