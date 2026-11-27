import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ContactUsContent from "@/components/inner-page/ContactUsContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Btech BMW Service & Repair in Sacramento, CA — call (916) 955-8735, email btechbmwservice@gmail.com, or send us a message to book your appointment.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | Btech BMW Service & Repair",
    description:
      "Call (916) 955-8735 or message Btech BMW Service & Repair at 7500 14th Ave #8, Sacramento, CA 95820.",
    url: "/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <main>
        <ContactUsContent />
      </main>
      <Footer />
    </>
  );
}
