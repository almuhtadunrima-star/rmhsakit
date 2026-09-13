"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { BookingModal } from "@/components/BookingModal";
import { FloatingActions } from "@/components/FloatingActions";
import { SERVICES_DATA } from "@/data/hospitalData";
import {
  Home,
  ChevronRight,
  Activity,
  ArrowRight,
  Search,
  CheckCircle2,
} from "lucide-react";

export default function LayananPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [prefillService, setPrefillService] = useState("");

  const categories = [
    "ALL",
    "Layanan Rawat Jalan",
    "Layanan Gawat Darurat",
    "Perawatan Pasien",
    "Pusat Diagnostik",
    "Pelayanan Obat",
    "Pencegahan & Skrining",
    "Poliklinik Spesialis",
  ];

  const filteredServices = SERVICES_DATA.filter((srv) => {
    const matchQuery =
      searchQuery === "" ||
      srv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchCategory =
      selectedCategory === "ALL" || srv.category === selectedCategory;

    return matchQuery && matchCategory;
  });

  const handleBooking = (serviceName: string) => {
    setPrefillService(serviceName);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      <main className="flex-1">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white py-14 sm:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-3">
              <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
                <Home className="size-3.5" />
                <span>Beranda</span>
              </Link>
              <ChevronRight className="size-3 text-emerald-400" />
              <span className="text-white font-semibold">Layanan Medis</span>
            </nav>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Layanan Medis & Fasilitas Terpadu
            </h1>
            <p className="mt-3 text-emerald-100 text-sm sm:text-base max-w-2xl leading-relaxed">
              Pilihan layanan kesehatan komprehensif mulai dari gawat darurat, poliklinik spesialis, bedah minimal invasif, hingga laboratorium canggih di RSI Muhammad Ali.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="py-8 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search input */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari layanan medis atau prosedur..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600 shadow-2xs"
                />
              </div>

              {/* Category selector pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
                {categories.slice(0, 5).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-emerald-800 text-white shadow-xs"
                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {cat === "ALL" ? "Semua Layanan" : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((srv) => (
              <div
                key={srv.id}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-400/80 hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Activity className="size-6 text-emerald-800 stroke-[2.2]" />
                    </div>
                    {srv.badge && (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wide">
                    {srv.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-900 transition-colors mt-0.5 mb-2">
                    {srv.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {srv.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {srv.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href={`/layanan/${srv.slug}`}
                    className="text-xs font-bold text-emerald-800 group-hover:text-emerald-950 flex items-center gap-1 hover:underline"
                  >
                    <span>Pelajari Selengkapnya</span>
                    <ArrowRight className="size-3.5" />
                  </Link>

                  <button
                    onClick={() => handleBooking(srv.name)}
                    className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
                  >
                    Daftar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <EmergencyBanner />
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefillSpecialty={prefillService}
      />

      <FloatingActions />
    </div>
  );
}
