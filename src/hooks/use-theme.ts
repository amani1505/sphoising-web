"use client";

import { useCallback, useSyncExternalStore } from "react";

import { isTheme, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  const value = document.documentElement.getAttribute("data-theme");
  return isTheme(value) ? value : "light";
}

const getServerSnapshot = (): Theme => "light";

/** Reads the theme from <html data-theme> (set before paint by the init script) and persists changes. */
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the choice then lasts for this page view only.
    }
  }, []);

  return { theme, setTheme };
}
