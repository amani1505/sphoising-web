"use client";

import { useSpotlight } from "@/hooks/use-spotlight";
import { cn } from "@/lib/utils";

/** A div with a soft glow that follows the mouse. Pair with `glass` for a frosted card. */
export function SpotlightCard({ className, ...props }: React.ComponentProps<"div">) {
  const handlers = useSpotlight<HTMLDivElement>();
  return <div className={cn("spotlight", className)} {...handlers} {...props} />;
}
