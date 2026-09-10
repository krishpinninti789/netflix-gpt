"use client";
import { addNowPlayingMovies } from "@/utils/redux/moviesSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
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
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return {
    loading,
  };
};

export default useNowPlayingMovies;
