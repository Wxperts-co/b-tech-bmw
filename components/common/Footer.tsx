"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckSquare,
  ChevronDown,
  ChevronRight,
  Headset,
  Layers,
  Mail,
  MapPin,
  Phone,
  User,
  Wrench,
} from "lucide-react";

const footerServices = [
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
];

const quickLinks = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "About Us", href: "/about-us", hasDropdown: false },
  { label: "Services", href: "/services/oil-change-routine-maintenance", hasDropdown: true },
  { label: "BMW Models", href: "/models/bmw-m-series", hasDropdown: false },
  { label: "Service Area", href: "/service-area", hasDropdown: false },
  { label: "Gallery", href: "/gallery", hasDropdown: false },
  { label: "Contact Us", href: "/contact-us", hasDropdown: false },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#030914] text-white select-none">
      {/* Half-and-Half Divided Red CTA Bridge (Positioned Absolute on Top Seam between Gallery & Footer) */}
      <div className="absolute left-0 right-0 top-0 -translate-y-1/2 z-30 w-full max-w-[1920px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 xl:px-[80px] pointer-events-none">
        <div className="pointer-events-auto relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#a80010] via-[#e30613] to-[#8f000d] border border-white/25 shadow-[0_20px_50px_rgba(227,6,19,0.5),0_0_25px_rgba(0,0,0,0.65)] px-5 sm:px-8 lg:px-12 py-5 sm:py-6 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 overflow-hidden">
          {/* Subtle BMW M-Stripe Diagonal Accent on Left */}
          <div className="hidden sm:flex items-center -skew-x-28 h-full w-24 absolute left-0 top-0 bottom-0 -translate-x-8 opacity-30 pointer-events-none">
            <div className="flex-1 h-full bg-[#0088CE]" />
            <div className="flex-1 h-full bg-[#002B7F]" />
            <div className="flex-1 h-full bg-white" />
          </div>

          <div className="relative z-10 text-center lg:text-left">
            <p className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-red-100 uppercase mb-1">
              SACRAMENTO&apos;S TRUSTED BMW SPECIALISTS
            </p>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black italic text-white leading-tight drop-shadow">
              Ready for Dealership-Level BMW Care?
            </h3>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/book-appointment"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white text-[#0d2240] hover:bg-sky-50 font-black italic text-xs sm:text-sm shadow-lg hover:scale-[1.03] active:scale-95 transition-all"
            >
              <Calendar className="w-4 h-4 text-[#e30613]" />
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4 text-[#e30613] group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:9169558735"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-black/35 hover:bg-black/55 border border-white/30 text-white font-bold text-xs sm:text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>(916) 955-8735</span>
            </a>
          </div>
        </div>
      </div>

      {/* Background Image (/images/footer-bg.jpg) + Left-to-Right & Bottom-Left-to-Top-Right Dark Overlay */}
      <div className="relative w-full overflow-hidden pt-20 sm:pt-24">
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <Image
            src="/images/footer-bg.jpg"
            alt="Btech BMW Service Footer Background"
            fill
            unoptimized
            className="object-cover object-center w-full h-full"
          />
          {/* Left-to-Right Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-[#030914]/45 to-transparent" />
          {/* Bottom-Left to Top-Right Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-[#030914]/45 to-transparent" />
        </div>

        {/* Centered /// M Emblem in Top Carbon Arch */}
        <div className="relative z-10 w-full pt-2 pb-2 flex items-center justify-center gap-1.5">
          <span className="inline-flex items-center -skew-x-28 gap-1 shadow-[0_0_14px_rgba(0,136,206,0.5)]">
            <span className="w-4 h-6 bg-[#0088CE]" />
            <span className="w-4 h-6 bg-[#002B7F]" />
            <span className="w-4 h-6 bg-[#E00000]" />
          </span>
          <span className="text-2xl font-black italic tracking-tighter bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            M
          </span>
        </div>

        {/* Main Footer Content Container */}
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 xl:px-[80px] pt-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-y-[2px] md:gap-8 lg:gap-10">
            {/* Column 1: Brand Crest + B TECH BMW SERVICE + Description */}
            <div className="xl:col-span-3 flex flex-col justify-start pb-0 xl:pb-40">
              <div className="mb-3">
                <Image
                  src="/images/bmw-logo.png"
                  alt="Btech BMW Service Shield"
                  width={1167}
                  height={1072}
                  unoptimized
                  className="h-20 sm:h-24 w-auto object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,0.9)]"
                />
              </div>

              

              <p className="mt-4 text-xs sm:text-[13px] text-gray-200 leading-relaxed max-w-xs drop-shadow">
                30+ years of specialized BMW care. California BAR Certified
                shop trusted by clients from Sacramento, the Bay Area, Arizona,
                and Oregon.
              </p>
            </div>

            {/* Column 2: Our Services (All 10 Services with href="#") */}
            <div className="xl:col-span-3">
              <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#00c8ff]/50">
                <Wrench className="w-5 h-5 text-[#00c8ff] shrink-0" />
                <h3 className="text-lg sm:text-xl font-black italic text-white">
                  Our <span className="text-[#00c8ff]">Services</span>
                </h3>
              </div>

              <ul className="mt-4 space-y-2.5">
                {footerServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-white/95 hover:text-[#00c8ff] transition-colors drop-shadow-sm"
                    >
                      <CheckSquare className="w-4 h-4 text-[#00c8ff] shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="truncate">{service.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links (All 7 Tabs with href="#") */}
            <div className="xl:col-span-3 mt-6 md:mt-0">
              <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#00c8ff]/50">
                <Layers className="w-5 h-5 text-[#00c8ff] shrink-0" />
                <h3 className="text-lg sm:text-xl font-black italic text-white">
                  Quick <span className="text-[#00c8ff]">Links</span>
                </h3>
              </div>

              <ul className="mt-4 divide-y divide-white/10">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between py-2.5 text-xs sm:text-[13.5px] font-semibold text-white/95 hover:text-[#00c8ff] transition-colors drop-shadow-sm"
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown ? (
                        <ChevronDown className="w-4 h-4 text-[#00c8ff] group-hover:translate-y-0.5 transition-transform" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-[#00c8ff] group-hover:translate-x-1 transition-transform" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Get in Touch (Address -> Phone -> Email) + Owner Brian Ingram */}
            <div className="xl:col-span-3 mt-6 md:mt-0 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#00c8ff]/50">
                  <Headset className="w-5 h-5 text-[#00c8ff] shrink-0" />
                  <h3 className="text-lg sm:text-xl font-black italic text-white">
                    Get in <span className="text-[#00c8ff]">Touch</span>
                  </h3>
                </div>

                <div className="mt-4 space-y-4 text-xs sm:text-[13px]">
                  {/* 1. Address (First, matching Header) */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 shrink-0 rounded-full bg-sky-950/70 border border-[#00c8ff]/60 flex items-center justify-center shadow-[0_0_12px_rgba(0,200,255,0.25)]">
                      <MapPin className="w-4 h-4 text-[#00c8ff]" />
                    </div>
                    <p className="font-semibold text-white leading-snug drop-shadow-sm">
                      7500 14th Ave #8, Sacramento, CA 95820
                    </p>
                  </div>

                  {/* 2. Phone Number (Single active number) */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 shrink-0 rounded-full bg-sky-950/70 border border-[#00c8ff]/60 flex items-center justify-center shadow-[0_0_12px_rgba(0,200,255,0.25)]">
                      <Phone className="w-4 h-4 text-[#00c8ff]" />
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 font-bold text-white leading-snug drop-shadow-sm">
                      <a href="tel:9169558735" className="hover:text-[#00c8ff] transition-colors">
                        (916) 955-8735
                      </a>
                    </div>
                  </div>

                  {/* 3. Email */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 shrink-0 rounded-full bg-sky-950/70 border border-[#00c8ff]/60 flex items-center justify-center shadow-[0_0_12px_rgba(0,200,255,0.25)]">
                      <Mail className="w-4 h-4 text-[#00c8ff]" />
                    </div>
                    <a
                      href="mailto:btechbmwservice@gmail.com"
                      className="font-semibold text-white hover:text-[#00c8ff] transition-colors drop-shadow-sm"
                    >
                      btechbmwservice@gmail.com
                    </a>
                  </div>

                  {/* 4. Working Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 shrink-0 rounded-full bg-sky-950/70 border border-[#00c8ff]/60 flex items-center justify-center shadow-[0_0_12px_rgba(0,200,255,0.25)] text-[#00c8ff] font-black text-[10px]">
                      HRS
                    </div>
                    <div className="text-white leading-snug drop-shadow-sm">
                      <p className="font-bold">6:00 AM – 1:00 PM (Mon – Fri)</p>
                      <p className="text-[11px] font-bold text-[#00c8ff] uppercase tracking-wider">
                        By Appointment Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

             
            </div>
          </div>

         

          {/* Bottom Bar: Redesigned Copyright + WXPERTS Agency Credits + Real Social Media Icons */}
          <div className="pt-5 border-t border-white/15 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-gray-200">
            {/* Left: Copyright & Business Name */}
            <p className="text-center lg:text-left font-medium text-white">
              &copy; 2026 <span className="font-bold text-[#00c8ff]">B Tech BMW Service</span>. All rights reserved.
            </p>

            {/* Center: Redesigned WXPERTS Services & Agency Badge */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-200">
                <a
                  href="https://www.wxperts.co/website-development.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00c8ff] transition-colors font-medium"
                >
                  Website Development
                </a>
                <span className="text-gray-500">|</span>
                <a
                  href="https://www.wxperts.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00c8ff] transition-colors font-medium"
                >
                  Hosting
                </a>
                <span className="text-gray-500">|</span>
                <a
                  href="https://www.wxperts.co/search-engine-optimization.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00c8ff] transition-colors font-medium"
                >
                  SEO
                </a>
                <span className="text-gray-500">|</span>
                <a
                  href="https://www.wxperts.co/digital-marketing.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00c8ff] transition-colors font-medium"
                >
                  Digital Marketing
                </a>
              </div>

              <a
                href="https://www.wxperts.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 py-1 rounded-lg bg-white/[0.06] border border-white/15 hover:border-[#00c8ff] transition-all shadow-sm"
              >
                <Image
                  src="/images/wxperts.webp"
                  alt="WXPERTS"
                  width={120}
                  height={48}
                  unoptimized
                  className="h-7 w-auto object-contain"
                />
              </a>
            </div>

            {/* Right: Real Social Media Icons from /images/icons/ */}
            <div className="flex items-center gap-3">
              <span className="text-gray-200 font-semibold">Follow Us:</span>
              <a
                href="https://www.facebook.com/p/B-Tech-BMW-Service-61574383389434/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/25 hover:border-[#00c8ff] hover:scale-110 flex items-center justify-center transition-all p-1.5"
              >
                <Image
                  src="/images/icons/facebook.png"
                  alt="Facebook"
                  width={28}
                  height={28}
                  unoptimized
                  className="w-full h-full object-contain"
                />
              </a>

              <Link
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/25 hover:border-[#00c8ff] hover:scale-110 flex items-center justify-center transition-all p-1.5"
              >
                <Image
                  src="/images/icons/instagram.png"
                  alt="Instagram"
                  width={28}
                  height={28}
                  unoptimized
                  className="w-full h-full object-contain"
                />
              </Link>

              <Link
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/25 hover:border-[#00c8ff] hover:scale-110 flex items-center justify-center transition-all p-1.5"
              >
                <Image
                  src="/images/icons/youtube.png"
                  alt="YouTube"
                  width={28}
                  height={28}
                  unoptimized
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
