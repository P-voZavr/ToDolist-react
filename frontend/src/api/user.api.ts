import http from "./http";
import ENDPOINTS from "./endpoints";

type usertype = {
  user: {
    username: string;
    password: string;
  };
  accesToken: string;
  refreshToken: string;
};

async function register(username: string, password: string) {
  const user = await http.post<usertype>(ENDPOINTS.REGISTER, {
    username,
    password,
  });
  localStorage.setItem("accessToken", user.data.accesToken);
}

async function login(username: string, password: string) {
  const user = await http.post<usertype>(ENDPOINTS.LOGIN, {
    username,
    password,
  });
  localStorage.setItem("accessToken", user.data.accesToken);
}

export { register, login };
