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
  extraReducers: (builder) => {
    MemberReducer.addMember(builder);
    MemberReducer.deleteMember(builder);
    MemberReducer.updateMember(builder);
    MemberReducer.getMemberById(builder);
    MemberReducer.getAllMembers(builder);
    MemberReducer.getMemberByFirstName(builder);
    MemberReducer.getMemberByNIC(builder);
  }
});

export default MemberSlice.reducer;
