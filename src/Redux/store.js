import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './RocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,

  },
});

export default store;
