import axios from "axios";
import ENDPOINTS from "../api/endpoints";

async function validate() {
  try {
    const token = await axios.get<boolean>(
      "http://localhost:5000" + ENDPOINTS.VALIDATE,
      {
        withCredentials: true,
      }
    );
    return token;
  } catch (error) {
    throw error;
  }
}

async function validateToken(): Promise<boolean> {
  return (await validate()).data;
}

export default validateToken;
