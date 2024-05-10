import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./slices/LayoutSlice";
import MemberSlice from "./slices/MemberSlice";

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
    memberInfo: MemberSlice
  }
});
