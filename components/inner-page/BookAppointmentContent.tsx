import Image from "next/image";
import {
  Calendar,
  Clock,
  Headset,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Breadcrum from "@/components/common/Breadcrum";
import BookAppointmentForm from "@/components/inner-page/BookAppointmentForm";

function MStripes({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1 ${className}`} aria-hidden="true">
      <span className="w-2.5 h-3.5 bg-[#0070c0] -skew-x-[22deg] rounded-[1px]" />
      <span className="w-2.5 h-3.5 bg-[#00a3e0] -skew-x-[22deg] rounded-[1px]" />
      <span className="w-2.5 h-3.5 bg-[#e31e24] -skew-x-[22deg] rounded-[1px]" />
    </div>
  );
}

export default function BookAppointmentContent() {
  return (
    <>
      {/* 1. Shared Dark Breadcrumb Banner (/images/breadcrumb-bg.jpg) */}
      <Breadcrum
        title="Book an Appointment"
        description="Schedule your BMW service, diagnostics, or repair with our Sacramento specialists—Mon – Fri, 6:00 AM – 1:00 PM (By Appointment Only)."
        items={[{ label: "Book an Appointment" }]}
      />

      {/* 2. White Background Section */}
      <section className="bg-white text-gray-900 pt-12 sm:pt-16 pb-36 sm:pb-32 lg:pb-28">
        <div className="w-full max-w-[1920px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Dark "Get in Touch" Card (below form on mobile) */}
            <aside className="lg:col-span-4 order-2 lg:order-1 rounded-2xl bg-[#060d1b] text-white border border-sky-400/35 shadow-[0_14px_40px_rgba(0,136,206,0.2)] flex flex-col justify-between overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2.5 pb-4 border-b border-sky-400/25">
                  <Headset className="w-6 h-6 text-[#00c8ff] shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-black italic tracking-tight text-white">
                    Get in <span className="text-[#00c8ff]">Touch</span>
                  </h2>
                </div>

                <div className="mt-6 space-y-5 text-sm">
                  {/* Address */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-sky-950/80 border border-[#00c8ff]/50 flex items-center justify-center shadow-[0_0_12px_rgba(0,200,255,0.2)]">
                      <MapPin className="w-4 h-4 text-[#00c8ff]" />
                    </div>
                    <p className="font-semibold text-gray-100 leading-snug">
                      7500 14th Ave #8,
                      <br />
                      Sacramento, CA 95820
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-sky-950/80 border border-[#00c8ff]/50 flex items-center justify-center shadow-[0_0_12px_rgba(0,200,255,0.2)]">
                      <Phone className="w-4 h-4 text-[#00c8ff]" />
                    </div>
                    <a
                      href="tel:9169558735"
                      className="font-bold text-white hover:text-[#00c8ff] transition-colors"
                    >
                      (916) 955-8735
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-sky-950/80 border border-[#00c8ff]/50 flex items-center justify-center shadow-[0_0_12px_rgba(0,200,255,0.2)]">
                      <Mail className="w-4 h-4 text-[#00c8ff]" />
                    </div>
                    <a
                      href="mailto:btechbmwservice@gmail.com"
                      className="font-medium text-gray-100 hover:text-[#00c8ff] transition-colors break-all"
                    >
                      btechbmwservice@gmail.com
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-sky-950/80 border border-[#00c8ff]/50 flex items-center justify-center shadow-[0_0_12px_rgba(0,200,255,0.2)]">
                      <Clock className="w-4 h-4 text-[#00c8ff]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-100 leading-snug">
                        Mon – Fri:
                        <br />
                        6:00 AM – 1:00 PM
                      </p>
                      <p className="text-xs font-bold text-[#00c8ff] mt-0.5">
                        By Appointment Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom BMW Visual */}
              <div className="relative h-44 sm:h-52 w-full mt-2">
                <Image
                  src="/images/service-section-bg-1.jpg"
                  alt="Btech BMW Service studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#060d1b] via-[#060d1b]/30 to-transparent" />
              </div>
            </aside>

            {/* Right White "Book an Appointment" Form Card (first on mobile) */}
            <div className="lg:col-span-8 order-1 lg:order-2 rounded-2xl bg-white border border-gray-200/90 shadow-[0_14px_40px_rgba(15,23,42,0.08)] p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-2.5">
                <MStripes />
                <h2 className="text-2xl sm:text-3xl font-extrabold italic tracking-tight text-gray-950">
                  Book an Appointment
                </h2>
              </div>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Fill out the details below to schedule your BMW service with our
                certified specialists.
              </p>

              <BookAppointmentForm />
            </div>
          </div>

          {/* Bottom Dark 4-Feature Bar */}
          <div className="mt-10 rounded-2xl bg-[#060d1b] text-white border border-sky-500/30 shadow-[0_12px_35px_rgba(0,136,206,0.18)] px-6 sm:px-8 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5 lg:border-r lg:border-white/10 lg:pr-4">
              <ShieldCheck className="w-8 h-8 text-[#00c8ff] shrink-0" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-extrabold leading-tight">BMW</p>
                <p className="text-sm font-extrabold leading-tight">
                  Specialists
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 lg:border-r lg:border-white/10 lg:pr-4">
              <Wrench className="w-8 h-8 text-[#00c8ff] shrink-0" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-extrabold leading-tight">
                  Dealer-Level
                </p>
                <p className="text-sm font-extrabold leading-tight">Service</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 lg:border-r lg:border-white/10 lg:pr-4">
              <Calendar className="w-8 h-8 text-[#00c8ff] shrink-0" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-extrabold leading-tight">
                  Appointment
                </p>
                <p className="text-sm font-extrabold leading-tight">Only</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="inline-flex items-center gap-1 shrink-0" aria-hidden="true">
                <MStripes />
                <span className="text-lg font-black italic text-white">M</span>
              </div>
              <div>
                <p className="text-sm font-extrabold leading-tight">All BMW</p>
                <p className="text-sm font-extrabold leading-tight">
                  Models Welcome
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
