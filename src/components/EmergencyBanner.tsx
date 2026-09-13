"use client";

import React from "react";
import { ShieldAlert, Phone, Ambulance, CheckCircle2 } from "lucide-react";

export function EmergencyBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-red-800 via-red-700 to-rose-800 text-white py-14 sm:py-16">
      {/* Background Decorative Ambulance Icon */}
      <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
        <Ambulance className="size-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left info */}
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider backdrop-blur-md">
              <ShieldAlert className="size-4 animate-pulse" />
              <span>IGD 24 JAM</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              IGD 24 JAM
            </h2>

            <p className="text-red-100 text-base sm:text-lg leading-relaxed">
              Untuk kondisi darurat, tim medis kami siap memberikan pelayanan selama 24 jam.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs font-semibold text-white/90">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-300" /> Respon Cepat & Triase Akut
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-300" /> Ambulans ICU Mobile Siaga
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-300" /> Penanganan Langsung Tanpa Tunda
              </span>
            </div>
          </div>

          {/* Right Action Callout */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 text-center shrink-0 w-full sm:w-auto shadow-2xl">
            <span className="text-xs uppercase font-extrabold tracking-widest text-red-100 block mb-1">
              Hotline Gawat Darurat & Ambulans
            </span>
            <div className="text-3xl sm:text-4xl font-black text-white my-2 tracking-tight">
              (021) 573 2241
            </div>
            <p className="text-xs text-red-100 mb-5">
              Siaga 24 Jam Nonstop • Rumah Sakit Islam Muhammad Ali
            </p>

            <a
              href="tel:+62215732241"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-100 text-red-700 font-extrabold text-sm sm:text-base shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Phone className="size-5 fill-current" />
              <span>Hubungi IGD</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
