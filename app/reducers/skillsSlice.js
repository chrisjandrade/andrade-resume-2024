import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SkillsService from 'services/skills-service'

export const retrieveSkills = createAsyncThunk(
  'skills/retrieve',
  async() => SkillsService.retrieveSkills());

export const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    data: [],
    loading: true
  },
  reducers: {
    toggleLoading: (state, { payload }) => void(state.loading = payload)
  },
  extraReducers: (builder) => {
    builder.addCase(retrieveSkills.fulfilled, (state, { payload }) => {
      state.data = payload; 
      state.loading = false;
    });
    builder.addCase(retrieveSkills.pending, state => void(state.loading = true))
  }
});

export default skillsSlice.reducer;
