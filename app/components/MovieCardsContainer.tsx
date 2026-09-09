"use client";

import { useEffect, useState } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

export default function MovieList() {
  const { movies, loading } = useNowPlayingMovies();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {movies?.map((movie: any) => (
        <div key={movie?.id}>{movie?.title}</div>
      ))}
    </div>
  );
}
