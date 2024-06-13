// authService.js

import apiService from "./apiService";

const authService = {
  register: async (userData) => {
    try {
      const response = await apiService.post("/auth/register", userData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  login: async (credentials) => {
    try {
      const response = await apiService.post("/auth/login", credentials);
      return response;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  },

  // Puedes agregar más funciones según sea necesario, por ejemplo, logout, resetPassword, etc.
};

export default authService;
