import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Btech BMW Service & Repair | Sacramento, CA",
  description: "Expert BMW Service & Repair in Sacramento, CA. Certified BMW Technicians, OEM Parts, and Advanced Diagnostics. Located at 7500 14th Ave #8, Sacramento, CA 95820.",
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

