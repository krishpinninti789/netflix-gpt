"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, type Movie } from "@/utils/redux/moviesSlice";
import type { AppDispatch, RootState } from "@/utils/redux/appStore";

type MovieCardsContainerProps = {
  data: Movie[];
};

const MovieCardsContainer = ({ data }: MovieCardsContainerProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector(
    (state: RootState) => state.movies?.nowPlayingMovies,
  );

  useEffect(() => {
    dispatch(addNowPlayingMovies(data));
  }, [data, dispatch]);

  return (
    <div>
      {movies?.map((movie) => (
        <h1 key={movie.id}>{movie.title}</h1>
      ))}
    </div>
  );
};

export default MovieCardsContainer;
