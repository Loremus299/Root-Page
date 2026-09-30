/* eslint-disable @next/next/no-img-element */
import itchData from "@/data/itch";
import { Card, CardHeader } from "./ui/card";
import { Download, Eye } from "lucide-react";
import AnimatedText from "./animatedText";

export default async function GameDisplay() {
  const data = await itchData();

  if (!data.success) {
    return <div>ITCH IO GAME FETCHING FAILED!!!</div>;
  }

  return (
    <div id="games" className="grid gap-2">
      <h3 className="text-md tracking-tight font-medium">My Games.</h3>
      <div className="grid grid-cols-2 portrait:grid-cols-1">
        {data.data.map((game, index) => (
          <a key={index} href={game.url} target="_blank">
            <Card className="hover:drop-shadow-2xl hover:rotate-6 hover:scale-110 transition-all duration-300">
              <CardHeader>
                <img
                  src={game.cover_url}
                  alt={game.title}
                  className="rounded-xl border mb-2"
                />
                <div className="flex justify-between items-center">
                  <AnimatedText
                    text={game.title}
                    className="font-medium tracking-wide"
                  />
                  <div className="flex gap-2">
                    <p className="flex items-center gap-2 p-2 pt-1 pb-1 rounded-md border bg-primary/10">
                      <Eye className="size-4" /> {game.views_count}
                    </p>
                    <p className="flex items-center gap-2 p-2 pt-1 pb-1 rounded-md border bg-primary/10">
                      <Download className="size-4" /> {game.downloads_count}
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
