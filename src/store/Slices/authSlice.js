import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: true,
  useName: "_an.tdat_",
};

export const authSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.useName = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.useName = "";
    },
  },
});
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
