import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Home, Phone, Wrench } from "lucide-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Page Not Found (404)",
  description:
    "The page you requested could not be found. Return to Btech BMW Service & Repair in Sacramento, CA.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative min-h-[760px] flex items-center justify-center overflow-hidden bg-[#040812] text-white pt-36 pb-36 sm:pb-32">
        {/* Studio Background */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/breadcrumb-bg.jpg"
            alt="Btech BMW Service workshop"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#040812]/90 via-[#040812]/80 to-[#040812]" />
        </div>

        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-8 text-center">
          {/* M-Stripes */}
          <div className="inline-flex items-center gap-1.5 mb-4" aria-hidden="true">
            <span className="w-3.5 h-5 bg-[#0070c0] -skew-x-[22deg] rounded-[1px]" />
            <span className="w-3.5 h-5 bg-[#00a3e0] -skew-x-[22deg] rounded-[1px]" />
            <span className="w-3.5 h-5 bg-[#e31e24] -skew-x-[22deg] rounded-[1px]" />
          </div>

          <p className="text-7xl sm:text-8xl font-black italic tracking-tighter bg-gradient-to-r from-white via-sky-200 to-[#00c8ff] bg-clip-text text-transparent">
            404
          </p>

          <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold italic tracking-tight text-white">
            Page Not Found
          </h1>

          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-lg mx-auto leading-relaxed">
            The page you&apos;re looking for may have moved or no longer exists.
            Let&apos;s get you back on track with BTECH BMW SERVICE.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0068d6] to-[#00a3e0] hover:brightness-110 text-white font-bold text-sm shadow-lg shadow-[#00a3e0]/25 transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/services/oil-change-routine-maintenance"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-white/20 text-white font-semibold text-sm transition-all"
            >
              <Wrench className="w-4 h-4 text-[#00c8ff]" />
              <span>Our Services</span>
            </Link>

            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-white/20 text-white font-semibold text-sm transition-all"
            >
              <Calendar className="w-4 h-4 text-[#00c8ff]" />
              <span>Book an Appointment</span>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 inline-flex items-center gap-3 text-sm text-gray-300">
            <ArrowLeft className="w-4 h-4 text-[#00c8ff]" />
            <span>Need immediate help? Call</span>
            <a
              href="tel:9169558735"
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#00c8ff] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#00c8ff]" />
              <span>(916) 955-8735</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
