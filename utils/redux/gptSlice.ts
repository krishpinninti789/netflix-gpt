import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPT: false,
    gptMovieNames: [],
    gptMoviesList: [],
  },
  reducers: {
    toggleGPTView: (state) => {
      state.showGPT = !state.showGPT;
    },
    addGptMovieNames: (state, action) => {
      state.gptMovieNames = action.payload;
    },
    addGptMoviesList: (state, action) => {
      state.gptMoviesList = action.payload;
    },
  },
});

export const { toggleGPTView, addGptMovieNames, addGptMoviesList } =
  gptSlice.actions;

export default gptSlice.reducer;
