"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { MAIN_NAV, ROUTES } from "@/config/routes";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="grid size-11 place-items-center rounded-full bg-surface/70 text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action"
      >
        {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>

      <nav
        id={panelId}
        aria-label="Main"
        hidden={!open}
        className="glass-strong absolute inset-x-(--gutter) top-full mt-2 rounded-3xl p-fluid-md"
      >
        <ul className="flex flex-col">
          {MAIN_NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={close}
                className="flex min-h-12 items-center rounded-xl px-3 text-fluid-lg font-semibold text-fg hover:bg-surface/70 focus-visible:outline-2 focus-visible:outline-action"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={ROUTES.contact} onClick={close} className={buttonVariants({ size: "lg", className: "mt-fluid-sm w-full" })}>
          Request a quote
        </Link>
      </nav>
    </div>
  );
}
