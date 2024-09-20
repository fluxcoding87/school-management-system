import { configureStore } from "@reduxjs/toolkit";
import timelineSlice from "./timeline-slice.js";
import navSlice from "./nav-slice.js";
import loginSlice from "./login-slice.js";
const store = configureStore({
  reducer: {
    timeline: timelineSlice.reducer,
    nav: navSlice.reducer,
    login: loginSlice.reducer,
  },
});

export default store;
