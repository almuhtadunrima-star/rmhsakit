"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  BriefcaseMedical,
  ArrowRight,
  ChevronRight,
  Activity,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/hospitalData";

interface ServicesOverviewSectionProps {
  onOpenBooking?: (specialty?: string) => void;
}

export function ServicesOverviewSection({ onOpenBooking }: ServicesOverviewSectionProps) {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = [
    { id: "ALL", label: "Semua Layanan" },
    { id: "Rawat Jalan", label: "Rawat Jalan & Poli" },
    { id: "Gawat Darurat", label: "Gawat Darurat" },
    { id: "Perawatan", label: "Rawat Inap" },
    { id: "Diagnostik", label: "Pusat Diagnostik" },
  ];

  const filteredServices = useMemo(() => {
    if (activeCategory === "ALL") return SERVICES_DATA;
    if (activeCategory === "Rawat Jalan") {
      return SERVICES_DATA.filter(
        (s) =>
          s.category.includes("Rawat Jalan") ||
          s.slug.includes("klinik") ||
          s.slug === "poliklinik"
      );
    }
    if (activeCategory === "Gawat Darurat") {
      return SERVICES_DATA.filter((s) => s.slug === "igd-24-jam");
    }
    if (activeCategory === "Perawatan") {
      return SERVICES_DATA.filter((s) => s.slug === "rawat-inap");
    }
    if (activeCategory === "Diagnostik") {
      return SERVICES_DATA.filter(
        (s) =>
          s.category.includes("Diagnostik") ||
          s.slug === "laboratorium" ||
          s.slug === "radiologi" ||
          s.slug === "medical-check-up"
      );
    }
    return SERVICES_DATA;
  }, [activeCategory]);

  return (
    <section id="layanan-kesehatan" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
              <BriefcaseMedical className="size-3.5 text-emerald-700" />
              <span>Layanan Medis Terpadu</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Pelayanan Medis &amp; Poliklinik Unggulan
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Fasilitas diagnostik presisi, tindakan kuratif modern, dan poliklinik spesialis yang siap mendampingi kebutuhan kesehatan Anda secara menyeluruh.
            </p>
          </div>

          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 shrink-0 bg-white px-4 py-2.5 rounded-xl border border-slate-200 hover:border-emerald-300 shadow-2xs transition-all"
          >
            <span>Eksplorasi Seluruh 12 Layanan</span>
            <ChevronRight className="size-4" />
          </Link>
        </div>

        {/* Ronas IT Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-emerald-800 text-white shadow-md shadow-emerald-900/20 scale-102"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid with Ronas IT 24px Rounded Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              className="group p-6 rounded-3xl bg-white hover:bg-white border border-slate-200/80 hover:border-emerald-300 hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="size-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Activity className="size-6 text-emerald-800 stroke-[2.2]" />
                  </div>
                  {srv.badge && (
                    <span className="text-[10.5px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 flex items-center gap-1">
                      <Sparkles className="size-3 text-emerald-600" />
                      <span>{srv.badge}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-2">
                  {srv.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                  {srv.description}
                </p>

                {/* Key Features Bullet List */}
                <div className="space-y-1.5 pb-4 border-b border-slate-100">
                  {srv.features.slice(0, 2).map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-1.5 text-[11px] text-slate-600"
                    >
                      <CheckCircle2 className="size-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3.5 flex items-center justify-between">
                <Link
                  href={`/layanan/${srv.slug}`}
                  className="text-xs font-bold text-emerald-800 group-hover:text-emerald-950 flex items-center gap-1 hover:underline"
                >
                  <span>Detail Layanan</span>
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </Link>

                {onOpenBooking && (
                  <button
                    onClick={() => onOpenBooking(srv.name)}
                    className="size-8 rounded-full bg-emerald-50 hover:bg-emerald-700 text-emerald-800 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label={`Pesan ${srv.name}`}
                    title="Buat Janji"
                  >
                    <ArrowRight className="size-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

