import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isModalLoginOpen: false,
  isCartOpen: true,
};

export const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.isModalLoginOpen = true;
    },
    closeLoginModal: (state) => {
      // console.log(action);

      state.isModalLoginOpen = false;
    },
    toggleOpenCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});
export const { openLoginModal, closeLoginModal, toggleOpenCart } =
  commonSlice.actions;

export default commonSlice.reducer;
