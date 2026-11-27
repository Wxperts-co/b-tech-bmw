"use client";

import React, { useState } from "react";
import {
  Calendar,
  Car,
  Check,
  CheckCircle2,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  Settings,
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

const timeSlots = [
  "6:00 AM",
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
];

export default function BookAppointmentForm() {
  const [selectedTime, setSelectedTime] = useState("9:00 AM");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mt-8 rounded-2xl bg-sky-50 border border-sky-200 p-8 text-center shadow-sm">
        <CheckCircle2 className="w-12 h-12 text-[#0070c0] mx-auto" />
        <h3 className="mt-3 text-xl font-extrabold text-gray-950">
          Appointment Request Received!
        </h3>
        <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
          Thank you for requesting an appointment at{" "}
          <span className="font-bold text-gray-900">{selectedTime}</span>. Our
          Sacramento BMW specialists will confirm your slot shortly, or call us
          at{" "}
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
          Book Another Appointment
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
            className="w-full rounded-xl border border-gray-200 bg-[#f8fafc] pl-10 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-[#0078d4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0078d4]/20"
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
            className="w-full rounded-xl border border-gray-200 bg-[#f8fafc] pl-10 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-[#0078d4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0078d4]/20"
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
            className="w-full rounded-xl border border-gray-200 bg-[#f8fafc] pl-10 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-[#0078d4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0078d4]/20"
          />
        </label>

        <label className="relative block">
          <span className="sr-only">BMW Model</span>
          <Car className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            name="model"
            required
            placeholder="BMW Model (e.g., 330i, X5, M3) *"
            className="w-full rounded-xl border border-gray-200 bg-[#f8fafc] pl-10 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-[#0078d4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0078d4]/20"
          />
        </label>
      </div>

      {/* Full-Width Service Needed */}
      <label className="relative block">
        <span className="sr-only">Service Needed</span>
        <Settings className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <select
          name="service"
          required
          defaultValue=""
          className="w-full rounded-xl border border-gray-200 bg-[#f8fafc] pl-10 pr-4 py-3 text-sm text-gray-900 focus:border-[#0078d4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0078d4]/20"
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

      {/* Date & Preferred Time Slots */}
      <div className="pt-2 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2.5">
            <Calendar className="w-4 h-4 text-[#0070c0]" />
            <span>Preferred Service Date *</span>
          </div>
          <input
            type="date"
            name="date"
            required
            className="w-full rounded-xl border border-gray-200 bg-[#f8fafc] px-4 py-3 text-sm text-gray-900 focus:border-[#0078d4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0078d4]/20"
          />
        </div>

        <div className="md:col-span-7 md:border-l md:border-gray-200 md:pl-6">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2.5">
            <Clock className="w-4 h-4 text-[#0070c0]" />
            <span>Preferred Time *</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {timeSlots.map((slot) => {
              const isSelected = selectedTime === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedTime(slot)}
                  className={
                    isSelected
                      ? "inline-flex items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-[#0070d6] to-[#00a3e0] text-white text-xs font-bold py-2.5 px-2 shadow-md shadow-[#00a3e0]/25 transition-all cursor-pointer"
                      : "inline-flex items-center justify-center rounded-lg border border-gray-200 bg-[#f8fafc] hover:border-[#0078d4]/60 hover:bg-sky-50 text-gray-800 text-xs font-semibold py-2.5 px-2 transition-all cursor-pointer"
                  }
                >
                  <span>{slot}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                </button>
              );
            })}
          </div>
          <input type="hidden" name="time" value={selectedTime} />
        </div>
      </div>

      {/* Additional Details */}
      <label className="relative block pt-1">
        <span className="sr-only">Additional Details (Optional)</span>
        <MessageSquare className="w-4 h-4 text-gray-500 absolute left-3.5 top-4 pointer-events-none" />
        <textarea
          name="details"
          rows={3}
          placeholder="Additional Details (Optional) — Tell us more about your BMW or the issue you're experiencing..."
          className="w-full rounded-xl border border-gray-200 bg-[#f8fafc] pl-10 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-[#0078d4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0078d4]/20 resize-y"
        />
      </label>

      {/* Red Gradient Submit CTA */}
      <div className="pt-2 flex justify-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2.5 px-9 py-3.5 rounded-xl bg-gradient-to-r from-[#a80010] via-[#e30613] to-[#b8000f] hover:brightness-110 text-white font-extrabold text-sm tracking-wide shadow-[0_10px_28px_rgba(227,6,19,0.4)] transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}
