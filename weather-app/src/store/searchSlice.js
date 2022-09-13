import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    city: "",
    searchState: true,
  },
  reducers: {
    updateSearch: (state, action) => {
      state.city = action.payload;
    },
    updateSearchState: (state, action) => {
      state.searchState = action.payload;
    },
  },
});

export const { updateSearch, updateSearchState } = searchSlice.actions;
export default searchSlice.reducer;
