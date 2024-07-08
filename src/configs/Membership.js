import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_MEMBERSHIP_API_URL
});

export default api;
