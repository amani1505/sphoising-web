import type { Metadata } from "next";

import { ClientWall, ContactBand, Hero, MdPullQuote, RecentWork, WhatWeDo, WhoWeAre } from "@/features/company";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <RecentWork />
      <ClientWall />
      <MdPullQuote />
      <ContactBand />
    </>
  );
}
