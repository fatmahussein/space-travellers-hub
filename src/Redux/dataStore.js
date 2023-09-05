import { configureStore } from '@reduxjs/toolkit';
import MissionSlice from './Missions/MissionSlice';

const DataStore = configureStore({
  reducer: {
    missions: MissionSlice,
  },
});

export default { DataStore };
