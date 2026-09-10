"use client";

import useNowPlayingMovies from "@/app/hooks/useNowPlayingMovies";
import { useEffect, useState } from "react";

export default function MovieList() {
  const { loading } = useNowPlayingMovies();

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div></div>;
}
