import { Mail, MapPin, Phone } from "lucide-react";

import { SITE } from "@/config/site";
import { cn } from "@/lib/utils";

const linkClassName =
  "rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current";

/** Address, phone numbers and email as a definition list. Inherits text color from its parent. */
export function ContactDetails({ className }: { className?: string }) {
  const { addressLines, phones, email } = SITE.contact;

  return (
    <dl className={cn("grid gap-fluid-md text-fluid-base", className)}>
      <div className="flex gap-3">
        <dt>
          <MapPin aria-hidden className="mt-0.5 size-5 shrink-0 opacity-70" />
          <span className="sr-only">Office</span>
        </dt>
        <dd>
          <address className="not-italic">
            {addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </dd>
      </div>
      <div className="flex gap-3">
        <dt>
          <Phone aria-hidden className="mt-0.5 size-5 shrink-0 opacity-70" />
          <span className="sr-only">Phone</span>
        </dt>
        <dd className="flex flex-col">
          {phones.map((phone) => (
            <a key={phone.tel} href={`tel:${phone.tel}`} className={cn(linkClassName, "self-start")}>
              {phone.display}
            </a>
          ))}
        </dd>
      </div>
      <div className="flex gap-3">
        <dt>
          <Mail aria-hidden className="mt-0.5 size-5 shrink-0 opacity-70" />
          <span className="sr-only">Email</span>
        </dt>
        <dd className="min-w-0">
          <a href={`mailto:${email}`} className={cn(linkClassName, "break-words")}>
            {email}
          </a>
        </dd>
      </div>
    </dl>
  );
}
