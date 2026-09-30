/* eslint-disable @next/next/no-img-element */
import subdomainData from "@/data/subdomains";
import AnimatedText from "./animatedText";

export default async function SitesDisplay() {
  const data = await subdomainData();
  if (!data.success) {
    return <div>FAILED TO GET SUBDOMAINS</div>;
  }
  return (
    <div className="grid gap-2" id="websites">
      <h3 className="text-md tracking-tight font-medium">My Websites.</h3>
      <div className="grid gap-2 grid-cols-2 portrait:grid-cols-1">
        {data.data.map((domain) => (
          <a
            key={domain}
            href={`https://${domain}.loremus.gay`}
            target="_blank"
          >
            <div className="border p-4 pt-2 pb-2 rounded-xl text-sm flex justify-between items-center">
              <AnimatedText text={domain} />{" "}
              <img
                src={`https://${domain}.loremus.gay/favicon.ico`}
                alt="favicon"
                width={64}
                height={64}
                className="size-4"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
