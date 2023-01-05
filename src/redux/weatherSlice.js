import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherApi } from "../api/weather";

export const getDataCity = createAsyncThunk("movie/MovieCreate", async (input, { rejectWithValue }) => {
   try {
      const data = await WeatherApi.getByCity(input);
      return data;
   } catch (error) {
      return rejectWithValue(error.response.data.message);
   }
}
);



const initialState = {
   loading: false,
   data: [],
   dataCity: [],
};

const weatherSlice = createSlice({
   name: "weather",
   initialState,
   reducers: {

   },
   extraReducers: (builder) => {
      builder.addCase(getDataCity.fulfilled, (state, { payload }) => {
         state.dataCity = payload;
         state.loading = false
      })
      builder.addCase(getDataCity.pending, (state, { payload }) => {
         state.loading = true
      })
      builder.addCase(getDataCity.rejected, (state, { payload }) => {
         state.dataCity = payload;
         state.loading = false
      })
   }
});

export default weatherSlice.reducer;