"use client";

import React, { useState } from "react";
import { PROMO_DATA } from "@/data/hospitalData";
import { Calendar, Sparkles, ArrowRight } from "lucide-react";

interface PromoSectionProps {
  onOpenBooking: (promoTitle?: string) => void;
}

export function PromoSection({ onOpenBooking }: PromoSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = ["ALL", "MCU", "Rehabilitasi", "Pemeriksaan", "Tindakan"];

  const filteredPromos =
    selectedCategory === "ALL"
      ? PROMO_DATA
      : PROMO_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="promo-paket" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="size-4 text-amber-600" />
            <span>Penawaran Terbatas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Promo & Paket Medis Terkini
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Manfaatkan promo spesial dan paket layanan kesehatan eksklusif dari Rumah Sakit Muhammad Ali. Solusi cerdas untuk pencegahan, deteksi dini, dan pemulihan dengan biaya terjangkau.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#00874e] text-white shadow-md shadow-emerald-800/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat === "ALL" ? "Semua Promo" : cat}
            </button>
          ))}
        </div>

        {/* Promo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPromos.map((promo) => (
            <div
              key={promo.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 group"
            >
              {/* Promo Banner Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-extrabold shadow-sm ${
                      promo.badge === "New"
                        ? "bg-emerald-600 text-white"
                        : promo.badge === "Best Seller"
                        ? "bg-amber-500 text-white"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {promo.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-slate-950/70 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-[11px] font-medium flex items-center gap-1">
                  <Calendar className="size-3 text-emerald-400" />
                  <span>s/d {promo.validUntil}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#00874e] uppercase tracking-wider">
                    {promo.category}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug mt-1 group-hover:text-[#00874e] transition-colors">
                    {promo.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                    {promo.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    {promo.originalPrice && (
                      <span className="block text-[11px] text-slate-400 line-through">
                        {promo.originalPrice}
                      </span>
                    )}
                    <span className="text-lg font-black text-[#00874e]">
                      {promo.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(promo.title)}
                    className="px-4 py-2.5 rounded-xl bg-[#00874e] hover:bg-[#00703f] text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                  >
                    <span>Klaim Promo</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
