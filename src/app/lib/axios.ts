import axios from "axios";

const APP_ID = process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID;
const API_KEY = process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY;

const api = axios.create({
  baseURL: `https://api.backendless.com/${APP_ID}/${API_KEY}/`,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const userData = localStorage.getItem("user");
    if (userData) {
      const token = JSON.parse(userData)["user-token"];
      if (token) config.headers["user-token"] = token;
    }
  }
  return config;
});

// 🟢 Bedakan antara API data & API user
export const dataApi = axios.create({
  baseURL: `https://api.backendless.com/${APP_ID}/${API_KEY}/data/`,
  headers: { "Content-Type": "application/json" },
});

export const userApi = axios.create({
  baseURL: `https://api.backendless.com/${APP_ID}/${API_KEY}/users/`,
  headers: { "Content-Type": "application/json" },
});
