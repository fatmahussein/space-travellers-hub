import { configureStore } from '@reduxjs/toolkit';
import MissionSlice from './Missions/MissionSlice';
import rocketsReducer from './RocketSlice';
import dragonReducer from './Dragons/DragonSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: MissionSlice,
    dragons: dragonReducer,
  },
});

export default store;
