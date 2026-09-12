import React from "react";
import AppHeader from "./components/AppHeader";
import MovieList from "./components/MoviesList";
import MainContainer from "./components/MainContainer";

const page = () => {
  return (
    <div className="py-4 px-8 md:py-6 md:px-10">
      <AppHeader />
      <MainContainer />
    </div>
  );
};

export default page;
