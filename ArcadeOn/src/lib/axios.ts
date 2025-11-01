import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import Constants from 'expo-constants';

const apiUrl = Constants.expoConfig?.extra?.API_URL;

const API_URL = `${apiUrl}/api`;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// interceptors
api.interceptors.request.use(
  async (config) => {  
    // const token = await SecureStore.getItemAsync("metadata");
    const token = "sdjk4ig43guh33f"
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Token expired or unauthorized!");
    }
    return Promise.reject(error);
  }
);

export default api;

