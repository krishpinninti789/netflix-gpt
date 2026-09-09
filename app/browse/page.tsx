import React from "react";
import AppHeader from "../components/AppHeader";
import MovieCardsContainer from "../components/MovieCardsContainer";

const page = () => {
  return (
    <div className="py-6 px-10">
      <AppHeader />
      <MovieCardsContainer />
    </div>
  );
};

export default page;
