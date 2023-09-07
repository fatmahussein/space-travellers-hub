import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/dragons';
const initialState = {
  dragons: [],
  isLoading: false,
  isError: false,
};

export const fetchDragons = createAsyncThunk('dragon/fetchDragons', async () => {
  const dataStream = await fetch(url);
  const data = await dataStream.json();
  const dragonData = data.map((dragon) => ({
    id: dragon.id,
    name: dragon.name,
    type: dragon.type,
    image: dragon.flickr_images[0],
  }));
  return dragonData;
});

const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {
    handleDragon: (state, { payload }) => {
      const dragons = [];
      state.dragons.forEach((dragon) => {
        if (dragon.id === payload) {
          dragons.push({
            ...dragon,
            reserved: !dragon.reserved,
          });
        } else {
          dragon.push({ ...dragon });
        }
      });
      return {
        ...state,
        dragons,
      };
    },
    reserveDragon: (state, { payload }) => {
      const dragons = state.dragons.map((dragon) => {
        if (dragon.id === payload) {
          return {
            ...dragon,
            reserved: true,
          };
        }
        return dragon;
      });
      return {
        ...state,
        dragons,
      };
    },
    cancelDragon: (state, { payload }) => {
      const dragons = state.dragons.map((dragon) => {
        if (dragon.id === payload) {
          return {
            ...dragon,
            reserved: false,
          };
        }
        return dragon;
      });
      return {
        ...state,
        dragons,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDragons.pending, (state) => ({
      ...state,
      isLoading: true,
      isError: false,
    }));
    builder.addCase(fetchDragons.fulfilled, (state, action) => {
      if (state.dragons.length < 1) {
        return {
          ...state,
          dragons: action.payload,
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
    builder.addCase(fetchDragons.rejected, (state) => ({
      ...state,
      isLoading: false,
      isError: true,
    }));
  },
});

export default dragonSlice.reducer;
export const { handleDragon, reserveDragon, cancelDragon } = dragonSlice.actions;
