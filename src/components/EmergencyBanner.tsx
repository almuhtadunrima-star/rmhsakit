"use client";

import React from "react";
import { ShieldAlert, Phone, Ambulance, Check } from "lucide-react";

export function EmergencyBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-rose-700 text-white py-14">
      {/* Background Decorative patterns */}
      <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
        <Ambulance className="size-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left info */}
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider backdrop-blur-md">
              <ShieldAlert className="size-4 animate-bounce" />
              <span>Instalasi Gawat Darurat (UGD) 24 Jam</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Kondisi Darurat Medis? Kami Siap Setiap Detik.
            </h2>

            <p className="text-red-100 text-sm sm:text-base leading-relaxed">
              Tim dokter gawat darurat bersertifikasi ATLS & ACLS, perawat kritis, serta armada ambulans ICU lengkap siap memberikan penanganan cepat untuk keselamatan Anda dan orang tercinta di Rumah Sakit Muhammad Ali.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-semibold text-white/90">
              <span className="flex items-center gap-1.5">
                <Check className="size-4 text-emerald-300" /> Triage Respon Cepat
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="size-4 text-emerald-300" /> Ambulans Berfasilitas ICU
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="size-4 text-emerald-300" /> Laboratorium & Radiologi 24 Jam
              </span>
            </div>
          </div>

          {/* Right Action Callout */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 text-center shrink-0 w-full sm:w-auto shadow-2xl">
            <span className="text-xs uppercase font-extrabold tracking-widest text-red-100 block mb-1">
              Hotline Gawat Darurat & Ambulans
            </span>
            <div className="text-3xl sm:text-4xl font-black text-white my-2 tracking-tight">
              (021) 573 2241
            </div>
            <p className="text-xs text-red-100 mb-5">
              Siaga 24 Jam Penuh • Bebas Antrean Darurat
            </p>

            <a
              href="tel:+62215732241"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-white hover:bg-slate-100 text-red-700 font-extrabold text-sm sm:text-base shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <Phone className="size-5 fill-current" />
              <span>Hubungi UGD Sekarang</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
