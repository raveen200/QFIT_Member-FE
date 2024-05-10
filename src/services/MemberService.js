import api from '../configs/Axios';
import { API_CONSTANTS } from '../constants/Index';

export const getAllMembers = async () => {
    try {
        const response = await api.get(API_CONSTANTS.GET_ALL_MEMBERS);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const addMember = async (member) => {
    try {
        const response = await api.post(API_CONSTANTS.ADD_MEMBER, member);
        return response;
    } catch (error) {
        return error;
    }
};

export const deleteMember = async (id) => {
    try {
        const response = await api.delete(`${API_CONSTANTS.DELETE_MEMBER}/${id}`);
        return response;
    } catch (error) {
        return error;
    }
};

export const updateMember = async (member) => {
    try {
        const response = await api.put(API_CONSTANTS.UPDATE_MEMBER, member);
        return response;
    } catch (error) {
        return error;
    }
};

export const getMemberById = async (id) => {
    try {
        const response = await api.get(`${API_CONSTANTS.GET_MEMBER_BY_ID}/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const getMemberByFirstName = async (firstName) => {
    try {
        const response = await api.get(`${API_CONSTANTS.GET_MEMBER_BY_FIRST_NAME}/${firstName}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const getMemberByNIC = async (nic) => {
    try {
        const response = await api.get(`${API_CONSTANTS.GET_MEMBER_BY_NIC}/${nic}`);
        return response.data;
    } catch (error) {
        return error;
    }
};