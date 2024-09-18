/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const timelineSlice = createSlice({
  name: "timeline",
  initialState: "",
  reducers: {
    show(state) {
      state = state.length;
    },
  },
});

export default timelineSlice;
