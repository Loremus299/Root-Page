"use client";
import { cn } from "cn";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

export default function MaxWContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mouseOver, setMouseOver] = useState(false);
  const [showUI, setShowUI] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (mouseOver) {
        setShowUI(true);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [mouseOver]);

  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="max-w-xl flex">
        <div
          className={cn(
            "min-h-screen hover:w-1/3 w-8 transition-all duration-300 bg-primary/10 border border-dashed text-xs",
          )}
          onMouseEnter={() => setMouseOver(true)}
          onMouseLeave={() => {
            setMouseOver(false);
            setShowUI(false);
          }}
        >
          <div className="p-2">
            <div className="flex gap-2 items-center">
              <Menu className="size-4" />
              {showUI && "Navbar."}
            </div>
          </div>
          <div className="w-full border-t border-dashed" />
        </div>
        <div
          className={cn(
            "w-full p-4 border-r border-dashed min-h-screen transition-all duration-300",
          )}
        >
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
