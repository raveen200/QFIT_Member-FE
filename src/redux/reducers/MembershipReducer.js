import {
  getAllMembershipsAction,
  addMembershipAction,
  deleteMembershipAction,
  updateMembershipAction,
  getMembershipByIdAction
} from "../actions/MembershipActions";

const reducer = {
  getAllMemberships: (builder) => {
    builder.addCase(getAllMembershipsAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllMembershipsAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.memberships = action.payload;
    });
    builder.addCase(getAllMembershipsAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },

  addMembership: (builder) => {
    builder.addCase(addMembershipAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addMembershipAction.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(addMembershipAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
  deleteMembership: (builder) => {
    builder.addCase(deleteMembershipAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteMembershipAction.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteMembershipAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },

  updateMembership: (builder) => {
    builder.addCase(updateMembershipAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateMembershipAction.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateMembershipAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },

  getMembershipById: (builder) => {
    builder.addCase(getMembershipByIdAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMembershipByIdAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.membership = action.payload;
    });
    builder.addCase(getMembershipByIdAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  }
};

export default reducer;
