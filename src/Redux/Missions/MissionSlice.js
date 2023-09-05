<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';
import MissionsData from './missionsData';
// import axios from 'axios';
=======
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import MissionsData from './missionsData';
>>>>>>> e29bb8f098a83b670903bc9a6936c7f5e59a5338

const apiUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: MissionsData,
};

<<<<<<< HEAD
mission_id;
mission_name;
description;
=======
// mission_id;
// mission_name;
// description;
>>>>>>> e29bb8f098a83b670903bc9a6936c7f5e59a5338

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

<<<<<<< HEAD
export default MissionSlice.reducer;
=======
export default MissionSlice.reducer;
>>>>>>> e29bb8f098a83b670903bc9a6936c7f5e59a5338
