import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Calendar,
  Car,
  CheckCircle2,
  MapPin,
  Phone,
  Wrench,
} from "lucide-react";
import Breadcrum from "@/components/common/Breadcrum";

const sacramentoNeighborhoods = [
  "Tahoe Park",
  "Midtown",
  "Land Park",
  "Colonial Heights",
  "Downtown",
  "Natomas",
  "East Sacramento",
  "Arden-Arcade",
  "South Sacramento",
];

const nearbyCities = [
  "Elk Grove",
  "Citrus Heights",
  "Rocklin",
  "Rancho Cordova",
  "Fair Oaks",
  "Folsom",
  "Carmichael",
  "Roseville",
  "West Sacramento",
];

function MStripes({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1 ${className}`} aria-hidden="true">
      <span className="w-2.5 h-3.5 bg-[#0070c0] -skew-x-[22deg] rounded-[1px]" />
      <span className="w-2.5 h-3.5 bg-[#00a3e0] -skew-x-[22deg] rounded-[1px]" />
      <span className="w-2.5 h-3.5 bg-[#e31e24] -skew-x-[22deg] rounded-[1px]" />
    </div>
  );
}

export default function ServiceAreaContent() {
  return (
    <>
      {/* 1. Shared Dark Breadcrumb Banner (/images/breadcrumb-bg.jpg) */}
      <Breadcrum
        title="Proudly Serving the Greater Sacramento Area"
        description="Expert BMW service for drivers across Sacramento and surrounding communities."
        items={[{ label: "Service Area" }]}
      />

      {/* 2. White Map & Service Area Communities Section */}
      <section className="bg-white text-gray-900 pt-14 pb-36 sm:pt-20 sm:pb-32 lg:pb-28">
        <div className="w-full max-w-[1920px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left 3D Isometric Sacramento Map + Floating Shop Pin Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-2xl">
                {/* Floating Shop Location Badge */}
                

                <Image
                  src="/images/service-area-page.png"
                  alt="3D map of Greater Sacramento service area"
                  width={900}
                  height={700}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Service Area Communities */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2.5">
                <MStripes />
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-[#005596]">
                  Our Service Area
                </span>
              </div>

              <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold italic tracking-tight text-gray-950 leading-tight">
                Cities &amp; Communities We Serve
              </h2>
              <div className="w-14 h-1 bg-[#e31e24] mt-3 rounded-full" />

              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                BTECH BMW SERVICE is conveniently located in Sacramento, CA and
                welcomes BMW owners from across the Greater Sacramento
                metropolitan area—as well as loyal clients traveling from the
                Bay Area, Arizona, and Oregon:
              </p>

              {/* Card 1: Sacramento Neighborhoods */}
              <div className="mt-6 rounded-2xl border border-gray-200 bg-[#f8fafc] p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-5 h-5 text-[#0070c0] shrink-0" />
                  <h3 className="text-base sm:text-lg font-extrabold text-gray-950">
                    Sacramento Neighborhoods
                  </h3>
                </div>

                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2.5">
                  {sacramentoNeighborhoods.map((place) => (
                    <div
                      key={place}
                      className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00a3e0] shrink-0" />
                      <span>{place}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Nearby Cities & Suburbs */}
              <div className="mt-5 rounded-2xl border border-gray-200 bg-[#f8fafc] p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-5 h-5 text-[#0070c0] shrink-0" />
                  <h3 className="text-base sm:text-lg font-extrabold text-gray-950">
                    Nearby Cities &amp; Suburbs
                  </h3>
                </div>

                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2.5">
                  {nearbyCities.map((city) => (
                    <div
                      key={city}
                      className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00a3e0] shrink-0" />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4-Item Feature Strip */}
          <div className="mt-12 rounded-2xl bg-[#f8fafc] border border-gray-200/80 px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 shadow-sm">
            <div className="flex items-center gap-3.5 lg:border-r lg:border-gray-200 lg:pr-4">
              <Car className="w-8 h-8 text-[#0070c0] shrink-0" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-extrabold text-gray-950 leading-tight">
                  Convenient
                </p>
                <p className="text-xs text-gray-600 mt-0.5">
                  Sacramento Location
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 lg:border-r lg:border-gray-200 lg:pr-4">
              <Wrench className="w-8 h-8 text-[#0070c0] shrink-0" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-extrabold text-gray-950 leading-tight">
                  BMW Specialists
                </p>
                <p className="text-xs text-gray-600 mt-0.5">for All Models</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 lg:border-r lg:border-gray-200 lg:pr-4">
              <MapPin className="w-8 h-8 text-[#0070c0] shrink-0" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-extrabold text-gray-950 leading-tight">
                  Serving the
                </p>
                <p className="text-xs text-gray-600 mt-0.5">
                  Greater Sacramento Area
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <Calendar className="w-8 h-8 text-[#0070c0] shrink-0" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-extrabold text-gray-950 leading-tight">
                  By Appointment Only
                </p>
                <p className="text-xs text-gray-600 mt-0.5">
                  Mon–Fri: 6 AM – 1 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
}
