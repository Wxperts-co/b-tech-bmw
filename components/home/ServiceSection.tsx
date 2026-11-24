"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface ServiceCardItem {
  id: string;
  line1: string;
  line2: string;
  image: string;
  icon: React.ReactNode;
}

const serviceCards: ServiceCardItem[] = [
  {
    id: "oil",
    line1: "Oil Change &",
    line2: "Routine Maintenance",
    image: "/images/service/oil-change.jpg",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
        <path d="M12 2.69l4.24 4.24a6 6 0 1 1-8.48 0z" />
      </svg>
    ),
  },
  {
    id: "engine",
    line1: "Engine Repair",
    line2: "& Overhaul",
    image: "/images/service/engine-repair.jpg",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="6" width="14" height="12" rx="2" />
        <path d="M9 3h6v3H9z" />
        <path d="M2 10h3M2 14h3M19 10h3M19 14h3" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
  },
  {
    id: "transmission",
    line1: "Transmission",
    line2: "Service & Repair",
    image: "/images/service/transmission-service.jpg",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    id: "brake",
    line1: "Brake Service",
    line2: "& Replacement",
    image: "/images/service/brake-service.jpg",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    ),
  },
  {
    id: "suspension",
    line1: "Suspension &",
    line2: "Steering Repair",
    image: "/images/service/suspension-repair.jpg",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v3M8 5h8" />
        <path d="M8.5 8l7 2.5-7 2.5 7 2.5-7 2.5" />
        <path d="M8 19h8M12 19v3" />
      </svg>
    ),
  },
  {
    id: "diagnostics",
    line1: "BMW",
    line2: "Diagnostics",
    image: "/images/service/bmw-diagnostics.jpg",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M2 20h20" />
        <path d="M7 10l2.5-2.5 2.5 4 2.5-3 2.5 1.5" />
      </svg>
    ),
  },
  {
    id: "cooling",
    line1: "Cooling System",
    line2: "Service",
    image: "/images/service/cooling-system.jpg",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 3c2 2 2 5 0 7M21 12c-2 2-5 2-7 0M12 21c-2-2-2-5 0-7M3 12c2-2 5-2 7 0" />
      </svg>
    ),
  },
  {
    id: "electrical",
    line1: "Electrical",
    line2: "System Repair",
    image: "/images/service/electrical-repair.jpg",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: "exhaust",
    line1: "Exhaust",
    line2: "System Service",
    image: "/images/service/exhaust-service.jpg",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 14h9l3-3h6v4h-5l-3 3H3z" />
        <path d="M21 11v4" />
      </svg>
    ),
  },
  {
    id: "general",
    line1: "General Repair",
    line2: "& Maintenance",
    image: "/images/service/general-repair.jpg",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3v-5l2-5h14l2 5v5h-2" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
        <path d="M9 17h6" />
      </svg>
    ),
  },
];

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-[#030914] text-white py-10 sm:py-14 lg:py-16 overflow-hidden border-t border-white/10 select-none"
    >
      {/* Exact Studio Background Image: /images/service-section-bg-1.jpg */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <Image
          src="/images/service-section-bg-1.jpg"
          alt="Comprehensive BMW Service & Repair Studio Background"
          fill
          unoptimized
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* Main Content Container (Same width & padding as HeroSection & AboutSection) */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        {/* Header Area: Top-Left Shield + Centered Heading */}
        <div className="relative flex flex-col items-center text-center mb-8 sm:mb-10 lg:mb-12">
          {/* Top-Left Shield Crest Logo */}
          <div className="hidden lg:block absolute left-0 top-0 pointer-events-none">
            <Image
              src="/images/bmw-logo.png"
              alt="Btech BMW Service Shield"
              width={1167}
              height={1072}
              unoptimized
              className="h-24 xl:h-28 w-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.95)]"
            />
          </div>

          {/* Eyebrow: /// OUR BMW SERVICES /// */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-2">
            <span className="inline-flex items-center -skew-x-28 gap-1">
              <span className="w-2.5 h-3.5 bg-[#0088CE] shadow-[0_0_8px_#0088CE]" />
              <span className="w-2.5 h-3.5 bg-[#002B7F]" />
              <span className="w-2.5 h-3.5 bg-[#E00000] shadow-[0_0_8px_#E00000]" />
            </span>
            <span className="text-xs sm:text-sm font-black italic tracking-[0.28em] text-white uppercase">
              OUR BMW SERVICES
            </span>
            <span className="inline-flex items-center -skew-x-28 gap-1">
              <span className="w-2.5 h-3.5 bg-[#0088CE] shadow-[0_0_8px_#0088CE]" />
              <span className="w-2.5 h-3.5 bg-[#002B7F]" />
              <span className="w-2.5 h-3.5 bg-[#E00000] shadow-[0_0_8px_#E00000]" />
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-[56px] font-black italic tracking-tight leading-[1.04]">
            <span className="bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              Comprehensive BMW
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#0084ff] via-[#00bfff] to-[#38bdf8] bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(0,180,255,0.55)]">
              Service &amp; Repair
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-2xl text-xs sm:text-sm md:text-base text-gray-200 font-medium leading-relaxed drop-shadow">
            From routine maintenance to complex repairs, we deliver dealership-level
            <br className="hidden sm:block" /> service with expert care and genuine-quality parts.
          </p>

          {/* Glowing Center Cyan Specular Flare Line */}
          <div className="mt-4 w-56 sm:w-80 h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent shadow-[0_0_18px_#00d4ff]" />
        </div>

        {/* 10 Luxury Dark-Chrome & BMW M-Color Cards (2 Rows of 5 on Desktop) */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 xl:gap-6">
          {serviceCards.map((card, index) => (
            <div
              key={card.id}
              className="group relative transition-all duration-300 hover:-translate-y-1.5 drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)] hover:drop-shadow-[0_14px_34px_rgba(0,136,206,0.55)] cursor-pointer"
            >
              {/* Metallic Chrome & M-Blue Chamfered Outer Rim */}
              <div
                className="relative p-[1.5px] bg-gradient-to-b from-slate-300/65 via-slate-500/35 to-[#0088CE]/85 group-hover:from-white/90 group-hover:via-[#0088CE]/80 group-hover:to-[#E00000]/80 transition-all duration-300"
                style={{
                  clipPath:
                    "polygon(26px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 26px)",
                }}
              >
                {/* Inner Dark Obsidian Carbon Card Body */}
                <div
                  className="relative h-full w-full flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0b1220] via-[#080f1c] to-[#050912]"
                  style={{
                    clipPath:
                      "polygon(25px 0, 100% 0, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 25px)",
                  }}
                >
                  {/* Automatic Diagonal Metallic Sheen Sweep */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
                    <div
                      className="w-[75%] h-full bg-gradient-to-r from-transparent via-white/15 to-transparent animate-light-sheen"
                      style={{ animationDelay: `${index * 0.25}s` }}
                    />
                  </div>

                  {/* Top Clear Visible HD Service Photo */}
                  <div className="relative w-full h-36 sm:h-40 overflow-hidden bg-black">
                    <Image
                      src={card.image}
                      alt={`${card.line1} ${card.line2}`}
                      width={480}
                      height={360}
                      unoptimized
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Subtle Dark Obsidian Edge Fade */}
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#080f1c] via-[#080f1c]/40 to-transparent pointer-events-none" />
                  </div>

                  {/* Signature BMW M-Sport Tricolor Accent Line (from Shield Logo) */}
                  <div className="relative z-20 w-full h-[2.5px] flex">
                    <div className="flex-1 bg-[#0088CE]" />
                    <div className="flex-1 bg-[#002B7F]" />
                    <div className="flex-1 bg-[#E00000]" />
                  </div>

                  {/* Lower Dark Metallic Glass Info Bar */}
                  <div className="relative z-20 flex items-center justify-between gap-2.5 px-3 sm:px-3.5 py-3 bg-gradient-to-r from-[#09111f]/95 via-[#0f1b30]/95 to-[#09111f]/95">
                    {/* Left Icon Pod (Dark Chrome with M-Blue Hover Glow) */}
                    <div className="w-9 h-9 shrink-0 rounded-lg bg-white/[0.06] border border-white/15 group-hover:border-[#0088CE]/80 group-hover:bg-[#0088CE]/15 text-[#00c8ff] group-hover:text-white flex items-center justify-center shadow-inner transition-all duration-300">
                      {card.icon}
                    </div>

                    {/* Center/Left Bold Metallic White Title */}
                    <div className="flex-1 min-w-0 text-left">
                      <p className="text-[11.5px] sm:text-[12.5px] font-bold text-white group-hover:text-sky-200 leading-tight truncate transition-colors">
                        {card.line1}
                      </p>
                      <p className="text-[11.5px] sm:text-[12.5px] font-semibold text-slate-300 group-hover:text-white leading-tight truncate transition-colors">
                        {card.line2}
                      </p>
                    </div>

                    {/* Right Chrome/Cyan Arrow */}
                    <ChevronRight className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-[#00c8ff] group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
