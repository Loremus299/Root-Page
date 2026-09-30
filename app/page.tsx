import AnimatedText from "@/components/animatedText";
import GithubDisplay from "@/components/github";
import MaxWContainer from "@/components/maxWContainer";
import SocialsDisplay from "@/components/socials";

export default function Home() {
  return (
    <MaxWContainer>
      <div className="grid gap-2">
        <p className="text-xl tracking-tighter">
          <AnimatedText text="My Space" /> on the internet.
        </p>
        <p className="text-muted-foreground text-sm">
          This is my little space on the big big internet :3 I like making video
          games and websites, apps, anything pretty frontend UI and art. And
          here is where you can find everything I make.
        </p>
      </div>
      <SocialsDisplay />
      <GithubDisplay />
    </MaxWContainer>
  );
}
