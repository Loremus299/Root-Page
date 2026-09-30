import githubData from "@/data/github";
import AnimatedText from "./animatedText";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default async function GithubDisplay() {
  const data = await githubData();

  if (!data.success) {
    return <div id="github">GITHUB GAVE AN ERROR OH MY GOD</div>;
  }

  const web = [];
  const pico = [];
  const misc = [];

  for (const repo of data.data) {
    if (repo.topics.includes("web")) {
      web.push(repo);
    }
    if (repo.topics.includes("pico-8")) {
      pico.push(repo);
    }
    if (repo.topics.includes("misc")) {
      misc.push(repo);
    }
  }

  const finalData = [web, pico, misc];

  return (
    <div id="github" className="grid gap-2">
      <h3 className="text-md tracking-tight font-medium">Github.</h3>
      {finalData.map((item, index) => (
        <div key={index} className="grid gap-1">
          <p className="text-md tracking-tight">
            {(index === 0 && "Web Development ✩₊˚.⋆🕸️⋆⁺₊✧") ||
              (index === 1 && "Pico8 Games ⋆˚✰ ݁˖⭑.ᐟ") ||
              (index === 2 && "Miscellaneous ⋆✴︎˚｡⋆")}
          </p>
          <div className="grid grid-cols-2 gap-2 portrait:grid-cols-1">
            {item.map((repo) => (
              <Card
                key={repo.name}
                className="hover:rotate-3 hover:scale-110 hover:drop-shadow-2xl duration-300 transition-all"
              >
                <CardHeader>
                  <CardTitle>
                    <a
                      target="_blank"
                      href={`https://github.com/Loremus299/${repo.name}`}
                    >
                      <AnimatedText
                        text={repo.name.replaceAll("-", " ")}
                        className="font-medium"
                      />
                    </a>
                  </CardTitle>
                  <CardDescription>{repo.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
