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
export const updateReservedStatus = createAsyncThunk(
  'missions/updateReservedStatus',
  async ({ reservedId, reserved }, thunkAPI) => {
    try {
      // Make an API call to update the reserved status
      await axios.post(`${apiUrl}/${reservedId}`, { reserved });

      // Return the mission ID and reserved status as the payload
      return { reservedId, reserved };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

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
      })
      .addCase(updateReservedStatus.fulfilled, (state, action) => {
        // Find the mission by mission_id and update its reserved status
        const updatedMissions = state.missions.map((mission) => {
          if (mission.mission_id === action.payload.mission_id) {
            return { ...mission, reserved: true };
          }
          return mission;
        });

        state.missions = updatedMissions;
      });
  },
});

export default MissionSlice.reducer;
