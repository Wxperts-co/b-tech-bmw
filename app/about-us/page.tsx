import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import AboutUsContent from "@/components/inner-page/AboutUsContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Btech BMW Service & Repair in Sacramento, CA — 30+ years of BMW experience, California BAR certified, serving Sacramento, the Bay Area, Arizona, and Oregon.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | Btech BMW Service & Repair",
    description:
      "30+ years of BMW experience, California BAR certified independent BMW service center in Sacramento, CA.",
    url: "/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main>
        <AboutUsContent />
      </main>
      <Footer />
    </>
  );
}
