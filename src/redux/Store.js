import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./slices/LayoutSlice";

export const store = configureStore({
  reducer: {
    layout: layoutSlice
  }
});
