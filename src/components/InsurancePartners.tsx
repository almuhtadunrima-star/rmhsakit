"use client";

import React from "react";
import { INSURANCE_PARTNERS } from "@/data/hospitalData";
import { ShieldCheck, CreditCard, PhoneCall } from "lucide-react";

export function InsurancePartners() {
  return (
    <section id="mitra-asuransi" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#00874e] text-xs font-bold uppercase tracking-wider mb-3">
            <CreditCard className="size-4" />
            <span>Kemudahan Pembayaran</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Mitra Asuransi & Jaminan Kesehatan
          </h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
            Rumah Sakit Muhammad Ali melayani pasien BPJS Kesehatan, BPJS Ketenagakerjaan, serta puluhan mitra asuransi swasta terkemuka dengan sistem jaminan cashless yang praktis dan cepat.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSURANCE_PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-sm flex items-center justify-center text-center hover:border-emerald-400 hover:shadow-md transition-all group"
            >
              <span className="font-bold text-xs sm:text-sm text-slate-700 group-hover:text-[#00874e] transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </div>

        {/* Helpdesk Notice */}
        <div className="mt-8 bg-emerald-50 rounded-2xl p-4 sm:p-5 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-[#00874e] text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="size-5" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                Petugas Helpdesk Asuransi Siap Membantu Klaim Anda
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600">
                Punya pertanyaan mengenai koordinasi manfaat atau limit pertanggungan? Hubungi petugas klaim kami.
              </p>
            </div>
          </div>

          <a
            href="tel:+62215732241"
            className="shrink-0 px-4 py-2 bg-white hover:bg-emerald-100 text-[#00874e] font-bold text-xs rounded-xl border border-emerald-300 transition-colors flex items-center gap-1.5"
          >
            <PhoneCall className="size-3.5" />
            <span>(021) 573 2241 (Ext. 102)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
