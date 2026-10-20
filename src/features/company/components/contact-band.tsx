import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Magnetic } from "@/components/shared/magnetic";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";

/** Closing call to action, framed by a slowly rotating brand-gradient ring. */
export function ContactBand() {
  const [primaryPhone] = SITE.contact.phones;

  return (
    <section aria-labelledby="contact-band-title" className="pt-fluid-md pb-fluid-2xl">
      <Container>
        <div className="gradient-ring reveal rounded-[2rem] p-[2px]">
          <div className="relative grid gap-fluid-lg overflow-hidden rounded-[calc(2rem-2px)] bg-surface px-fluid-lg py-fluid-xl sm:px-fluid-xl lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-sky/25 blur-3xl" />
            <h2 id="contact-band-title" className="relative max-w-[20ch] font-display text-fluid-3xl leading-[1.05] font-extrabold tracking-[-0.02em] text-balance">
              Planning a site office, checkpoint or housing block?
            </h2>
            <div className="relative">
              <p className="max-w-[44ch] text-fluid-base leading-relaxed text-fg-muted">
                Tell us what you need and where. We&apos;ll come back with a design and a quote.
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
      </Container>
    </section>
  );
}
