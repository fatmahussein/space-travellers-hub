import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import MissionsData from './missionsData';

const apiUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  isLoading: false,
};

export const getMissions = createAsyncThunk('missions/getMissions', async (thunkAPI) => {
  try {
    const resp = await axios.get(apiUrl);

console.log(resp.data);

    const transformedmissions = Object.keys(resp.data).map((key) => {
      const MissionData = resp.data[key];
      console.log(resp.data[key]);
      console.log(MissionData.missions);
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
  reducers: {},
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


