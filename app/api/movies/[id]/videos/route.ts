import { MOVIES_API_BASE_URL } from "@/utils/constants";
import { NextResponse } from "next/server";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(request: Request, { params }: Params) {
  try {
    const { id } = await params;

    const response = await fetch(
      `${MOVIES_API_BASE_URL}/3/movie/${id}/videos?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
          Accept: "application/json",
        },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch movie videos" },
        { status: response.status },
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("TMDB video fetch error:", error);

    return NextResponse.json(
      { error: "Unable to fetch movie videos" },
      { status: 503 },
    );
  }
}
