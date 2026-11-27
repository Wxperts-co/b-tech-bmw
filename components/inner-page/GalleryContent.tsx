import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Breadcrum from "@/components/common/Breadcrum";
import GalleryLightboxGrid, {
  type GalleryPhotoCard,
} from "@/components/inner-page/GalleryLightboxGrid";

const galleryCards: GalleryPhotoCard[] = [
  {
    id: "engine",
    src: "/images/gallery/1.jpg",
    alt: "BMW M Twin-Turbo Engine Bay Service",
    spanClass: "lg:col-span-7",
    heightClass: "h-72 sm:h-80 lg:h-[420px]",
  },
  {
    id: "brakes",
    src: "/images/gallery/2.jpg",
    alt: "BMW M Cross-Drilled Brake Rotor and Caliper",
    spanClass: "lg:col-span-5",
    heightClass: "h-72 sm:h-80 lg:h-[420px]",
  },
  {
    id: "oil",
    src: "/images/gallery/3.jpg",
    alt: "BMW Synthetic Oil Change Service",
    spanClass: "lg:col-span-4",
    heightClass: "h-64 sm:h-72 lg:h-[330px]",
  },
  {
    id: "diagnostics",
    src: "/images/gallery/4.jpg",
    alt: "BMW Factory Computer Diagnostics",
    spanClass: "lg:col-span-4",
    heightClass: "h-64 sm:h-72 lg:h-[330px]",
  },
  {
    id: "suspension",
    src: "/images/gallery/5.jpg",
    alt: "BMW Performance Coilover Suspension Repair",
    spanClass: "lg:col-span-4",
    heightClass: "h-64 sm:h-72 lg:h-[330px]",
  },
  {
    id: "transmission",
    src: "/images/gallery/6.jpg",
    alt: "BMW Transmission Gear Assembly Overhaul",
    spanClass: "lg:col-span-4",
    heightClass: "h-64 sm:h-72 lg:h-[350px]",
  },
  {
    id: "exhaust",
    src: "/images/gallery/7.jpg",
    alt: "BMW M Carbon Performance Exhaust System",
    spanClass: "lg:col-span-4",
    heightClass: "h-64 sm:h-72 lg:h-[350px]",
  },
  {
    id: "lift",
    src: "/images/gallery/8.jpg",
    alt: "BMW Vehicle Inspection on Hydraulic Lift",
    spanClass: "lg:col-span-4",
    heightClass: "h-64 sm:h-72 lg:h-[350px]",
  },
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

export default function GalleryContent() {
  return (
    <>
      {/* 1. Shared Dark Breadcrumb Banner (/images/breadcrumb-bg.jpg) */}
      <Breadcrum
        title="Our BMW Service Gallery"
        description="A closer look inside our Sacramento BMW workshop—precision diagnostics, engine builds, brake & suspension work, and classic care."
        items={[{ label: "Gallery" }]}
      />

      {/* 2. Clean White Editorial Gallery Showcase */}
      <section className="bg-white text-gray-900 pt-14 pb-36 sm:pt-20 sm:pb-32 lg:pb-28">
        <div className="w-full max-w-[1920px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
          {/* Centered Header */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2.5">
              <MStripes />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#005596]">
                Workshop Showcase
              </span>
            </div>

            <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold italic tracking-tight text-gray-950">
              Inside Btech BMW Service
            </h2>
            <div className="w-16 h-1 bg-[#e31e24] mx-auto mt-3 rounded-full" />

            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              From routine synthetic oil changes and factory diagnostics to
              complex engine, suspension, and transmission work—explore real
              BMW service craft in our Sacramento facility.
            </p>
          </div>

          {/* Clean Photo Bento Grid with Lightbox */}
          <GalleryLightboxGrid cards={galleryCards} />

          {/* Clean White Trust Strip */}
          <div className="mt-12 rounded-2xl bg-[#f8fafc] border border-gray-200/80 px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 shadow-sm">
            <div className="flex items-center gap-3.5 lg:border-r lg:border-gray-200 lg:pr-4">
              <Wrench className="w-7 h-7 text-[#0070c0] shrink-0" />
              <div>
                <p className="text-sm font-extrabold text-gray-950">
                  30+ Years Experience
                </p>
                <p className="text-xs text-gray-600">BMW-Focused Craft</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 lg:border-r lg:border-gray-200 lg:pr-4">
              <ShieldCheck className="w-7 h-7 text-[#0070c0] shrink-0" />
              <div>
                <p className="text-sm font-extrabold text-gray-950">
                  California BAR Certified
                </p>
                <p className="text-xs text-gray-600">Trusted Sacramento Shop</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 lg:border-r lg:border-gray-200 lg:pr-4">
              <CheckCircle2 className="w-7 h-7 text-[#0070c0] shrink-0" />
              <div>
                <p className="text-sm font-extrabold text-gray-950">
                  OEM-Quality Parts
                </p>
                <p className="text-xs text-gray-600">Factory-Level Tooling</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <MapPin className="w-7 h-7 text-[#0070c0] shrink-0" />
              <div>
                <p className="text-sm font-extrabold text-gray-950">
                  7500 14th Ave #8
                </p>
                <p className="text-xs text-gray-600">Sacramento, CA 95820</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}
