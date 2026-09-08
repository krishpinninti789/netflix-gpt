import React from "react";
import AppHeader from "../components/AppHeader";
import { getNowPlayingMovies } from "../actions/movies.action";
import MovieCardsContainer from "../components/MovieCardsContainer";

const page = async () => {
  const data = await getNowPlayingMovies();
  return (
    <div className="py-6 px-10">
      <AppHeader />
      <MovieCardsContainer data={data} />
    </div>
  );
};

export default page;
