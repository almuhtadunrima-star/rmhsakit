"use client";

import React from "react";
import { Calendar, Clock, HeartPulse, ShieldAlert, ArrowRight } from "lucide-react";

interface QuickActionCardsProps {
  onOpenBooking: () => void;
}

export function QuickActionCards({ onOpenBooking }: QuickActionCardsProps) {
  return (
    <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Buat Janji */}
        <button
          onClick={onOpenBooking}
          className="group text-left bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl border border-emerald-100/80 transition-all duration-200 hover:-translate-y-1 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="size-12 rounded-xl bg-emerald-100 text-[#00874e] flex items-center justify-center mb-3.5 group-hover:bg-[#00874e] group-hover:text-white transition-colors">
                <Calendar className="size-6" />
              </div>
              <h2 className="font-bold text-slate-800 text-lg group-hover:text-[#00874e] transition-colors">
                Buat Janji Dokter
              </h2>
              <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                Reservasi jadwal poliklinik dokter spesialis mudah secara online tanpa antre.
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-bold text-[#00874e] group-hover:translate-x-1 transition-transform">
              <span>Booking Sekarang</span>
              <ArrowRight className="size-3.5 ml-1" />
            </div>
          </div>
        </button>

        {/* Card 2: Jadwal Praktik */}
        <a
          href="#dokter-kami"
          className="group text-left bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl border border-slate-100 transition-all duration-200 hover:-translate-y-1 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="size-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-3.5 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                <Clock className="size-6" />
              </div>
              <h2 className="font-bold text-slate-800 text-lg group-hover:text-teal-700 transition-colors">
                Jadwal Dokter
              </h2>
              <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                Lihat daftar nama dokter, spesialisasi, serta jadwal operasional hari & jam praktik.
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-bold text-teal-700 group-hover:translate-x-1 transition-transform">
              <span>Cek Jadwal</span>
              <ArrowRight className="size-3.5 ml-1" />
            </div>
          </div>
        </a>

        {/* Card 3: Medical Check Up */}
        <a
          href="#promo-paket"
          className="group text-left bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl border border-slate-100 transition-all duration-200 hover:-translate-y-1 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="size-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3.5 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <HeartPulse className="size-6" />
              </div>
              <h2 className="font-bold text-slate-800 text-lg group-hover:text-amber-700 transition-colors">
                Paket MCU & Promo
              </h2>
              <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                Deteksi dini kesehatan tubuh dengan paket pemeriksaan berkala harga terjangkau.
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-bold text-amber-700 group-hover:translate-x-1 transition-transform">
              <span>Lihat Paket Promo</span>
              <ArrowRight className="size-3.5 ml-1" />
            </div>
          </div>
        </a>

        {/* Card 4: UGD & Emergency */}
        <a
          href="tel:+62215732241"
          className="group text-left bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl p-5 shadow-xl hover:shadow-2xl border border-red-500 transition-all duration-200 hover:-translate-y-1 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="size-12 rounded-xl bg-white/20 text-white flex items-center justify-center mb-3.5 group-hover:bg-white group-hover:text-red-600 transition-colors">
                <ShieldAlert className="size-6 animate-pulse" />
              </div>
              <div className="inline-block px-2 py-0.5 rounded bg-white/20 text-[10px] font-extrabold uppercase mb-1">
                Layanan 24 Jam
              </div>
              <h2 className="font-bold text-white text-lg">
                UGD & Ambulans
              </h2>
              <p className="text-red-100 text-xs mt-1.5 leading-relaxed">
                Pertolongan darurat cepat siaga call center & armada ambulans responsif.
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-extrabold text-white tracking-wide">
              <span>(021) 573 2241</span>
              <ArrowRight className="size-3.5 ml-1" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
