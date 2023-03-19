import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import type { TProduct } from '@/components/common/Product/typings';

export type TCartItem = TProduct & {
  count: number;
};

type TCartState = {
  cartItems: TCartItem[];
  totalItems: number;
  totalPrice: number;
};

const initialState: TCartState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (!item)
        state.cartItems = [...state.cartItems, { ...action.payload, count: 1 }];
      else item.count += 1;
      state.totalItems += 1;
      state.totalPrice += action.payload.price;
    },
    subtractItem: (state, action) => {
      const item = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (item) {
        if (item.count <= 1) return;
        item.count -= 1;
        state.totalItems -= 1;
        state.totalPrice -= action.payload.price;
      }
    },
    removeItem: (state, action) => {
      const newCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.totalItems -= action.payload.count;
      state.cartItems = newCartItems;
      state.totalPrice -= action.payload.count * action.payload.price;
    },
    removeAllItem: (state) => {
      state.cartItems = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.cart,
      };
    },
  },
});

export const { addItem, subtractItem, removeItem, removeAllItem } =
  cartSlice.actions;
export const cartState = (state: any) => state.cart;
export default cartSlice.reducer;
