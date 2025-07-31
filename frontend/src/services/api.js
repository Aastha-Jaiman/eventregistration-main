import axios from "axios";

const api = axios.create({
  // baseURL: "https://eventregistration-yx8b.onrender.com/api/",
  baseURL: "https://jcds.onrender.com/api/",
  withCredentials: true,
});

export default api;
