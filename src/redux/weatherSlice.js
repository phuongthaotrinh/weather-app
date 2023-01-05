import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherApi } from "../api/weather";

export const getDataCity = createAsyncThunk("weather/getDataCity", async (input, { rejectWithValue }) => {
   try {
      const data = await WeatherApi.getByCity(input);
      return data;
   } catch (error) {
      return rejectWithValue(error.response.data.message);
   }
});

export const getDataByLocation = createAsyncThunk("weather/getDataByLocation", async (input, { rejectWithValue }) => {
   try {
      const data = await WeatherApi.getByLocation(input);
      return data;
   } catch (error) {
      return rejectWithValue(error.response.data.message);
   }
});

const initialState = {
   loading: false,
   dataCity: {},
   dataLocation: {},
   msg: ""
};

const weatherSlice = createSlice({
   name: "weather",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getDataCity.fulfilled, (state, { payload }) => {
         state.dataCity = payload;
         state.loading = false;
         state.msg = ""
      })
      builder.addCase(getDataCity.rejected, (state, { payload }) => {
         state.msg = payload;
         state.loading = false
      })

      builder.addCase(getDataByLocation.fulfilled, (state, { payload }) => {
         state.dataLocation = payload;
         state.loading = false;
         state.msg = ""
      })

      builder.addCase(getDataByLocation.rejected, (state, { payload }) => {
         state.msg = payload;
         state.loading = false
      })
   }
});

export default weatherSlice.reducer;