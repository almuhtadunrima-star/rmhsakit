"use client";

import React from "react";
import {
  ShieldCheck,
  Stethoscope,
  Smile,
  Heart,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { ISLAMIC_VALUES_DATA } from "@/data/hospitalData";

export function IslamicValuesSection() {
  const iconMap: Record<string, React.ElementType> = {
    "val-1": ShieldCheck,
    "val-2": Stethoscope,
    "val-3": Smile,
    "val-4": Heart,
    "val-5": Sparkles,
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-emerald-50/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="size-3.5 text-emerald-700" />
            <span>Fondasi Pelayanan Syariah</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Merawat Dengan Profesional,{" "}
            <span className="text-emerald-800">Melayani Dengan Amanah</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Kami memadukan ketelitian sains kedokteran terkini dengan ketulusan akhlakul karimah demi ikhtiar kesembuhan dan kenyamanan lahir batin setiap pasien.
          </p>
        </div>

        {/* 5 Islamic Values Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ISLAMIC_VALUES_DATA.map((val, idx) => {
            const Icon = iconMap[val.id] || Sparkles;
            const isFeatured = idx === 0 || idx === 4;
            return (
              <div
                key={val.id}
                className={`p-7 rounded-3xl border transition-all duration-200 flex flex-col justify-between ${
                  isFeatured
                    ? "bg-white border-emerald-300 shadow-md shadow-emerald-900/5 ring-1 ring-emerald-200/60"
                    : "bg-white/90 border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-200"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="size-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                      <Icon className="size-6 text-emerald-800 stroke-[2.2]" />
                    </div>
                    <span className="text-lg font-serif text-emerald-800/80 font-bold tracking-wider">
                      {val.arabic}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {val.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 mb-3">
                    {val.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {val.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {val.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
