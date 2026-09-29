import AnimatedText from "@/components/ui/animatedText";
import MaxWContainer from "@/components/ui/maxWContainer";

export default function Home() {
  return (
    <MaxWContainer>
      <p className="text-xl tracking-tighter">
        <AnimatedText text="My Space" /> on the internet.
      </p>
    </MaxWContainer>
  );
}
