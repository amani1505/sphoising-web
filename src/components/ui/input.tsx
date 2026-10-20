import { cn } from "@/lib/utils";

export const fieldClassName =
  "w-full rounded-xl border border-border bg-surface/80 px-3.5 py-3 text-fluid-base text-fg placeholder:text-fg-muted/70 transition-colors focus-visible:border-action focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-action focus-visible:shadow-[0_0_0_6px_rgb(13_125_252/0.15)] aria-invalid:border-red-600 dark:aria-invalid:border-red-400";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return <input className={cn(fieldClassName, "min-h-11", className)} {...props} />;
}
