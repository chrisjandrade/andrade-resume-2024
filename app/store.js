import { configureStore } from '@reduxjs/toolkit';
import linksReducer from 'reducers/linksSlice';
import educationReducer from 'reducers/educationSlice';
import experienceReducer from 'reducers/experienceSlice';
import skillsReducer from 'reducers/skillsSlice';
import infoReducer from 'reducers/infoSlice';

export const store = configureStore({
  reducer: {
    links: linksReducer,
    education: educationReducer,
    experience: experienceReducer,
    skills: skillsReducer,
    info: infoReducer
  }
});
