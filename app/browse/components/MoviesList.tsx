"use client";

import { Movie } from "@/utils/types/movie.ypes";
import MovieCard from "./MovieCard";

type MoviesListProps = {
  title: string;
  movies: Movie[];
};

const MoviesList = ({ title, movies }: MoviesListProps) => {
  return (
    <section className="mb-8">
      <h2 className="mb-6 px-4 text-xl font-semibold text-white md:px-8">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-auto px-4 pb-4 md:px-8 scrollbar-none [&::-webkit-scrollbar]:hidden">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MoviesList;
