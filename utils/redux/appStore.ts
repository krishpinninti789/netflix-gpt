import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";

export const appStore = configureStore({
  reducer: {
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
