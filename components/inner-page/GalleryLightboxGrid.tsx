"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

export interface GalleryPhotoCard {
  id: string;
  src: string;
  alt: string;
  spanClass: string;
  heightClass: string;
}

export default function GalleryLightboxGrid({
  cards,
}: {
  cards: GalleryPhotoCard[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activePhoto = activeIndex !== null ? cards[activeIndex] : null;

  const showPrev = () => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + cards.length) % cards.length
    );
  };

  const showNext = () => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % cards.length
    );
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + cards.length) % cards.length
        );
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % cards.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, cards.length]);

  return (
    <>
      <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
        {cards.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(idx)}
            aria-label={`View ${item.alt}`}
            className={`group relative overflow-hidden rounded-2xl border border-slate-200 hover:border-[#0070c0]/70 bg-slate-100 shadow-[0_10px_28px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_42px_rgba(0,112,192,0.18)] transition-all duration-300 cursor-pointer ${item.spanClass} ${item.heightClass}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-11 h-11 rounded-full bg-white/95 text-[#005596] shadow-lg flex items-center justify-center">
                <Expand className="w-5 h-5" />
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close lightbox"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Frame */}
          <div
            className="relative w-full max-w-5xl max-h-[85vh] aspect-[16/10] rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activePhoto.src}
              alt={activePhoto.alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
            <div className="absolute bottom-3 right-4 px-3 py-1 rounded-full bg-black/70 border border-white/15 text-xs font-bold text-white">
              {activeIndex + 1} / {cards.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
