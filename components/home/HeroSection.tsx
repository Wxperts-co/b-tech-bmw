"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  image: string;
  iconSvg: React.ReactNode;
}

const servicesList: ServiceItem[] = [
  {
    id: "oil",
    title: "Oil Change &\nRoutine Maintenance",
    image: "/images/service-oil.png",
    iconSvg: (
      <svg className="w-4 h-4 text-[#00c8ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    id: "engine",
    title: "Engine Repair\n& Overhaul",
    image: "/images/service-engine.png",
    iconSvg: (
      <svg className="w-4 h-4 text-[#00c8ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    id: "transmission",
    title: "Transmission\nService & Repair",
    image: "/images/service-transmission.png",
    iconSvg: (
      <svg className="w-4 h-4 text-[#00c8ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    id: "brake",
    title: "Brake Service\n& Replacement",
    image: "/images/service-brake.png",
    iconSvg: (
      <svg className="w-4 h-4 text-[#00c8ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" />
        <line x1="20" y1="12" x2="22" y2="12" /><line x1="2" y1="12" x2="4" y2="12" />
      </svg>
    ),
  },
  {
    id: "suspension",
    title: "Suspension\n& Steering Repair",
    image: "/images/service-suspension.png",
    iconSvg: (
      <svg className="w-4 h-4 text-[#00c8ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" /><path d="M8 6h8" />
        <path d="M9 10l6 4" /><path d="M15 10l-6 4" />
        <path d="M8 18h8" /><path d="M12 18v4" />
      </svg>
    ),
  },
  {
    id: "diagnostics",
    title: "BMW\nDiagnostics",
    image: "/images/service-diagnostics.png",
    iconSvg: (
      <svg className="w-4 h-4 text-[#00c8ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M6 10l3-3 3 6 3-4 3 1" />
      </svg>
    ),
  },
  {
    id: "cooling",
    title: "Cooling System\nService",
    image: "/images/service-cooling.png",
    iconSvg: (
      <svg className="w-4 h-4 text-[#00c8ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" />
      </svg>
    ),
  },
  {
    id: "general",
    title: "General Repair\n& Maintenance",
    image: "/images/service-general.png",
    iconSvg: (
      <svg className="w-4 h-4 text-[#00c8ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Mouse drag state for smooth desktop drag-scrolling
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  // Guarantee ONLY the active viewport background video plays (mobile vs desktop) for smooth performance
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const syncVideos = () => {
      const isDesktop = mediaQuery.matches;
      const activeVideo = isDesktop ? desktopVideoRef.current : mobileVideoRef.current;
      const inactiveVideo = isDesktop ? mobileVideoRef.current : desktopVideoRef.current;

      if (inactiveVideo) {
        inactiveVideo.pause();
      }

      if (activeVideo) {
        activeVideo.defaultMuted = true;
        activeVideo.muted = true;
        const promise = activeVideo.play();
        if (promise !== undefined) {
          promise.catch(() => {});
        }
      }
    };

    syncVideos();

    const desktopEl = desktopVideoRef.current;
    const mobileEl = mobileVideoRef.current;

    desktopEl?.addEventListener("canplay", syncVideos);
    mobileEl?.addEventListener("canplay", syncVideos);
    mediaQuery.addEventListener("change", syncVideos);

    const onUserGesture = () => {
      syncVideos();
      window.removeEventListener("click", onUserGesture);
      window.removeEventListener("touchstart", onUserGesture);
      window.removeEventListener("scroll", onUserGesture);
    };

    window.addEventListener("click", onUserGesture, { once: true });
    window.addEventListener("touchstart", onUserGesture, { once: true });
    window.addEventListener("scroll", onUserGesture, { once: true });

    return () => {
      desktopEl?.removeEventListener("canplay", syncVideos);
      mobileEl?.removeEventListener("canplay", syncVideos);
      mediaQuery.removeEventListener("change", syncVideos);
    };
  }, []);

  // Update slider navigation buttons and progress indicators
  const checkScroll = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const { scrollLeft, scrollWidth, clientWidth } = slider;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 6);

    // Calculate approximate active card index
    const approxCardWidth = 165;
    const index = Math.min(
      servicesList.length - 1,
      Math.max(0, Math.round(scrollLeft / approxCardWidth))
    );
    setActiveCardIndex(index);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    checkScroll();
    slider.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    return () => {
      slider.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  // Smooth scroll handler for Prev / Next controls
  const handleScroll = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const step =
      slider.clientWidth < 640
        ? slider.clientWidth * 0.75
        : slider.clientWidth < 1024
          ? 340
          : 420;

    slider.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const slider = sliderRef.current;
    if (!slider) return;
    isMouseDownRef.current = true;
    startXRef.current = e.pageX - slider.offsetLeft;
    scrollLeftRef.current = slider.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current) return;
    e.preventDefault();
    const slider = sliderRef.current;
    if (!slider) return;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;
    slider.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isMouseDownRef.current = false;
  };

  return (
    <section className="relative h-full w-full flex flex-col justify-end overflow-hidden bg-black text-white">
      {/* Background Container: Responsive Desktop & Mobile Video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden bg-black">
        {/* Desktop Video (>= md) */}
        <video
          ref={desktopVideoRef}
          src="/images/hero-desktop.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="hidden md:block w-full h-full object-cover object-center"
        >
          <source src="/images/hero-desktop.mp4" type="video/mp4" />
        </video>

        {/* Mobile Video (< md) */}
        <video
          ref={mobileVideoRef}
          src="/images/mobile-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="block md:hidden w-full h-full object-cover object-center"
        >
          <source src="/images/mobile-hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 5 Trust Pillars / Stats Badges Bar - Hidden on Mobile View, Visible on sm+ */}
      <div className="hidden sm:block relative z-10 w-full max-w-[1920px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 xl:px-[80px] pb-2 sm:pb-3">
        <div className="pt-2 sm:pt-4 border-t border-white/10 flex overflow-x-auto no-scrollbar sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-8 items-center">
          {/* Badge 1: 25+ Years */}
          <div className="shrink-0 flex items-center gap-2.5 sm:gap-3.5">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#00c8ff] drop-shadow-[0_0_12px_rgba(0,200,255,0.8)]" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" opacity="0.8" />
                <path d="M12 28C10 20 16 12 24 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M36 28C38 20 32 12 24 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[#00c8ff] font-black text-xs sm:text-sm tracking-tighter drop-shadow-[0_0_8px_#00c8ff]">
                25+
              </span>
            </div>
            <div className="text-[11px] sm:text-xs md:text-sm font-medium text-gray-200 leading-snug whitespace-nowrap sm:whitespace-normal">
              Years of
              <br />
              <span className="text-white font-semibold">BMW Expertise</span>
            </div>
          </div>

          {/* Badge 2: Certified Technicians */}
          <div className="shrink-0 flex items-center gap-2.5 sm:gap-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full border-2 border-[#00c8ff]/80 bg-sky-950/40 flex items-center justify-center shadow-[0_0_14px_rgba(0,200,255,0.7)]">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00c8ff] drop-shadow-[0_0_8px_#00c8ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                <path d="M9.3 6.3a1 1 0 0 1 0 1.4L7.7 9.3a1 1 0 0 1-1.4 0L2.53 5.53a6 6 0 0 0 7.94 7.94l6.91 6.91a2.12 2.12 0 0 0 3-3l-6.91-6.91a6 6 0 0 0-7.94-7.94l3.77 3.77z" />
              </svg>
            </div>
            <div className="text-[11px] sm:text-xs md:text-sm font-medium text-gray-200 leading-snug whitespace-nowrap sm:whitespace-normal">
              Certified
              <br />
              <span className="text-white font-semibold">BMW Technicians</span>
            </div>
          </div>

          {/* Badge 3: Diagnostics */}
          <div className="shrink-0 flex items-center gap-2.5 sm:gap-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full border-2 border-[#00c8ff]/80 bg-sky-950/40 flex items-center justify-center shadow-[0_0_14px_rgba(0,200,255,0.7)]">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00c8ff] drop-shadow-[0_0_8px_#00c8ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <path d="M6 10l3-3 3 6 3-4 3 1" />
              </svg>
            </div>
            <div className="text-[11px] sm:text-xs md:text-sm font-medium text-gray-200 leading-snug whitespace-nowrap sm:whitespace-normal">
              Advanced
              <br />
              <span className="text-white font-semibold">BMW Diagnostics</span>
            </div>
          </div>

          {/* Badge 4: OEM Parts */}
          <div className="shrink-0 flex items-center gap-2.5 sm:gap-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full border-2 border-[#00c8ff]/80 bg-sky-950/40 flex items-center justify-center shadow-[0_0_14px_rgba(0,200,255,0.7)]">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00c8ff] drop-shadow-[0_0_8px_#00c8ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <div className="text-[11px] sm:text-xs md:text-sm font-medium text-gray-200 leading-snug whitespace-nowrap sm:whitespace-normal">
              OEM & High-Quality
              <br />
              <span className="text-white font-semibold">Parts</span>
            </div>
          </div>

          {/* Badge 5: Trusted & Transparent */}
          <div className="shrink-0 flex items-center gap-2.5 sm:gap-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full border-2 border-[#00c8ff]/80 bg-sky-950/40 flex items-center justify-center shadow-[0_0_14px_rgba(0,200,255,0.7)]">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00c8ff] drop-shadow-[0_0_8px_#00c8ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className="text-[11px] sm:text-xs md:text-sm font-medium text-gray-200 leading-snug whitespace-nowrap sm:whitespace-normal">
              Trusted, Reliable
              <br />
              <span className="text-white font-semibold">& Transparent</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Services Strip: "Our BMW Services" + Responsive Neon Glass Cards Slider */}
      <div className="relative z-10 w-full bg-gradient-to-t from-black via-black/95 to-transparent pt-2 sm:pt-3 pb-3 sm:pb-4 border-t border-white/10 overflow-hidden">
        {/* Automatic Linear Light Beam sweeping left-to-right & right-to-left along top of services */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] overflow-hidden pointer-events-none">
          <div className="w-1/4 h-full bg-gradient-to-r from-transparent via-[#00c8ff] via-white to-transparent shadow-[0_0_14px_#00c8ff] animate-laser" />
        </div>

        <div className="w-full max-w-[1920px] mx-auto px-3 sm:px-6 md:px-10 lg:px-12 xl:px-[80px]">
          <div className="flex flex-col xl:flex-row items-stretch xl:items-center gap-2.5 sm:gap-4">

            {/* Header & Controls Bar: Responsive on Mobile & Large Screens */}
            <div className="shrink-0 flex items-center justify-between xl:flex-col xl:items-start xl:justify-center gap-2 sm:gap-3.5 pr-1 sm:pr-2">
              {/* Title Badge: Our BMW Services with 3 M-stripes */}
              <div className="flex items-center gap-2.5 sm:gap-3.5">
                <div className="flex items-center gap-1 sm:gap-1.5 -skew-x-24">
                  <div className="w-2.5 sm:w-3 h-6 sm:h-8 bg-[#E00000] shadow-[0_0_10px_#E00000]" />
                  <div className="w-2.5 sm:w-3 h-6 sm:h-8 bg-[#002B7F]" />
                  <div className="w-2.5 sm:w-3 h-6 sm:h-8 bg-[#0088CE] shadow-[0_0_10px_#0088CE]" />
                </div>
                <div>
                  <div className="text-lg xs:text-xl sm:text-2xl xl:text-3xl font-black italic tracking-wide text-white leading-none">
                    Our BMW
                    <span className="xl:hidden"> </span>
                    <br className="hidden xl:block" />
                    <span className="text-sky-400">Services</span>
                  </div>
                  <div className="text-[9px] xs:text-[10px] text-gray-400 font-semibold tracking-wider uppercase mt-0.5 hidden xs:block xl:hidden">
                    Certified Precision Care
                  </div>
                </div>
              </div>

              {/* Slider Navigation Buttons & Indicator */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Active Index Indicator */}
                <div className="hidden xs:flex items-center gap-1 px-2 py-0.5 sm:py-1 rounded-full bg-sky-950/60 border border-sky-400/30 text-[10px] sm:text-[11px] font-mono text-gray-300">
                  <span className="text-[#00c8ff] font-bold">{activeCardIndex + 1}</span>
                  <span className="text-gray-500">/</span>
                  <span>{servicesList.length}</span>
                </div>

                {/* Prev Navigation Button */}
                <button
                  type="button"
                  onClick={() => handleScroll("left")}
                  disabled={!canScrollLeft}
                  aria-label="Previous services"
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center border transition-all duration-200 ${canScrollLeft
                    ? "bg-sky-950/80 border-sky-400/60 text-sky-300 hover:bg-sky-500/30 hover:border-sky-300 shadow-[0_0_12px_rgba(0,200,255,0.5)] active:scale-95 cursor-pointer"
                    : "bg-white/5 border-white/10 text-gray-600 cursor-not-allowed opacity-35"
                    }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Next Navigation Button */}
                <button
                  type="button"
                  onClick={() => handleScroll("right")}
                  disabled={!canScrollRight}
                  aria-label="Next services"
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center border transition-all duration-200 ${canScrollRight
                    ? "bg-sky-950/80 border-sky-400/60 text-sky-300 hover:bg-sky-500/30 hover:border-sky-300 shadow-[0_0_12px_rgba(0,200,255,0.5)] active:scale-95 cursor-pointer"
                    : "bg-white/5 border-white/10 text-gray-600 cursor-not-allowed opacity-35"
                    }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 8 Horizontal Angled Glassmorphism Cards Slider */}
            <div className="relative flex-1 min-w-0 group/slider">
              {/* Left / Right Subtle Glowing Gradient Faders */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10 transition-opacity duration-300 ${canScrollLeft ? "opacity-100" : "opacity-0"
                  }`}
              />
              <div
                className={`absolute right-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10 transition-opacity duration-300 ${canScrollRight ? "opacity-100" : "opacity-0"
                  }`}
              />

              {/* Floating Edge Arrow Buttons for Large Screens */}
              {canScrollLeft && (
                <button
                  type="button"
                  onClick={() => handleScroll("left")}
                  aria-label="Previous"
                  className="hidden 2xl:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/90 border border-sky-400/70 text-sky-300 items-center justify-center shadow-[0_0_16px_rgba(0,200,255,0.6)] hover:scale-110 hover:bg-sky-950 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              )}

              {canScrollRight && (
                <button
                  type="button"
                  onClick={() => handleScroll("right")}
                  aria-label="Next"
                  className="hidden 2xl:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/90 border border-sky-400/70 text-sky-300 items-center justify-center shadow-[0_0_16px_rgba(0,200,255,0.6)] hover:scale-110 hover:bg-sky-950 transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}

              {/* Slider Track with Native Touch Snap & Desktop Mouse Drag */}
              <div
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                className="flex items-stretch gap-2 sm:gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar py-1.5 px-0.5 cursor-grab active:cursor-grabbing select-none"
              >
                {servicesList.map((service, index) => (
                  <div
                    key={service.id}
                    className="group relative w-[136px] min-w-[136px] xs:w-[148px] xs:min-w-[148px] sm:w-[158px] sm:min-w-[158px] md:w-[168px] md:min-w-[168px] lg:w-[172px] lg:min-w-[172px] xl:w-[176px] xl:min-w-[176px] snap-start shrink-0 flex flex-col justify-between rounded-xl bg-gradient-to-b from-slate-900/90 via-black/95 to-black border border-sky-400/50 hover:border-sky-300 p-2 sm:p-2.5 transition-all duration-300 shadow-[0_0_15px_rgba(0,180,255,0.25)] hover:shadow-[0_0_25px_rgba(0,200,255,0.6)] hover:scale-[1.03] cursor-pointer overflow-hidden animate-neon-pulse"
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                      animationDelay: `${index * 0.35}s`,
                    }}
                  >
                    {/* Automatic Linear Light Sweep across top chamfer border (left to right & right to left) */}
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] overflow-hidden pointer-events-none">
                      <div
                        className="w-full h-full bg-gradient-to-r from-transparent via-[#00c8ff] via-white to-transparent shadow-[0_0_12px_#00c8ff] animate-laser"
                        style={{ animationDelay: `${index * 0.3}s` }}
                      />
                    </div>

                    {/* Automatic Linear Diagonal Light Sheen gliding across card face */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                      <div
                        className="w-[70%] h-full bg-gradient-to-r from-transparent via-cyan-400/20 via-white/10 to-transparent animate-light-sheen"
                        style={{ animationDelay: `${index * 0.4}s` }}
                      />
                    </div>

                    {/* Thumbnail Image */}
                    <div className="relative w-full h-15 xs:h-17 sm:h-20 rounded-lg overflow-hidden bg-black/60 mb-1.5 sm:mb-2 border border-white/10 shrink-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={180}
                        height={110}
                        draggable={false}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Circular Icon & Title */}
                    <div className="flex flex-col items-center text-center mt-auto">
                      <div className="mb-1 sm:mb-1.5 p-1 rounded-full bg-sky-950/70 border border-[#00c8ff]/60 group-hover:scale-110 shadow-[0_0_8px_rgba(0,200,255,0.5)] transition-transform shrink-0">
                        {service.iconSvg}
                      </div>
                      <p className="text-[10px] xs:text-[11px] sm:text-xs font-bold text-gray-100 group-hover:text-[#00c8ff] leading-tight whitespace-pre-line transition-colors">
                        {service.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
