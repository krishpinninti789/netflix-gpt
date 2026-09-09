import { useEffect, useState } from "react";

const useNowPlayingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/api/movies");

        if (!response.ok) {
          const error = await response.json();

          throw new Error(error.error || "Failed to fetch movies");
        }

        const data = await response.json();

        setMovies(data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return {
    movies,
    loading,
  };
};

export default useNowPlayingMovies;
