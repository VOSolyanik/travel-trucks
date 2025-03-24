import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getCamperById, getCampers } from '../../services/api';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async ({ page, ...filters }, { rejectWithValue }) => {
    const notEmptyFilters = Object.entries(filters)
      .reduce((acc, [key, value]) => {
        if (!value) {
          return acc;
        }
        return { ...acc, [key]: value };
      }, {});
    try {
      const data = await getCampers({ page, ...notEmptyFilters });
      return { ...data, page };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchCamperById = createAsyncThunk('campers/fetchCamperById', async (id, { rejectWithValue }) => {
  try {
    const data = await getCamperById(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  items: [],
  selectedCamper: null,
  isLoading: false,
  error: null,
  page: 1,
  total: 0,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    resetCampers: state => {
      state.items = [];
      state.page = 1;
      state.total = 0;
    },
  },
  extraReducers: builder => {
    builder
      // Fetch Campers
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.page > 1) {
          state.items = [...state.items, ...action.payload.items];
        } else {
          state.items = action.payload.items;
        }
        state.total = action.payload.total;
        state.page = action.payload.page;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Fetch Single Camper
      .addCase(fetchCamperById.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCampers } = campersSlice.actions;

export const selectHasMore = state =>
  state.campers.items.length < state.campers.total;

export default campersSlice.reducer;
