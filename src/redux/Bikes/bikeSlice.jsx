import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/api';

export const getBikes = createAsyncThunk(
  'bikes/getBikes',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(`${BASE_URL}/display_bikes`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const createBike = createAsyncThunk(
  'bikes/createBike',
  async(newBike, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/create_bikes`,newBike)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const deleteBike = createAsyncThunk(
  'bikes/deleteBike',
  async(bikeId, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/delete_bike/${bikeId}`)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)


const initialState = {
    message: '',
    isLoading: false,
    error: undefined,
}

export const bikeSlice = createSlice({
    name: 'bikes',
    initialState,
    reducers: { },
    extraReducers(builder) {
        builder
          .addCase(getBikes.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getBikes.fulfilled, (state, action) => {
            state.isLoading = false;
            state.message = action.payload;
          })
          .addCase(getBikes.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
          })
          .addCase(createBike.fulfilled, (state, action) => {
            state.message = action.payload;
          })
          .addCase(deleteBike.fulfilled, (state, action) => {
            const updatedBikes = state.message.bikes.filter(
              (bike) => bike.id !== action.meta.arg,
            );
            state.message.bikes = updatedBikes;
          });
      },
})

export default bikeSlice.reducer;