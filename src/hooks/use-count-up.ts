"use client";

import { useEffect, useRef, useState } from "react";

import { useReducedMotion } from "./use-media-query";

const DURATION_MS = 1400;

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

/**
 * Counts from 0 to `target` the first time the element scrolls into view.
 * Server render and no-JS show the real number; if the element is already on screen
 * when the page loads, it is left alone so the number never flashes to 0.
 */
export function useCountUp<T extends HTMLElement>(target: number) {
  const ref = useRef<T>(null);
  const [value, setValue] = useState(target);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || reducedMotion) return;
    if (element.getBoundingClientRect().top < window.innerHeight) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION_MS, 1);
          setValue(Math.round(easeOutCubic(progress) * target));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );

    setValue(0);
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, reducedMotion]);

  return { ref, value };
}
