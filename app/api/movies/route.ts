import { MOVIES_API_BASE_URL } from "@/utils/constants";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `${MOVIES_API_BASE_URL}/3/movie/now_playing?language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
        },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error("TMDB error:", response.status, errorText);

      return NextResponse.json(
        {
          error: "Failed to fetch movies from TMDB",
        },
        {
          status: response.status,
        },
      );
    }

    const data = await response.json();

    return NextResponse.json(data.results);
  } catch (error) {
    console.error("TMDB fetch error:", error);

    return NextResponse.json(
      {
        error: "Unable to connect to TMDB",
      },
      {
        status: 503,
      },
    );
  }
}
