// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { stringify } from 'json5';

// const apiUrl = 'https://api.spacexdata.com/v3/missions';

// const initialState = {
//   missions: [],
//   reserved: false,
//   isLoading: false,
// };

// export const getMissions = createAsyncThunk('missions/getMissions', async (thunkAPI) => {
//   try {
//     const userData = localStorage.getItem('Missions', []);

//     if (userData.length === 0) {
//       const resp = await axios.get(apiUrl);
//       const transformedmissions = Object.keys(resp.data).map((key) => {
//         const MissionData = resp.data[key];
//         return {
//           mission_id: key,
//           mission_name: MissionData.mission_name,
//           description: MissionData.description,
//         };
//       });

//       return transformedmissions;
//     }
//     return JSON.parse(userData);
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });

// const MissionSlice = createSlice({
//   name: 'missions',
//   initialState,
//   reducers: {
//     reserveMission: (state, { payload }) => {
//       const Missions = state.missions.map((Mission) => {
//         if (Mission.id === payload) {
//           return {
//             ...Mission,
//             reserved: true,
//           };
//         }
//         return Mission;
//       });
//       localStorage.setItem('Missions', JSON, stringify(Missions));
//       return {
//         ...state,
//         Missions,
//       };
//     },

//     // cancelMission: (state, { payload }) => {
//     //   const Missions = state.Missions.map((Mission) => {
//     //     if (Mission.id === payload) {
//     //       return {
//     //         ...Mission,
//     //         reserved: false,
//     //       };
//     //     }
//     //     return Mission;
//     //   });
//     //   return {
//     //     ...state,
//     //     Missions,
//     //   };
//     // },
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(getMissions.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getMissions.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.missions = action.payload;
//       })
//       .addCase(getMissions.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default MissionSlice.reducer;
// export const { reserveMission } = MissionSlice.actions;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { stat } from 'fs';
// import { stringify } from 'json5';

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
    

    // cancelMission: (state, { payload }) => {
    //   const Missions = state.Missions.map((Mission) => {
    //     if (Mission.id === payload) {
    //       return {
    //         ...Mission,
    //         reserved: false,
    //       };
    //     }
    //     return Mission;
    //   });
    //   return {
    //     ...state,
    //     Missions,
    //   };
    // },
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
