"use client";

import { useEffect, useState } from "react";

import { useReducedMotion } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 2400;

type RotatingWordsProps = {
  words: readonly string[];
  /** Classes for the line wrapper. */
  className?: string;
  /** Classes for the word itself (e.g. text-gradient, which must sit on the animated element). */
  wordClassName?: string;
};

/**
 * Cycles through `words`, sliding each one up into place. Hidden from screen readers: the parent heading
 * must include the full list as visually hidden text so the meaning never depends on timing.
 */
export function RotatingWords({ words, className, wordClassName }: RotatingWordsProps) {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || words.length < 2) return;
    const id = window.setInterval(() => setIndex((current) => (current + 1) % words.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion, words.length]);

  return (
    <span aria-hidden className={className}>
      {/* Animate the wrapper, not the word: Chromium drops gradient-clipped text that is itself animated inside a backdrop-filter. */}
      <span key={words[index]} className="inline-block motion-safe:animate-word-in">
        <span className={cn(wordClassName)}>{words[index]}</span>
      </span>
    </span>
  );
}
