import AnimatedText from "@/components/animatedText";
import MaxWContainer from "@/components/maxWContainer";

export default function Home() {
  return (
    <MaxWContainer>
      <div className="grid gap-2">
        <p className="text-xl tracking-tighter">
          <AnimatedText text="My Space" /> on the internet.
        </p>
        <p className="text-muted-foreground text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum
          sit repudiandae hic ut ab eius qui earum deleniti accusamus sequi
          incidunt, reiciendis eligendi id eveniet deserunt, eaque laudantium
          ipsam!
        </p>
      </div>
    </MaxWContainer>
  );
}
