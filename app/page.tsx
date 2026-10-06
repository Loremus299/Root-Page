import AnimatedText from "@/components/animatedText";
import ArtDisplay from "@/components/bsky";
import GameDisplay from "@/components/gameDisplay";
import GithubDisplay from "@/components/github";
import MaxWContainer from "@/components/maxWContainer";
import Monster from "@/components/monster";
import SitesDisplay from "@/components/sites";
import SocialsDisplay from "@/components/socials";

export default function Home() {
  return (
    <MaxWContainer>
      <div className="grid gap-2 font-medium">
        <p className="text-xl tracking-tighter">
          <AnimatedText text="My Space" /> on the internet. ݁ ˖Ი𐑼⋆
        </p>
        <p className="text-muted-foreground text-sm">
          This is my little space on the big big internet :3 I like making video
          games and websites, apps, anything pretty frontend UI and art. And
          here is where you can find everything I make. <br />
          ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧
        </p>
      </div>
      <SocialsDisplay />
      <GameDisplay />
      <ArtDisplay />
      <SitesDisplay />
      <GithubDisplay />
      <Monster />
    </MaxWContainer>
  );
}
