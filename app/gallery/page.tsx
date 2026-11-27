import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import GalleryContent from "@/components/inner-page/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore our Sacramento BMW service gallery — twin-turbo engines, M brake systems, factory diagnostics, suspension, transmission, and lift inspections.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Gallery | Btech BMW Service & Repair",
    description:
      "Inside our Sacramento BMW workshop — engine builds, M brakes, factory diagnostics, and lift inspections.",
    url: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <GalleryContent />
      </main>
      <Footer />
    </>
  );
}
