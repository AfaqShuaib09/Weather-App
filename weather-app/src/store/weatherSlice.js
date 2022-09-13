import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: [],
  reducers: {
    setWeather: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
      return state.reverse();
    },
  },
});

export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
