import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/api';

export const displayReservation = createAsyncThunk(
    'reservation/displayReservation',
    async (_, thunkAPI) => {
        try {
            const resp = await axios.get(`${BASE_URL}/reservation_list`);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const createReservation = createAsyncThunk(
    'reservation/createReservation',
    async (reservation, thunkAPI) => {
        try {
            const resp = await axios.post(`${BASE_URL}/create_reservation`, { reservation });
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const deleteReservation = createAsyncThunk(
    'reservation/deleteReservation',
    async (reservation_id, thunkAPI) => {
        try {
            const resp = await axios.delete(`${BASE_URL}/delete_reservation/${reservation_id}`);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const initialState = {
    reservationMessage: '',
    display: '',
    isLoading: false,
    error: undefined,
};

const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(createReservation.pending,
                (state) => ({ ...state, isLoading: true }))
            .addCase(createReservation.fulfilled,
                (state, action) => ({ ...state, isLoading: false, reservationMessage: action.payload }))
            .addCase(createReservation.rejected,
                (state, action) => ({ ...state, isLoading: false, error: action.payload.message ? action.payload.message : 'An error occurred' }))
            .addCase(displayReservation.pending,
                (state) => ({ ...state, isLoading: true }))
            .addCase(displayReservation.fulfilled,
                (state, action) => ({ ...state, isLoading: false, display: action.payload }))
            .addCase(deleteReservation.fulfilled, (state, action) => {
                const updatedReservation = state.display.message.filter(
                    (display) => display.id !== action.meta.arg,
                );
                state.display.message = updatedReservation;
            });
    },
});

export default reservationSlice.reducer;