"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  HeartHandshake,
  Activity,
  FileCheck2,
} from "lucide-react";

interface WhyChooseUsSectionProps {
  onOpenBooking?: () => void;
}

export function WhyChooseUsSection({ onOpenBooking }: WhyChooseUsSectionProps) {
  const reasons = [
    {
      number: "01",
      title: "Teknologi Medis Generasi Terkini",
      description:
        "Dilengkapi MRI 1.5 Tesla, CT-Scan 128 Slice, Modular Operating Theatre (MOT) berstandar HEPA filter, dan teknik bedah minimal invasif berpemulihan cepat.",
      icon: Activity,
    },
    {
      number: "02",
      title: "Ketulusan Pelayanan Berbasis Nilai Islami",
      description:
        "Pendampingan rohani pasien rawat inap, bimbingan doa kesembuhan, privasi aurat yang terjaga, serta jaminan makanan dan obat-obatan 100% halal.",
      icon: Sparkles,
    },
    {
      number: "03",
      title: "Alur Pendaftaran Digital Tanpa Antre",
      description:
        "Reservasi dokter secara online dari rumah, estimasi waktu konsultasi real-time, dan akses hasil rekam medis serta lab digital langsung via Portal Pasien.",
      icon: FileCheck2,
    },
    {
      number: "04",
      title: "Kemitraan Asuransi & BPJS Transparan",
      description:
        "Melayani peserta BPJS Kesehatan dengan alur rujukan terpadu dan sistem klaim cashless dengan lebih dari 16 rekanan asuransi swasta nasional & internasional.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Visual Showcase with Floating Glass Badges */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            {/* Ambient backdrop */}
            <div className="absolute -inset-2 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-[36px] blur-xl -z-10" />

            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/4.8]">
              <img
                src="/images/service-operasi.png"
                alt="Fasilitas Operasi Modern RSI Muhammad Ali"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-700/80 backdrop-blur-md text-emerald-100 text-xs font-bold uppercase tracking-wider mb-2">
                  <Award className="size-3.5" />
                  <span>Akreditasi Mutu Tertinggi</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Modular Operating Theatre Berstandar Internasional
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Kesterilan laminar air flow tekanan positif untuk keselamatan maksimal tindakan bedah.
                </p>
              </div>
            </div>

            {/* Floating Glass Badge 1: Top Right */}
            <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100 max-w-[210px] animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center gap-2.5">
                <div className="size-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <HeartHandshake className="size-5" />
                </div>
                <div>
                  <div className="text-sm font-black text-slate-900">99% Puas</div>
                  <div className="text-[11px] text-slate-500 font-medium">Ulasan Pasien Nyata</div>
                </div>
              </div>
            </div>

            {/* Floating Glass Badge 2: Bottom Left */}
            <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100 max-w-[240px] animate-in fade-in slide-in-from-bottom-3">
              <div className="flex items-center gap-2.5">
                <div className="size-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="size-5 text-emerald-700" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">KARS Paripurna</div>
                  <div className="text-[11px] text-emerald-700 font-bold">Lulus Predikat Bintang 5</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, 4 Numbered Feature Cards, Dual CTA */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="size-3.5 text-emerald-700" />
                <span>Mengapa Memilih Kami</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Perpaduan Keunggulan Medis &amp; Ketulusan Pelayanan Syariah
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Kami meyakini bahwa proses kesembuhan sejati melibatkan ikhtiar medis terbaik yang berpadu harmonis dengan ketenangan spiritual, empati tulus dari tenaga medis, dan fasilitas yang memberi rasa aman bagi setiap keluarga.
              </p>
            </div>

            {/* 4 Feature Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {reasons.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.number}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="size-9 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="size-4.5" />
                      </div>
                      <span className="text-xs font-black text-emerald-800 font-mono">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {onOpenBooking ? (
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <span>Konsultasi Dokter Sekarang</span>
                  <ArrowRight className="size-4" />
                </button>
              ) : (
                <Link
                  href="/buat-janji"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>Konsultasi Dokter Sekarang</span>
                  <ArrowRight className="size-4" />
                </Link>
              )}

              <Link
                href="/tentang-kami"
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm border border-slate-200 transition-colors flex items-center gap-1.5"
              >
                <span>Pelajari Profil Rumah Sakit</span>
                <ArrowRight className="size-3.5 text-slate-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
