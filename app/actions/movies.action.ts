import { MOVIES_API_BASE_URL } from "@/utils/constants";

export const getNowPlayingMovies = async () => {
  try {
    const response = await fetch(
      `${MOVIES_API_BASE_URL}/3/movie/now_playing?language=en-US&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`TMDB error: ${response.status}`);
    }

    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error("TMDB FETCH ERROR:", error);
  }
};
