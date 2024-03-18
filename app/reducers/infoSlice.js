
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import InfoService from 'services/info-service';

export const retrieveInfo = createAsyncThunk(
  'info/retrieve',
  async () => InfoService.retrieveInfo());

export const infoSlice = createSlice({
  name: 'info',
  initialState: {
    data: {},
    loading: true
  },
  reducers: {
    toggleLoading: (state, { payload }) => void(state.loading = payload)
  },
  extraReducers: (builder) => {
    builder.addCase(retrieveInfo.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    });
    
    builder.addCase(retrieveInfo.pending, (state) => void(state.loading = true));
  }
});

export default infoSlice.reducer;
