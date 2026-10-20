import Image from "next/image";

import { STATS } from "../constants";

/** Photo with floating glass stat chips, shown beside the About page intro. */
export function AboutIntroVisual() {
  const [, organisations, specialists] = STATS;

  return (
    <div className="relative">
      <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-surface-alt">
        <Image
          src="/images/site-lead.jpg"
          alt="A site lead in a suit and high-visibility vest holding a white hard hat with the Salim's Prefab Housing logo."
          fill
          preload
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
      <p className="glass-strong absolute top-4 left-4 rounded-2xl px-4 py-3 motion-safe:animate-float">
        <span className="text-gradient block font-display text-fluid-2xl leading-none font-extrabold">
          {organisations.value}
          {organisations.suffix}
        </span>
        <span className="text-fluid-xs text-fg-muted">{organisations.label}</span>
      </p>
      <p className="glass-strong absolute right-4 bottom-4 rounded-2xl px-4 py-3 motion-safe:animate-float motion-safe:[animation-delay:-3s]">
        <span className="text-gradient block font-display text-fluid-2xl leading-none font-extrabold">
          {specialists.value}
          {specialists.suffix}
        </span>
        <span className="text-fluid-xs text-fg-muted">{specialists.label}</span>
      </p>
    </div>
  );
}
