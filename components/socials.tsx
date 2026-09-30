import data from "@/data/socials.json";
import Image from "next/image";

export default function SocialsDisplay() {
  return (
    <div className="grid gap-2" id="socials">
      <h3 className="text-md tracking-tight font-medium">Socials.</h3>
      <div className="grid grid-cols-8 gap-2 portrait:grid-cols-4">
        {data.map((item) => (
          <div
            key={item.icon}
            className="border grid place-items-center p-2 rounded-xl bg-primary/10"
          >
            <a href={item.url} target="_blank">
              <Image
                src={`/socials/${item.icon}`}
                alt={item.name}
                width={400}
                height={400}
                className="h-full rounded-xl"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
