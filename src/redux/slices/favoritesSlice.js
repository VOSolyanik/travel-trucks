import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      if (!state.ids.find((id) => id === action.payload)) {
        state.ids.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      state.ids = state.ids.filter((id) => id !== action.payload);
    },
    clearFavorites: (state) => {
      state.ids = [];
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  clearFavorites,
} = favoritesSlice.actions;
export default favoritesSlice.reducer;