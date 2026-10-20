import Image from "next/image";

import { Container } from "@/components/layout/container";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { cn } from "@/lib/utils";

import { PROJECTS } from "../constants";

export function RecentWork() {
  return (
    <section aria-labelledby="recent-work-title" className="py-fluid-xl">
      <Container>
        <div className="grid gap-fluid-sm md:grid-cols-[1fr_1.4fr] md:items-end">
          <h2 id="recent-work-title" className="font-display text-fluid-3xl leading-[1.05] font-extrabold tracking-[-0.02em]">
            Recent work
          </h2>
          <p className="max-w-[56ch] text-fluid-base leading-relaxed text-fg-muted md:justify-self-end">
            Shipping containers converted into working buildings: cut, framed, insulated and fitted out to the
            client&apos;s plan.
          </p>
        </div>

        <ul className="mt-fluid-lg grid gap-fluid-lg md:grid-cols-12">
          {PROJECTS.map((project, index) => (
            <li key={project.src} className={cn("reveal", index === 0 ? "md:col-span-7" : "md:col-span-5 md:mt-fluid-xl")}>
              <SpotlightCard className="group glass rounded-[1.75rem] p-2">
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface-alt min-[120rem]:aspect-[16/10]">
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      sizes={index === 0 ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 42vw, 100vw"}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                    />
                  </div>
                  <figcaption className="flex items-center gap-2 px-3 py-3 font-display text-fluid-lg font-bold">
                    <span aria-hidden className="size-2 rounded-full bg-signal" />
                    {project.title}
                  </figcaption>
                </figure>
              </SpotlightCard>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
