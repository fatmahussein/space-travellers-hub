import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import MissionSlice from './MissionSlice';
import rocketsReducer from './RocketSlice';
import dragonReducer from './DragonSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: MissionSlice,
    dragons: dragonReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
