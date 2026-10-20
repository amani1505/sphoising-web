import { Armchair, Cog, Headset, House, ShieldCheck, Sprout, type LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { cn } from "@/lib/utils";

import { DIVISIONS } from "../constants";

// Same order as DIVISIONS. The first entry is the core business and gets the large tile.
const DIVISION_ICONS: readonly LucideIcon[] = [House, Armchair, ShieldCheck, Cog, Sprout, Headset];

export function Divisions() {
  return (
    <section aria-labelledby="divisions-title" className="py-fluid-xl">
      <Container>
        <div className="grid gap-fluid-sm md:grid-cols-2 md:items-end">
          <h2 id="divisions-title" className="font-display text-fluid-3xl leading-[1.05] font-extrabold tracking-[-0.02em]">
            Our divisions
          </h2>
          <p className="max-w-[46ch] text-fluid-base leading-relaxed text-fg-muted md:justify-self-end">
            Running our own divisions means fewer outside suppliers on your project, and less waiting.
          </p>
        </div>

        {/* Core tile spans 2x2 on large screens: 4 + 5 small tiles fill a clean 3x3 grid. */}
        <ul className="mt-fluid-lg grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {DIVISIONS.map((division, index) => {
            const Icon = DIVISION_ICONS[index] ?? House;
            const isCore = index === 0;

            return (
              <li key={division} className={cn("reveal", isCore && "lg:col-span-2 lg:row-span-2")}>
                <SpotlightCard
                  className={cn(
                    "glass group flex h-full flex-col justify-between gap-fluid-lg rounded-3xl p-fluid-lg transition duration-300 hover:-translate-y-1 motion-reduce:transition-none",
                    isCore ? "min-h-64 lg:min-h-full" : "min-h-44",
                  )}
                >
                  <span
                    className={cn(
                      "grid place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 motion-reduce:transition-none",
                      isCore ? "size-16 bg-action text-action-fg" : "size-12 bg-surface/80 text-link",
                    )}
                  >
                    <Icon aria-hidden className={isCore ? "size-8" : "size-6"} />
                  </span>
                  <div>
                    {isCore ? <p className="mb-1 text-fluid-sm font-semibold text-link">Our core business</p> : null}
                    <h3
                      className={cn(
                        "font-display font-bold tracking-tight text-balance",
                        isCore ? "text-fluid-3xl leading-[1.05]" : "text-fluid-lg",
                      )}
                    >
                      {division}
                    </h3>
                  </div>
                </SpotlightCard>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
