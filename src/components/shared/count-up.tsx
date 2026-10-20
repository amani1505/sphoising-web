"use client";

import { useCountUp } from "@/hooks/use-count-up";

type CountUpProps = {
  value: number;
  suffix?: string;
  className?: string;
};

export function CountUp({ value, suffix = "", className }: CountUpProps) {
  const { ref, value: current } = useCountUp<HTMLSpanElement>(value);

  return (
    <span ref={ref} className={className}>
      {/* Screen readers get the final number once, not every animation frame. */}
      <span aria-hidden className="tabular-nums">
        {current}
        {suffix}
      </span>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
    </span>
  );
}
