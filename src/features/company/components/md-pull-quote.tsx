import { Quote } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { ROUTES } from "@/config/routes";

import { MD_MESSAGE } from "../constants";

export function MdPullQuote() {
  return (
    <section aria-labelledby="md-quote-title" className="py-fluid-md">
      <Container>
        <SpotlightCard className="reveal glass rounded-[2rem] px-fluid-lg py-fluid-xl sm:px-fluid-xl">
          <h2 id="md-quote-title" className="sr-only">
            A message from our Managing Director
          </h2>
          <figure className="max-w-4xl">
            <Quote aria-hidden className="size-10 fill-current text-link opacity-80" />
            <blockquote className="mt-fluid-sm font-display text-fluid-2xl leading-[1.2] font-bold tracking-[-0.015em] text-balance">
              <p>{MD_MESSAGE.pullQuote}</p>
            </blockquote>
            <figcaption className="mt-fluid-lg flex flex-wrap items-center gap-x-fluid-md gap-y-2 text-fluid-sm">
              <span className="font-semibold">{MD_MESSAGE.signature}</span>
              <Link
                href={`${ROUTES.about}#md-message`}
                className="inline-flex min-h-11 items-center rounded-full bg-surface/70 px-4 font-semibold text-link transition hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action motion-reduce:transition-none"
              >
                Read the full message
              </Link>
            </figcaption>
          </figure>
        </SpotlightCard>
      </Container>
    </section>
  );
}
