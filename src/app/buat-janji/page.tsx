"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { BookingWizard } from "@/components/BookingWizard";
import { FloatingActions } from "@/components/FloatingActions";
import { Home, ChevronRight, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

function BookingContent() {
  const searchParams = useSearchParams();
  const prefillSpecialty = searchParams.get("spesialis") || "";
  const prefillDoctor = searchParams.get("dokter") || "";

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-3">
            <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <Home className="size-3.5" />
              <span>Beranda</span>
            </Link>
            <ChevronRight className="size-3 text-emerald-400" />
            <span className="text-white font-semibold">Pendaftaran Janji Temu</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Pendaftaran Janji Temu Dokter Online
          </h1>
          <p className="mt-3 text-emerald-100 text-sm sm:text-base max-w-2xl leading-relaxed">
            Daftar konsultasi dokter spesialis dalam 6 langkah mudah, tanpa perlu mengantre lama di rumah sakit.
          </p>
        </div>
      </div>

      {/* Main Booking Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto text-xs text-slate-600">
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center gap-3">
            <ShieldCheck className="size-5 text-emerald-700 shrink-0" />
            <span>Pendaftaran Resmi Terintegrasi Rekam Medis</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center gap-3">
            <Clock className="size-5 text-emerald-700 shrink-0" />
            <span>Konfirmasi Cepat Melalui WhatsApp</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center gap-3">
            <CheckCircle2 className="size-5 text-emerald-700 shrink-0" />
            <span>Mendukung Pasien Umum, BPJS & Asuransi</span>
          </div>
        </div>

        {/* 6-Step Booking Wizard */}
        <BookingWizard
          prefillSpecialty={prefillSpecialty}
          prefillDoctor={prefillDoctor}
        />
      </main>

      <EmergencyBanner />
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default function BuatJanjiPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Memuat form pendaftaran...</div>}>
      <BookingContent />
    </Suspense>
  );
}
