import { createSlice } from '@reduxjs/toolkit';

// Filters Slice properties have same name as in Camper model
const initialState = {
  location: '',
  form: '',
  AC: false,
  kitchen: false,
  bathroom: false,
  TV: false,
  transmission: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      Object.assign(state, initialState, action.payload);
    },
    resetFilters: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;