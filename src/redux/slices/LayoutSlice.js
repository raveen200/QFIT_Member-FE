import { createSlice } from '@reduxjs/toolkit';

const LayoutSlice = createSlice({
  name: 'layout',
  initialState: {
    sidebar: {
      isOpen: true
    }
  },

  reducers: {
    toggleSidebar: (state) => {
      state.sidebar.isOpen = !state.sidebar.isOpen;
    }
  }


});
export const { toggleSidebar } = LayoutSlice.actions;

export default LayoutSlice.reducer;
