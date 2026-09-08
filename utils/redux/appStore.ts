import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";

export const appStore = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
