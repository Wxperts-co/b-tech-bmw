import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Handshake,
  Laptop,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Breadcrum from "@/components/common/Breadcrum";

function MStripes({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1 ${className}`} aria-hidden="true">
      <span className="w-2.5 h-3.5 bg-[#0070c0] -skew-x-[22deg] rounded-[1px]" />
      <span className="w-2.5 h-3.5 bg-[#00a3e0] -skew-x-[22deg] rounded-[1px]" />
      <span className="w-2.5 h-3.5 bg-[#e31e24] -skew-x-[22deg] rounded-[1px]" />
    </div>
  );
}

export default function AboutUsContent() {
  return (
    <>
      <Breadcrum
        title="About Us"
        description="Learn about BTECH BMW SERVICE, a trusted BMW service center in Sacramento known for expert care and reliable service."
      />

      {/* 2. White Story & Why Choose Section */}
      <section className="bg-white text-gray-900 pt-14 pb-36 sm:pt-20 sm:pb-32 lg:pb-28">
        <div className="w-full max-w-[1920px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
          {/* Top 2-Column Story Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Technician Image with Cyan Accent Corners */}
            <div className="lg:col-span-5">
              <div className="relative p-1.5">
                <span
                  className="absolute top-0 left-0 w-24 h-20 border-t-4 border-l-4 border-[#00a3e0] rounded-tl-2xl pointer-events-none"
                  aria-hidden="true"
                />
                <span
                  className="absolute bottom-0 right-0 w-24 h-20 border-b-4 border-r-4 border-[#00a3e0] rounded-br-2xl pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                  <Image
                    src="/images/about-page.jpg"
                    alt="Btech BMW Service technician inspecting a BMW engine bay"
                    width={800}
                    height={560}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Story Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5">
                <MStripes />
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-[#005596]">
                  Our Story
                </span>
              </div>

              <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-950 leading-tight">
                A BMW-Focused Service Center in Sacramento
              </h2>

              <div className="mt-4 space-y-3.5 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  BTECH BMW SERVICE is a dedicated BMW service center in
                  Sacramento, CA, providing specialized care, accurate
                  diagnostics, and quality repairs to keep your BMW performing at
                  its best.
                </p>
                <p>
                  Our story began 30 years ago at a BMW recycler, followed by
                  being hired at this very shop to complete a restoration on a
                  1974 BMW 2002—and we have been working here ever since, taking
                  over ownership in April 2026. Certified by the California
                  Bureau of Automotive Repair (BAR), we proudly serve BMW
                  owners from Sacramento, the Bay Area, Arizona, and Oregon.
                </p>
              </div>

              {/* 3 Icon Pillars */}
              <div className="mt-7 pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4">
                <div className="flex items-center gap-3 sm:pr-4 sm:border-r sm:border-gray-200">
                  <Calendar className="w-7 h-7 text-[#0066b2] shrink-0" />
                  <div>
                    <p className="text-sm font-extrabold text-gray-950 leading-tight">
                      30+ Years
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5">
                      of BMW Experience
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:px-2 sm:border-r sm:border-gray-200">
                  <ShieldCheck className="w-7 h-7 text-[#0066b2] shrink-0" />
                  <div>
                    <p className="text-sm font-extrabold text-gray-950 leading-tight">
                      California BAR
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5">Certified</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:pl-2">
                  <MapPin className="w-7 h-7 text-[#0066b2] shrink-0" />
                  <div>
                    <p className="text-sm font-extrabold text-gray-950 leading-tight">
                      Sacramento, CA
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Mon–Fri: 6 AM – 1 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Why Choose Block */}
          <div className="mt-16 mb-16 lg:mt-20 lg:mb-24">
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <MStripes className="shrink-0" />
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-950">
                  Why Choose BTECH BMW Service?
                </h2>
              </div>
              <div className="w-14 h-1 bg-[#e31e24] mx-auto mt-3 rounded-full" />
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: BMW-Focused Expertise */}
              <div className="bg-[#f8fafc] rounded-xl p-6 sm:p-7 border border-gray-200/80 border-b-4 border-b-[#0070c0] shadow-sm">
                <div className="w-11 h-11 flex items-center justify-center">
                  <svg
                    viewBox="0 0 48 48"
                    className="w-10 h-10"
                    aria-hidden="true"
                  >
                    <circle
                      cx="24"
                      cy="24"
                      r="21"
                      fill="none"
                      stroke="#0066b2"
                      strokeWidth="2.5"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="14"
                      fill="none"
                      stroke="#0066b2"
                      strokeWidth="2"
                    />
                    <path d="M24 10 A14 14 0 0 1 38 24 L24 24 Z" fill="#0080d6" />
                    <path d="M10 24 A14 14 0 0 0 24 38 L24 24 Z" fill="#0080d6" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-gray-950">
                  BMW-Focused Expertise
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  In-depth knowledge of BMW systems, service requirements, and
                  model-specific needs.
                </p>
              </div>

              {/* Card 2: Honest & Transparent Service */}
              <div className="bg-[#f8fafc] rounded-xl p-6 sm:p-7 border border-gray-200/80 border-b-4 border-b-[#e31e24] shadow-sm">
                <div className="w-11 h-11 flex items-center justify-center">
                  <Handshake className="w-10 h-10 text-[#0070c0]" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-gray-950">
                  Honest &amp; Transparent Service
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Clear recommendations, upfront pricing, and no unnecessary
                  repairs.
                </p>
              </div>

              {/* Card 3: Advanced Diagnostics & Quality Parts */}
              <div className="bg-[#f8fafc] rounded-xl p-6 sm:p-7 border border-gray-200/80 border-b-4 border-b-[#003d73] shadow-sm">
                <div className="w-11 h-11 flex items-center justify-center">
                  <Laptop className="w-10 h-10 text-[#0070c0]" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-gray-950">
                  Advanced Diagnostics &amp; Quality Parts
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Modern BMW diagnostic tools and high-quality OEM or
                  OE-equivalent parts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
