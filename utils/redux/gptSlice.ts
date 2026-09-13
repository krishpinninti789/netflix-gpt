import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPT: false,
  },
  reducers: {
    toggleGPTView: (state) => {
      state.showGPT = !state.showGPT;
    },
  },
});

export const { toggleGPTView } = gptSlice.actions;

export default gptSlice.reducer;
