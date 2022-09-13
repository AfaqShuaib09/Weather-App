import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import weatherReducer from "./weatherSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    weather: weatherReducer,
  },
});

export default store;
