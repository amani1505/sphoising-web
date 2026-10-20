import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge about the fluid tokens so `text-fluid-*` is treated as a font size, not a color.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["fluid-xs", "fluid-sm", "fluid-base", "fluid-lg", "fluid-xl", "fluid-2xl", "fluid-3xl", "fluid-4xl", "fluid-5xl"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
