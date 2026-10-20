import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { ContactDetails } from "@/components/shared/contact-details";
import { PageIntro } from "@/components/shared/page-intro";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { XIcon } from "@/components/shared/x-icon";
import { SITE } from "@/config/site";
import { ContactForm, QuickActions } from "@/features/contact";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Request a quote for prefabricated or container buildings. Visit our office in Sinza, Dar es Salaam, call or email SPH Group.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro title="Get in touch" lead="Tell us about your project and we'll be in touch shortly with next steps and a quote.">
        <QuickActions />
      </PageIntro>
      <Container className="grid gap-fluid-lg py-fluid-xl lg:grid-cols-[1.6fr_1fr]">
        <div className="reveal">
          <ContactForm />
        </div>
        <SpotlightCard className="reveal glass self-start rounded-3xl p-fluid-lg">
          <aside aria-labelledby="office-title">
            <h2 id="office-title" className="font-display text-fluid-xl font-bold">
              Our office
            </h2>
            <ContactDetails className="mt-fluid-md" />
            <a
              href={SITE.social.x.href}
              className="mt-fluid-lg inline-flex min-h-11 items-center gap-2 rounded-full bg-surface/70 px-4 text-fluid-sm font-semibold text-link transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-action"
            >
              <XIcon className="size-4" />
              Follow @sphousing_tz
            </a>
          </aside>
        </SpotlightCard>
      </Container>
    </>
  );
}
