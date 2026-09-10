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
  trailer: string | null;
  moviesLoading: boolean;
  trailerLoading: boolean;
};

const initialState: MoviesState = {
  nowPlayingMovies: [],
  trailer: null,
  moviesLoading: false,
  trailerLoading: false,
};

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action: PayloadAction<string | null>) => {
      state.trailer = action.payload;
    },
    setMoviesLoading: (state, action: PayloadAction<boolean>) => {
      state.moviesLoading = action.payload;
    },
    setTrailerLoading: (state, action: PayloadAction<boolean>) => {
      state.trailerLoading = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailer,
  setMoviesLoading,
  setTrailerLoading,
} = moviesSlice.actions;

export default moviesSlice.reducer;
