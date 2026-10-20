"use client";

import { useCallback } from "react";

/**
 * Pointer handlers that feed the `spotlight` CSS utility: they write the cursor position
 * into --spot-x / --spot-y on the element and fade the glow in and out.
 */
export function useSpotlight<T extends HTMLElement>() {
  const onPointerMove = useCallback((event: React.PointerEvent<T>) => {
    if (event.pointerType !== "mouse") return;
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    element.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    element.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    element.style.setProperty("--spot-opacity", "1");
  }, []);

  const onPointerLeave = useCallback((event: React.PointerEvent<T>) => {
    event.currentTarget.style.setProperty("--spot-opacity", "0");
  }, []);

  return { onPointerMove, onPointerLeave };
}
