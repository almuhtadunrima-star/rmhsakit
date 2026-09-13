"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  UserCheck,
  BedDouble,
  AlertCircle,
  ShieldCheck,
  CreditCard,
  FileText,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Info,
} from "lucide-react";
import { PATIENT_INFO_DATA, FAQS_DATA } from "@/data/hospitalData";

export function PatientInfoSection() {
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");

  const iconMap: Record<string, React.ElementType> = {
    Calendar,
    UserCheck,
    BedDouble,
    AlertCircle,
    ShieldCheck,
    CreditCard,
    FileText,
    HelpCircle,
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="informasi-pasien" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Info className="size-3.5 text-emerald-700" />
            <span>Pusat Informasi & Panduan Pasien</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Semua Informasi Penting Dalam Satu Tempat
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Temukan panduan praktis pendaftaran, ketentuan rawat inap, alur BPJS, jadwal poliklinik dokter, hingga pertanyaan yang sering diajukan.
          </p>
        </div>

        {/* 8 Information Hub Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {PATIENT_INFO_DATA.map((item) => {
            const Icon = iconMap[item.iconName] || FileText;
            return (
              <Link
                key={item.id}
                href={item.linkUrl}
                className="group p-6 rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-emerald-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="size-6 text-emerald-800 stroke-[2.2]" />
                    </div>
                    {item.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-900 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-emerald-950">
                  <span>Buka Informasi</span>
                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* FAQ Interactive Accordion */}
        <div className="max-w-3xl mx-auto pt-6 border-t border-slate-100">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Jawaban cepat seputar pendaftaran, BPJS, jam besuk, dan pelayanan rumah sakit.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.slice(0, 5).map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200/90 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 text-left bg-white hover:bg-slate-50/80 flex items-center justify-between gap-4 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`size-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-emerald-700" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-6">
            <Link
              href="/informasi-pasien#faq"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 hover:underline"
            >
              <span>Lihat Semua Pertanyaan & Jawaban</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
