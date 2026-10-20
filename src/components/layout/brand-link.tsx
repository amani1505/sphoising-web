import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { cn } from "@/lib/utils";

export function BrandLink({ className }: { className?: string }) {
  return (
    <Link
      href={ROUTES.home}
      className={cn(
        "inline-flex min-h-11 items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-action",
        className,
      )}
    >
      <Image src="/images/sph-mark.png" alt="" width={299} height={302} className="size-10" sizes="40px" />
      <span className="font-display text-fluid-lg font-extrabold tracking-tight whitespace-nowrap text-fg">{SITE.name}</span>
    </Link>
  );
}
