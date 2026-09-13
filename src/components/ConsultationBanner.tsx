"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Phone, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

interface ConsultationBannerProps {
  onOpenBooking?: () => void;
}

export function ConsultationBanner({ onOpenBooking }: ConsultationBannerProps) {
  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-emerald-700/40">
          {/* Subtle decorative background shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left side text & highlights */}
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-emerald-200 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="size-4 text-emerald-300" />
                <span>Reservasi Poliklinik Online</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-white tracking-tight leading-tight">
                Konsultasikan Kesehatan Anda Bersama Tim Dokter Ahli Kami
              </h2>

              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                Dapatkan kepastian jadwal dan nomor antrean poliklinik dengan mudah. Tim dokter spesialis kami siap mendampingi ikhtiar kesembuhan Anda dan keluarga.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs font-semibold text-emerald-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-300" /> Tanpa Antre Panjang
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-300" /> Mendukung BPJS &amp; Asuransi
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-300" /> Konfirmasi WhatsApp Otomatis
                </span>
              </div>
            </div>

            {/* Right side CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 shrink-0 w-full sm:w-auto text-center">
              {onOpenBooking ? (
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-emerald-900 font-extrabold text-sm sm:text-base shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Calendar className="size-5 text-emerald-700" />
                  <span>Buat Janji Temu Online</span>
                  <ArrowRight className="size-4 text-emerald-700" />
                </button>
              ) : (
                <Link
                  href="/buat-janji"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-emerald-900 font-extrabold text-sm sm:text-base shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5"
                >
                  <Calendar className="size-5 text-emerald-700" />
                  <span>Buat Janji Temu Online</span>
                  <ArrowRight className="size-4 text-emerald-700" />
                </Link>
              )}

              <a
                href="tel:+62215732241"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-emerald-800/80 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm border border-emerald-600/50 backdrop-blur-md transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="size-4" />
                <span>Hotline: (021) 573 2241</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
