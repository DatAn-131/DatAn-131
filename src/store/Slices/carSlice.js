import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};

export const carSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    addItemsToCar: (state, action) => {
      console.log(action);
      const isExist = state.items.some((item) => item.id === action.payload.id);
      if (isExist) {
        //Increase by 1
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        // add items
        state.items = [...state.items, { ...action.payload, quantity: 1 }];
      }
    },
    removeCarItems: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    addOne: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    },
    minusOne: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const { addItemsToCar, removeCarItems, addOne, minusOne, clearCart } =
  carSlice.actions;

export default carSlice.reducer;
