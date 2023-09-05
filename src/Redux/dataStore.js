import { configureStore } from '@reduxjs/toolkit';
import MissionSlice from './Missions/MissionSlice';

<<<<<<< HEAD
export const DataStore = configureStore({
  reducer: {
    missions: MissionSlice,
  },
});
=======
const DataStore = configureStore({
  reducer: {
    missions: MissionSlice,
  },
});

export default { DataStore };
>>>>>>> e29bb8f098a83b670903bc9a6936c7f5e59a5338
