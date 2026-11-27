import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Calendar,
  Car,
  CheckCircle2,
  Cpu,
  Disc,
  Gauge,
  Phone,
  Settings,
  ShieldCheck,
  UserCheck,
  Wrench,
} from "lucide-react";
import Breadcrum from "@/components/common/Breadcrum";

export interface BmwModelHighlight {
  iconKey: string;
  label: string;
}

export interface BmwModelItem {
  slug: string;
  title: string;
  shortModels: string;
  badge: string;
  image: string;
  heroTitle: string;
  heroDescription: string;
  spotlightDescription: string;
  highlights: BmwModelHighlight[];
}

function MStripes({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1 ${className}`} aria-hidden="true">
      <span className="w-2.5 h-3.5 bg-[#0070c0] -skew-x-[22deg] rounded-[1px]" />
      <span className="w-2.5 h-3.5 bg-[#00a3e0] -skew-x-[22deg] rounded-[1px]" />
      <span className="w-2.5 h-3.5 bg-[#e31e24] -skew-x-[22deg] rounded-[1px]" />
    </div>
  );
}

function ModelCardBadge({ badge, isActive }: { badge: string; isActive: boolean }) {
  if (badge === "M") {
    return (
      <div className="inline-flex items-center gap-1.5" aria-hidden="true">
        <MStripes />
        <span
          className={`text-xl font-black italic tracking-tight ${
            isActive ? "text-white" : "text-gray-900"
          }`}
        >
          M
        </span>
      </div>
    );
  }
  if (badge === "X") {
    return (
      <span
        className={`text-xl font-black italic tracking-tight ${
          isActive ? "text-[#00c8ff]" : "text-gray-900"
        }`}
        aria-hidden="true"
      >
        X
      </span>
    );
  }
  return (
    <Car
      className={`w-6 h-6 ${isActive ? "text-[#00c8ff]" : "text-gray-700"}`}
      strokeWidth={1.75}
    />
  );
}

function HighlightIcon({ iconKey }: { iconKey: string }) {
  const cls = "w-5 h-5 text-[#00a3e0] shrink-0";
  switch (iconKey) {
    case "diagnostics":
      return <Cpu className={cls} />;
    case "brake":
      return <Disc className={cls} />;
    case "engine":
      return <Wrench className={cls} />;
    case "transmission":
      return <Settings className={cls} />;
    case "gauge":
      return <Gauge className={cls} />;
    default:
      return <ShieldCheck className={cls} />;
  }
}

export default function BmwModelDetailContent({
  model,
  allModels,
}: {
  model: BmwModelItem;
  allModels: BmwModelItem[];
}) {
  return (
    <>
      {/* 1. Shared Dark Breadcrumb Banner (/images/breadcrumb-bg.jpg) */}
      <Breadcrum
        title="Expert BMW Service for Every Model"
        description={model.heroDescription}
        items={[
          { label: "BMW Models", href: "/models/bmw-m-series" },
          { label: model.title },
        ]}
      />

      {/* 2. White Section: Our BMW Model Services (5 Interactive Selector Cards) */}
      <section className="bg-white text-gray-900 py-12 sm:py-16">
        <div className="w-full max-w-[1920px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <MStripes className="shrink-0" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold italic tracking-tight text-gray-950">
                Our BMW Model Services
              </h2>
            </div>
            <div className="w-14 h-1 bg-[#e31e24] mx-auto mt-3 rounded-full" />
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              From high-performance M models to luxury sedans and timeless
              classics, we provide expert, model-specific service for your BMW.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {allModels.map((item) => {
              const isActive = item.slug === model.slug;
              return (
                <Link
                  key={item.slug}
                  href={`/models/${item.slug}`}
                  className={
                    isActive
                      ? "group relative flex flex-col overflow-hidden rounded-2xl border-2 border-[#00a3e0] bg-[#060d1b] text-white shadow-[0_0_28px_rgba(0,163,224,0.35)] transition-all"
                      : "group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 hover:border-[#0070c0]/70 bg-white text-gray-950 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                  }
                >
                  <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-[#040812]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 20vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex-1 p-4 text-center flex flex-col items-center justify-center">
                    <div className="mb-1.5">
                      <ModelCardBadge badge={item.badge} isActive={isActive} />
                    </div>
                    <h3
                      className={`text-sm sm:text-base font-extrabold leading-snug ${
                        isActive ? "text-white" : "text-gray-950"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-0.5 text-xs ${
                        isActive ? "text-sky-200" : "text-gray-600"
                      }`}
                    >
                      {item.shortModels}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Dark Model Spotlight Split Banner */}
      <section className="relative overflow-hidden bg-[#050b16] text-white">
        <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Spotlight Photo */}
          <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[360px] lg:min-h-[440px]">
            <Image
              src={model.image}
              alt={model.heroTitle}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050b16] to-transparent" />
            <div className="lg:hidden absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#050b16] to-transparent" />
          </div>

          {/* Right Spotlight Details */}
          <div className="lg:col-span-6 px-4 sm:px-8 md:px-12 lg:px-14 xl:px-16 py-10 sm:py-14 flex flex-col justify-center">
            <div className="flex items-center gap-2.5">
              <MStripes />
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#00a3e0]">
                Model Spotlight
              </span>
            </div>

            <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold italic tracking-tight text-white">
              {model.heroTitle}
            </h2>
            <p className="mt-1 text-sm sm:text-base font-bold italic text-sky-300">
              {model.shortModels}
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
              {model.spotlightDescription}
            </p>

            <div className="mt-7 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {model.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-400/25 flex items-center justify-center shrink-0">
                    <HighlightIcon iconKey={highlight.iconKey} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-100">
                    {highlight.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. White Section: Why BMW Owners Trust Us */}
      <section className="bg-white text-gray-900 py-14 sm:py-16">
        <div className="w-full max-w-[1920px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <MStripes className="shrink-0" />
              <h2 className="text-2xl sm:text-3xl font-extrabold italic tracking-tight text-gray-950">
                Why BMW Owners Trust Us
              </h2>
            </div>
            <div className="w-14 h-1 bg-[#e31e24] mx-auto mt-3 rounded-full" />
          </div>

          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#f8fafc] rounded-xl p-6 border border-gray-200/80 border-b-4 border-b-[#0070c0] text-center shadow-sm">
              <CheckCircle2 className="w-9 h-9 text-[#0070c0] mx-auto" strokeWidth={1.75} />
              <h3 className="mt-3 text-base font-extrabold text-gray-950">
                Model-Specific Expertise
              </h3>
            </div>

            <div className="bg-[#f8fafc] rounded-xl p-6 border border-gray-200/80 border-b-4 border-b-[#0070c0] text-center shadow-sm">
              <Award className="w-9 h-9 text-[#0070c0] mx-auto" strokeWidth={1.75} />
              <h3 className="mt-3 text-base font-extrabold text-gray-950">
                OEM-Quality Parts
              </h3>
            </div>

            <div className="bg-[#f8fafc] rounded-xl p-6 border border-gray-200/80 border-b-4 border-b-[#0070c0] text-center shadow-sm">
              <UserCheck className="w-9 h-9 text-[#0070c0] mx-auto" strokeWidth={1.75} />
              <h3 className="mt-3 text-base font-extrabold text-gray-950">
                Experienced BMW Technicians
              </h3>
            </div>

            <div className="bg-[#f8fafc] rounded-xl p-6 border border-gray-200/80 border-b-4 border-b-[#0070c0] text-center shadow-sm">
              <ShieldCheck className="w-9 h-9 text-[#0070c0] mx-auto" strokeWidth={1.75} />
              <h3 className="mt-3 text-base font-extrabold text-gray-950">
                Reliable &amp; Transparent Service
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Wide Lineup Banner */}
      <section className="relative overflow-hidden bg-[#040812] text-white pb-36 sm:pb-32 lg:pb-28">
        <div className="relative w-full h-56 sm:h-72 lg:h-96 overflow-hidden">
          <Image
            src="/images/models/bmw-lineup.jpg"
            alt="Full lineup of BMW models serviced at Btech BMW Service"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#040812] to-transparent" />
        </div>

       
      </section>
    </>
  );
}
