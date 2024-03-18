
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LinksService from 'services/links-service';

export const retrieveLinks = createAsyncThunk(
  'links/retrieve',
  async () => LinksService.retrieveLinks());

export const linkSlice = createSlice({
  name: 'links',
  initialState: {
    data: [],
    loading: true
  },
  reducers: {
    toggleLoading: (state, { payload }) => void(state.loading = payload)
  },
  extraReducers: (builder) => {
    builder.addCase(retrieveLinks.fulfilled, (state, { payload }) => {
      state.data = payload; 
      state.loading = false;
    });
    builder.addCase(retrieveLinks.pending, state => void(state.loading = true));
  }
});

export default linkSlice.reducer;
