"use client";

import { HardHat, PencilRuler, Truck, Wrench, type LucideIcon } from "lucide-react";
import { useId, useState } from "react";

import { SpotlightCard } from "@/components/shared/spotlight-card";
import { cn } from "@/lib/utils";

import type { Stage } from "../types/company.types";

// Same order as STAGES: design, supply, install, maintain.
const STAGE_ICONS: readonly LucideIcon[] = [PencilRuler, Truck, HardHat, Wrench];

/**
 * The four project stages as expanding glass panels. Hovering (mouse) or activating a
 * stage's button (keyboard, touch) widens that panel and reveals its description.
 */
export function StageExplorer({ stages }: { stages: readonly Stage[] }) {
  const [active, setActive] = useState(0);
  const baseId = useId();

  return (
    <ol className="flex flex-col gap-3 lg:h-[clamp(20rem,26vw,28rem)] lg:flex-row lg:gap-4">
      {stages.map((stage, index) => {
        const isActive = index === active;
        const Icon = STAGE_ICONS[index] ?? PencilRuler;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <li
            key={stage.title}
            data-active={isActive}
            onPointerEnter={(event) => event.pointerType === "mouse" && setActive(index)}
            className="reveal flex transition-[flex-grow] duration-500 ease-out motion-reduce:transition-none lg:flex-1 lg:data-[active=true]:flex-[2.6]"
          >
            <SpotlightCard
              className={cn(
                "glass flex w-full flex-col justify-between gap-fluid-lg overflow-hidden rounded-3xl p-fluid-lg transition-shadow duration-300",
                isActive && "shadow-[0_0_60px_-18px_var(--color-action)] ring-2 ring-action/40",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    "grid size-12 place-items-center rounded-2xl transition-colors duration-300",
                    isActive ? "bg-action text-action-fg" : "bg-surface/80 text-link",
                  )}
                >
                  <Icon aria-hidden className="size-6" />
                </span>
                <span aria-hidden className="font-display text-fluid-2xl font-extrabold text-fg/15 tabular-nums">
                  0{index + 1}
                </span>
              </div>

              <div>
                <h3 className="font-display text-fluid-xl font-bold tracking-tight">
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    onClick={() => setActive(index)}
                    className="text-left after:absolute after:inset-0 after:rounded-3xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-action"
                  >
                    <span className="sr-only">Step {index + 1}: </span>
                    {stage.title}
                  </button>
                </h3>
                <div
                  id={panelId}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-500 ease-out motion-reduce:transition-none",
                    isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <p className="min-w-0 overflow-hidden text-fluid-sm leading-relaxed text-fg-muted">
                    <span className="block max-w-[38ch] pt-1.5">{stage.description}</span>
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </li>
        );
      })}
    </ol>
  );
}
