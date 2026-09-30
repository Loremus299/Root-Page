import "server-only";

import { Result, ResultType } from "@/lib/result";
import { cache } from "react";

async function subdomainDataFetch(): Promise<ResultType<string[], string>> {
  const req = await fetch("https://crt.name/v1/search?apex=loremus.gay", {
    next: { revalidate: 86400 },
  });

  if (req.status == 200) {
    const res: string = await req.text();
    const domains = res
      .split("\n")
      .filter((item) => item.length > 0 && item != "loremus.gay");
    const validDomains = [];

    for (const domain of domains) {
      try {
        await fetch("https://" + domain, {
          next: { revalidate: 86400 },
          signal: AbortSignal.timeout(2000),
        });
        validDomains.push(domain.split(".loremus.gay")[0]);
      } catch {
        //
      }
    }

    return Result.ok<string[], string>(validDomains).type();
  }

  return Result.error<string[], string>("crt.name failed :c").type();
}

const subdomainData = cache(subdomainDataFetch);
export default subdomainData;
