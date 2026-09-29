import AnimatedText from "@/components/ui/animatedText";
import MaxWContainer from "@/components/ui/maxWContainer";

export default function Home() {
  return (
    <MaxWContainer>
      <div className="grid gap-2">
        <p className="text-xl tracking-tighter">
          <AnimatedText text="My Space" /> on the internet.
        </p>
        <p className="text-muted-foreground text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          labore quod in quia laudantium minima vitae. Fugiat, labore accusamus
          dolorem eos sequi recusandae? Temporibus, delectus iure veniam
          quisquam vitae amet.
        </p>
      </div>
    </MaxWContainer>
  );
}
