import axios from "axios";

const nodeEnv = import.meta.env.DEV;

const apiInstance = axios.create({
  baseURL: nodeEnv ? "http://localhost:3000/api" : "/api",
  timeout: 60000, // 60 seconds
});

export default apiInstance;
