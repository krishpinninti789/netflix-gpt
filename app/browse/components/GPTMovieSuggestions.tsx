"use client";

import React from "react";
import { useSelector } from "react-redux";

import type { RootState } from "@/utils/redux/appStore";
import MoviesList from "./MoviesList";

const GPTMovieSuggestions = () => {
  const gptMovieNames = useSelector(
    (store: RootState) => store.gpt.gptMovieNames,
  );

  const gptMoviesList = useSelector(
    (store: RootState) => store.gpt.gptMoviesList,
  );

  if (!gptMovieNames.length) {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-6">
      {gptMovieNames.map((movieName, index) => {
        const movies = gptMoviesList[index] ?? [];

        if (!movies) {
          return null;
        }

        return (
          <MoviesList
            key={`${movieName}-${index}`}
            title={movieName}
            movies={movies}
          />
        );
      })}
    </div>
  );
};

export default GPTMovieSuggestions;
