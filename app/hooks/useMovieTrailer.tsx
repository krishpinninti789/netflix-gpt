"use client";

import { useEffect, useState } from "react";

type MovieVideo = {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
};

const useMovieTrailer = (movieId?: number) => {
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchTrailer = async () => {
      try {
        setLoading(true);

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

        setTrailerKey(trailer?.key ?? fallbackTrailer?.key ?? null);
      } catch (error) {
        console.error("Failed to fetch trailer:", error);
        setTrailerKey(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTrailer();
  }, [movieId]);

  return {
    trailerKey,
    loading,
  };
};

export default useMovieTrailer;
