"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isHome = pathname === "/";
  const isAbout = pathname === "/about-us";
  const isServices = pathname.startsWith("/services");
  const isModels = pathname.startsWith("/models");
  const isServiceArea = pathname === "/service-area";
  const isGallery = pathname === "/gallery";
  const isContact = pathname === "/contact-us";

  return (
    <header className="absolute top-0 left-0 right-0 z-50 select-none bg-gradient-to-b from-black/98 via-slate-950/90 to-transparent backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
      {/* Ambient Cyber Blue Backlight Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(0,136,206,0.12),transparent)] pointer-events-none" />

      {/* Header Bottom Linear Laser Light running left-to-right & right-to-left */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] overflow-hidden pointer-events-none">
        <div className="w-1/4 h-full bg-gradient-to-r from-transparent via-[#00c8ff] via-white/80 to-transparent shadow-[0_0_14px_#00c8ff] animate-laser opacity-80" />
      </div>

      <div className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14">
        <div className="flex items-center gap-4 lg:gap-8 ">
          {/* Left Side: Pure & Powerful Luxury Shield Emblem */}
          <Link href="/" className="shrink-0 flex items-center group py-1">
            <div className="relative h-20 sm:h-24 md:h-[115px] lg:h-[135px] xl:h-[148px] w-auto flex items-center justify-center drop-shadow-[0_8px_28px_rgba(0,0,0,0.95)] group-hover:scale-[1.03] transition-all duration-300">
              <Image
                src="/images/bmw-logo.png"
                alt="Btech BMW Service Shield Emblem"
                width={1167}
                height={1072}
                priority
                unoptimized
                className="h-20 sm:h-24 md:h-[115px] lg:h-[135px] xl:h-[148px] w-auto object-contain object-left"
              />
            </div>
          </Link>

          {/* Right Column: Centered Top Contact Bar + Laser Divider + Centered Nav Bar */}
          <div className="flex-1 flex flex-col justify-center min-w-0">
            {/* Top Contact Bar (Hidden on mobile view, visible on sm+) */}
            <div className="relative hidden sm:flex items-center justify-center text-xs lg:text-[12.5px] text-gray-200 pb-1.5 sm:pb-2">
              {/* Desktop / Tablet View (>= sm): Centered in Top Header */}
              <div className="hidden sm:flex items-center justify-center flex-1 gap-2.5 lg:gap-3.5 font-medium text-center xl:pr-[160px] 2xl:pr-[190px]">
                {/* Address Capsule */}
                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-sky-400/40 text-gray-200 hover:text-white transition-all whitespace-nowrap shadow-sm text-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#00c8ff] shrink-0" />
                  <span>7500 14th Ave #8, Sacramento, CA 95820</span>
                </div>

                {/* Phone Hotline Capsule */}
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/[0.08] border border-sky-400/30 text-white shadow-[0_0_12px_rgba(0,180,255,0.15)] whitespace-nowrap text-xs">
                  <Phone className="w-3.5 h-3.5 text-[#00c8ff] shrink-0" />
                  <a
                    href="tel:9169558735"
                    className="hover:text-[#00c8ff] transition-colors font-bold tracking-tight"
                  >
                    (916) 955-8735
                  </a>
                </div>

                {/* Email Capsule */}
                <a
                  href="mailto:btechbmwservice@gmail.com"
                  className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-sky-400/40 text-gray-200 hover:text-white transition-all whitespace-nowrap shadow-sm text-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00c8ff] shrink-0" />
                  <span>btechbmwservice@gmail.com</span>
                </a>

                {/* Hours Capsule */}
                <div className="hidden xl:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-300 whitespace-nowrap shadow-sm text-xs">
                  <Clock className="w-3.5 h-3.5 text-[#00c8ff] shrink-0" />
                  <span>Mon – Fri: 6:00 AM – 1:00 PM (By Appointment Only)</span>
                </div>
              </div>

              {/* Flush Top Right BMW M Stripes (Desktop/Tablet) */}
              <div className="hidden sm:flex items-center -skew-x-28 h-6 sm:h-6.5 overflow-hidden pr-1 sm:pr-2 shrink-0 ml-auto xl:absolute xl:right-0 xl:top-1/2 xl:-translate-y-1/2 shadow-[0_0_15px_rgba(0,136,206,0.3)]">
                <div className="w-5 sm:w-6 h-full bg-[#0088CE] shadow-[0_0_10px_#0088CE]" />
                <div className="w-5 sm:w-6 h-full bg-[#002B7F]" />
                <div className="w-5 sm:w-6 h-full bg-[#E00000] shadow-[0_0_10px_#E00000]" />
              </div>
            </div>

            {/* Glowing Blue Cyber Divider Line with Laser Animation (Desktop/Tablet only) */}
            <div className="hidden sm:block relative w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#0088CE]/40 to-[#0088CE]/10 shadow-[0_0_8px_rgba(0,136,206,0.5)] my-1 overflow-hidden">
              <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#00c8ff] via-white to-transparent shadow-[0_0_15px_#00c8ff] animate-laser opacity-95" />
            </div>

            {/* Bottom Row: Centered Navigation Tabs (Home to Contact Us) + Schedule CTA on Right */}
            <div className="relative flex items-center justify-center sm:pt-1">
              {/* Navigation Tabs: Centered directly underneath the centered Top Contact Bar */}
              <nav className="hidden xl:flex items-center justify-center flex-1 gap-2 lg:gap-3 text-[14.5px] lg:text-[15px] font-semibold text-white xl:pr-[160px] 2xl:pr-[190px]">
                <Link
                  href="/"
                  className={
                    isHome
                      ? "relative px-4 py-1.5 rounded-xl bg-sky-500/15 border border-sky-400/40 text-[#00c8ff] font-bold shadow-[0_0_15px_rgba(0,200,255,0.25)] flex items-center gap-1.5 transition-all"
                      : "px-3.5 py-1.5 rounded-lg text-gray-200 hover:text-white hover:bg-white/[0.06] hover:border hover:border-white/10 transition-all font-semibold"
                  }
                >
                  <span>Home</span>
                  {isHome && (
                    <div className="absolute -bottom-1 left-2 right-2 h-[2px] bg-[#00c8ff] rounded-full shadow-[0_0_8px_#00c8ff]" />
                  )}
                </Link>

                <Link
                  href="/about-us"
                  className={
                    isAbout
                      ? "relative px-4 py-1.5 rounded-xl bg-sky-500/15 border border-sky-400/40 text-[#00c8ff] font-bold shadow-[0_0_15px_rgba(0,200,255,0.25)] flex items-center gap-1.5 transition-all"
                      : "px-3.5 py-1.5 rounded-lg text-gray-200 hover:text-white hover:bg-white/[0.06] hover:border hover:border-white/10 transition-all font-semibold"
                  }
                >
                  <span>About Us</span>
                  {isAbout && (
                    <div className="absolute -bottom-1 left-2 right-2 h-[2px] bg-[#00c8ff] rounded-full shadow-[0_0_8px_#00c8ff]" />
                  )}
                </Link>

                {/* Services Dropdown */}
                <div
                  className="relative cursor-pointer group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setServicesOpen((prev) => !prev)}
                    className={
                      isServices
                        ? "relative px-4 py-1.5 rounded-xl bg-sky-500/15 border border-sky-400/40 text-[#00c8ff] font-bold shadow-[0_0_15px_rgba(0,200,255,0.25)] flex items-center gap-1.5 transition-all cursor-pointer"
                        : "px-3.5 py-1.5 rounded-lg text-gray-200 hover:text-white hover:bg-white/[0.06] hover:border hover:border-white/10 flex items-center gap-1.5 transition-all font-semibold cursor-pointer"
                    }
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServices ? "text-[#00c8ff]" : "text-gray-400 group-hover:text-[#00c8ff]"} ${servicesOpen ? "rotate-180 text-[#00c8ff]" : ""}`} />
                    {isServices && (
                      <div className="absolute -bottom-1 left-2 right-2 h-[2px] bg-[#00c8ff] rounded-full shadow-[0_0_8px_#00c8ff]" />
                    )}
                  </button>

                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                      <div className="w-72 rounded-2xl bg-slate-950/98 border border-sky-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.95)] backdrop-blur-2xl py-2">
                        {[
                          { label: "Oil Change & Routine Maintenance", slug: "oil-change-routine-maintenance" },
                          { label: "Engine Repair & Overhaul", slug: "engine-repair-overhaul" },
                          { label: "Transmission Service & Repair", slug: "transmission-service-repair" },
                          { label: "Brake Service & Replacement", slug: "brake-service-replacement" },
                          { label: "Suspension & Steering Repair", slug: "suspension-steering-repair" },
                          { label: "BMW Diagnostics", slug: "bmw-diagnostics" },
                          { label: "Cooling System Service", slug: "cooling-system-service" },
                          { label: "Electrical System Repair", slug: "electrical-system-repair" },
                          { label: "Exhaust System Service", slug: "exhaust-system-service" },
                          { label: "General Repair & Maintenance", slug: "general-repair-maintenance" },
                        ].map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="block px-4 py-2.5 text-xs font-semibold text-gray-200 hover:text-white hover:bg-sky-500/20 hover:border-l-2 hover:border-[#00c8ff] transition-all"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/models/bmw-m-series"
                  className={
                    isModels
                      ? "relative px-4 py-1.5 rounded-xl bg-sky-500/15 border border-sky-400/40 text-[#00c8ff] font-bold shadow-[0_0_15px_rgba(0,200,255,0.25)] flex items-center gap-1.5 transition-all"
                      : "px-3.5 py-1.5 rounded-lg text-gray-200 hover:text-white hover:bg-white/[0.06] hover:border hover:border-white/10 transition-all font-semibold"
                  }
                >
                  <span>BMW Models</span>
                  {isModels && (
                    <div className="absolute -bottom-1 left-2 right-2 h-[2px] bg-[#00c8ff] rounded-full shadow-[0_0_8px_#00c8ff]" />
                  )}
                </Link>

                <Link
                  href="/service-area"
                  className={
                    isServiceArea
                      ? "relative px-4 py-1.5 rounded-xl bg-sky-500/15 border border-sky-400/40 text-[#00c8ff] font-bold shadow-[0_0_15px_rgba(0,200,255,0.25)] flex items-center gap-1.5 transition-all"
                      : "px-3.5 py-1.5 rounded-lg text-gray-200 hover:text-white hover:bg-white/[0.06] hover:border hover:border-white/10 transition-all font-semibold"
                  }
                >
                  <span>Service Area</span>
                  {isServiceArea && (
                    <div className="absolute -bottom-1 left-2 right-2 h-[2px] bg-[#00c8ff] rounded-full shadow-[0_0_8px_#00c8ff]" />
                  )}
                </Link>

                <Link
                  href="/gallery"
                  className={
                    isGallery
                      ? "relative px-4 py-1.5 rounded-xl bg-sky-500/15 border border-sky-400/40 text-[#00c8ff] font-bold shadow-[0_0_15px_rgba(0,200,255,0.25)] flex items-center gap-1.5 transition-all"
                      : "px-3.5 py-1.5 rounded-lg text-gray-200 hover:text-white hover:bg-white/[0.06] hover:border hover:border-white/10 transition-all font-semibold"
                  }
                >
                  <span>Gallery</span>
                  {isGallery && (
                    <div className="absolute -bottom-1 left-2 right-2 h-[2px] bg-[#00c8ff] rounded-full shadow-[0_0_8px_#00c8ff]" />
                  )}
                </Link>

                <Link
                  href="/contact-us"
                  className={
                    isContact
                      ? "relative px-4 py-1.5 rounded-xl bg-sky-500/15 border border-sky-400/40 text-[#00c8ff] font-bold shadow-[0_0_15px_rgba(0,200,255,0.25)] flex items-center gap-1.5 transition-all"
                      : "px-3.5 py-1.5 rounded-lg text-gray-200 hover:text-white hover:bg-white/[0.06] hover:border hover:border-white/10 transition-all font-semibold"
                  }
                >
                  <span>Contact Us</span>
                  {isContact && (
                    <div className="absolute -bottom-1 left-2 right-2 h-[2px] bg-[#00c8ff] rounded-full shadow-[0_0_8px_#00c8ff]" />
                  )}
                </Link>
              </nav>

              {/* Right CTA Button: Luxury Book an Appointment Button (Pinned right on xl so nav stays dead-center) */}
              <div className="hidden sm:flex items-center shrink-0 ml-auto xl:ml-0 xl:absolute xl:right-0 xl:top-1/2 xl:-translate-y-1/2">
                <Link
                  href="/book-appointment"
                  className="group relative overflow-hidden inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0055d4] via-[#0077ff] to-[#00b4ff] text-white text-sm font-bold tracking-wide border border-sky-300/50 shadow-[0_0_25px_rgba(0,140,255,0.7)] hover:shadow-[0_0_38px_rgba(0,190,255,1)] hover:brightness-110 active:scale-95 transition-all duration-200"
                >
                  {/* Automatic Light Sheen sweeping left-to-right across button */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="w-[80%] h-full bg-gradient-to-r from-transparent via-white/35 to-transparent animate-light-sheen" />
                  </div>
                  <Calendar className="w-4 h-4 text-white relative z-10" />
                  <span className="relative z-10">Book an Appointment</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform relative z-10" />
                </Link>
              </div>

              {/* Mobile trigger */}
              <div className="flex xl:hidden items-center gap-3 ml-auto">
                <Link
                  href="/book-appointment"
                  className="flex sm:hidden items-center justify-center p-2 rounded-lg bg-[#007fff] text-white shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  type="button"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6 text-[#00c8ff]" />
                  ) : (
                    <Menu className="w-6 h-6 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-white/10 bg-slate-950/98 backdrop-blur-2xl py-5 px-4 space-y-4">
            <div className="flex flex-col space-y-3 font-medium text-base text-gray-200">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`${isHome ? "text-[#00c8ff] font-semibold" : "text-white hover:text-[#00c8ff]"} px-2 py-1.5 rounded hover:bg-white/5`}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className={`${isAbout ? "text-[#00c8ff] font-semibold" : "text-white hover:text-[#00c8ff]"} px-2 py-1.5 rounded hover:bg-white/5`}
              >
                About Us
              </Link>
              <Link
                href="/services/oil-change-routine-maintenance"
                onClick={() => setMobileMenuOpen(false)}
                className={`${isServices ? "text-[#00c8ff] font-semibold" : "text-white hover:text-[#00c8ff]"} px-2 py-1.5 rounded hover:bg-white/5`}
              >
                Services
              </Link>
              <Link
                href="/models/bmw-m-series"
                onClick={() => setMobileMenuOpen(false)}
                className={`${isModels ? "text-[#00c8ff] font-semibold" : "text-white hover:text-[#00c8ff]"} px-2 py-1.5 rounded hover:bg-white/5`}
              >
                BMW Models
              </Link>
              <Link
                href="/service-area"
                onClick={() => setMobileMenuOpen(false)}
                className={`${isServiceArea ? "text-[#00c8ff] font-semibold" : "text-white hover:text-[#00c8ff]"} px-2 py-1.5 rounded hover:bg-white/5`}
              >
                Service Area
              </Link>
              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className={`${isGallery ? "text-[#00c8ff] font-semibold" : "text-white hover:text-[#00c8ff]"} px-2 py-1.5 rounded hover:bg-white/5`}
              >
                Gallery
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className={`${isContact ? "text-[#00c8ff] font-semibold" : "text-white hover:text-[#00c8ff]"} px-2 py-1.5 rounded hover:bg-white/5`}
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-3">
              <Link
                href="/book-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#0060df] to-[#00a3ff] text-white font-bold text-sm shadow-[0_0_20px_rgba(0,130,255,0.5)]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="text-xs text-gray-300 space-y-2 pt-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#00c8ff] shrink-0 mt-0.5" />
                  <span>7500 14th Ave #8, Sacramento, CA 95820</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#00c8ff] shrink-0" />
                  <a href="tel:9169558735" className="text-gray-100 hover:text-[#00c8ff]">
                    (916) 955-8735
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#00c8ff] shrink-0" />
                  <a href="mailto:btechbmwservice@gmail.com" className="text-gray-100 hover:text-[#00c8ff]">
                    btechbmwservice@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#00c8ff] shrink-0" />
                  <span>6:00 AM – 1:00 PM Mon – Fri (By Appointment Only)</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
