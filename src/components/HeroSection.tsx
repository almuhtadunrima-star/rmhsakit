"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  Star,
  Sparkles,
  HeartHandshake,
  Stethoscope,
  Activity,
} from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const trustIndicators = [
    { label: "Dokter Berpengalaman", icon: Stethoscope },
    { label: "Layanan Terintegrasi", icon: Activity },
    { label: "Pelayanan Islami", icon: Sparkles },
    { label: "Berorientasi pada Pasien", icon: HeartHandshake },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-slate-50 py-12 sm:py-16 lg:py-20">
      {/* Subtle background ambient blur circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 text-emerald-900 border border-emerald-200 text-xs font-bold tracking-wide shadow-2xs">
              <span className="size-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>RUMAH SAKIT ISLAM MUHAMMAD ALI</span>
              <span className="text-emerald-400">•</span>
              <span className="text-emerald-700 font-semibold">Akreditasi Paripurna KARS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Pelayanan Kesehatan Modern,{" "}
              <span className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 bg-clip-text text-transparent">
                Dengan Nilai Islami
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Memberikan pelayanan kesehatan yang profesional, aman, ramah, dan berorientasi pada kebutuhan pasien dengan sentuhan empati Islami dan teknologi medis mutakhir.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-700 via-teal-800 to-emerald-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-800/20 hover:shadow-xl transition-all flex items-center justify-center gap-2.5 active:scale-[0.98] cursor-pointer"
              >
                <Calendar className="size-5" />
                <span>Buat Janji Temu</span>
              </button>

              <Link
                href="/layanan"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-emerald-50/60 text-slate-800 hover:text-emerald-900 font-bold text-sm sm:text-base border border-slate-200 hover:border-emerald-300 shadow-2xs transition-all flex items-center justify-center gap-2"
              >
                <span>Lihat Layanan Medis</span>
                <ArrowRight className="size-4 text-emerald-700" />
              </Link>
            </div>

            {/* Trust Indicators Bar */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
                {trustIndicators.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-slate-100 shadow-2xs"
                    >
                      <div className="size-8 rounded-lg bg-emerald-100/80 text-emerald-800 flex items-center justify-center shrink-0">
                        <Icon className="size-4" />
                      </div>
                      <span className="text-xs font-bold text-slate-800 leading-tight">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Layered Visual Composition & Floating Cards (5 cols) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            {/* Main Visual Container */}
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Decorative Backdrop Card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-3xl rotate-2 scale-[1.02] opacity-15 blur-xs" />

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/4.5] sm:aspect-[4/4.2]">
                <img
                  src="/images/banner-slide-1.webp"
                  alt="Pelayanan Dokter dan Pasien RSI Muhammad Ali"
                  className="w-full h-full object-cover object-center"
                />
                {/* Soft gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Bottom caption in image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-700/80 backdrop-blur-xs px-2.5 py-0.5 rounded-md inline-block mb-1">
                    Care & Healing
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-white/95 line-clamp-1">
                    Pendampingan Medis Komprehensif Berstandar Internasional
                  </p>
                </div>
              </div>

              {/* FLOATING CARD 1: Doctor Rating & Experience (Top Right) */}
              <div className="absolute -top-4 sm:-top-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-xl border border-slate-100/90 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-500 z-20">
                <div className="size-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Star className="size-6 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-base font-extrabold text-slate-900">4.9</span>
                    <span className="text-xs text-slate-400">/ 5.0</span>
                  </div>
                  <p className="text-[11px] font-semibold text-slate-600">
                    Kepuasan Pasien Terverifikasi
                  </p>
                </div>
              </div>

              {/* FLOATING CARD 2: Specialists & Emergency (Bottom Left) */}
              <div className="absolute -bottom-5 sm:-bottom-8 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-xl border border-slate-100/90 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 z-20">
                <div className="size-11 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="size-6 text-emerald-700" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                    50+ Dokter Spesialis
                  </h4>
                  <p className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    <span>IGD & Ambulans 24 Jam Siaga</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
