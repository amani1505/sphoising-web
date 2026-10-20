import { Container } from "@/components/layout/container";
import { SeamRule } from "@/components/shared/seam-rule";
import { SpotlightCard } from "@/components/shared/spotlight-card";

type PageIntroProps = {
  title: string;
  lead: string;
  /** Optional visual shown beside the text on large screens and below it on small ones. */
  children?: React.ReactNode;
};

/** Glass opening panel for inner pages, matching the home hero's rise-in. */
export function PageIntro({ title, lead, children }: PageIntroProps) {
  return (
    <section className="pt-fluid-sm">
      <Container>
        <SpotlightCard className="glass grid items-center gap-fluid-lg rounded-[2rem] p-fluid-lg motion-safe:animate-rise sm:p-fluid-xl lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h1 className="text-gradient max-w-[16ch] pb-[0.06em] font-display text-fluid-4xl leading-[1] font-extrabold tracking-[-0.03em] text-balance">
              {title}
            </h1>
            <SeamRule className="mt-fluid-md max-w-40 text-fg" />
            <p className="mt-fluid-md max-w-[52ch] text-fluid-lg leading-relaxed text-fg-muted">{lead}</p>
          </div>
          {children}
        </SpotlightCard>
      </Container>
    </section>
  );
}
