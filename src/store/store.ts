import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { cartSlice } from '@/store/slices/cartSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [cartSlice.name]: cartSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
