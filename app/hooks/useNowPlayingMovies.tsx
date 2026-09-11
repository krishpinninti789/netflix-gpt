"use client";
import { MOVIES_API_BASE_URL } from "@/utils/constants";
import {
  addNowPlayingMovies,
  setMoviesLoading,
} from "@/utils/redux/moviesSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      dispatch(setMoviesLoading(true));

      try {
        const response = await fetch(
          `${MOVIES_API_BASE_URL}/3/movie/now_playing?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
            },
          },
        );

        if (!response.ok) {
          const error = await response.json();

          throw new Error(error.error || "Failed to fetch movies");
        }

        const data = await response.json();

        dispatch(addNowPlayingMovies(data.results));
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        dispatch(setMoviesLoading(false));
      }
    };

    fetchMovies();
  }, [dispatch]);
};

export default useNowPlayingMovies;
