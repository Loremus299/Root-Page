import githubData from "@/data/github";
import AnimatedText from "./animatedText";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ExternalLink } from "lucide-react";

export default async function GithubDisplay() {
  const data = await githubData();

  if (!data.success) {
    return <div id="github">GITHUB GAVE AN ERROR OH MY GOD</div>;
  }

  const web = [];
  const pico = [];

  for (const repo of data.data) {
    if (repo.topics.includes("web")) {
      web.push(repo);
    }
    if (repo.topics.includes("pico-8")) {
      pico.push(repo);
    }
  }

  const finalData = [web, pico];

  return (
    <div id="github" className="grid gap-2">
      <h3 className="text-md tracking-tight font-medium">Github.</h3>
      {finalData.map((item, index) => (
        <div key={index} className="grid gap-1">
          <p className="text-md tracking-tight">
            {(index === 0 && "Web stuff ;3") ||
              (index === 1 && "Pico8 Games ;3")}
          </p>
          <div className="grid grid-cols-2 gap-2 portrait:grid-cols-1">
            {item.map((repo) => (
              <Card key={repo.name}>
                <CardHeader>
                  <CardTitle>
                    <AnimatedText
                      text={repo.name.replaceAll("-", " ")}
                      className="font-medium"
                    />
                  </CardTitle>
                  <CardDescription>{repo.description}</CardDescription>
                  <CardAction>
                    <a
                      target="_blank"
                      href={`https://github.com/Loremus299/${repo.name}`}
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  </CardAction>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
