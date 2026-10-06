/* eslint-disable @next/next/no-img-element */
import bskyData from "@/data/bsky";

export default async function ArtDisplay() {
  const data = await bskyData();

  if (!data.success) {
    return <div id="github">BSKY GAVE AN ERROR OH MY GOD</div>;
  }

  const inktober: string[] = [];
  const doodles: string[] = [];
  const matching: string[] = [];
  const art: string[] = [];

  for (const post of data.data) {
    let matched = false;
    if (
      post.post.record.facets?.some((f) =>
        f.features.some((feat) => feat.tag === "doodle"),
      )
    ) {
      post.post.embed?.images?.forEach((img) => doodles.push(img.fullsize));
      matched = true;
    }

    if (
      post.post.record.facets?.some((f) =>
        f.features.some((feat) => feat.tag === "inktober"),
      )
    ) {
      post.post.embed?.images?.forEach((img) => inktober.push(img.fullsize));
      matched = true;
    }

    if (
      post.post.record.facets?.some((f) =>
        f.features.some((feat) => feat.tag === "matching"),
      )
    ) {
      post.post.embed?.images?.forEach((img) => matching.push(img.fullsize));
      matched = true;
    }

    if (!matched) {
      post.post.embed?.images?.forEach((img) => art.push(img.fullsize));
    }
  }

  return (
    <div id="bsky" className="grid gap-2">
      <h3 className="text-md tracking-tight font-medium">
        ˖ . ݁𝜗𝜚. ݁₊ My Art. ˖ . ݁𝜗𝜚. ݁₊
      </h3>
      <div className="grid gap-2">
        <div className="grid grid-cols-2 gap-2 portrait:grid-cols-1">
          {art.map((url) => (
            <img
              src={url}
              alt={url}
              key={url}
              className="border rounded-xl p-1 w-full"
            />
          ))}
        </div>
        <h4>✮ ⋆ ˚｡𖦹 ⋆｡°✩ Matching pfps ✮ ⋆ ˚｡𖦹 ⋆｡°✩</h4>
        <div className="grid grid-cols-2 gap-2 portrait:grid-cols-1">
          {matching.map((url) => (
            <img
              src={url}
              alt={url}
              key={url}
              className="border rounded-xl p-1 w-full"
            />
          ))}
        </div>
        <h4>✮ ⋆ ˚｡𖦹 ⋆｡°✩ Doodles ✮ ⋆ ˚｡𖦹 ⋆｡°✩</h4>
        <div className="grid grid-cols-2 gap-2 portrait:grid-cols-1">
          {doodles.map((url) => (
            <img
              src={url}
              alt={url}
              key={url}
              className="border rounded-xl p-1 w-full"
            />
          ))}
        </div>
        <h4>✮ ⋆ ˚｡𖦹 ⋆｡°✩ Inktober ✮ ⋆ ˚｡𖦹 ⋆｡°✩</h4>
        <div className="grid grid-cols-2 gap-2 portrait:grid-cols-1">
          {inktober.map((url) => (
            <img
              src={url}
              alt={url}
              key={url}
              className="border rounded-xl p-1 w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
