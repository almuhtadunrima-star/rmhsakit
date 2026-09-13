"use client";

import React from "react";
import Link from "next/link";
import {
  BriefcaseMedical,
  ArrowRight,
  ChevronRight,
  Activity,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/hospitalData";

interface ServicesOverviewSectionProps {
  onOpenBooking?: (specialty?: string) => void;
}

export function ServicesOverviewSection({ onOpenBooking }: ServicesOverviewSectionProps) {
  return (
    <section id="layanan-kesehatan" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
              <BriefcaseMedical className="size-3.5 text-emerald-700" />
              <span>Layanan Medis Terpadu</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pelayanan Medis & Poliklinik Unggulan
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Fasilitas diagnostik, perawatan, dan tindakan kuratif modern yang siap mendampingi kesehatan Anda dan keluarga secara menyeluruh.
            </p>
          </div>

          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 hover:underline shrink-0"
          >
            <span>Lihat Seluruh 12 Layanan</span>
            <ChevronRight className="size-4" />
          </Link>
        </div>

        {/* 12 Services Grid with Soft Rounded Cards (16-24px) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              className="group p-6 rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-emerald-400/80 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="size-12 rounded-2xl bg-emerald-100/90 text-emerald-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Activity className="size-6 text-emerald-800 stroke-[2.2]" />
                  </div>
                  {srv.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                      {srv.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-900 transition-colors mb-2">
                  {srv.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                  {srv.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
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
                    className="text-[11px] font-semibold text-slate-500 hover:text-emerald-700 cursor-pointer"
                  >
                    Daftar
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
