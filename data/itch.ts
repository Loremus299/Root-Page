import "server-only";
import { env } from "process";
import { cache } from "react";
import { Result, ResultType } from "@/lib/result";

interface Game {
  title: string;
  cover_url: string;
  downloads_count: number;
  views_count: number;
  url: string;
}

async function ItchGameFetch(): Promise<ResultType<Game[], string>> {
  const req = await fetch("https://api.itch.io/profile/games", {
    headers: { Authorization: env.ITCH_API! },
    next: { revalidate: 86400 },
  });

  if (req.status == 200) {
    const res = await req.json();
    const data: Game[] = res.games;

    return Result.ok<Game[], string>(data).type();
  }

  return Result.error<Game[], string>("Itch.io data fetch failed").type();
}

const itchData = cache(ItchGameFetch);
export default itchData;
