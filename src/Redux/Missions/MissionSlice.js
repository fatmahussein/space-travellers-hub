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
    const resp = await axios.get(apiUrl);
    const transformedmissions = Object.keys(resp.data).map((key) => {
      const MissionData = resp.data[key];
      return {
        mission_id: key,
        mission_name: MissionData.mission_name,
        description: MissionData.description,
      };
    });

    return transformedmissions;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const MissionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    // handlemission: (state, { payload }) => {
    //   const missions = [];
    //   state.missions.forEach((mission) => {
    //     if (mission.id === payload) {
    //       missions.push({
    //         ...mission,
    //         reserved: !mission.reserved,
    //       });
    //     } else {
    //       mission.push({ ...mission });
    //     }
    //   });
    //   return {
    //     ...state,
    //     missions,
    //   };
    // },
    reserveMission: (state, { payload }) => {
      const missions = state.missions.map((mission) => {
        if (mission.id === payload) {
          return {
            ...mission,
            reserved: true,
          };
        }
        return mission;
      });
      return {
        ...state,
        missions,
      };
    },
    // cancelmission: (state, { payload }) => {
    //   const missions = state.missions.map((mission) => {
    //     if (mission.id === payload) {
    //       return {
    //         ...mission,
    //         reserved: false,
    //       };
    //     }
    //     return mission;
    //   });
    //   return {
    //     ...state,
    //     missions,
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
        state.error = action.payload.message;
      });

  },
});

export default MissionSlice.reducer;
export const { reserveMission } = MissionSlice.actions;
