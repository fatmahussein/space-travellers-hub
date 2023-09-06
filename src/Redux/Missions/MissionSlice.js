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
    reserveMission: (state, { payload }) => {
      const Missions = state.missions.map((Mission) => {
        if (Mission.id === payload) {
          return {
            ...Mission,
            reserved: true,
          };
        }
        return Mission;
      });
      return {
        ...state,
        Missions,
      };
    },

    cancelMission: (state, { payload }) => {
      const Missions = state.Missions.map((Mission) => {
        if (Mission.id === payload) {
          return {
            ...Mission,
            reserved: false,
          };
        }
        return Mission;
      });
      return {
        ...state,
        Missions,
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
        state.error = action.payload.message;
      });

  },
});

export default MissionSlice.reducer;
export const { reserveMission } = MissionSlice.actions;
