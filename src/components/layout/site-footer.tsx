import { ArrowUp } from "lucide-react";
import Link from "next/link";

import { ContactDetails } from "@/components/shared/contact-details";
import { SeamRule } from "@/components/shared/seam-rule";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { XIcon } from "@/components/shared/x-icon";
import { MAIN_NAV } from "@/config/routes";
import { SITE } from "@/config/site";

import { BrandLink } from "./brand-link";
import { Container } from "./container";
import { CopyrightYear } from "./copyright-year";

const pillClassName =
  "inline-flex min-h-11 items-center gap-2 rounded-full bg-surface/70 px-4 text-fluid-xs font-semibold text-fg-muted transition-colors hover:bg-surface hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action";

/** Floating glass panel that closes every page, echoing the header pill. */
export function SiteFooter() {
  return (
    <footer className="pb-3">
      <Container>
        <SpotlightCard className="glass rounded-[2rem] px-fluid-lg pt-fluid-xl pb-fluid-sm sm:px-fluid-xl">
          <div className="grid gap-fluid-xl md:grid-cols-[1.4fr_1fr_1fr]">
            <div className="max-w-sm">
              <BrandLink />
              <p className="mt-fluid-md text-fluid-sm leading-relaxed text-fg-muted">{SITE.description}</p>
            </div>

            <nav aria-label="Footer">
              <h2 className="font-display text-fluid-base font-bold">Explore</h2>
              <ul className="mt-fluid-sm">
                {MAIN_NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group inline-flex min-h-11 items-center rounded-full text-fluid-sm text-fg-muted transition-colors hover:text-fg focus-visible:outline-2 focus-visible:outline-action"
                    >
                      <span
                        aria-hidden
                        className="h-px w-0 bg-action transition-[width,margin] duration-300 group-hover:mr-2 group-hover:w-4 motion-reduce:transition-none"
                      />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="font-display text-fluid-base font-bold">Visit or call</h2>
              <ContactDetails className="mt-fluid-md text-fluid-sm text-fg-muted" />
            </div>
          </div>

          <SeamRule className="mt-fluid-xl text-fg" />
          <div className="flex flex-wrap items-center justify-between gap-fluid-sm py-fluid-md text-fluid-xs text-fg-muted">
            <p>
              © <CopyrightYear /> {SITE.legalName}. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <a href={SITE.social.x.href} className={pillClassName}>
                <XIcon className="size-4" />
                <span className="sr-only">{SITE.social.x.label}</span>
              </a>
              <a href="#main" className={pillClassName}>
                <ArrowUp aria-hidden className="size-4" />
                Back to top
              </a>
            </div>
          </div>
        </SpotlightCard>
      </Container>
    </footer>
  );
}
