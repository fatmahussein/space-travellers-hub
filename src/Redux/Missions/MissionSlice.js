import { createSlice } from '@reduxjs/toolkit';
import MissionsData from './missionsData';
// import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: MissionsData,
};

mission_id;
mission_name;
description;

export const getMissions = createAsyncThunk('missions/getMissions', async (thunkAPI) => {
  try {
    const resp = await axios.get(apiUrl);
    // to fetch data from API with the desired format
    const transformedmissions = Object.keys(resp.data).map((key) => {
      const bookData = resp.data[key][0];
      return {
        mission_id: key,
        mission_name: bookData.mission_name,
        description: bookData.description,
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
        state.bookItems = action.payload;
      })
      .addCase(getMissions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export default MissionSlice.reducer;
