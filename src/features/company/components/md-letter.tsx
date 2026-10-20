import { Quote } from "lucide-react";

import { Container } from "@/components/layout/container";
import { SeamRule } from "@/components/shared/seam-rule";
import { SpotlightCard } from "@/components/shared/spotlight-card";

import { MD_MESSAGE } from "../constants";

export function MdLetter() {
  return (
    <section id="md-message" aria-labelledby="md-message-title" className="py-fluid-md">
      <Container>
        <SpotlightCard className="reveal glass grid gap-fluid-lg rounded-[2rem] px-fluid-lg py-fluid-xl sm:px-fluid-xl md:grid-cols-[1fr_2fr]">
          <div>
            <Quote aria-hidden className="size-10 fill-current text-link opacity-80" />
            <h2 id="md-message-title" className="mt-fluid-sm font-display text-fluid-3xl leading-[1.05] font-extrabold tracking-[-0.02em] text-balance">
              A message from our Managing Director
            </h2>
          </div>
          <div className="max-w-[64ch]">
            <div className="space-y-4 text-fluid-base leading-relaxed text-fg-muted">
              {MD_MESSAGE.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <SeamRule className="mt-fluid-lg max-w-40 text-fg" />
            <p className="mt-fluid-sm text-fluid-sm font-semibold">{MD_MESSAGE.signature}</p>
          </div>
        </SpotlightCard>
      </Container>
    </section>
  );
}
