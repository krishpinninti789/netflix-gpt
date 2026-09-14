"use client";

import { getGPTMovieSuggestions } from "@/app/actions/gpt.action";
import React, { useState } from "react";

const GPTSearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText.trim()) return;

    const movies = await getGPTMovieSuggestions(searchText);

    console.log(movies);

    // const movieResults = await Promise.all(
    //   movies.map((movie: string) => searchTMDB(movie)),
    // );
  };

  return (
    <form
      onSubmit={handleSearch}
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
        className="h-12 rounded-md bg-red-600 px-6 font-semibold text-white transition hover:bg-red-700"
      >
        Search
      </button>
    </form>
  );
};

export default GPTSearchBar;
