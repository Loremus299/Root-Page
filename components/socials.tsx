import data from "@/data/socials.json";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function SocialsDisplay() {
  return (
    <div className="grid gap-2" id="socials">
      <h3 className="text-md tracking-tight font-medium">
        ˖ . ݁𝜗𝜚. ݁₊ Socials. ˖ . ݁𝜗𝜚. ݁₊
      </h3>
      <div className="grid grid-cols-10 gap-2 portrait:grid-cols-5">
        {data.map((item) => (
          <div
            key={item.icon}
            className="border grid place-items-center p-2 rounded-xl bg-primary/10"
          >
            <Tooltip>
              <TooltipTrigger>
                <a href={item.url} target="_blank">
                  <Image
                    src={`/socials/${item.icon}`}
                    alt={item.name}
                    width={400}
                    height={400}
                    className="h-full rounded-xl hover:rotate-3 hover:scale-105 hover:drop-shadow-md/50 duration-300 transition-all"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>{item.name}</TooltipContent>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
}
