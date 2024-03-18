import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import EducationService from 'services/education-service';


export const retrieveEducation = createAsyncThunk(
  'education/retrieve',
  async () => await EducationService.retrieveEducation());

export const educationSlice = createSlice({
  name: 'education',
  initialState: {
    data: [],
    loading: true
  },
  reducers: {
    toggleLoading: (state, { payload }) => void(state.loading = payload)
  },
  extraReducers: (builder) => {
    builder.addCase(retrieveEducation.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    });

    builder.addCase(retrieveEducation.pending, state => void(state.loading = false));
  }
});

export default educationSlice.reducer;
