"use client";
import { cn } from "cn";
import { useEffect, useState } from "react";
import {
  FolderIcon,
  Gamepad,
  GitGraph,
  Globe,
  HomeIcon,
  SendIcon,
  ZapIcon,
} from "lucide-react";

export default function MaxWContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mouseOver, setMouseOver] = useState(false);
  const [showUI, setShowUI] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (mouseOver && window.matchMedia("(orientation: landscape)").matches) {
        setShowUI(true);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [mouseOver]);

  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="max-w-2xl flex">
        <div
          className={cn(
            "sticky h-dvh top-0 hover:w-1/3 w-8 transition-all duration-300 bg-primary/10 border border-dashed text-xs",
          )}
          onMouseEnter={() => setMouseOver(true)}
          onMouseLeave={() => {
            setMouseOver(false);
            setShowUI(false);
          }}
        >
          <div className="p-2">
            <a className="flex gap-2 items-center hover:underline" href="">
              <HomeIcon className="size-4" />
              {showUI && "Home."}
            </a>
          </div>
          <div className="w-full border-t border-dashed" />
          <div className="p-2 flex gap-2">
            <FolderIcon className="size-4 text-primary/50" />
            {showUI && "My stuff."}
          </div>
          <div className="p-2">
            <a
              className="flex gap-2 items-center hover:underline"
              href="#games"
            >
              <Gamepad className="size-4" />
              {showUI && "My Games."}
            </a>
          </div>
          <div className="p-2">
            <a
              className="flex gap-2 items-center hover:underline"
              href="#websites"
            >
              <Globe className="size-4" />
              {showUI && "My Websites."}
            </a>
          </div>
          <div className="w-full border-t border-dashed" />
          <div className="p-2 flex gap-2">
            <FolderIcon className="size-4 text-primary/50" />
            {showUI && "Socials"}
          </div>
          <div className="p-2">
            <a
              className="flex gap-2 items-center hover:underline"
              href="#socials"
            >
              <SendIcon className="size-4" />
              {showUI && "Links."}
            </a>
          </div>
          <div className="p-2">
            <a
              className="flex gap-2 items-center hover:underline"
              href="#github"
            >
              <GitGraph className="size-4" />
              {showUI && "Github Repos."}
            </a>
          </div>
          <div className="w-full border-t border-dashed" />
          <div className="p-2 flex gap-2">
            <FolderIcon className="size-4 text-primary/50" />
            {showUI && "Stupid things"}
          </div>
          <div className="p-2">
            <a
              className="flex gap-2 items-center hover:underline"
              href="#monster"
            >
              <ZapIcon className="size-4" />
              {showUI && "Monster Energy - flavors ranked."}
            </a>
          </div>
        </div>
        <div
          className={cn(
            "w-full p-4 border-r border-dashed min-h-screen transition-all duration-300",
          )}
        >
          <main className="grid gap-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
