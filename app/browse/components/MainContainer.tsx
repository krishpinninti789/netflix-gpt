"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/utils/redux/appStore";

import useNowPlayingMovies from "@/app/hooks/useNowPlayingMovies";
import useMovieTrailer from "@/app/hooks/useMovieTrailer";

import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackGround";
import SecondaryContainer from "./SecondaryContainer";
import { Movie } from "@/utils/types/movie.ypes";
import usePopularMovies from "@/app/hooks/usePopularMovies";
import useTopRatedMovies from "@/app/hooks/useTopRatedMovies";
import useTrendingMovies from "@/app/hooks/useTrendingMovies";

const MainContainer = () => {
  // Trigger fetching of movies.
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTrendingMovies();

  const { nowPlayingMovies, trailer, trailerLoading, moviesLoading } =
    useSelector((store: RootState) => store.movies);

  const movie = nowPlayingMovies?.[5] as Movie | undefined;

  // Trigger fetching of trailer for the selected movie.
  useMovieTrailer(movie?.id);

  if (moviesLoading || !movie) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  return (
    <main className="flex flex-col gap-y-8">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        {trailer && !trailerLoading && <VideoBackground videoKey={trailer} />}

        <VideoTitle title={movie.title} overview={movie.overview} />
      </section>

      {/* Movie rows */}
      <SecondaryContainer />
    </main>
  );
};

export default MainContainer;
