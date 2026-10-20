"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "grid size-11 place-items-center rounded-full text-fg-muted transition-colors hover:bg-surface/70 hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action",
        className,
      )}
    >
      {isDark ? <Sun aria-hidden className="size-5" /> : <Moon aria-hidden className="size-5" />}
    </button>
  );
}
