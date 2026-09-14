"use client";

import { getGPTMovieSuggestions } from "@/app/actions/gpt.action";
import { MOVIES_API_BASE_URL } from "@/utils/constants";
import { addGptMovieNames, addGptMoviesList } from "@/utils/redux/gptSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const GPTSearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const searchTMDB = async (movie: string) => {
    const data = await fetch(
      `${MOVIES_API_BASE_URL}/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
        },
      },
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearchMovie = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText.trim()) return;

    const movies = await getGPTMovieSuggestions(searchText);
    dispatch(addGptMovieNames(movies));

    const movieResults = await Promise.all(
      movies.map((movie: string) => searchTMDB(movie)),
    );
    dispatch(addGptMoviesList(movieResults));
  };

  return (
    <form
      onSubmit={handleSearchMovie}
      className="mx-auto flex w-full max-w-2xl items-center gap-2 px-4"
    >
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="What would you like to watch?"
        className="h-12 flex-1 rounded-md border border-gray-300 bg-white px-4 text-base text-black outline-none placeholder:text-gray-500 focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
      />

      <button
        type="submit"
        className="h-12 rounded-md bg-red-600 px-6 font-semibold text-white transition hover:bg-red-700 cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};

export default GPTSearchBar;
