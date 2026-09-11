"use client";
import { MOVIES_API_BASE_URL } from "@/utils/constants";
import {
  addTrendingMovies,
  setTrendingMoviesLoading,
} from "@/utils/redux/moviesSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      dispatch(setTrendingMoviesLoading(true));

      try {
        const response = await fetch(
          `${MOVIES_API_BASE_URL}/3/trending/movie/day?language=en-US`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
            },
          },
        );

        if (!response.ok) {
          const error = await response.json();

          throw new Error(error.error || "Failed to fetch trending movies");
        }

        const data = await response.json();

        dispatch(addTrendingMovies(data.results));
      } catch (error) {
        console.error("Failed to fetch trending movies:", error);
      } finally {
        dispatch(setTrendingMoviesLoading(false));
      }
    };

    fetchMovies();
  }, [dispatch]);
};

export default useTrendingMovies;
