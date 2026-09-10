"use client";
import { RootState } from "@/utils/redux/appStore";
import {
  addNowPlayingMovies,
  setMoviesLoading,
} from "@/utils/redux/moviesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store: RootState) => store.movies.moviesLoading);

  useEffect(() => {
    const fetchMovies = async () => {
      dispatch(setMoviesLoading(true));

      try {
        const response = await fetch("/api/movies");

        if (!response.ok) {
          const error = await response.json();

          throw new Error(error.error || "Failed to fetch movies");
        }

        const data = await response.json();

        dispatch(addNowPlayingMovies(data));
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        dispatch(setMoviesLoading(false));
      }
    };

    fetchMovies();
  }, [dispatch]);

  return {
    loading,
  };
};

export default useNowPlayingMovies;
