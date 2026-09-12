"use client";

import { Movie } from "@/utils/types/movie.ypes";
import MovieCard from "./MovieCard";

type MoviesListProps = {
  title: string;
  movies: Movie[];
};

const MoviesList = ({ title, movies }: MoviesListProps) => {
  return (
    <section className="flex gap-y-6 flex-col">
      <h2 className="text-xl font-semibold text-white ">{title}</h2>

      <div className="flex gap-4 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MoviesList;
