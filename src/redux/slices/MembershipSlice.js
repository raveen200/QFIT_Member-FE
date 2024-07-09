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
  reducers: {
    clearMembership(state) {
      state.membership = {};
    }
  },
  extraReducers: (builder) => {
    MembershipReducer.addMembership(builder);
    MembershipReducer.deleteMembership(builder);
    MembershipReducer.updateMembership(builder);
    MembershipReducer.getMembershipById(builder);
    MembershipReducer.getAllMemberships(builder);
    MembershipReducer.getMembershipByNic(builder);
  }
});

export const { clearMembership } = MembershipSlice.actions;

export default MembershipSlice.reducer;
