import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./slices/LayoutSlice";
import MemberSlice from "./slices/MemberSlice";
import MembershipSlice from "./slices/MembershipSlice";

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
    memberInfo: MemberSlice,
    membershipInfo: MembershipSlice
  }
});
