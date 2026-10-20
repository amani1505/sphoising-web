import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/utils";

import { CLIENTS } from "../constants";

function LogoList({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      aria-hidden={duplicate || undefined}
      className={cn("flex shrink-0 gap-3 pr-3 lg:gap-4 lg:pr-4", duplicate && "motion-reduce:hidden")}
    >
      {CLIENTS.map((client) => (
        <li
          key={client.name}
          className="client-logo-tile group/logo relative h-24 w-40 shrink-0 rounded-2xl border border-border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none sm:h-28 sm:w-48"
        >
          <Image
            src={client.src}
            alt={duplicate ? "" : client.name}
            fill
            sizes="192px"
            className="client-logo-img object-contain p-4 sm:p-5 opacity-70 grayscale transition duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0 motion-reduce:transition-none"
          />
        </li>
      ))}
    </ul>
  );
}

/** Client logos in an endless strip. Pauses on hover; with reduced motion it becomes a static wrapped row. */
export function ClientWall() {
  return (
    <section id="clients" aria-labelledby="clients-title" className="py-fluid-xl">
      <Container className="flex flex-wrap items-end justify-between gap-fluid-md">
        <h2 id="clients-title" className="max-w-[24ch] font-display text-fluid-3xl leading-[1.05] font-extrabold tracking-[-0.02em] text-balance">
          Trusted by more than 30 organisations of every size
        </h2>
        <Link
          href={ROUTES.contact}
          className="glass inline-flex min-h-11 items-center rounded-full px-5 text-fluid-sm font-semibold text-link transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action motion-reduce:transition-none"
        >
          Your organisation next? Get a quote
        </Link>
      </Container>

      <div className="group edge-fade mt-fluid-lg overflow-hidden py-2 motion-reduce:[mask-image:none]">
        <div className="flex w-max group-hover:[animation-play-state:paused] motion-safe:animate-marquee motion-reduce:w-auto motion-reduce:flex-wrap motion-reduce:px-(--gutter)">
          <LogoList />
          <LogoList duplicate />
        </div>
      </div>
    </section>
  );
}
