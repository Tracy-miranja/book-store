import { createSlice } from '@reduxjs/toolkit';
import Categories from '../../components/Categories';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: Categories,
  initialState,
  reducers: {
    Checkstatus() {
      return 'under construction';
    },
  },
});

export const { Checkstatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
