import { Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Magnetic } from "@/components/shared/magnetic";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";

import { BUILDING_TYPES, STATS } from "../constants";
import { RotatingWords } from "./rotating-words";

export function Hero() {
  const [primaryPhone] = SITE.contact.phones;
  const [projects] = STATS;

  return (
    <section aria-labelledby="hero-title" className="pt-fluid-sm pb-fluid-xl">
      {/* Full-bleed: the photo runs to the window edge with a small inset; the card aligns to the page gutter. */}
      <div className="px-2 sm:px-3">
        <div className="relative">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-surface-alt sm:aspect-[16/9] xl:aspect-auto xl:h-[clamp(38rem,76dvh,62rem)]">
            <Image
              src="/images/site-installation.jpg"
              alt="A row of grey prefabricated site buildings being installed by a crew in hard hats and high-visibility vests."
              fill
              preload
              sizes="100vw"
              className="object-cover object-[62%_50%] dark:brightness-[0.82]"
            />
            <p className="glass absolute top-4 right-4 hidden items-center gap-2 rounded-full px-4 py-2 text-fluid-xs font-semibold text-fg md:inline-flex lg:top-(--gutter) lg:right-(--gutter)">
              <span aria-hidden className="relative flex size-2">
                <span className="absolute inset-0 rounded-full bg-signal opacity-75 motion-safe:animate-ping" />
                <span className="relative size-2 rounded-full bg-signal" />
              </span>
              Dar es Salaam, serving all of Tanzania
            </p>
            <p className="glass absolute right-(--gutter) bottom-(--gutter) hidden items-center gap-3 rounded-2xl px-4 py-3 text-fg motion-safe:animate-float lg:flex">
              <span className="grid size-10 place-items-center rounded-xl bg-action text-action-fg">
                <Building2 aria-hidden className="size-5" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-fluid-xl font-extrabold">
                  {projects.value}
                  {projects.suffix}
                </span>
                <span className="text-fluid-xs text-fg-muted">{projects.label}</span>
              </span>
            </p>
          </div>

          <div className="glass-strong relative mx-3 -mt-20 rounded-3xl p-fluid-lg motion-safe:animate-rise sm:mx-8 sm:-mt-28 sm:max-w-[34rem] lg:absolute lg:bottom-(--gutter) lg:left-(--gutter) lg:mx-0 lg:mt-0 min-[90rem]:max-w-[clamp(40rem,30vw,48rem)]">
            <h1 id="hero-title" className="font-display text-fluid-4xl leading-[1.02] font-extrabold tracking-[-0.03em]">
              Prefab{" "}
              <RotatingWords words={BUILDING_TYPES} className="block min-h-[1.05em]" wordClassName="text-gradient pb-[0.06em]" />
              <span className="sr-only">{BUILDING_TYPES.join(", ")}, </span>
              installed across Tanzania
            </h1>
            <p className="mt-fluid-sm text-fluid-base leading-relaxed text-fg-muted">
              For public and private organisations, from first drawing to long-term care.
            </p>
            <div className="mt-fluid-md flex flex-wrap gap-2">
              <Magnetic>
                <Link href={ROUTES.contact} className={buttonVariants({ size: "lg" })}>
                  Request a quote
                </Link>
              </Magnetic>
              <a href={`tel:${primaryPhone.tel}`} className={buttonVariants({ variant: "outline", size: "lg" })}>
                Call {primaryPhone.display}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
