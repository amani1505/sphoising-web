import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

export function WhoWeAre() {
  return (
    <section aria-labelledby="who-we-are-title" className="py-fluid-xl">
      <Container className="reveal grid gap-fluid-md md:grid-cols-[1fr_1.2fr]">
        <h2 id="who-we-are-title" className="max-w-[16ch] font-display text-fluid-3xl leading-[1.05] font-extrabold tracking-[-0.02em] text-balance">
          A trusted partner for prefabricated building
        </h2>
        <div className="max-w-[60ch]">
          <p className="text-fluid-lg leading-relaxed">
            SPH Group has become a dependable name in prefabricated housing in Tanzania by doing one thing
            consistently: delivering what we promise, on every job.
          </p>
          <p className="mt-4 text-fluid-base leading-relaxed text-fg-muted">
            That consistency is why more than 70 public and private organisations have worked with us, and why most
            of them come back.
          </p>
          <Link href={ROUTES.about} className={buttonVariants({ variant: "outline", className: "mt-fluid-md" })}>
            More about SPH Group
          </Link>
        </div>
      </Container>
    </section>
  );
}
