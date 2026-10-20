"use client";

import { useCallback, useSyncExternalStore } from "react";

/** Subscribes to a CSS media query. Returns `serverValue` during SSR and hydration. */
export function useMediaQuery(query: string, serverValue = false) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => serverValue,
  );
}

/** True when the visitor asked the OS to reduce motion. Assumes reduced motion until hydrated. */
export function useReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)", true);
}

/** True on devices with a precise pointer that can hover (mouse, trackpad). */
export function useFinePointer() {
  return useMediaQuery("(hover: hover) and (pointer: fine)");
}
