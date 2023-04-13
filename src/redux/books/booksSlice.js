/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const appId = 'Vrc4G3KFQ5FwI649Ylia';
// const Url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Vrc4G3KFQ5FwI649Ylia/books';

// axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`);

const initialState = {
  books: [],
};
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Vrc4G3KFQ5FwI649Ylia/books');
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
});
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { id, title, author } = action.payload;
      state.push({ item_id: id, title, author });
    },
    removeBook: (state, action) => {
      const id = action.payload;
      return state.filter((book) => book.item_id !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase();
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
