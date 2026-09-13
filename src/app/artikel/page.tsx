"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { BookingModal } from "@/components/BookingModal";
import { FloatingActions } from "@/components/FloatingActions";
import { ARTICLES_DATA } from "@/data/hospitalData";
import {
  Home,
  ChevronRight,
  Search,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function ArtikelPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const categories = [
    "ALL",
    "Kesehatan",
    "Tips Kesehatan",
    "Informasi Rumah Sakit",
    "Edukasi Islami",
    "Berita",
  ];

  const filteredArticles = ARTICLES_DATA.filter((art) => {
    const matchQuery =
      searchQuery === "" ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchCategory =
      selectedCategory === "ALL" || art.category === selectedCategory;

    return matchQuery && matchCategory;
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
            <span className="text-white font-semibold">Artikel & Edukasi Kesehatan</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Artikel & Edukasi Medis Islami
          </h1>
          <p className="mt-3 text-emerald-100 text-sm sm:text-base max-w-2xl leading-relaxed">
            Informasi kesehatan terpercaya yang ditinjau langsung oleh dokter spesialis RSI Muhammad Ali untuk memandu pola hidup sehat Anda dan keluarga.
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cari artikel kesehatan, penyakit, atau tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600 shadow-2xs"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-emerald-800 text-white shadow-xs"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat === "ALL" ? "Semua Kategori" : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-emerald-400 hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Article Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-emerald-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                    {art.category}
                  </span>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3" />
                      <span>{art.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors leading-snug line-clamp-2 mb-2">
                    {art.title}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {art.excerpt}
                  </p>

                  {art.doctorReviewer && (
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg w-fit">
                      <ShieldCheck className="size-3.5 text-emerald-700 shrink-0" />
                      <span className="truncate">Ditinjau oleh: {art.doctorReviewer}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                <Link
                  href={`/artikel/${art.slug}`}
                  className="text-xs font-bold text-emerald-800 group-hover:text-emerald-950 flex items-center gap-1.5 hover:underline"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <EmergencyBanner />
      <Footer />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      <FloatingActions />
    </div>
  );
}
