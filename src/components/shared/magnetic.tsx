"use client";

import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";

/** Wraps a button or link so it leans toward the cursor on hover (mouse only, motion allowed). */
export function Magnetic({ className, children }: { className?: string; children: React.ReactNode }) {
  const handlers = useMagnetic<HTMLSpanElement>();

  return (
    <span
      className={cn("inline-flex transition-transform duration-300 ease-out will-change-transform", className)}
      {...handlers}
    >
      {children}
    </span>
  );
}
