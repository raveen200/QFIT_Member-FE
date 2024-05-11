import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllMembers,
  addMember,
  deleteMember,
  updateMember,
  getMemberById,
  getMemberByFirstName,
  getMemberByNIC
} from "../../services/MemberService";
import { REDUX_ACTIONS } from "../../constants/Index";

export const getAllMembersAction = createAsyncThunk(REDUX_ACTIONS.GET_ALL_MEMBERS, async () => {
  const response = await getAllMembers();
  return response;
});

export const addMemberAction = createAsyncThunk(REDUX_ACTIONS.ADD_MEMBER, async (member) => {
  const response = await addMember(member);
  return response;
});

export const deleteMemberAction = createAsyncThunk(REDUX_ACTIONS.DELETE_MEMBER, async (id) => {
  const response = await deleteMember(id);
  return response;
});

export const updateMemberAction = createAsyncThunk(REDUX_ACTIONS.UPDATE_MEMBER, async (member) => {
  const response = await updateMember(member);
  return response;
});

export const getMemberByIdAction = createAsyncThunk(REDUX_ACTIONS.GET_MEMBER_BY_ID, async (id) => {
  const response = await getMemberById(id);
  return response;
});

export const getMemberByFirstNameAction = createAsyncThunk(
  REDUX_ACTIONS.GET_MEMBER_BY_FIRST_NAME,
  async (firstName) => {
    const response = await getMemberByFirstName(firstName);
    return response;
  }
);

export const getMemberByNICAction = createAsyncThunk(
  REDUX_ACTIONS.GET_MEMBER_BY_NIC,
  async (nic) => {
    const response = await getMemberByNIC(nic);
    return response;
  }
);
