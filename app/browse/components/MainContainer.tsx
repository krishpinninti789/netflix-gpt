"use client";

import useNowPlayingMovies from "@/app/hooks/useNowPlayingMovies";
import useMovieTrailer from "@/app/hooks/useMovieTrailer";

import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackGround";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/redux/appStore";

type Movie = {
  id: number;
  title: string;
  overview: string;
};

const MainContainer = () => {
  const { nowPlayingMovies, trailer, trailerLoading, moviesLoading } =
    useSelector((store: RootState) => store.movies);
  useNowPlayingMovies();

  const movie = nowPlayingMovies?.[0] as Movie | undefined;

  useMovieTrailer(movie?.id);

  if (moviesLoading || !movie) {
    return (
      <div className="flex h-[80vh] items-center justify-cente text-white">
        Loading...
      </div>
    );
  }

  return (
    <main className="relative h-[80vh] overflow-hidden">
      {trailer && !trailerLoading && <VideoBackground videoKey={trailer} />}

      <VideoTitle title={movie.title} overview={movie.overview} />
    </main>
  );
};

export default MainContainer;
