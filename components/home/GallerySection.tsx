"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Images, X } from "lucide-react";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "engine",
    src: "/images/gallery/1.jpg",
    alt: "BMW M Twin-Turbo Engine Bay Service",
  },
  {
    id: "brakes",
    src: "/images/gallery/2.jpg",
    alt: "BMW M Cross-Drilled Brake Rotor and Caliper",
  },
  {
    id: "oil",
    src: "/images/gallery/3.jpg",
    alt: "BMW Synthetic Oil Change Service",
  },
  {
    id: "diagnostics",
    src: "/images/gallery/4.jpg",
    alt: "BMW Factory Computer Diagnostics",
  },
  {
    id: "suspension",
    src: "/images/gallery/5.jpg",
    alt: "BMW Performance Coilover Suspension Repair",
  },
  {
    id: "transmission",
    src: "/images/gallery/6.jpg",
    alt: "BMW Transmission Gear Assembly Overhaul",
  },
  {
    id: "exhaust",
    src: "/images/gallery/7.jpg",
    alt: "BMW M Carbon Performance Exhaust System",
  },
  {
    id: "lift",
    src: "/images/gallery/8.jpg",
    alt: "BMW Vehicle Inspection on Hydraulic Lift",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section
      id="gallery"
      className="relative w-full bg-gradient-to-b from-[#040f20] via-[#061830] to-[#030b18] text-white pt-12 sm:pt-16 lg:pt-36 pb-28 sm:pb-32 overflow-hidden border-t border-white/10 select-none"
    >
      {/* Mobile / Tablet Dark Studio Ambient Accents (< lg) */}
      <div className="lg:hidden absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <div className="flex-1 bg-[#0088CE]" />
          <div className="flex-1 bg-[#002B7F]" />
          <div className="flex-1 bg-[#E30613]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(0,136,206,0.22),transparent)]" />
      </div>

      {/* Desktop Background Image: /images/gallery-bg-1.jpg (lg+ only so mobile white trapezoid never obscures white title) */}
      <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <Image
          src="/images/gallery-bg-1.jpg"
          alt="Btech BMW Service Gallery Background"
          fill
          unoptimized
          className="object-cover object-top w-full h-full"
        />
      </div>

      {/* Main Content Container (Same outer width & padding as all sections) */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        {/* Header Area: Centered "Our Gallery" + Subtitle + BMW Roundel Divider */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          {/* Headline with Red Angled Side Brackets */}
          <div className="relative inline-flex items-center px-6 sm:px-10 py-1">
            {/* Left Red Bracket */}
            <div className="hidden sm:block absolute left-0 top-1 bottom-1 w-5 border-l-2 border-t-2 border-b-2 border-[#E30613]/85 -skew-x-18" />

            <h2 className="text-4xl sm:text-5xl xl:text-[58px] font-black italic tracking-tight leading-none">
              <span className="text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.8)]">
                Our{" "}
              </span>
              <span className="bg-gradient-to-r from-[#0088ff] via-[#00bfff] to-[#38bdf8] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(0,180,255,0.55)]">
                Gallery
              </span>
            </h2>

            {/* Right Red Bracket */}
            <div className="hidden sm:block absolute right-0 top-1 bottom-1 w-5 border-r-2 border-t-2 border-b-2 border-[#E30613]/85 -skew-x-18" />
          </div>

          {/* Subtitle */}
          <p className="mt-2.5 text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.26em] text-gray-200 uppercase">
            A LOOK INSIDE OUR BMW SERVICE WORK
          </p>

          {/* Horizontal Divider with Centered BMW Roundel Icon */}
          <div className="relative flex items-center justify-center w-64 sm:w-96 mt-3">
            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-sky-300/70 to-sky-300" />
            <div className="mx-3 shrink-0 rounded-full p-0.5 bg-slate-900 border border-white/60 shadow-[0_0_12px_rgba(0,200,255,0.65)]">
              <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" fill="#111827" stroke="#e5e7eb" strokeWidth="1.5" />
                <circle cx="16" cy="16" r="9.5" fill="#ffffff" />
                <path d="M16 6.5A9.5 9.5 0 0 0 6.5 16H16V6.5Z" fill="#0088CE" />
                <path d="M16 25.5A9.5 9.5 0 0 0 25.5 16H16V25.5Z" fill="#0088CE" />
              </svg>
            </div>
            <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-sky-300/70 to-sky-300" />
          </div>
        </div>

        {/* 8 Gallery Cards: 4 Cards Per Row (2 Rows of 4 on Desktop) */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 xl:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative transition-all duration-300 hover:-translate-y-1.5 drop-shadow-[0_0_14px_rgba(0,175,255,0.5)] hover:drop-shadow-[0_0_26px_rgba(0,215,255,0.9)] cursor-pointer"
            >
              {/* Angled Parallelogram Outer Neon Border */}
              <div
                className="relative p-[2.5px] bg-gradient-to-b from-white/90 via-[#38bdf8] to-[#00b4ff]"
                style={{
                  clipPath:
                    "polygon(18px 0, 100% 0, calc(100% - 18px) 100%, 0 100%)",
                }}
              >
                {/* Inner Photo Container */}
                <div
                  className="relative w-full h-44 sm:h-48 xl:h-52 overflow-hidden bg-black"
                  style={{
                    clipPath:
                      "polygon(17px 0, 100% 0, calc(100% - 17px) 100%, 0 100%)",
                  }}
                >
                  {/* Automatic Diagonal Specular Sheen */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
                    <div
                      className="w-[70%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-light-sheen"
                      style={{ animationDelay: `${index * 0.28}s` }}
                    />
                  </div>

                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={520}
                    height={360}
                    unoptimized
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />

                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button: "View More Gallery Images ->" */}
        <div className="mt-9 sm:mt-11 flex justify-center">
          <button
            type="button"
            onClick={() => setSelectedImage(galleryItems[0])}
            className="group relative inline-flex items-center gap-3 px-7 sm:px-9 py-3 rounded-xl bg-gradient-to-r from-[#d90416] via-[#7c1b72] to-[#0055d4] text-white text-sm sm:text-base font-extrabold italic tracking-wide border border-sky-300/60 shadow-[0_0_24px_rgba(0,150,255,0.55)] hover:shadow-[0_0_36px_rgba(0,200,255,0.85)] hover:scale-[1.03] active:scale-95 transition-all duration-200 -skew-x-12 cursor-pointer"
          >
            <span className="skew-x-12 inline-flex items-center gap-3">
              <Images className="w-5 h-5 text-white shrink-0" />
              <span>View More Gallery Images</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal when clicking any gallery photo */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-sky-400/50 shadow-[0_0_50px_rgba(0,180,255,0.45)] bg-slate-950"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close preview"
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/70 border border-white/20 text-white hover:text-[#00c8ff] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              unoptimized
              className="w-full h-auto max-h-[80vh] object-contain"
            />
           
          </div>
        </div>
      )}
    </section>
  );
}
