import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ServiceAreaContent from "@/components/inner-page/ServiceAreaContent";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "Btech BMW Service & Repair proudly serves Sacramento neighborhoods, Elk Grove, Roseville, Folsom, Rancho Cordova, and Greater Sacramento BMW drivers.",
  alternates: {
    canonical: "/service-area",
  },
  openGraph: {
    title: "Service Area | Btech BMW Service & Repair",
    description:
      "Serving Sacramento neighborhoods, Elk Grove, Roseville, Folsom, and Greater Sacramento BMW owners.",
    url: "/service-area",
  },
};

export default function ServiceAreaPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceAreaContent />
      </main>
      <Footer />
    </>
  );
}
