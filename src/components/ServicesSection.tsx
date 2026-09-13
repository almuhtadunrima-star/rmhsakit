"use client";

import React, { useState } from "react";
import { SERVICES_DATA, ServiceItem } from "@/data/hospitalData";
import { Activity, X, CheckCircle2, Calendar, Phone, ArrowRight } from "lucide-react";

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="layanan-kesehatan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#00874e] text-xs font-bold uppercase tracking-wider mb-3">
            <Activity className="size-4" />
            <span>Fasilitas & Penunjang Medis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Standar Perawatan Medis Terdepan
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Menggabungkan keahlian medis dengan teknologi mutakhir untuk memberikan layanan diagnostik, terapeutik, dan rehabilitatif yang akurat dan efektif di Rumah Sakit Muhammad Ali.
          </p>
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col items-center text-center hover:-translate-y-1.5"
            >
              {/* Service Icon Container */}
              <div className="size-16 rounded-2xl bg-white group-hover:bg-emerald-50 flex items-center justify-center p-2.5 shadow-sm border border-slate-100 group-hover:border-emerald-200 transition-all mb-3.5 group-hover:scale-110">
                <img
                  src={service.icon}
                  alt={service.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#00874e] transition-colors line-clamp-1">
                {service.name}
              </h3>

              {/* Short snippet */}
              <p className="text-[11px] text-slate-500 mt-1.5 line-clamp-2 leading-tight">
                {service.description}
              </p>

              <span className="mt-3 text-[11px] font-bold text-[#00874e] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                Detail <ArrowRight className="size-3" />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Tutup modal"
            >
              <X className="size-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="size-16 rounded-2xl bg-emerald-50 p-2.5 border border-emerald-100 shrink-0">
                <img
                  src={selectedService.icon}
                  alt={selectedService.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-[#00874e] uppercase tracking-wider">
                  Layanan Medis RS Muhammad Ali
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {selectedService.name}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              {selectedService.longDescription}
            </p>

            <div className="space-y-2 mb-6">
              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">
                Fasilitas & Standar Pelayanan:
              </h4>
              <div className="space-y-2">
                {selectedService.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="size-4 text-[#00874e] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  const sName = selectedService.name;
                  setSelectedService(null);
                  onOpenBooking(sName);
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-[#00874e] hover:bg-[#00703f] text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Calendar className="size-4" />
                <span>Pendaftaran Layanan</span>
              </button>

              <a
                href="tel:+62215732241"
                className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="size-4 text-emerald-600" />
                <span>Hubungi (021) 573 2241</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
