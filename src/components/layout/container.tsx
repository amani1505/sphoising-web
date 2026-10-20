import { cn } from "@/lib/utils";

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-(--container-max) px-(--gutter)", className)} {...props} />;
}
