"use client";
import { useEffect, useState } from "react";

export default function AnimatedText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [mouseOver, setMouseOver] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (mouseOver && activeIndex < text.length) {
      interval = setInterval(() => {
        setActiveIndex((prev) => Math.min(prev + 1, text.length));
      }, 10);
    }
    if (!mouseOver && activeIndex > 0) {
      interval = setInterval(() => {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }, 10);
    }

    return () => clearInterval(interval);
  }, [mouseOver, activeIndex, text.length]);

  const trans = text.slice(0, activeIndex);
  const cis = text.slice(activeIndex);

  return (
    <span
      className={className}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <span className="underline font-serif italic">{trans}</span>
      <span>{cis}</span>
    </span>
  );
}
