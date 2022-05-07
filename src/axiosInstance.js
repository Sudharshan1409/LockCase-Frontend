import axios from "axios";
import { Auth } from "aws-amplify";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { Accept: "application/json" },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    let cognitoIdToken = await Auth.currentSession();
    let token = cognitoIdToken.getIdToken().getJwtToken();
    // const value = await
    // const keys = JSON.parse(value)
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosInstance;
