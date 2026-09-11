"use client";
import { MOVIES_API_BASE_URL } from "@/utils/constants";
import {
  addPopularMovies,
  setPopularMoviesLoading,
} from "@/utils/redux/moviesSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      dispatch(setPopularMoviesLoading(true));

      try {
        const response = await fetch(
          `${MOVIES_API_BASE_URL}/3/movie/popular?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
            },
          },
        );

        if (!response.ok) {
          const error = await response.json();

          throw new Error(error.error || "Failed to fetch popular movies");
        }

        const data = await response.json();

        dispatch(addPopularMovies(data.results));
      } catch (error) {
        console.error("Failed to fetch popular movies:", error);
      } finally {
        dispatch(setPopularMoviesLoading(false));
      }
    };

    fetchMovies();
  }, [dispatch]);
};

export default usePopularMovies;
