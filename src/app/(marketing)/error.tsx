"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Container } from "@/components/layout/container";
import { Button, buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

export default function MarketingError({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="py-fluid-2xl">
      <h1 className="font-display text-fluid-4xl leading-none font-extrabold tracking-[-0.03em]">This page didn&apos;t load</h1>
      <p className="mt-fluid-md max-w-[52ch] text-fluid-lg leading-relaxed text-fg-muted">
        Something went wrong on our side. Try loading it again, or head back to the home page.
      </p>
      <div className="mt-fluid-lg flex flex-wrap gap-3">
        <Button onClick={() => retry()}>Try again</Button>
        <Link href={ROUTES.home} className={buttonVariants({ variant: "outline" })}>
          Go to the home page
        </Link>
      </div>
    </Container>
  );
}
