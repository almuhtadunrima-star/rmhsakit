"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ServiceItem, Doctor } from "@/data/hospitalData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { BookingModal } from "@/components/BookingModal";
import { FloatingActions } from "@/components/FloatingActions";
import {
  Home,
  ChevronRight,
  BriefcaseMedical,
  Clock,
  MapPin,
  CheckCircle2,
  Calendar,
  Users,
  ShieldCheck,
  Stethoscope,
  HelpCircle,
} from "lucide-react";

interface ServiceDetailClientProps {
  service: ServiceItem;
  doctors: Doctor[];
}

export function ServiceDetailClient({ service, doctors }: ServiceDetailClientProps) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Breadcrumb Header */}
      <div className="bg-slate-100 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-emerald-700 flex items-center gap-1 transition-colors">
              <Home className="size-3.5" />
              <span>Beranda</span>
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <Link href="/layanan" className="hover:text-emerald-700 transition-colors">
              Layanan Medis
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="text-slate-900 font-bold truncate max-w-xs">{service.name}</span>
          </nav>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        {/* Service Hero Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                <BriefcaseMedical className="size-3.5 text-emerald-700" />
                <span>{service.category}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {service.name}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="px-6 py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Calendar className="size-4" />
                <span>Buat Janji Sekarang</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 mt-6 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex items-center gap-2.5">
              <Clock className="size-4 text-emerald-700 shrink-0" />
              <div>
                <span className="text-slate-400 block text-[11px]">Jam Operasional:</span>
                <strong className="text-slate-800 font-bold">{service.hours}</strong>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="size-4 text-emerald-700 shrink-0" />
              <div>
                <span className="text-slate-400 block text-[11px]">Lokasi Gedung:</span>
                <strong className="text-slate-800 font-bold">{service.location}</strong>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Users className="size-4 text-emerald-700 shrink-0" />
              <div>
                <span className="text-slate-400 block text-[11px]">Dokter Bertugas:</span>
                <strong className="text-slate-800 font-bold">{service.doctorCount} Dokter Spesialis</strong>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Columns: Details & Procedures */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column (2 spans): Features & Procedures */}
          <div className="lg:col-span-2 space-y-8">
            {/* Procedures Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="size-5 text-emerald-700" />
                <span>Tindakan & Prosedur Medis yang Ditangani</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.procedures.map((proc, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-2.5"
                  >
                    <div className="size-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {proc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <ShieldCheck className="size-5 text-emerald-700" />
                <span>Keunggulan Layanan RSI Muhammad Ali</span>
              </h2>

              <ul className="space-y-3 pt-2">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Matched Doctors & Booking Quick Action */}
          <div className="space-y-6">
            {/* Doctors card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs">
              <h3 className="font-bold text-slate-900 text-base mb-3 pb-2 border-b border-slate-100 flex items-center gap-2">
                <Stethoscope className="size-4 text-emerald-700" />
                <span>Dokter Spesialis Terkait</span>
              </h3>

              {doctors.length > 0 ? (
                <div className="space-y-3">
                  {doctors.map((doc) => (
                    <Link
                      key={doc.id}
                      href={`/dokter/${doc.id}`}
                      className="p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-100 transition-all flex items-center gap-3 group"
                    >
                      <img
                        src={doc.photo}
                        alt={doc.name}
                        className="size-12 rounded-xl object-cover object-top border border-slate-200"
                      />
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-900 truncate">
                          {doc.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 truncate">
                          {doc.specialty}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500">
                  Konsultasi dengan tim dokter spesialis jaga kami.
                </p>
              )}

              <Link
                href="/dokter"
                className="mt-4 block text-center text-xs font-bold text-emerald-800 hover:text-emerald-950 hover:underline"
              >
                Lihat Semua Dokter Spesialis →
              </Link>
            </div>

            {/* Preparation tips */}
            <div className="bg-emerald-50/70 rounded-3xl p-6 border border-emerald-200">
              <h4 className="font-bold text-emerald-950 text-sm mb-2 flex items-center gap-2">
                <HelpCircle className="size-4 text-emerald-800" />
                <span>Persiapan Pasien</span>
              </h4>
              <p className="text-xs text-emerald-900/90 leading-relaxed mb-4">
                Bawalah KTP/identitas, kartu BPJS / Asuransi (jika ada), dan rekam medis atau hasil lab sebelumnya untuk konsultasi yang lebih akurat.
              </p>
              <button
                onClick={() => setBookingModalOpen(true)}
                className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-xs transition-colors"
              >
                Daftar Janji Temu
              </button>
            </div>
          </div>
        </div>

        <EmergencyBanner />
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefillSpecialty={service.name}
      />

      <FloatingActions />
    </div>
  );
}
