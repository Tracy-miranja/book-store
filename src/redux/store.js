import { configureStore } from '@reduxjs/toolkit';
import BooksReducer from './books/booksSlice';
import categoriesReducer from '../components/Categories';

const store = configureStore({
  reducer: {
    Book: BooksReducer,
    categories: categoriesReducer,
  },
});

export default store;
