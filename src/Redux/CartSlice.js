// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  name: 'wish',
  initialState: {
    wish : []
  }
},
  
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    addToWish: (state, action) => {
      const itemInCart = state.wish.find((item) => item.id === action.payload.id);
      if (itemInCart) {
      } else {
        state.wish.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
    removeWishItem: (state, action) => {
      const removeWishItem = state.wish.filter((item) => item.id !== action.payload);
      state.wish = removeWishItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  addToWish,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  removeWishItem,
} = cartSlice.actions;