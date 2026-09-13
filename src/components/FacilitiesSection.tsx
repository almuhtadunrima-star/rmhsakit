"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  MapPin,
  Clock,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { FACILITIES_DATA } from "@/data/hospitalData";

export function FacilitiesSection() {
  return (
    <section id="fasilitas" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="size-3.5 text-emerald-700" />
              <span>Infrastruktur & Kenyamanan</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Fasilitas Rumah Sakit Modern
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Dirancang dengan standar kesterilan tertinggi, alur pasien yang efisien, dan lingkungan asri yang mendukung ketenangan proses pemulihan.
            </p>
          </div>

          <Link
            href="/fasilitas"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 hover:underline shrink-0"
          >
            <span>Eksplorasi Semua Fasilitas</span>
            <ChevronRight className="size-4" />
          </Link>
        </div>

        {/* Facilities Grid with Large Visual Cards & Rounded Corners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES_DATA.slice(0, 8).map((fac) => (
            <div
              key={fac.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Facility Image Container with Rounded Top */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={fac.image}
                  alt={fac.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-emerald-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wide">
                  {fac.category}
                </span>
                <span className="absolute bottom-3 left-3 text-white text-xs font-semibold flex items-center gap-1">
                  <MapPin className="size-3 text-emerald-400" />
                  <span>{fac.location}</span>
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-emerald-800 transition-colors mb-2">
                    {fac.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {fac.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                    <Clock className="size-3 text-emerald-700" />
                    <span>{fac.hours.split("(")[0].trim()}</span>
                  </div>

                  <Link
                    href="/fasilitas"
                    className="size-8 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-colors"
                    aria-label={`Detail ${fac.name}`}
                  >
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
