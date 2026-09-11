"use client";

import { MOVIES_API_BASE_URL } from "@/utils/constants";
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

  useEffect(() => {
    if (!movieId) {
      dispatch(addTrailer(null));
      return;
    }

    const fetchTrailer = async () => {
      try {
        dispatch(setTrailerLoading(true));

        const response = await fetch(
          `${MOVIES_API_BASE_URL}/3/movie/${movieId}/videos?language=en-US`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
              Accept: "application/json",
            },
          },
        );

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
};

export default useMovieTrailer;
