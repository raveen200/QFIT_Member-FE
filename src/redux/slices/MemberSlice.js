import { createSlice } from "@reduxjs/toolkit";
import MemberReducer from "../reducers/MemberReducer";

const MemberSlice = createSlice({
  name: "memberInfo",
  initialState: {
    members: {},
    member: {},
    isLoading: false,
    error: null
  },
  reducers: {
    getAllMembers: MemberReducer.getAllMembers,
    addMember: MemberReducer.addMember,
    deleteMember: MemberReducer.deleteMember,
    updateMember: MemberReducer.updateMember,
    getMemberById: MemberReducer.getMemberById,
    getMemberByFirstName: MemberReducer.getMemberByFirstName,
    getMemberByNIC: MemberReducer.getMemberByNIC
  }
});

export default MemberSlice.reducer;
