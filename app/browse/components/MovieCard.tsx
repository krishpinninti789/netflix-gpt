"use client";

import { Movie } from "@/utils/types/movie.ypes";
import Image from "next/image";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  if (!movie.poster_path) {
    return <div className="h-75 w-50 shrink-0 rounded-md bg-gray-800" />;
  }

  return (
    <div className="group relative h-75 w-50 shrink-0 overflow-hidden rounded-md cursor-pointer">
      <Image
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        fill
        sizes="200px"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black to-transparent p-3 pt-10">
        <p className="text-sm font-semibold text-white">{movie.title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
