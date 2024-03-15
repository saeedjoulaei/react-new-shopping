import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helper/helper";

const CartContext = createContext();
const initialState = {
  selectedItem: [],
  itemsCounter: 0,
  total: 0,
  checkOut: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItem.find((item) => item.id === action.payload.id)) {
        state.selectedItem.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItem),
        checkOut: false,
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItem.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItem: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
      };
    case "INCREASE":
      const increaseIndex = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[increaseIndex].quantity++;
      return {
        ...state,
        ...sumProducts(state.selectedItem),
      };
    case "DECREASE":
      const decreaseIndex = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[decreaseIndex].quantity--;
      return {
        ...state,
        ...sumProducts(state.selectedItem),
      };
    case "CHECKOUT":
      return {
        selectedItem: [],
        total: 0,
        itemsCounter: 0,
        checkOut: true,
      };
    default:
      throw new Error("invalid action");
  }
};

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
