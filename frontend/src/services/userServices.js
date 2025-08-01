// services/userService.js
import api from "./api";

export const registerUser = async (userData) => {
  try {
    const response = await api.post("/user/register", userData);
    return response.data;
  } catch (error) {
    console.error(
      "Registration failed:",
      error.response?.data || error.message
    );
    throw error.response?.data || { message: "Registration failed" };
  }
};

// 2. Search and filter users
export const searchAndFilterUsers = async (queryParams = {}) => {
  try {
    const query = new URLSearchParams(queryParams).toString();
    const response = await api.get(`/user/search/users?${query}`);
    return response.data;
  } catch (error) {
    console.error(
      "User search failed:",
      error.response?.data || error.message
    );
    throw error.response?.data || { message: "Search failed" };
  }
};