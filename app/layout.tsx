import type { Metadata } from "next";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://btechbmwservice.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Btech BMW Service & Repair | Sacramento, CA",
    template: "%s | Btech BMW Service & Repair",
  },
  description:
    "Expert BMW Service & Repair in Sacramento, CA. 30+ years of BMW experience, California BAR certified, OEM-quality parts, and advanced diagnostics at 7500 14th Ave #8.",
  keywords: [
    "BMW service Sacramento",
    "BMW repair Sacramento",
    "Btech BMW Service",
    "independent BMW mechanic Sacramento",
    "BMW diagnostics Sacramento",
    "classic BMW restoration Sacramento",
    "California BAR certified BMW shop",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Btech BMW Service & Repair",
    title: "Btech BMW Service & Repair | Sacramento, CA",
    description:
      "Specialized BMW service, diagnostics, and repairs in Sacramento, CA. 30+ years experience, California BAR certified.",
    images: [
      {
        url: "/images/hero-poster.jpg",
        width: 1200,
        height: 630,
        alt: "Btech BMW Service & Repair in Sacramento, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Btech BMW Service & Repair | Sacramento, CA",
    description:
      "Specialized BMW service, diagnostics, and repairs in Sacramento, CA.",
    images: ["/images/hero-poster.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-[#030712] text-white antialiased">
      <body className="min-h-full flex flex-col font-sans selection:bg-[#0088CE] selection:text-white">
        {children}
      </body>
    </html>
  );
}

