import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BookAppointmentContent from "@/components/inner-page/BookAppointmentContent";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Schedule your BMW service appointment in Sacramento, CA with Btech BMW Service & Repair — Mon – Fri, 6:00 AM – 1:00 PM (By Appointment Only).",
  alternates: {
    canonical: "/book-appointment",
  },
  openGraph: {
    title: "Book an Appointment | Btech BMW Service & Repair",
    description:
      "Schedule your BMW service, diagnostics, or repair in Sacramento, CA (Mon – Fri, 6:00 AM – 1:00 PM by appointment).",
    url: "/book-appointment",
  },
};

export default function BookAppointmentPage() {
  return (
    <>
      <Header />
      <main>
        <BookAppointmentContent />
      </main>
      <Footer />
    </>
  );
}
