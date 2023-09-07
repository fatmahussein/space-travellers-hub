import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';
const initialState = {
  rockets: [],
  isLoading: false,
  isError: false,
};
export const fetchRockets = createAsyncThunk('rocket/fetchRockets', async () => {
  const dataStream = await fetch(url);
  const data = await dataStream.json();
  const rocketData = data.map((rocket) => ({
    id: rocket.id,
    name: rocket.name,
    description: rocket.description,
    image: rocket.flickr_images[0],
  }));
  return rocketData;
});
const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    handleRocket: (state, { payload }) => {
      const rockets = [];
      state.rockets.forEach((rocket) => {
        if (rocket.id === payload) {
          rockets.push({
            ...rocket,
            reserved: !rocket.reserved,
          });
        } else {
          rocket.push({ ...rocket });
        }
      });
      return {
        ...state,
        rockets,
      };
    },
    reserveRocket: (state, { payload }) => {
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id === payload) {
          return {
            ...rocket,
            reserved: true,
          };
        }
        return rocket;
      });
      return {
        ...state,
        rockets,
      };
    },
    cancelRocket: (state, { payload }) => {
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id === payload) {
          return {
            ...rocket,
            reserved: false,
          };
        }
        return rocket;
      });
      return {
        ...state,
        rockets,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => ({
      ...state,
      isLoading: true,
      isError: false,
    }));
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      if (state.rockets.length < 1) {
        return {
          ...state,
          rockets: action.payload,
          isLoading: false,
          isError: false,
        };
      }
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    });
    builder.addCase(fetchRockets.rejected, (state) => ({
      ...state,
      isLoading: false,
      isError: true,
    }));
  },
});
export default rocketSlice.reducer;
export const { handleRocket, reserveRocket, cancelRocket } = rocketSlice.actions;
