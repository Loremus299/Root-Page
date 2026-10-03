/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Monster() {
  return (
    <div id="monster" className="grid gap-2">
      <h3 className="text-md tracking-tight font-medium">
        ˖ . ݁𝜗𝜚. ݁₊ Monster Energy - flavors ranked. ˖ . ݁𝜗𝜚. ݁₊
      </h3>
      <div className="grid grid-cols-2 portrait:grid-cols-1 gap-2">
        <Card>
          <img
            src={
              "https://i.pinimg.com/736x/f3/b1/8b/f3b18b489a02d636a6112192945c4cfe.jpg"
            }
            alt="ultra rosa"
          />
          <CardHeader>
            <CardTitle>Ultra Rosa.</CardTitle>
            <CardDescription>
              Best flavor ever + Pinky pink :3 = GIRLYPOP FLAVOR
            </CardDescription>
            <CardAction># 1</CardAction>
          </CardHeader>
        </Card>
        <Card>
          <img
            src={
              "https://i.pinimg.com/736x/51/76/6d/51766d56996fe71d8417d5d6df868cc6.jpg"
            }
            alt="ultra white"
          />
          <CardHeader>
            <CardTitle>Ultra White.</CardTitle>
            <CardDescription>Tastes peak, looks peak :3</CardDescription>
            <CardAction># 2</CardAction>
          </CardHeader>
        </Card>
        <Card>
          <img
            src={
              "https://i.pinimg.com/1200x/09/8a/19/098a19f807efde87ef2e181cfe6239dc.jpg"
            }
            alt="lando norris"
          />
          <CardHeader>
            <CardTitle>Lando Norris.</CardTitle>
            <CardDescription>
              My boyfriend watches F1 :3 tastes like melons, pretty nice. I call
              it &quot;Norris&apos; Big Monster&quot;
            </CardDescription>
            <CardAction># 3</CardAction>
          </CardHeader>
        </Card>
        <Card>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuwDbLKryQ6ETN-892eamsqcGsMoi9GxJmisPmBdxdmqZe8QhGRtsjAu4&s=10"
            }
            alt="mariposa"
          />
          <CardHeader>
            <CardTitle>Mariposa.</CardTitle>
            <CardDescription>
              OMG MANGO MONSTER SO NICE OMG :33333 Not as good as others, but
              still a very nice flavor
            </CardDescription>
            <CardAction># 4</CardAction>
          </CardHeader>
        </Card>
        <Card>
          <img
            src={
              "https://www.bbassets.com/media/uploads/p/l/40130624_2-monster-energy-drink.jpg"
            }
            alt="the og"
          />
          <CardHeader>
            <CardTitle>The OG.</CardTitle>
            <CardDescription>
              Not good, not bad, can&apos;t go wrong with it, available
              everywhere.
            </CardDescription>
            <CardAction># 5</CardAction>
          </CardHeader>
        </Card>
        <Card>
          <img
            src={
              "https://www.chennaigrocers.com/cdn/shop/files/MonsterPipelinePunch500ml.jpg?v=1733211254&width=1024"
            }
            alt="Pipeline Punch"
          />
          <CardHeader>
            <CardTitle>Pipeline Punch.</CardTitle>
            <CardDescription>
              FUCKING CLICKBAIT, THOUGHT IT WAS ULTRA ROSA FOR A SECOND. TASTES
              WORSE THAN COUGH SYRUP.
            </CardDescription>
            <CardAction># 6</CardAction>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
