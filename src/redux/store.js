import { configureStore } from "@reduxjs/toolkit";
import bikesReducer from './Bikes/bikeSlice'
import reservationSlice from "./reserve/reservationSlice";

const store = configureStore({
    reducer: {
        bikes: bikesReducer,
        reservation: reservationSlice,
    },
})

export default store;