import { cn } from "@/lib/utils";

export function Label({ className, ...props }: React.ComponentProps<"label">) {
  return <label className={cn("block text-fluid-sm font-semibold text-fg", className)} {...props} />;
}
