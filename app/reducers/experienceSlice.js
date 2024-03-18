import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ExperienceService from 'services/experience-service';

export const retrieveExperience = createAsyncThunk(
  'experience/retrieve',
  async () => ExperienceService.retrieveExperience());

export const experienceSlice = createSlice({
  name: 'experience',
  initialState: {
    data: [],
    loading: true
  },
  reducers: {
    toggleLoading: (state, { payload }) => void(state.loading = payload)
  },
  extraReducers: (builder) => {
    builder.addCase(retrieveExperience.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    });

    builder.addCase(retrieveExperience.pending, state => void(state.loading = true));
  }
});

export default experienceSlice.reducer;
