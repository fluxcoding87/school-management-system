import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loginType: undefined,
  },
  reducers: {
    setType(state, action) {
      if (action.payload.loginType === "Student") {
        state.loginType = "student";
      }
      if (action.payload.loginType === "Teacher") {
        state.loginType = "teacher";
      }
      if (action.payload.loginType === "Admin") {
        state.loginType = "admin";
      }
    },
  },
});

export default loginSlice;
export const loginActions = loginSlice.actions;
