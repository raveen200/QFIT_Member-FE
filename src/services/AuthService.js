import { AUTH_CONSTANTS } from "../constants/Index";
import authApi from "../configs/Auth";

export const login = async (data) => {
  try {
    const response = await authApi.post(AUTH_CONSTANTS.LOGIN, data);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
