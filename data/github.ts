"use server";

import { Result, ResultType } from "@/lib/result";
import { cache } from "react";

interface GithubRepo {
  name: string;
  description: string;
  topics: string[];
}

async function githubRepoFetch(): Promise<ResultType<GithubRepo[], string>> {
  const req = await fetch("https://api.github.com/users/Loremus299/repos");
  if (req.status == 200) {
    const res: GithubRepo[] = await req.json();
    return Result.ok<GithubRepo[], string>(res).type();
  }

  return Result.error<GithubRepo[], string>(
    "api.github.com failed ig :c",
  ).type();
}

const githubData = cache(githubRepoFetch);
export default githubData;
