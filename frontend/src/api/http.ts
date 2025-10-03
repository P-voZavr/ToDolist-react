import axios from "axios";
import { refresh } from "./user.api";

const http = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

http.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (!config.headers) config.headers = {};
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      const oringinalrequest = error.config;
      refresh();
      return http.request(oringinalrequest);
    }
    return Promise.reject(error);
  }
);
export default http;
