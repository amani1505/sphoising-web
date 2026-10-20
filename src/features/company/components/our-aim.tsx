import { Target } from "lucide-react";

import { Container } from "@/components/layout/container";

export function OurAim() {
  return (
    <section aria-labelledby="aim-title" className="py-fluid-md">
      <Container>
        <div className="gradient-ring reveal rounded-[2rem] p-[2px]">
          <div className="relative grid gap-fluid-md overflow-hidden rounded-[calc(2rem-2px)] bg-surface px-fluid-lg py-fluid-xl sm:px-fluid-xl md:grid-cols-[auto_1fr] md:items-center md:gap-fluid-xl">
            <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-sky/25 blur-3xl" />
            <span className="relative grid size-16 place-items-center rounded-2xl bg-action text-action-fg">
              <Target aria-hidden className="size-8" />
            </span>
            <div className="relative">
              <h2 id="aim-title" className="text-fluid-sm font-semibold text-link">
                Our aim
              </h2>
              <p className="mt-2 max-w-[36ch] font-display text-fluid-3xl leading-[1.1] font-extrabold tracking-[-0.02em] text-balance">
                To serve every client with excellence, and keep customer satisfaction at the centre of everything we
                do.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
