import { configureStore } from '@reduxjs/toolkit';
import bookSlice from '../features/book/bookSlice';

export const store = configureStore({
  reducer: {book:bookSlice}
})