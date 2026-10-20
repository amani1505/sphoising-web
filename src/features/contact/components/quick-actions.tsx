import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";

import { CopyButton } from "@/components/shared/copy-button";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { SITE } from "@/config/site";

type QuickAction = {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
  actionLabel: string;
  external?: boolean;
  copy?: { value: string; label: string };
};

function buildActions(): QuickAction[] {
  const { phones, email, addressLines, mapsUrl } = SITE.contact;
  const [primaryPhone] = phones;

  return [
    {
      icon: Phone,
      title: "Call us",
      value: primaryPhone.display,
      href: `tel:${primaryPhone.tel}`,
      actionLabel: "Call now",
      copy: { value: primaryPhone.display, label: "phone number" },
    },
    {
      icon: Mail,
      title: "Email us",
      value: email,
      href: `mailto:${email}`,
      actionLabel: "Write an email",
      copy: { value: email, label: "email address" },
    },
    {
      icon: MapPin,
      title: "Visit us",
      value: addressLines.join(", "),
      href: mapsUrl,
      actionLabel: "Open in Google Maps",
      external: true,
    },
  ];
}

/** Call, email and map shortcuts beside the Contact page intro, with copy buttons. */
export function QuickActions() {
  return (
    <ul className="grid gap-3">
      {buildActions().map((action) => (
        <li key={action.title}>
          <SpotlightCard className="glass group @container rounded-2xl p-4 transition duration-300 hover:-translate-y-0.5 motion-reduce:transition-none">
            {/* Narrow tiles put the buttons on their own row; wide tiles keep them inline. */}
            <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-3 @[34rem]:grid-cols-[auto_1fr_auto]">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-action text-action-fg transition-transform duration-300 group-hover:-rotate-6 motion-reduce:transition-none">
                <action.icon aria-hidden className="size-6" />
              </span>
              <div className="min-w-0">
                <p className="text-fluid-xs font-semibold text-fg-muted">{action.title}</p>
                <p className="font-display text-fluid-base font-bold break-words">{action.value}</p>
              </div>
              <div className="col-span-2 flex flex-wrap gap-2 @[34rem]:col-span-1">
                <a
                  href={action.href}
                  {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex min-h-11 items-center rounded-full bg-surface/70 px-4 text-fluid-xs font-semibold text-link transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action"
                >
                  {action.actionLabel}
                  {action.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
                </a>
                {action.copy ? <CopyButton value={action.copy.value} label={action.copy.label} /> : null}
              </div>
            </div>
          </SpotlightCard>
        </li>
      ))}
    </ul>
  );
}
