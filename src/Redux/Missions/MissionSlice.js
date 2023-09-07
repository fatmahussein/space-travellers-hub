// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const fetchMissions = createAsyncThunk(
//   'missions/fetchMissions',
//   async () => {
//     const response = await fetch('https://api.spacexdata.com/v3/missions');
//     const data = await response.json();
//     const result = [];
//     data.forEach((mission) => {
//       result.push({
//         name: mission.mission_name,
//         description: mission.description,
//         id: mission.mission_id,
//         reserved: false,
//       });
//     });
//     return result;
//   },
// );
// const initialState = {
//   missions: [],
//   pending: false,
//   error: false,
// };
// const missionsSlice = createSlice({
//   name: 'missions',
//   initialState,
//   reducers: {
//     handleMission: (state, { payload }) => {
//       const missions = [];
//       state.missions.forEach((mission) => {
//         if (mission.id === payload) {
//           missions.push({
//             ...mission,
//             reserved: !mission.reserved,
//           });
//         } else {
//           missions.push({ ...mission });
//         }
//       });
//       return {
//         ...state,
//         missions,
//       };
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchMissions.fulfilled, (state, { payload }) => ({
//       ...state,
//       missions: payload,
//       pending: false,
//       error: false,
//     }));
//     builder.addCase(fetchMissions.pending, (state) => ({
//       ...state,
//       pending: true,
//       error: false,
//     }));
//     builder.addCase(fetchMissions.rejected, (state) => ({
//       ...state,
//       pending: false,
//       error: true,
//     }));
//   },
// });
// export default missionsSlice.reducer;
// export const { handleMission } = missionsSlice.actions;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  reserved: false,
  isLoading: false,
};

export const getMissions = createAsyncThunk('missions/getMissions', async (thunkAPI) => {
  try {
    const userData = localStorage.getItem('Missions');

    console.log(JSON.parse(userData));
    if (userData === null) {
      const resp = await axios.get(apiUrl);
      const transformedmissions = Object.keys(resp.data).map((key) => {
        const MissionData = resp.data[key];
        return {
          mission_id: key,
          mission_name: MissionData.mission_name,
          description: MissionData.description,
          reserved: false,
        };
      });

      return transformedmissions;
    }
    return JSON.parse(userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const MissionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    reserveMission: (state, { payload }) => {
      const updatedMissions = state.missions.map((mission) => {
        if (mission.mission_id === payload.missionId) {
          return {
            ...mission,
            reserved: !mission.reserved,
          };
        }
        return mission;
      });

      // Update local storage with the updated missions
      localStorage.setItem('Missions', JSON.stringify(updatedMissions));

      return {
        ...state,
        missions: updatedMissions, // Update the missions array
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.missions = action.payload;
      })
      .addCase(getMissions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default MissionSlice.reducer;
export const { reserveMission } = MissionSlice.actions;
