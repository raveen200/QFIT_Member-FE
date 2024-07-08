import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllMemberships,
  addMembership,
  deleteMembership,
  updateMembership,
  getMembershipById,
  getMembershipByMemberId
} from "../../services/MembershipService";
import { MEMBERSHIP_REDUX_ACTIONS } from "../../constants/Index";

export const getAllMembershipsAction = createAsyncThunk(
  MEMBERSHIP_REDUX_ACTIONS.GET_MEMBERSHIP,
  async () => {
    const response = await getAllMemberships();
    return response;
  }
);

export const addMembershipAction = createAsyncThunk(
  MEMBERSHIP_REDUX_ACTIONS.ADD_MEMBERSHIP,
  async (membership) => {
    const response = await addMembership(membership);
    return response;
  }
);

export const deleteMembershipAction = createAsyncThunk(
  MEMBERSHIP_REDUX_ACTIONS.DELETE_MEMBERSHIP,
  async (id) => {
    const response = await deleteMembership(id);
    return response;
  }
);

export const updateMembershipAction = createAsyncThunk(
  MEMBERSHIP_REDUX_ACTIONS.UPDATE_MEMBERSHIP,
  async (membership) => {
    const response = await updateMembership(membership);
    return response;
  }
);

export const getMembershipByIdAction = createAsyncThunk(
  MEMBERSHIP_REDUX_ACTIONS.GET_MEMBERSHIP_BY_ID,
  async (id) => {
    const response = await getMembershipById(id);
    return response;
  }
);


