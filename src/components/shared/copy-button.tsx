"use client";

import { Check, Copy } from "lucide-react";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";

type CopyButtonProps = {
  value: string;
  /** What is being copied, for the accessible name, e.g. "email address". */
  label: string;
  className?: string;
};

export function CopyButton({ value, label, className }: CopyButtonProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <button
      type="button"
      onClick={() => copy(value)}
      className={cn(
        "inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 text-fluid-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action",
        copied ? "bg-action text-action-fg" : "bg-surface/70 text-fg-muted hover:bg-surface hover:text-fg",
        className,
      )}
    >
      {copied ? <Check aria-hidden className="size-4" /> : <Copy aria-hidden className="size-4" />}
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
      <span className="sr-only"> {label}</span>
    </button>
  );
}
