import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
    const res = await axios.get("/data.json");
    return res.data.cars;
})

const carsSlice = createSlice({
    name: "cars",
    initialState: {
        isLoading: false,
        cars: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCars.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCars.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cars = action.payload;
            state.error = null;
        });
        builder.addCase(fetchCars.rejected, (state, action) => {
            state.isLoading = false;
            state.cars = [];
            state.error = action.error.message;
        });
    }
})


export default carsSlice.reducer;