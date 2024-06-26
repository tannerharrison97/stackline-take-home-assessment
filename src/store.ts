// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/ProductsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer
  },
});

export type AppDispatch = typeof store.dispatch;