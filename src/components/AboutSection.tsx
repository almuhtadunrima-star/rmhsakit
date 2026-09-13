"use client";

import React from "react";
import { Award, Building2, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section id="tentang-kami" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#00874e] text-xs font-bold uppercase tracking-wider">
              <Building2 className="size-4" />
              <span>Tentang RS Muhammad Ali</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Pusat Layanan Kesehatan Terpadu, Modern & Terpercaya
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Berdiri dengan komitmen melayani seluruh lapisan masyarakat tanpa membeda-bedakan, <strong>Rumah Sakit Muhammad Ali</strong> senantiasa bertransformasi menjadi pusat rujukan kesehatan terdepan di Jakarta. Kami memadukan kehangatan pelayanan berbasis empati &ldquo;Melayani Dengan Hati&rdquo; dengan ketepatan diagnosis berstandar internasional.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                Visi & Nilai Utama Kami:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="size-4 text-[#00874e] shrink-0 mt-0.5" />
                  <span>Keselamatan & Kepuasan Pasien sebagai Prioritas Tertinggi</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="size-4 text-[#00874e] shrink-0 mt-0.5" />
                  <span>Teknologi Diagnostik & Bedah Minimal Invasif Terkini</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="size-4 text-[#00874e] shrink-0 mt-0.5" />
                  <span>Dokter Spesialis & Tenaga Medis Tersertifikasi Paripurna</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="size-4 text-[#00874e] shrink-0 mt-0.5" />
                  <span>Integritas, Transparansi, & Keramahan Pelayanan</span>
                </div>
              </div>
            </div>

            {/* Accreditation Badge */}
            <div className="pt-3 flex items-center gap-4 bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200">
              <div className="size-12 rounded-xl bg-[#00874e] text-white flex items-center justify-center shrink-0">
                <Award className="size-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-[#00874e]">
                  Terkreditasi Paripurna Bintang Lima
                </span>
                <p className="text-xs text-slate-700 font-medium">
                  Lolos Akreditasi Mutu & Keselamatan Pasien oleh Komisi Akreditasi Rumah Sakit (KARS) Kementerian Kesehatan RI.
                </p>
              </div>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl sm:text-4xl font-black text-[#00874e] block">120+</span>
              <span className="font-bold text-slate-800 text-sm mt-1 block">Dokter Spesialis</span>
              <p className="text-xs text-slate-500 mt-1">Multi-disiplin ilmu terintegrasi</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl sm:text-4xl font-black text-teal-600 block">25+</span>
              <span className="font-bold text-slate-800 text-sm mt-1 block">Poliklinik Terpadu</span>
              <p className="text-xs text-slate-500 mt-1">Layanan rawat jalan modern</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl sm:text-4xl font-black text-amber-600 block">150+</span>
              <span className="font-bold text-slate-800 text-sm mt-1 block">Kapasitas Rawat Inap</span>
              <p className="text-xs text-slate-500 mt-1">Kamar VVIP, VIP hingga Kelas 3</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl sm:text-4xl font-black text-blue-600 block">50k+</span>
              <span className="font-bold text-slate-800 text-sm mt-1 block">Pasien per Tahun</span>
              <p className="text-xs text-slate-500 mt-1">Kepercayaan masyarakat luas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
