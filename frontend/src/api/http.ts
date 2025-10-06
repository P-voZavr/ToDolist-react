import axios from "axios";
import ENDPOINTS from "./endpoints";

type tokentype = {
  accessToken: string;
  refreshToken: string;
};

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
  (config) => config,
  async (error) => {
    const oringinalrequest = error.config;
    if (error.response.status === 401 && !oringinalrequest._retry) {
      oringinalrequest._retry = true;
      const res = await axios.get<tokentype>(
        "http://localhost:5000" + ENDPOINTS.REFRESH,
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("accessToken", res.data.accessToken);
      return http.request(oringinalrequest);
    }
  }
);
export default http;
