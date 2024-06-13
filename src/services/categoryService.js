import apiService from "./apiService";

const categoryService = {
  getAllCategories: async () => {
    try {
      const response = await apiService.get("/category");
      return response.categories;
    } catch (error) {
      throw error;
    }
  },

  createCategory: async (categoryData) => {
    try {
      const response = await apiService.post("/category", categoryData);
      return response;
    } catch (error) {
      console.error("Error during category creation:", error);
      throw error;
    }
  },

  updateCategory: async (categoryId, categoryData) => {
    try {
      const response = await apiService.put(
        `/category/${categoryId}`,
        categoryData
      );
      return response;
    } catch (error) {
      console.error(
        `Error during category update for ID ${categoryId}:`,
        error
      );
      throw error;
    }
  },

  deleteCategory: async (categoryId) => {
    try {
      const response = await apiService.delete(`/category/${categoryId}`);
      return response;
    } catch (error) {
      console.error(
        `Error during category deletion for ID ${categoryId}:`,
        error
      );
      throw error;
    }
  },
};

export default categoryService;
