import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Disc,
  Droplets,
  Fuel,
  Gauge,
  Phone,
  Settings,
  ShieldCheck,
  ThermometerSnowflake,
  UserCheck,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";
import Breadcrum from "@/components/common/Breadcrum";

export interface ServiceBenefit {
  iconKey: string;
  title: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  iconKey: string;
  image: string;
  secondaryImage: string;
  heroDescription: string;
  intro: string;
  benefits: ServiceBenefit[];
  includesTitle: string;
  includes: string[];
  scheduleTitle: string;
  scheduleDescription: string;
  ctaSubtitle: string;
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

function ServiceNavIcon({ iconKey }: { iconKey: string }) {
  const cls = "w-4 h-4 shrink-0";
  switch (iconKey) {
    case "oil":
      return <Droplets className={cls} />;
    case "engine":
      return <Cpu className={cls} />;
    case "transmission":
      return <Settings className={cls} />;
    case "brake":
      return <Disc className={cls} />;
    case "suspension":
      return <Gauge className={cls} />;
    case "diagnostics":
      return <Cpu className={cls} />;
    case "cooling":
      return <ThermometerSnowflake className={cls} />;
    case "electrical":
      return <Zap className={cls} />;
    case "exhaust":
      return <Wind className={cls} />;
    default:
      return <Wrench className={cls} />;
  }
}

function BenefitIcon({ iconKey }: { iconKey: string }) {
  const cls = "w-7 h-7 text-[#0070c0]";
  switch (iconKey) {
    case "gauge":
      return <Gauge className={cls} strokeWidth={1.75} />;
    case "shield":
      return <ShieldCheck className={cls} strokeWidth={1.75} />;
    case "fuel":
      return <Fuel className={cls} strokeWidth={1.75} />;
    case "check":
      return <CheckCircle2 className={cls} strokeWidth={1.75} />;
    default:
      return <Wrench className={cls} strokeWidth={1.75} />;
  }
}

export default function ServiceDetailContent({
  service,
  allServices,
}: {
  service: ServiceItem;
  allServices: ServiceItem[];
}) {
  return (
    <>
      {/* 1. Shared Dark Breadcrumb Banner (/images/breadcrumb-bg.jpg) */}
      <Breadcrum
        title={service.title}
        description={service.heroDescription}
        items={[
          { label: "Services", href: "/#services" },
          { label: service.title },
        ]}
      />

      {/* 2. White Main Content Area */}
      <section className="bg-white text-gray-900 pt-12 pb-36 sm:pt-16 sm:pb-32 lg:pb-28">
        <div className="w-full max-w-[1920px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Sidebar: Our BMW Services + Need Help CTA (below details on mobile) */}
            <aside className="lg:col-span-4 xl:col-span-3 order-2 lg:order-1">
              <div className="bg-[#060d1b] text-white rounded-2xl p-5 shadow-xl border border-slate-800/80">
                <div className="flex items-center gap-2.5 pb-4 border-b border-white/10">
                  <MStripes />
                  <h2 className="text-lg font-extrabold italic tracking-tight text-white">
                    Our BMW Services
                  </h2>
                </div>

                <nav aria-label="BMW Services" className="mt-4 space-y-1.5">
                  {allServices.map((item) => {
                    const isActive = item.slug === service.slug;
                    return (
                      <Link
                        key={item.slug}
                        href={`/services/${item.slug}`}
                        className={
                          isActive
                            ? "flex items-center justify-between gap-2.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#0066cc] to-[#0099ff] text-white font-bold text-xs sm:text-[13px] shadow-[0_0_20px_rgba(0,140,255,0.4)] border border-sky-300/40 transition-all"
                            : "flex items-center justify-between gap-2.5 px-3.5 py-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/10 text-xs sm:text-[13px] font-medium transition-all"
                        }
                      >
                        <span className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={
                              isActive ? "text-white" : "text-[#00a3e0]"
                            }
                          >
                            <ServiceNavIcon iconKey={item.iconKey} />
                          </span>
                          <span className="leading-snug">{item.shortTitle}</span>
                        </span>
                        {isActive && <ChevronRight className="w-4 h-4 shrink-0" />}
                      </Link>
                    );
                  })}
                </nav>

                {/* Embedded Dark BMW Image */}
                <div className="mt-5 relative h-28 rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/service-section-bg-1.jpg"
                    alt="BMW Service Studio"
                    fill
                    sizes="300px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060d1b] via-transparent to-[#060d1b]/40" />
                </div>

                {/* Need Help Choosing a Service? */}
                <div className="mt-4 pt-2">
                  <MStripes className="mb-2" />
                  <h3 className="text-base font-extrabold italic text-white leading-snug">
                    Need Help Choosing a Service?
                  </h3>
                  <p className="mt-1.5 text-xs text-gray-300 leading-relaxed">
                    Our BMW experts are here to guide you.
                  </p>
                  <Link
                    href="/#schedule"
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#0078d4] to-[#00a3e0] hover:from-[#0066b2] hover:to-[#008ec4] text-white font-bold text-xs shadow-md transition-all"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Right Main Service Content (first on mobile) */}
            <div className="lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
              {/* Top Heading + Subtle BMW Watermark */}
              <div className="relative flex items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2.5">
                    <MStripes />
                    <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#005596]">
                      BMW Service
                    </span>
                  </div>
                  <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-950">
                    {service.title}
                  </h2>
                </div>

                {/* Subtle BMW Roundel Watermark */}
                <div className="hidden sm:block shrink-0 opacity-20" aria-hidden="true">
                  <svg viewBox="0 0 64 64" className="w-16 h-16">
                    <circle cx="32" cy="32" r="29" fill="none" stroke="#1e293b" strokeWidth="4" />
                    <circle cx="32" cy="32" r="19" fill="none" stroke="#1e293b" strokeWidth="2.5" />
                    <path d="M32 13 A19 19 0 0 1 51 32 L32 32 Z" fill="#0070c0" />
                    <path d="M13 32 A19 19 0 0 0 32 51 L32 32 Z" fill="#0070c0" />
                  </svg>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                {service.intro}
              </p>

              {/* 4 Benefit Cards */}
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="bg-[#f8fafc] rounded-xl p-4 border border-gray-200/80 text-center flex flex-col items-center justify-center shadow-sm"
                  >
                    <BenefitIcon iconKey={benefit.iconKey} />
                    <p className="mt-2.5 text-xs sm:text-[13px] font-bold text-gray-900 leading-snug">
                      {benefit.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Dark Featured "Service Includes" Card */}
              <div className="mt-8 rounded-2xl overflow-hidden bg-[#060d1b] text-white grid grid-cols-1 md:grid-cols-12 md:min-h-[380px] lg:min-h-[420px] shadow-xl border border-slate-800">
                <div className="md:col-span-5 relative min-h-[260px] md:min-h-[380px] lg:min-h-[420px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 35vw"
                    className="object-cover object-center"
                  />
                  <div className="hidden md:block absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#060d1b] to-transparent" />
                  <div className="md:hidden absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#060d1b] to-transparent" />
                </div>

                <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2.5">
                    <MStripes />
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold italic text-white">
                      {service.includesTitle}
                    </h3>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {service.includes.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm lg:text-[15px] text-gray-200 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#00a3e0] shrink-0 mt-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* "When to Schedule" Split Card */}
              <div className="mt-8 rounded-2xl border border-gray-200 bg-white overflow-hidden grid grid-cols-1 md:grid-cols-12 md:min-h-[360px] lg:min-h-[400px] shadow-sm items-stretch">
                <div className="md:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <MStripes className="mb-2.5" />
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-950 leading-snug">
                    {service.scheduleTitle}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {service.scheduleDescription}
                  </p>
                </div>

                <div className="md:col-span-6 relative min-h-[260px] md:min-h-[360px] lg:min-h-[400px] h-full bg-[#040812]">
                  <Image
                    src={service.secondaryImage}
                    alt={service.scheduleTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="hidden md:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* 3. Full-Width "Why Choose BTECH BMW SERVICE?" 4-Card Row */}
          <div className="mt-14 sm:mt-16">
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <MStripes className="shrink-0" />
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-950">
                  Why Choose BTECH BMW SERVICE?
                </h2>
              </div>
              <div className="w-14 h-1 bg-[#e31e24] mx-auto mt-3 rounded-full" />
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-[#f8fafc] rounded-xl p-5 border border-gray-200/80 border-b-4 border-b-[#0070c0] text-center shadow-sm">
                <Award className="w-9 h-9 text-[#0070c0] mx-auto" strokeWidth={1.75} />
                <h3 className="mt-3 text-base font-extrabold text-gray-950">
                  BMW-Focused Expertise
                </h3>
              </div>

              <div className="bg-[#f8fafc] rounded-xl p-5 border border-gray-200/80 border-b-4 border-b-[#0070c0] text-center shadow-sm">
                <ShieldCheck className="w-9 h-9 text-[#0070c0] mx-auto" strokeWidth={1.75} />
                <h3 className="mt-3 text-base font-extrabold text-gray-950">
                  Quality Parts &amp; Fluids
                </h3>
              </div>

              <div className="bg-[#f8fafc] rounded-xl p-5 border border-gray-200/80 border-b-4 border-b-[#0070c0] text-center shadow-sm">
                <UserCheck className="w-9 h-9 text-[#0070c0] mx-auto" strokeWidth={1.75} />
                <h3 className="mt-3 text-base font-extrabold text-gray-950">
                  Experienced Technicians
                </h3>
              </div>

              <div className="bg-[#f8fafc] rounded-xl p-5 border border-gray-200/80 border-b-4 border-b-[#0070c0] text-center shadow-sm">
                <Calendar className="w-9 h-9 text-[#0070c0] mx-auto" strokeWidth={1.75} />
                <h3 className="mt-3 text-base font-extrabold text-gray-950">
                  Convenient Scheduling
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
