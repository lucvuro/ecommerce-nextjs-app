import { createSlice } from '@reduxjs/toolkit';

import type { TProduct } from '@/components/common/Product/typings';

export type TCartItem = TProduct & {
  count: number;
};

type TCartState = {
  cartItems: TCartItem[];
  totalItems: number;
};

const initialState: TCartState = {
  cartItems: [],
  totalItems: 0,
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
    },
    subtractItem: (state, action) => {
      const item = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (item) {
        if (item.count <= 1) return;
        item.count -= 1;
        state.totalItems -= 1;
      }
    },
    removeItem: (state, action) => {
      const newCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.totalItems -= action.payload.count;
      state.cartItems = newCartItems;
    },
  },
});

export const { addItem, subtractItem, removeItem } = cartSlice.actions;
export const cartState = (state: any) => state.cart;
export default cartSlice.reducer;
