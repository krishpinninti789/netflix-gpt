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
  popularMovies: Movie[];
  trendingMovies: Movie[];
  topRatedMovies: Movie[];
  trailer: string | null;
  moviesLoading: boolean;
  trailerLoading: boolean;
  popularMoviesLoading: boolean;
  trendingMoviesLoading: boolean;
  topRatedMoviesLoading: boolean;
};

const initialState: MoviesState = {
  nowPlayingMovies: [],
  popularMovies: [],
  trendingMovies: [],
  topRatedMovies: [],
  trailer: null,
  moviesLoading: false,
  trailerLoading: false,
  popularMoviesLoading: false,
  trendingMoviesLoading: false,
  topRatedMoviesLoading: false,
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
    addPopularMovies: (state, action: PayloadAction<Movie[]>) => {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.trendingMovies = action.payload;
    },
    addTopRatedMovies: (state, action: PayloadAction<Movie[]>) => {
      state.topRatedMovies = action.payload;
    },
    setMoviesLoading: (state, action: PayloadAction<boolean>) => {
      state.moviesLoading = action.payload;
    },
    setTrailerLoading: (state, action: PayloadAction<boolean>) => {
      state.trailerLoading = action.payload;
    },
    setPopularMoviesLoading: (state, action: PayloadAction<boolean>) => {
      state.popularMoviesLoading = action.payload;
    },
    setTrendingMoviesLoading: (state, action: PayloadAction<boolean>) => {
      state.trendingMoviesLoading = action.payload;
    },
    setTopRatedMoviesLoading: (state, action: PayloadAction<boolean>) => {
      state.topRatedMoviesLoading = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailer,
  addPopularMovies,
  addTrendingMovies,
  addTopRatedMovies,
  setMoviesLoading,
  setTrailerLoading,
  setPopularMoviesLoading,
  setTrendingMoviesLoading,
  setTopRatedMoviesLoading,
} = moviesSlice.actions;

export default moviesSlice.reducer;
