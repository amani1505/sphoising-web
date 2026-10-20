import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Container className="py-fluid-2xl">
          <h1 className="font-display text-fluid-4xl leading-none font-extrabold tracking-[-0.03em]">
            We couldn&apos;t find that page
          </h1>
          <p className="mt-fluid-md max-w-[52ch] text-fluid-lg leading-relaxed text-fg-muted">
            The link may be old or mistyped. Start from the home page, or contact us if you were looking for
            something specific.
          </p>
          <div className="mt-fluid-lg flex flex-wrap gap-3">
            <Link href={ROUTES.home} className={buttonVariants()}>
              Go to the home page
            </Link>
            <Link href={ROUTES.contact} className={buttonVariants({ variant: "outline" })}>
              Contact us
            </Link>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
