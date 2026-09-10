"use client";

import { RootState } from "@/utils/redux/appStore";
import { addTrailer, setTrailerLoading } from "@/utils/redux/moviesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type MovieVideo = {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
};

const useMovieTrailer = (movieId?: number) => {
  const dispatch = useDispatch();
  const trailerKey = useSelector((store: RootState) => store.movies.trailer);
  const loading = useSelector(
    (store: RootState) => store.movies.trailerLoading,
  );

  useEffect(() => {
    if (!movieId) {
      dispatch(addTrailer(null));
      return;
    }

    const fetchTrailer = async () => {
      try {
        dispatch(setTrailerLoading(true));

        const response = await fetch(`/api/movies/${movieId}/videos`);

        if (!response.ok) {
          throw new Error("Failed to fetch movie videos");
        }

        const data = await response.json();

        const trailer = data.results?.find(
          (video: MovieVideo) =>
            video.site === "YouTube" &&
            video.type === "Trailer" &&
            video.official === true,
        );

        // Fallback if there is no official trailer
        const fallbackTrailer = data.results?.find(
          (video: MovieVideo) =>
            video.site === "YouTube" && video.type === "Trailer",
        );

        dispatch(addTrailer(trailer?.key ?? fallbackTrailer?.key ?? null));
      } catch (error) {
        console.error("Failed to fetch trailer:", error);
        dispatch(addTrailer(null));
      } finally {
        dispatch(setTrailerLoading(false));
      }
    };

    fetchTrailer();
  }, [dispatch, movieId]);

  return {
    trailerKey,
    loading,
  };
};

export default useMovieTrailer;
