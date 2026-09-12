"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/utils/redux/appStore";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store: RootState) => store.movies.nowPlayingMovies,
  );
  const popularMovies = useSelector(
    (store: RootState) => store.movies.popularMovies,
  );
  const trendingMovies = useSelector(
    (store: RootState) => store.movies.trendingMovies,
  );
  const topRatedMovies = useSelector(
    (store: RootState) => store.movies.topRatedMovies,
  );

  return (
    <section className="flex flex-col gap-y-6">
      <MoviesList title="Top Rated" movies={topRatedMovies} />
      <MoviesList title="Now Playing" movies={nowPlayingMovies} />
      <MoviesList title="Trending" movies={trendingMovies} />
      <MoviesList title="Popular" movies={popularMovies} />
    </section>
  );
};

export default SecondaryContainer;
