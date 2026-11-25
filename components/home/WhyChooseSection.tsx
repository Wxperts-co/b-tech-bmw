"use client";

import React from "react";
import Image from "next/image";

interface WhyChooseItem {
  id: string;
  line1: string;
  line2: string;
  icon: React.ReactNode;
}

const whyChooseItems: WhyChooseItem[] = [
  {
    id: "expertise",
    line1: "30+ Years of",
    line2: "BMW Expertise",
    icon: (
      <div className="relative flex items-center justify-center">
        <svg
          className="w-9 h-9 sm:w-10 sm:h-10 text-white"
          viewBox="0 0 36 36"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <path d="M10 27C6.5 23.5 5.5 17 8 11.5" />
          <path d="M8.5 22.5L5.5 21.5M7.5 18L4.5 16.5M8 13.5L5.5 11.5" />
          <path d="M26 27C29.5 23.5 30.5 17 28 11.5" />
          <path d="M27.5 22.5L30.5 21.5M28.5 18L31.5 16.5M28 13.5L30.5 11.5" />
          <path d="M13 28.5C16 29.8 20 29.8 23 28.5" />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[11px] sm:text-xs font-black tracking-tighter text-white pb-1">
          30+
        </span>
      </div>
    ),
  },
  {
    id: "technicians",
    line1: "BMW",
    line2: "Certified Technicians",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="3.5" />
        <path d="M6 5.5h6" />
        <path d="M19.5 14.5l-3 3a1.5 1.5 0 0 1-2.1-2.1l3-3a2.5 2.5 0 0 1 3.1-3.1l-1.3 1.3 1.2 1.2 1.3-1.3a2.5 2.5 0 0 1-2.2 3.9z" />
      </svg>
    ),
  },
  {
    id: "diagnostics",
    line1: "Advanced",
    line2: "BMW Diagnostics",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M2 19h20" />
        <path d="M6.5 10h2.5l1.5-3 2 6 1.5-3h3" />
      </svg>
    ),
  },
  {
    id: "parts",
    line1: "Genuine &",
    line2: "High-Quality Parts",
    icon: (
      <div className="relative flex items-center justify-center">
        <svg
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3.2" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
        <span className="absolute -bottom-0.5 right-0 inline-flex -skew-x-24 gap-[1px]">
          <span className="w-1 h-2 bg-[#0088CE]" />
          <span className="w-1 h-2 bg-[#E30613]" />
        </span>
      </div>
    ),
  },
  {
    id: "pricing",
    line1: "Honest &",
    line2: "Transparent Pricing",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </svg>
    ),
  },
  {
    id: "service",
    line1: "Friendly &",
    line2: "Professional Service",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="3.5" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16.5 3.63a3.5 3.5 0 0 1 0 6.74" />
      </svg>
    ),
  },
];

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="relative w-full bg-[#f4f7fb] text-[#0d2240] py-14 sm:py-16 lg:py-24 overflow-hidden border-t border-gray-200 select-none"
    >
      {/* Background Image: /images/why-bg.jpg */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <Image
          src="/images/why-1-bg.jpg"
          alt="Why Choose Btech BMW Service Background"
          fill
          priority
          unoptimized
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* Centered Content Container (Same outer container width as Hero, About, Service) */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Eyebrow: // WHY CHOOSE (No Logo as requested) */}
          <div className="flex items-center justify-center gap-2.5 mb-2">
            <span className="inline-flex items-center -skew-x-24 gap-1 shrink-0">
              <span className="w-2.5 h-5 sm:h-6 bg-[#0072CE]" />
              <span className="w-2.5 h-5 sm:h-6 bg-[#E30613]" />
            </span>
            <span className="text-lg sm:text-xl md:text-2xl font-black italic tracking-wider text-[#0d2240] uppercase">
              WHY CHOOSE
            </span>
          </div>

          {/* Main Headline: BTECH BMW SERVICE? */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-[52px] font-black italic tracking-tight leading-[1.06] text-[#0a3d88] uppercase">
            BTECH BMW SERVICE?
          </h2>

          {/* Subtitle */}
          <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm md:text-base font-semibold text-[#1e293b] leading-relaxed">
            California BAR Certified BMW specialists trusted by enthusiasts
            traveling from Sacramento, the Bay Area, Arizona, and Oregon—from
            classic 1974 BMW 2002 restorations to modern M Series care.
          </p>

          {/* Red Horizontal Accent Bar */}
          <div className="w-16 sm:w-20 h-[3.5px] bg-[#E30613] mt-4 rounded-full" />

          {/* 6 Feature Cards Grid (2 Columns x 3 Rows) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-10 text-left">
            {whyChooseItems.map((item) => (
              <div
                key={item.id}
                className="group relative flex items-center gap-4 p-2.5 sm:p-3 pr-5 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 hover:border-[#0072CE]/60 shadow-[0_8px_24px_rgba(13,34,64,0.08)] hover:shadow-[0_14px_32px_rgba(0,114,206,0.18)] hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Left Royal Blue Skewed Icon Container */}
                <div className="w-14 h-14 sm:w-16 sm:h-15 shrink-0 rounded-xl bg-gradient-to-br from-[#0052b4] via-[#004499] to-[#002f6c] text-white flex items-center justify-center shadow-[0_6px_16px_rgba(0,68,153,0.35)] -skew-x-6 group-hover:scale-105 transition-transform">
                  <div className="skew-x-6 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                {/* Right Two-Line Bold Italic Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-base font-extrabold italic text-[#0d2240] leading-snug">
                    {item.line1}
                  </p>
                  <p className="text-sm sm:text-base font-extrabold italic text-[#0d2240] leading-snug">
                    {item.line2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
