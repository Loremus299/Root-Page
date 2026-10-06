/* eslint-disable @next/next/no-img-element */
import bskyData from "@/data/bsky";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default async function ArtDisplay() {
  const data = await bskyData();

  if (!data.success) {
    return <div id="github">BSKY GAVE AN ERROR OH MY GOD</div>;
  }

  return (
    <div id="bsky" className="grid gap-2">
      <h3 className="text-md tracking-tight font-medium">
        ˖ . ݁𝜗𝜚. ݁₊ My Art. ˖ . ݁𝜗𝜚. ݁₊
      </h3>
      <div className="grid grid-cols-2 portrait:grid-cols-1 gap-2">
        {data.data.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-card border rounded-2xl grid gap-2"
          >
            <Carousel>
              <CarouselContent>
                {item.post.embed!.images?.map((image) => (
                  <CarouselItem key={image.thumb}>
                    <img
                      src={image.fullsize}
                      alt={image.thumb}
                      className="rounded-2xl border border-dashed"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {item.post.embed!.images?.length != 1 && (
                <>
                  <CarouselPrevious className={"absolute left-2"} />
                  <CarouselNext className={"absolute right-2"} />
                </>
              )}
            </Carousel>
            <div className="flex gap-2">
              {item.post.record.facets
                ?.flatMap((item) =>
                  item.features.filter(
                    (feature) => feature.$type == "app.bsky.richtext.facet#tag",
                  ),
                )
                .map((tag, index) => (
                  <h4 key={index} className="text-sm">
                    {"#" + tag.tag!}
                  </h4>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
