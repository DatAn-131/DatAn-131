import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./Slices/commonSlices";
import authSlice from "./Slices/authSlice";
import carSlice from "./Slices/carSlice";

export const store = configureStore({
  reducer: {
    commonSlice: commonSlice,
    authSlice: authSlice,
    carSlice: carSlice,
  },
});
