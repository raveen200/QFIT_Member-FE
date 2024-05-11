import {
  getAllMembersAction,
  addMemberAction,
  deleteMemberAction,
  updateMemberAction,
  getMemberByIdAction,
  getMemberByFirstNameAction,
  getMemberByNICAction
} from "../actions/MemberActions";

const reducer = {
  getAllMembers: (builder) => {
    builder.addCase(getAllMembersAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllMembersAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.members = action.payload;
    });
    builder.addCase(getAllMembersAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },

  addMember: (builder) => {
    builder.addCase(addMemberAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addMemberAction.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(addMemberAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
  deleteMember: (builder) => {
    builder.addCase(deleteMemberAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteMemberAction.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteMemberAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },

  updateMember: (builder) => {
    builder.addCase(updateMemberAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateMemberAction.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateMemberAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },

  getMemberById: (builder) => {
    builder.addCase(getMemberByIdAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMemberByIdAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.member = action.payload;
    });
    builder.addCase(getMemberByIdAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },

  getMemberByFirstName: (builder) => {
    builder.addCase(getMemberByFirstNameAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMemberByFirstNameAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.member = action.payload;
    });
    builder.addCase(getMemberByFirstNameAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },

  getMemberByNIC: (builder) => {
    builder.addCase(getMemberByNICAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMemberByNICAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.member = action.payload;
    });
    builder.addCase(getMemberByNICAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  }
};

export default reducer;
