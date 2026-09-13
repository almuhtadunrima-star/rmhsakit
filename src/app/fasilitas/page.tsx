"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { BookingModal } from "@/components/BookingModal";
import { FloatingActions } from "@/components/FloatingActions";
import { FACILITIES_DATA } from "@/data/hospitalData";
import {
  Home,
  ChevronRight,
  Clock,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export default function FasilitasPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-3">
            <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <Home className="size-3.5" />
              <span>Beranda</span>
            </Link>
            <ChevronRight className="size-3 text-emerald-400" />
            <span className="text-white font-semibold">Fasilitas Rumah Sakit</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Fasilitas Medis & Kenyamanan Pasien
          </h1>
          <p className="mt-3 text-emerald-100 text-sm sm:text-base max-w-2xl leading-relaxed">
            Infrastruktur medis modern berstandar akreditasi KARS Paripurna dan sertifikasi syariah yang dirancang untuk kenyamanan, kesterilan, dan keselamatan pasien.
          </p>
        </div>
      </div>

      {/* Facilities Showcase */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="space-y-12">
          {FACILITIES_DATA.map((fac, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={fac.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-6 sm:p-8"
              >
                {/* Image Container with Rounded Corners */}
                <div
                  className={`lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-emerald-900/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider">
                    {fac.category}
                  </span>
                </div>

                {/* Details Container */}
                <div
                  className={`lg:col-span-7 space-y-4 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg">
                      <Clock className="size-3.5" />
                      <span>{fac.hours}</span>
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                      <MapPin className="size-3.5 text-emerald-700" />
                      <span>{fac.location}</span>
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {fac.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {fac.longDescription}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {fac.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {fac.capacity && (
                    <div className="pt-2 text-xs text-slate-500">
                      <strong>Kapasitas:</strong> {fac.capacity}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <EmergencyBanner />
        </div>
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      <FloatingActions />
    </div>
  );
}
