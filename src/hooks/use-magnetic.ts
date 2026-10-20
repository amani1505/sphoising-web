"use client";

import { useCallback } from "react";

import { useFinePointer, useReducedMotion } from "./use-media-query";

/**
 * Pulls an element a little toward the cursor while hovered, then springs it back.
 * `strength` is the fraction of the cursor offset applied (0.25 = a quarter).
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.25) {
  const reducedMotion = useReducedMotion();
  const finePointer = useFinePointer();
  const enabled = finePointer && !reducedMotion;

  const onPointerMove = useCallback(
    (event: React.PointerEvent<T>) => {
      if (!enabled) return;
      const element = event.currentTarget;
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - (rect.left + rect.width / 2)) * strength;
      const y = (event.clientY - (rect.top + rect.height / 2)) * strength;
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    },
    [enabled, strength],
  );

  const onPointerLeave = useCallback((event: React.PointerEvent<T>) => {
    event.currentTarget.style.transform = "";
  }, []);

  return { onPointerMove, onPointerLeave };
}
