import "server-only";

import { Result, ResultType } from "@/lib/result";
import { cache } from "react";

interface BskyData {
  post: {
    record: {
      facets?: {
        features: {
          $type: string;
          tag?: string;
        }[];
      }[];
    };
    embed?: {
      images?: {
        fullsize: string;
        thumb: string;
      }[];
    };
  };
}

async function bskyPosts(): Promise<ResultType<BskyData[], string>> {
  const req = await fetch(
    "https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=lorem-us.bsky.social",
  );
  if (req.status == 200) {
    const res = await req.json();
    const data: BskyData[] = res.feed.filter(
      (item: { reason: unknown; post: { record: { reply: unknown } } }) =>
        !item.reason && !item.post.record.reply,
    );
    const properData = data.filter((item) => {
      const features =
        item.post.record.facets?.flatMap((facet) => facet.features) ?? [];

      const hasArt = features.some((feature) => feature.tag === "art");
      const hasWip = features.some((feature) => feature.tag === "wip");

      return hasArt && !hasWip;
    });
    return Result.ok<BskyData[], string>(properData).type();
  }

  return Result.error<BskyData[], string>("bluesky api failed ig :c").type();
}

const bskyData = cache(bskyPosts);
export default bskyData;
