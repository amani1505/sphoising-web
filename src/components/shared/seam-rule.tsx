import { cn } from "@/lib/utils";

/**
 * The line-with-a-dot from beneath the SPH Group wordmark, reused as the site's divider.
 */
export function SeamRule({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("relative h-px w-full bg-current opacity-30", className)}>
      <span className="absolute top-1/2 left-0 size-2 -translate-y-1/2 rounded-full bg-signal" />
    </div>
  );
}
