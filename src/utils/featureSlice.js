import { createSlice } from "@reduxjs/toolkit";

const featureSlice = createSlice({
  name: "feature",
  initialState: {
    sideBarOpen: false
  },
  reducers: {
    toggleSideBar: (state) => {
      state.sideBarOpen = !state.sideBarOpen;
    }
  }
});
export const { toggleSideBar } = featureSlice.actions;
export default featureSlice.reducer;
