import { AUTH_CONSTANTS } from "../constants/Index";
import authApi from "../configs/Auth";

export const login = async (data) => {
  try {
    const response = await authApi.post(AUTH_CONSTANTS.LOGIN, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
