import type { Metadata } from "next";

import { PageIntro } from "@/components/shared/page-intro";
import {
  AboutIntroVisual,
  ClientWall,
  CompanyProfile,
  ContactBand,
  Divisions,
  MdLetter,
  OurAim,
} from "@/features/company";

export const metadata: Metadata = {
  title: "About us",
  description:
    "SPH Group is a Tanzanian company specialising in prefabricated housing, with divisions in furniture, protective equipment, industrial supplies, agribusiness and tele agency.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="Serving with excellence"
        lead="We design, supply, install and maintain prefabricated buildings, and run the divisions that let us deliver them without depending on anyone else."
      >
        <AboutIntroVisual />
      </PageIntro>
      <CompanyProfile />
      <Divisions />
      <OurAim />
      <MdLetter />
      <ClientWall />
      <ContactBand />
    </>
  );
}
