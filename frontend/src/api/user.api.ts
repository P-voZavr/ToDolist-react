import http from "./http";
import ENDPOINTS from "./endpoints";

type usertype = {
  user: {
    username: string;
    password: string;
  };
  accessToken: string;
  refreshToken: string;
};

async function register(username: string, password: string) {
  const user = await http.post<usertype>(ENDPOINTS.REGISTER, {
    username,
    password,
  });
  localStorage.setItem("accessToken", user.data.accessToken);
  return user;
}

async function login(username: string, password: string) {
  try {
    const user = await http.post<usertype>(ENDPOINTS.LOGIN, {
      username,
      password,
    });
    localStorage.setItem("accessToken", user.data.accessToken);
    return user;
  } catch (error) {
    throw error;
  }
}

async function logout() {
  try {
    const user = await http.post<usertype>(ENDPOINTS.LOGOUT);
    localStorage.removeItem("accessToken");
    return user;
  } catch (error) {
    throw error;
  }
}

export { register, login, logout };
