"use client";

import React, { useState } from "react";
import { CENTERS_OF_EXCELLENCE } from "@/data/hospitalData";
import { CheckCircle2, Award, Calendar, ArrowRight, UserCheck } from "lucide-react";

interface CenterOfExcellenceProps {
  onOpenBooking: (specialty?: string) => void;
}

export function CenterOfExcellence({ onOpenBooking }: CenterOfExcellenceProps) {
  const [activeTab, setActiveTab] = useState(CENTERS_OF_EXCELLENCE[0].id);

  const activeCenter =
    CENTERS_OF_EXCELLENCE.find((c) => c.id === activeTab) ||
    CENTERS_OF_EXCELLENCE[0];

  return (
    <section id="pusat-unggulan" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#00874e] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="size-4" />
            <span>Centers of Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pusat Layanan Medis Unggulan
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Menghadirkan fasilitas terintegrasi, teknologi bedah modern, dan dokter spesialis serta subspesialis berpengalaman untuk penanganan kesehatan menyeluruh dan presisi.
          </p>
        </div>

        {/* Tab Buttons Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CENTERS_OF_EXCELLENCE.map((item) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-[#00874e] text-white shadow-md shadow-emerald-700/20 scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {item.title.replace("Muhammad Ali ", "")}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Text, Highlights, Specialists */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#00874e] uppercase tracking-widest">
                  {activeCenter.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  {activeCenter.title}
                </h3>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeCenter.description}
              </p>

              {/* Highlights Bullet List */}
              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-slate-800 text-sm">Keunggulan & Layanan Utama:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCenter.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="size-4 text-[#00874e] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialist Doctors Available */}
              <div className="pt-2">
                <h4 className="font-bold text-slate-800 text-xs sm:text-sm flex items-center gap-1.5 mb-2">
                  <UserCheck className="size-4 text-[#00874e]" />
                  <span>Tim Dokter Ahli:</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCenter.specialists.map((doc, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
                    >
                      {doc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenBooking(activeCenter.title)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#00874e] hover:bg-[#00703f] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
                >
                  <Calendar className="size-4" />
                  <span>Konsultasi {activeCenter.title.replace("Muhammad Ali ", "")}</span>
                </button>
                <a
                  href="#dokter-kami"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-slate-700 hover:text-[#00874e] text-xs sm:text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  <span>Lihat Jadwal Praktik</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

            {/* Right: Featured Banner / Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100 aspect-4/3">
                <img
                  src={activeCenter.bannerUrl}
                  alt={activeCenter.title}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    RS Muhammad Ali
                  </span>
                  <p className="font-bold text-sm sm:text-base">{activeCenter.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
