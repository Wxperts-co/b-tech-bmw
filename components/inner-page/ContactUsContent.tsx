import Image from "next/image";
import {
  Calendar,
  Car,
  Clock,
  Mail,
  MapPin,
  Phone,
  Settings,
  ShieldCheck,
} from "lucide-react";
import Breadcrum from "@/components/common/Breadcrum";
import ContactForm from "@/components/inner-page/ContactForm";

function MStripes({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1 ${className}`} aria-hidden="true">
      <span className="w-2.5 h-3.5 bg-[#0070c0] -skew-x-[22deg] rounded-[1px]" />
      <span className="w-2.5 h-3.5 bg-[#00a3e0] -skew-x-[22deg] rounded-[1px]" />
      <span className="w-2.5 h-3.5 bg-[#e31e24] -skew-x-[22deg] rounded-[1px]" />
    </div>
  );
}

export default function ContactUsContent() {
  return (
    <>
      {/* 1. Shared Dark Breadcrumb Banner (/images/breadcrumb-bg.jpg) */}
      <Breadcrum
        title="Get in Touch with BTECH BMW SERVICE"
        description="Have a question, need a service, or want to schedule an appointment? Our BMW experts are here to help."
        items={[{ label: "Contact Us" }]}
      />

      {/* 2. White Contact Info Cards + Message Form + Bottom Trust Bar */}
      <section className="bg-white text-gray-900 pt-0 lg:pt-16 pb-36 sm:pb-32 lg:pb-28 flex flex-col">
        <div className="order-2 lg:order-1 mt-12 lg:mt-0 w-full max-w-[1920px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
          {/* 4 Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Location */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 border-b-4 border-b-[#00a3e0] shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#0070c0]" strokeWidth={1.75} />
              </div>
              <div>
                <h2 className="text-base font-extrabold text-gray-950">
                  Our Location
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  7500 14th Ave #8,
                  <br />
                  Sacramento, CA 95820
                </p>
              </div>
            </div>

            {/* Call Us */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 border-b-4 border-b-[#00a3e0] shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-[#0070c0]" strokeWidth={1.75} />
              </div>
              <div>
                <h2 className="text-base font-extrabold text-gray-950">
                  Call Us
                </h2>
                <a
                  href="tel:9169558735"
                  className="mt-1 inline-block text-sm font-bold text-gray-800 hover:text-[#0070c0] transition-colors"
                >
                  (916) 955-8735
                </a>
              </div>
            </div>

            {/* Email Us */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 border-b-4 border-b-[#00a3e0] shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-[#0070c0]" strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <h2 className="text-base font-extrabold text-gray-950">
                  Email Us
                </h2>
                <a
                  href="mailto:btechbmwservice@gmail.com"
                  className="mt-1 inline-block text-xs sm:text-sm font-medium text-gray-700 hover:text-[#0070c0] transition-colors break-all"
                >
                  btechbmwservice@gmail.com
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 border-b-4 border-b-[#00a3e0] shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-[#0070c0]" strokeWidth={1.75} />
              </div>
              <div>
                <h2 className="text-base font-extrabold text-gray-950">
                  Business Hours
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-gray-700 leading-snug">
                  6:00 AM – 1:00 PM (Mon – Fri)
                </p>
                <p className="mt-0.5 text-xs font-bold text-[#0070c0]">
                  By Appointment Only
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Send Us a Message Full-Width Section */}
        <div className="order-1 lg:order-2 mt-0 lg:mt-12 relative w-full min-h-[600px] flex items-center overflow-hidden border-y border-gray-200/80 bg-[#f8fafc]">
          {/* Right BMW Wheel / Brake Visual Background */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-[52%] pointer-events-none">
            <Image
              src="/images/contact-us-bg.jpg"
              alt="BMW M brake caliper and wheel"
              fill
              sizes="52vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/60 to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-[1920px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 xl:px-[80px] py-12">
            <div className="lg:w-[58%] xl:w-[54%]">
              <div className="flex items-center gap-2.5">
                <MStripes />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold italic tracking-tight text-gray-950">
                  Send Us a Message
                </h2>
              </div>
              <div className="w-14 h-1 bg-[#e31e24] mt-3 rounded-full" />

              <p className="mt-3 text-sm sm:text-base text-gray-600">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>

              <ContactForm />
            </div>
          </div>
        </div>

        <div className="order-3 mt-12 w-full max-w-[1920px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
          {/* Bottom Dark Feature Bar */}
          <div className="rounded-2xl bg-[#060d1b] text-white border border-sky-500/30 shadow-[0_14px_38px_rgba(0,136,206,0.2)] px-6 sm:px-8 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5 lg:border-r lg:border-white/10 lg:pr-4">
              <Settings className="w-8 h-8 text-[#00c8ff] shrink-0" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-extrabold leading-tight">BMW</p>
                <p className="text-sm font-extrabold leading-tight">
                  Specialists
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 lg:border-r lg:border-white/10 lg:pr-4">
              <ShieldCheck className="w-8 h-8 text-[#00c8ff] shrink-0" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-extrabold leading-tight">
                  Reliable &amp;
                </p>
                <p className="text-sm font-extrabold leading-tight">
                  Trusted Service
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 lg:border-r lg:border-white/10 lg:pr-4">
              <Calendar className="w-8 h-8 text-[#00c8ff] shrink-0" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-extrabold leading-tight">
                  By Appointment
                </p>
                <p className="text-sm font-extrabold leading-tight">Only</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <Car className="w-8 h-8 text-[#00c8ff] shrink-0" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-extrabold leading-tight">
                  Serving the
                </p>
                <p className="text-sm font-extrabold leading-tight">
                  Greater Sacramento Area
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
