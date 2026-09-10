"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/utils/redux/appStore";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store: RootState) => store.movies.nowPlayingMovies,
  );

  return (
    <section className="mt-8">
      <MoviesList title="Now Playing" movies={nowPlayingMovies} />

      <MoviesList title="Popular" movies={nowPlayingMovies} />
    </section>
  );
};

export default SecondaryContainer;
