import type { Metadata, Viewport } from "next";
import { Inter, Libre_Franklin } from "next/font/google";

import { AuroraBackground } from "@/components/layout/aurora-background";
import { env } from "@/config/env";
import { SITE } from "@/config/site";
import { THEME_INIT_SCRIPT } from "@/lib/theme";

import "./globals.css";

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_TZ",
    images: [{ url: "/images/site-installation.jpg", width: 2400, height: 623, alt: "Prefabricated site buildings being installed" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${libreFranklin.variable} ${inter.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="flex min-h-dvh flex-col font-sans">
        <AuroraBackground />
        {children}
      </body>
    </html>
  );
}
