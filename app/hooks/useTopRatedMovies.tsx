"use client";
import { MOVIES_API_BASE_URL } from "@/utils/constants";
import {
  addTopRatedMovies,
  setTopRatedMoviesLoading,
} from "@/utils/redux/moviesSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      dispatch(setTopRatedMoviesLoading(true));

      try {
        const response = await fetch(
          `${MOVIES_API_BASE_URL}/3/movie/top_rated?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
            },
          },
        );

        if (!response.ok) {
          const error = await response.json();

          throw new Error(error.error || "Failed to fetch top-rated movies");
        }

        const data = await response.json();

        dispatch(addTopRatedMovies(data.results));
      } catch (error) {
        console.error("Failed to fetch top-rated movies:", error);
      } finally {
        dispatch(setTopRatedMoviesLoading(false));
      }
    };

    fetchMovies();
  }, [dispatch]);
};

export default useTopRatedMovies;
