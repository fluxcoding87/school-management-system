/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: { showQuickLink: false },
  reducers: {
    toggle(state) {
      state.showQuickLink = !state.showQuickLink;
    },
  },
});

export default navSlice;
export const navActions = navSlice.actions;
