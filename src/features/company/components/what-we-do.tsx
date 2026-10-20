import Image from "next/image";

import { Container } from "@/components/layout/container";
import { CountUp } from "@/components/shared/count-up";
import { SpotlightCard } from "@/components/shared/spotlight-card";

import { STAGES, STATS } from "../constants";
import { StageExplorer } from "./stage-explorer";

export function WhatWeDo() {
  return (
    <section id="what-we-do" aria-labelledby="what-we-do-title" className="py-fluid-xl">
      <Container>
        <div className="grid gap-fluid-sm md:grid-cols-2 md:items-end">
          <h2 id="what-we-do-title" className="max-w-[18ch] font-display text-fluid-3xl leading-[1.05] font-extrabold tracking-[-0.02em] text-balance">
            One team from first drawing to long-term care
          </h2>
          <p className="max-w-[46ch] text-fluid-base leading-relaxed text-fg-muted md:justify-self-end">
            Every project moves through the same four stages with the same people, so nothing gets lost between
            contractors. Hover or tap a stage to see what happens.
          </p>
        </div>

        <div className="mt-fluid-lg">
          <StageExplorer stages={STAGES} />
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-3 lg:mt-4 lg:grid-cols-4 lg:gap-4">
          <div className="reveal relative min-h-56 overflow-hidden rounded-3xl bg-surface-alt sm:col-span-3 lg:col-span-1">
            <Image
              src="/images/site-lead.jpg"
              alt="A site lead in a suit and high-visibility vest holding a white hard hat with the Salim's Prefab Housing logo."
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover object-[45%_50%]"
            />
          </div>
          {STATS.map((stat) => (
            <SpotlightCard key={stat.label} className="reveal glass flex min-h-40 flex-col justify-end rounded-3xl p-fluid-lg">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                className="text-gradient font-display text-fluid-4xl leading-none font-extrabold tracking-tight"
              />
              <p className="mt-2 text-fluid-sm text-fg-muted">{stat.label}</p>
            </SpotlightCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
