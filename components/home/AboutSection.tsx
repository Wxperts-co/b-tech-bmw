"use client";

import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-white text-gray-900 py-8 sm:py-12 lg:py-4 overflow-hidden border-t border-gray-200 select-none"
    >
      {/* High-Resolution Background Image (1920x1000): /images/about-section-bg.jpg */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <Image
          src="/images/about-bg.jpg"
          alt="About Us Background"
          fill
          unoptimized
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        {/* Main Grid: 42% Left Copy (5 cols) & 58% Right Workshop Imagery (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
          {/* Left Column: Shield Logo, Header, Headline, Subheadline, Description */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Top Row: Large Shield Crest Logo + "// ABOUT US" with underline */}
            <div className="flex items-center gap-4 sm:gap-5 mb-3 sm:mb-5">


              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <span className="inline-flex items-center -skew-x-24 gap-1 shrink-0">
                    <span className="w-2 sm:w-2.5 h-5 sm:h-6 bg-[#0072CE]" />
                    <span className="w-2 sm:w-2.5 h-5 sm:h-6 bg-[#E30613]" />
                  </span>
                  <span className="text-lg sm:text-xl md:text-2xl font-black italic tracking-wide text-[#0d2240] uppercase">
                    ABOUT US
                  </span>
                </div>
                <div className="h-[1.5px] w-40 sm:w-48 bg-gray-400/70 mt-1.5" />
              </div>
            </div>

            {/* Main Headline: 30 Years of BMW Expertise! */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-[54px] font-black italic tracking-tight leading-[1.05] text-[#0d2240]">
              30 Years of
              <br />
              <span className="text-[#0b4da2]">BMW Expertise!</span>
            </h2>

            {/* Sharp Red Underline Accent */}
            <div className="w-28 sm:w-36 h-[3.5px] bg-[#E30613] mt-3 sm:mt-3.5" />

            {/* Sub-headline with Skewed Red "YOUR BMW" Pill */}
            <p className="text-base sm:text-lg xl:text-[20px] font-bold italic text-[#0d2240] leading-snug mt-4 sm:mt-5">
              California BAR Certified • Serving Sacramento,
              <br className="hidden sm:block" />{" "}
              <span className="font-black text-[#0d2240]">Bay Area, AZ &amp; OR</span>{" "}
              <span className="inline-block -skew-x-12 bg-gradient-to-r from-[#d90416] to-[#e30613] text-white font-black italic px-3 py-0.5 rounded-md text-sm sm:text-base xl:text-[18px] mx-1 shadow-sm">
                <span className="inline-block skew-x-12">YOUR BMW</span>
              </span>{" "}
              <span className="font-bold text-[#0d2240]">specialists.</span>
            </p>

            {/* Paragraph Description with Left Blue Accent Bar */}
            <div className="border-l-[3px] border-[#0070c9] pl-3.5 sm:pl-4 mt-4 sm:mt-5 py-0.5">
              <p className="text-[#1e293b] text-sm sm:text-[15px] font-medium leading-relaxed max-w-[510px]">
                Starting 30 years ago at a BMW recycler, Brian Ingram was hired
                by this shop to restore a 1974 BMW 2002—and has been working
                here ever since, taking over ownership in April 2026. Certified
                by the California BAR, drivers travel from the Bay Area,
                Arizona, and Oregon for his trusted BMW care.
              </p>
            </div>
          </div>

          {/* Right Column: Full-Scale High-Res Workshop Graphic (1593x987 Transparent PNG) */}
          <div className="lg:col-span-7 relative w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full lg:w-[104%] lg:-ml-4">
              <Image
                src="/images/about-right.png"
                alt="Btech BMW Service Workshop and Certified Technicians"
                width={1593}
                height={987}
                priority
                unoptimized
                className="w-full h-auto object-contain drop-shadow-[0_14px_32px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>
        </div>

        {/* Bottom Feature Badges: 4 Skewed Blue Pillars Matching Reference */}
        <div className="mt-8 sm:mt-10 lg:mt-8 pt-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 items-center">
            {/* Badge 1: 25+ Years of BMW Experience (Laurel Wreath + 25+) */}
            <div className="flex items-center gap-3 sm:gap-4 group">
              <div className="w-13 h-13 sm:w-16 sm:h-15 shrink-0 rounded-xl bg-gradient-to-br from-[#0052b4] via-[#004499] to-[#002f6c] text-white flex items-center justify-center shadow-[0_6px_16px_rgba(0,68,153,0.35)] -skew-x-12 group-hover:scale-105 transition-transform">
                <div className="skew-x-12 relative flex items-center justify-center">
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
              </div>
              <div className="text-xs sm:text-sm md:text-base font-extrabold italic text-[#0d2240] leading-tight">
                30+ Years of
                <br />
                BMW Experience
              </div>
            </div>

            {/* Badge 2: BMW Specialists (Crossed Wrenches) */}
            <div className="flex items-center gap-3 sm:gap-4 group">
              <div className="w-13 h-13 sm:w-16 sm:h-15 shrink-0 rounded-xl bg-gradient-to-br from-[#0052b4] via-[#004499] to-[#002f6c] text-white flex items-center justify-center shadow-[0_6px_16px_rgba(0,68,153,0.35)] -skew-x-12 group-hover:scale-105 transition-transform">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white skew-x-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  <path d="M9.3 6.3a1 1 0 0 1 0 1.4L7.7 9.3a1 1 0 0 1-1.4 0L2.53 5.53a6 6 0 0 0 7.94 7.94l6.91 6.91a2.12 2.12 0 0 0 3-3l-6.91-6.91a6 6 0 0 0-7.94-7.94l3.77 3.77z" />
                </svg>
              </div>
              <div className="text-xs sm:text-sm md:text-base font-extrabold italic text-[#0d2240] leading-tight">
                BMW
                <br />
                Specialists
              </div>
            </div>

            {/* Badge 3: Honest & Transparent Service (Handshake) */}
            <div className="flex items-center gap-3 sm:gap-4 group">
              <div className="w-13 h-13 sm:w-16 sm:h-15 shrink-0 rounded-xl bg-gradient-to-br from-[#0052b4] via-[#004499] to-[#002f6c] text-white flex items-center justify-center shadow-[0_6px_16px_rgba(0,68,153,0.35)] -skew-x-12 group-hover:scale-105 transition-transform">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white skew-x-12"
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
              </div>
              <div className="text-xs sm:text-sm md:text-base font-extrabold italic text-[#0d2240] leading-tight">
                Honest &amp;
                <br />
                Transparent Service
              </div>
            </div>

            {/* Badge 4: Friendly, Experienced Staff (Group of People) */}
            <div className="flex items-center gap-3 sm:gap-4 group">
              <div className="w-13 h-13 sm:w-16 sm:h-15 shrink-0 rounded-xl bg-gradient-to-br from-[#0052b4] via-[#004499] to-[#002f6c] text-white flex items-center justify-center shadow-[0_6px_16px_rgba(0,68,153,0.35)] -skew-x-12 group-hover:scale-105 transition-transform">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white skew-x-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="10" cy="7" r="3.5" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16.5 3.63a3.5 3.5 0 0 1 0 6.74" />
                </svg>
              </div>
              <div className="text-xs sm:text-sm md:text-base font-extrabold italic text-[#0d2240] leading-tight">
                Friendly,
                <br />
                Experienced Staff
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
