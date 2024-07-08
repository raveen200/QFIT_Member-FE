import { createSlice } from "@reduxjs/toolkit";
import MembershipReducer from "../reducers/MembershipReducer";

const MembershipSlice = createSlice({
  name: "membershipInfo",
  initialState: {
    memberships: {},
    membership: {},
    isLoading: false,
    error: null
  },
  extraReducers: (builder) => {
    MembershipReducer.addMembership(builder);
    MembershipReducer.deleteMembership(builder);
    MembershipReducer.updateMembership(builder);
    MembershipReducer.getMembershipById(builder);
    MembershipReducer.getAllMemberships(builder);
  }
});

export default MembershipSlice.reducer;
