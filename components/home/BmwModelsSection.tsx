"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Gauge, ShieldCheck, Sparkles } from "lucide-react";

interface BmwModelCard {
  id: string;
  slug: string;
  series: string;
  title: string;
  models: string;
  description: string;
  accent: string;
}

const bmwModels: BmwModelCard[] = [
  {
    id: "m-series",
    slug: "bmw-m-series",
    series: "M PERFORMANCE",
    title: "BMW M Series",
    models: "M2 • M3 • M4 • M5 • M8 • X5 M • X6 M",
    description:
      "Track-calibrated engine tuning, DCT/M-Steptronic service, carbon-ceramic brakes, and differential care.",
    accent: "from-[#0088CE] via-[#002B7F] to-[#E30613]",
  },
  {
    id: "x-series",
    slug: "bmw-x-series",
    series: "SAV & CROSSOVER",
    title: "BMW X Series",
    models: "X1 • X2 • X3 • X4 • X5 • X6 • X7 • XM",
    description:
      "xDrive AWD transfer case service, air suspension calibration, cooling systems, and heavy-duty brake care.",
    accent: "from-[#0052b4] to-[#0088CE]",
  },
  {
    id: "sedans",
    slug: "bmw-sedans",
    series: "EXECUTIVE SEDANS",
    title: "3, 5 & 7 Series",
    models: "320i • 330i • 340i • 530i • 540i • 740i • 750i",
    description:
      "Factory-scheduled maintenance, turbocharger & timing chain repair, and comfort electronics diagnostics.",
    accent: "from-[#002B7F] to-[#0052b4]",
  },
  {
    id: "coupes",
    slug: "bmw-coupes-gran-coupes",
    series: "COUPES & ROADSTERS",
    title: "2, 4, 8 & Z Series",
    models: "230i • M240i • 430i • 440i • 840i • Z3 • Z4",
    description:
      "Precision wheel alignment, coilover & adaptive M suspension repair, and convertible top hydraulics.",
    accent: "from-[#0088CE] to-[#00a8ff]",
  },
  {
    id: "classics",
    slug: "classic-bmws",
    series: "HERITAGE & VINTAGE",
    title: "Classic BMWs",
    models: "BMW 2002 • E30 • E36 • E46 • E39 • E60",
    description:
      "Specialized mechanical restoration, VANOS rebuilds, manual transmission overhauls, and OEM sourcing.",
    accent: "from-[#E30613] to-[#b8040f]",
  },
];

export default function BmwModelsSection() {
  return (
    <section
      id="models"
      className="relative w-full bg-white text-[#0d2240] py-12 sm:py-16 lg:py-20 overflow-hidden border-t border-slate-200 select-none"
    >
      {/* Subtle Clean White Showroom Ambient Highlights */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(0,136,206,0.05),transparent)]" />

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-2.5 mb-2">
            <span className="inline-flex items-center -skew-x-24 gap-1 shrink-0">
              <span className="w-2.5 h-5 bg-[#0088CE]" />
              <span className="w-2.5 h-5 bg-[#002B7F]" />
              <span className="w-2.5 h-5 bg-[#E30613]" />
            </span>
            <span className="text-xs sm:text-sm font-black italic tracking-[0.26em] text-[#0d2240] uppercase">
              MODELS WE SERVICE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-[50px] font-black italic tracking-tight leading-[1.06] text-[#0d2240]">
            Every BMW Generation.{" "}
            <span className="text-[#0050c8]">Factory-Level Care.</span>
          </h2>

          <p className="mt-3 max-w-2xl text-xs sm:text-sm md:text-base font-medium text-slate-600 leading-relaxed">
            From vintage 1974 BMW 2002 classics to modern M, X, and gas-powered
            Series vehicles, our Sacramento shop has the specialized tools and
            diagnostics for your BMW.
          </p>

          <div className="w-20 h-[3.5px] bg-[#E30613] mt-4 rounded-full" />
        </div>

        {/* 5 BMW Model Cards (Centered Flex Grid: 3 on top, 2 centered below) */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
          {bmwModels.map((item) => (
            <div
              key={item.id}
              className="group relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col justify-between rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-[#0072CE]/50 p-5 sm:p-6 shadow-[0_6px_20px_rgba(13,34,64,0.05)] hover:shadow-[0_14px_34px_rgba(0,114,206,0.14)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Top Gradient Accent Bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent}`}
              />

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] sm:text-[11px] font-black tracking-[0.2em] text-[#0072CE] uppercase">
                    {item.series}
                  </span>
                  <Gauge className="w-4 h-4 text-slate-400 group-hover:text-[#0072CE] transition-colors" />
                </div>

                <h3 className="text-xl sm:text-2xl font-black italic text-[#0d2240] group-hover:text-[#0050c8] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-xs font-bold text-[#E30613] tracking-wide">
                  {item.models}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#0d2240]">
                <span className="inline-flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0072CE]" />
                  OEM Parts &amp; Diagnostics
                </span>
                <Link
                  href={`/models/${item.slug}`}
                  className="inline-flex items-center gap-1 text-[#0050c8] hover:text-[#E30613] transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Clean White Trust Strip Footer */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold text-[#0d2240]">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0072CE]" />
            Dealership-Quality Equipment
          </span>
          <span className="inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#E30613]" />
            30+ Years Sacramento BMW Care • California BAR Certified
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0072CE]" />
            Warranty-Safe Maintenance
          </span>
        </div>
      </div>
    </section>
  );
}
