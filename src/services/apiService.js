import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Configura la URL base del backend
const baseURL = "http://localhost:8080/api/extend"; // Reemplaza con la URL de tu backend

// Configuración del cliente axios
const axiosInstance = axios.create({
  baseURL,
  timeout: 10000, // Tiempo de espera de 10 segundos
  withCredentials: true, // Permite enviar y recibir cookies desde el servidor
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para incluir el token de autenticación en las solicitudes
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar respuestas
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Funciones para realizar peticiones HTTP
const apiService = {
  get: async (url) => {
    try {
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      handleRequestError(error);
      throw error;
    }
  },

  post: async (url, data) => {
    try {
      const response = await axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
      handleRequestError(error);
      throw error;
    }
  },

  put: async (url, data) => {
    try {
      const response = await axiosInstance.put(url, data);
      return response.data;
    } catch (error) {
      handleRequestError(error);
      throw error;
    }
  },

  delete: async (url) => {
    try {
      const response = await axiosInstance.delete(url);
      return response.data;
    } catch (error) {
      handleRequestError(error);
      throw error;
    }
  },
};

// Función para manejar errores de solicitud HTTP
const handleRequestError = (error) => {
  console.error("Error en la solicitud HTTP:", error);
  // Aquí podrías agregar lógica para mostrar mensajes de error al usuario, por ejemplo
};

export default apiService;
