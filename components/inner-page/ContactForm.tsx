"use client";

import React, { useState } from "react";
import {
  Car,
  CheckCircle2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";

const serviceOptions = [
  "Oil Change & Routine Maintenance",
  "Engine Repair & Overhaul",
  "Transmission Service & Repair",
  "Brake Service & Replacement",
  "Suspension & Steering Repair",
  "BMW Diagnostics",
  "Cooling System Service",
  "Electrical System Repair",
  "Exhaust System Service",
  "General Repair & Maintenance",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mt-6 rounded-2xl bg-sky-50 border border-sky-200 p-6 sm:p-8 text-center shadow-sm">
        <CheckCircle2 className="w-12 h-12 text-[#0070c0] mx-auto" />
        <h3 className="mt-3 text-xl font-extrabold text-gray-950">
          Message Sent Successfully!
        </h3>
        <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
          Thank you for contacting BTECH BMW SERVICE. Our team will get back to
          you shortly, or call us directly at{" "}
          <a href="tel:9169558735" className="font-bold text-[#0070c0]">
            (916) 955-8735
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0070c0] hover:bg-[#005596] text-white text-xs font-bold transition-colors cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="relative block">
          <span className="sr-only">Full Name</span>
          <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name *"
            className="w-full rounded-xl border border-gray-200 bg-white/95 pl-10 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 shadow-sm focus:border-[#0078d4] focus:outline-none focus:ring-2 focus:ring-[#0078d4]/20"
          />
        </label>

        <label className="relative block">
          <span className="sr-only">Email Address</span>
          <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address *"
            className="w-full rounded-xl border border-gray-200 bg-white/95 pl-10 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 shadow-sm focus:border-[#0078d4] focus:outline-none focus:ring-2 focus:ring-[#0078d4]/20"
          />
        </label>

        <label className="relative block">
          <span className="sr-only">Phone Number</span>
          <Phone className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone Number *"
            className="w-full rounded-xl border border-gray-200 bg-white/95 pl-10 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 shadow-sm focus:border-[#0078d4] focus:outline-none focus:ring-2 focus:ring-[#0078d4]/20"
          />
        </label>

        <label className="relative block">
          <span className="sr-only">Service Needed</span>
          <Car className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            name="service"
            required
            defaultValue=""
            className="w-full rounded-xl border border-gray-200 bg-white/95 pl-10 pr-4 py-3 text-sm text-gray-900 shadow-sm focus:border-[#0078d4] focus:outline-none focus:ring-2 focus:ring-[#0078d4]/20"
          >
            <option value="" disabled>
              Service Needed *
            </option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="relative block">
        <span className="sr-only">Your Message</span>
        <MessageSquare className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5 pointer-events-none" />
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Your Message *"
          className="w-full rounded-xl border border-gray-200 bg-white/95 pl-10 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 shadow-sm focus:border-[#0078d4] focus:outline-none focus:ring-2 focus:ring-[#0078d4]/20 resize-y"
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#0068d6] to-[#00a3e0] hover:from-[#0056b8] hover:to-[#008ec4] text-white font-bold text-sm shadow-lg shadow-[#00a3e0]/30 transition-all cursor-pointer"
      >
        <Send className="w-4 h-4" />
        <span>Send Message</span>
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
