import api from "../configs/Membership";
import { MEMBERSHIP_API_CONSTANTS } from "../constants/Index";

export const getAllMemberships = async () => {
  try {
    const response = await api.get(MEMBERSHIP_API_CONSTANTS.GET_MEMBERSHIP);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const addMembership = async (membership) => {
  try {
    const response = await api.post(MEMBERSHIP_API_CONSTANTS.ADD_MEMBERSHIP, membership);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteMembership = async (id) => {
  try {
    const response = await api.delete(`${MEMBERSHIP_API_CONSTANTS.DELETE_MEMBERSHIP}?id=${id}`);
    return response.status;
  } catch (error) {
    return error;
  }
};

export const updateMembership = async (membership) => {
  try {
    const response = await api.put(MEMBERSHIP_API_CONSTANTS.UPDATE_MEMBERSHIP, membership);
    return response.status;
  } catch (error) {
    return error;
  }
};

export const getMembershipById = async (id) => {
  try {
    const response = await api.get(`${MEMBERSHIP_API_CONSTANTS.GET_MEMBERSHIP_BY_ID}/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
