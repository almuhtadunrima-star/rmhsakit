"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { BookingModal } from "@/components/BookingModal";
import { FloatingActions } from "@/components/FloatingActions";
import { PATIENT_INFO_DATA, FAQS_DATA, INSURANCE_PARTNERS } from "@/data/hospitalData";
import {
  Home,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

export default function InformasiPasienPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedFaqCategory, setSelectedFaqCategory] = useState("ALL");
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");

  const faqCategories = [
    "ALL",
    "Pendaftaran",
    "BPJS & Asuransi",
    "Rawat Inap",
    "IGD",
    "Dokter & Jadwal",
  ];

  const filteredFaqs = FAQS_DATA.filter((f) => {
    return selectedFaqCategory === "ALL" || f.category === selectedFaqCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-3">
            <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <Home className="size-3.5" />
              <span>Beranda</span>
            </Link>
            <ChevronRight className="size-3 text-emerald-400" />
            <span className="text-white font-semibold">Pusat Informasi Pasien</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Pusat Informasi & Panduan Pasien
          </h1>
          <p className="mt-3 text-emerald-100 text-sm sm:text-base max-w-2xl leading-relaxed">
            Panduan lengkap alur pendaftaran, ketentuan rawat inap, tata cara klaim BPJS & asuransi swasta, estimasi tarif, hingga FAQ Rumah Sakit Islam Muhammad Ali.
          </p>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-16">
        {/* Section 1: 8 Information Hub Modules */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
              Navigasi Cepat
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Modul Informasi Pelayanan
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PATIENT_INFO_DATA.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="size-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                      ✓
                    </span>
                    {item.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="size-3 text-emerald-600 shrink-0" />
                        <span className="truncate">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200/60 mt-4">
                  <Link
                    href={item.linkUrl}
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center justify-between"
                  >
                    <span>Buka Panduan</span>
                    <ChevronRight className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: BPJS & Asuransi Guide Detail */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 border border-emerald-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="size-4 text-emerald-700" />
                <span>Jaminan Kesehatan Terpercaya</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Alur Pasien BPJS Kesehatan & Asuransi Swasta
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                RSI Muhammad Ali melayani pasien pemegang kartu BPJS Kesehatan (JKN-KIS) dengan sistem rujukan berjenjang online dan 16+ asuransi swasta nasional dengan fasilitas klaim Cashless instan di loket admisi khusus asuransi.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Pasien BPJS:</strong> Membawa Surat Rujukan Faskes 1 yang aktif, KTP asli, dan Kartu BPJS Digital / Fisik.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Pasien Asuransi Swasta:</strong> Tunjukkan kartu asuransi di meja admisi kasir untuk verifikasi manfaat klaim cashless.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">
                Mitra Asuransi Terdaftar
              </h4>
              <div className="flex flex-wrap gap-2">
                {INSURANCE_PARTNERS.slice(0, 10).map((ins, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium"
                  >
                    {ins}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 mt-3">
                Dan masih banyak mitra asuransi terkemuka lainnya.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Interactive FAQ Accordion */}
        <section id="faq" className="pt-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
              Pusat Bantuan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Filter berdasarkan topik untuk menemukan jawaban seputar pendaftaran, BPJS, dan rawat inap.
            </p>
          </div>

          {/* FAQ Category Filters */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 max-w-3xl mx-auto">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFaqCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  selectedFaqCategory === cat
                    ? "bg-emerald-800 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat === "ALL" ? "Semua Topik" : cat}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-3 mt-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200/90 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-4 sm:p-5 text-left bg-white hover:bg-slate-50 flex items-center justify-between gap-4 transition-colors cursor-pointer"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                        {faq.category}
                      </span>
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">
                        {faq.question}
                      </span>
                    </div>
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
        </section>

        <EmergencyBanner />
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      <FloatingActions />
    </div>
  );
}
