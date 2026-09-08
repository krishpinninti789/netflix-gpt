import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MoviesState = {
  nowPlayingMovies: Movie[];
};

const initialState: MoviesState = {
  nowPlayingMovies: [],
};

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
