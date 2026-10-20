import Link from "next/link";

import { Magnetic } from "@/components/shared/magnetic";
import { buttonVariants } from "@/components/ui/button";
import { MAIN_NAV, ROUTES } from "@/config/routes";

import { BrandLink } from "./brand-link";
import { Container } from "./container";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

/** Floating glass pill that stays pinned while the page scrolls under it. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 pt-3">
      <Container className="relative">
        <div className="glass flex h-16 items-center justify-between gap-fluid-md rounded-full pr-2 pl-3 sm:pl-4">
          <BrandLink />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {MAIN_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center rounded-full px-4 text-fluid-sm font-medium text-fg-muted transition-colors hover:bg-surface/70 hover:text-fg focus-visible:outline-2 focus-visible:outline-action"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <Magnetic className="hidden sm:inline-flex">
              <Link href={ROUTES.contact} className={buttonVariants()}>
                Request a quote
              </Link>
            </Magnetic>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
