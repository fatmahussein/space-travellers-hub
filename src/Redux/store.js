import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import MissionSlice from './Missions/MissionSlice';
import rocketsReducer from './RocketSlice';
import dragonReducer from './Dragons/DragonSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: MissionSlice,
    dragons: dragonReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
