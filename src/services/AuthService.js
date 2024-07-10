import { AUTH_CONSTANTS } from "../constants/Index";
import authApi from "../configs/Auth";
import Cookies from "js-cookie";

export const login = async (data) => {
  try {
    const response = await authApi.post(AUTH_CONSTANTS.LOGIN, data);
    const token = response.data.result.token;
    Cookies.set("token", token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (data) => {
  try {
    const response = await authApi.post(AUTH_CONSTANTS.REGISTER, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
