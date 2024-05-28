import axios from "axios";

const authApi = axios.create({
  baseURL: import.meta.env.VITE_APP_AUTH_API_URL
});

export default authApi;
