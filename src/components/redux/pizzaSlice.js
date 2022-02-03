import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzaList: [],
  cartList: [],
  cart: 0,
  price: 0,
  flashMessage: false,
  status: { prepare: 1, bike: 0, deliver: 0 },
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    addPizza: (state, action) => {
      state.pizzaList = [...action.payload];
    },
    addToCart: (state, action) => {
      state.cartList.push(action.payload);
      state.cart++;
      state.price += action.payload.price * action.payload.quantity;
    },
    emptyCart: (state) => {
      state.cartList = [];
      state.price = 0;
      state.cart = 0;
      state.flashMessage = true;
      state.status = { prepare: 1, bike: 0, deliver: 0 };
    },
    closeFlash: (state) => {
      state.flashMessage = false;
      state.status = { prepare: 1, bike: 0, deliver: 0 };
    },
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { addPizza, addToCart, emptyCart, closeFlash, changeStatus } =
  pizzaSlice.actions;
export default pizzaSlice.reducer;
