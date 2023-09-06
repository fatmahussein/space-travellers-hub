import { configureStore } from '@reduxjs/toolkit';
import MissionSlice from './Missions/MissionSlice';
import rocketsReducer from './RocketSlice';
    
    const store = configureStore({
      reducer: {
        rockets: rocketsReducer,
        missions: MissionSlice,

  },
});

export default store;
