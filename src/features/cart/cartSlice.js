import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../helper/helper";

const getLocalstorageData = JSON.parse(localStorage.getItem("data")) || {
  selectedItem: [],
  itemsCounter: 0,
  total: 0,
  checkOut: false,
};

const initialState = getLocalstorageData;

// const initialState = {
//   selectedItem: [],
//   itemsCounter: 0,
//   total: 0,
//   checkOut: false,
// };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItem.find((item) => item.id === action.payload.id)) {
        state.selectedItem.push({ ...action.payload, quantity: 1 });
        state.total = sumPrice(state.selectedItem);
        state.itemsCounter = sumQuantity(state.selectedItem);
        state.checkOut = false;
      }
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItem.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItem = newSelectedItems;
      state.total = sumPrice(state.selectedItem);
      state.itemsCounter = sumQuantity(state.selectedItem);
    },
    increase: (state, action) => {
      const increaseIndex = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[increaseIndex].quantity++;
      state.total = sumPrice(state.selectedItem);
      state.itemsCounter = sumQuantity(state.selectedItem);
    },
    decrease: (state, action) => {
      const decreaseIndex = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[decreaseIndex].quantity--;
      state.total = sumPrice(state.selectedItem);
      state.itemsCounter = sumQuantity(state.selectedItem);
    },
    checkOut: (state) => {
      state.selectedItem = [];
      state.itemsCounter = 0;
      state.total = 0;
      state.checkOut = true;
    },
  },
});
export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkOut } =
  cartSlice.actions;
