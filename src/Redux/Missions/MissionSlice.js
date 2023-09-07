import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  reserved: false,
  isLoading: false,
};

export const getMissions = createAsyncThunk('missions/getMissions', async (thunkAPI) => {
  try {
    const userData = localStorage.getItem('Missions');

    if (userData === null) {
      const urlData = await fetch(apiUrl);
      const resp = urlData.json();
      console.log(resp.data);
      // const resp = await axios.get(apiUrl);
      const ExtractedData = Object.keys(resp.data).map((key) => {
        const MissionData = resp.data[key];
        return {
          mission_id: key,
          mission_name: MissionData.mission_name,
          description: MissionData.description,
          reserved: false,
        };
      });

      return ExtractedData;
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
