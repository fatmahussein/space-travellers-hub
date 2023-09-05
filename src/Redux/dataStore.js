import { configureStore } from '@reduxjs/toolkit';
import MissionSlice from './Missions/MissionSlice';

export const DataStore = configureStore({
  reducer: {
    missions: MissionSlice,
  },
});