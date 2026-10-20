import { Container } from "@/components/layout/container";

/** Long-form "who we are" for the About page. */
export function CompanyProfile() {
  return (
    <section aria-labelledby="profile-title" className="py-fluid-xl">
      <Container className="reveal grid gap-fluid-md md:grid-cols-[1fr_1.2fr]">
        <h2 id="profile-title" className="font-display text-fluid-3xl leading-[1.05] font-extrabold tracking-[-0.02em]">
          Who we are
        </h2>
        <div className="max-w-[62ch] space-y-4">
          <p className="text-fluid-lg leading-relaxed">
            Since our founding, SPH Group has built a name as a pioneer and a trusted partner. Consistent delivery has
            been the backbone of our growth, letting us serve more than 70 public and private organisations in
            Tanzania, and we take pride in keeping the clients we win.
          </p>
          <p className="text-fluid-base leading-relaxed text-fg-muted">
            We bring together talented people and partners from several disciplines. Together we focus on meeting each
            customer&apos;s requirements, and we keep expanding our capabilities, our network and our range of
            products.
          </p>
        </div>
      </Container>
    </section>
  );
}
