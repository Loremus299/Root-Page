import { Result, ResultType } from "@/lib/result";
import { cache } from "react";
import "server-only";

interface BskyData {
  name: string;
  description: string;
  topics: string[];
}

async function bskyPosts(): Promise<ResultType<BskyData[], string>> {
  const req = await fetch(
    "https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=lorem-us.bsky.social",
  );
  return Result.error<BskyData[], string>("bluesky api failed ig :c").type();
}

const bskyData = cache(bskyPosts);
export default bskyData;
