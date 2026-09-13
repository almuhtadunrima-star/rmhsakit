"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Search,
  Star,
  ShieldCheck,
  Phone,
  Clock,
  Sparkles,
  HeartPulse,
  Stethoscope,
  ChevronRight,
} from "lucide-react";
import { DOCTORS_DATA, SERVICES_DATA } from "@/data/hospitalData";

interface HeroSectionProps {
  onOpenBooking: (specialty?: string, doctorName?: string) => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleHeroBooking = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(
      selectedSpecialty || undefined,
      selectedDoctor || undefined
    );
  };

  const filteredDoctors = selectedSpecialty
    ? DOCTORS_DATA.filter((d) => d.specialty === selectedSpecialty)
    : DOCTORS_DATA;

  return (
    <div className="relative bg-[#F8FAFC] overflow-hidden pt-6 sm:pt-10 pb-16 lg:pb-24 border-b border-slate-200/70">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-0 w-[450px] h-[450px] bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Subtext, Quick Booking Widget, Social Proof */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide shadow-2xs">
              <span className="size-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Pelayanan Medis Modern & Terpercaya</span>
              <span className="text-emerald-300">•</span>
              <span className="text-emerald-700 font-semibold">Akreditasi KARS Paripurna</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.14]">
              Pelayanan Kesehatan Modern,{" "}
              <span className="bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-700 bg-clip-text text-transparent">
                Dengan Nilai Islami
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              Menghadirkan layanan medis paripurna berstandar internasional, teknologi diagnostik canggih, dan ketulusan bimbingan syariah untuk kesembuhan serta kenyamanan keluarga Anda.
            </p>

            {/* Embedded Quick Appointment Booking Widget (Ronas IT Signature Feature) */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-xl border border-slate-200/80 max-w-2xl">
              <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Calendar className="size-4 text-emerald-700" />
                  <span>Jadwalkan Konsultasi Dokter Cepat</span>
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  Pendaftaran Online
                </span>
              </div>

              <form onSubmit={handleHeroBooking} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* Field 1: Layanan / Spesialis */}
                <div>
                  <label className="block text-[10.5px] font-bold text-slate-500 uppercase mb-1">
                    Spesialisasi
                  </label>
                  <select
                    value={selectedSpecialty}
                    onChange={(e) => {
                      setSelectedSpecialty(e.target.value);
                      setSelectedDoctor("");
                    }}
                    className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-600 text-slate-800 font-medium"
                  >
                    <option value="">Semua Spesialis</option>
                    {SERVICES_DATA.slice(0, 10).map((srv) => (
                      <option key={srv.id} value={srv.name}>
                        {srv.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field 2: Pilih Dokter */}
                <div>
                  <label className="block text-[10.5px] font-bold text-slate-500 uppercase mb-1">
                    Pilih Dokter
                  </label>
                  <select
                    value={selectedDoctor}
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-600 text-slate-800 font-medium"
                  >
                    <option value="">Pilih Dokter Ahli</option>
                    {filteredDoctors.slice(0, 12).map((doc) => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field 3: Pilih Tanggal */}
                <div>
                  <label className="block text-[10.5px] font-bold text-slate-500 uppercase mb-1">
                    Tanggal
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-600 text-slate-800 font-medium"
                  />
                </div>

                {/* Action Submit */}
                <div className="sm:col-span-3 pt-1 flex flex-col sm:flex-row items-center gap-2">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-emerald-700 via-teal-800 to-emerald-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-800/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <Search className="size-4" />
                    <span>Cari & Buat Janji Temu</span>
                  </button>

                  <Link
                    href="/dokter"
                    className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Lihat Semua Dokter</span>
                    <ChevronRight className="size-3.5 text-slate-500" />
                  </Link>
                </div>
              </form>
            </div>

            {/* Social Proof & Trust Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-600">
              {/* Doctor Avatars */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5 overflow-hidden">
                  {DOCTORS_DATA.slice(0, 4).map((d) => (
                    <img
                      key={d.id}
                      src={d.photo}
                      alt={d.name}
                      className="inline-block size-9 rounded-full ring-2 ring-white object-cover object-top"
                    />
                  ))}
                </div>
                <div>
                  <div className="font-extrabold text-slate-900">50+ Dokter Spesialis</div>
                  <div className="text-[11px] text-slate-500">Siap Melayani Anda</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2.5 pl-4 border-l border-slate-200">
                <div className="size-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Star className="size-4.5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900">4.9 / 5.0 Rating</div>
                  <div className="text-[11px] text-slate-500">1.200+ Pasien Terverifikasi</div>
                </div>
              </div>

              {/* KARS & Syariah */}
              <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-slate-200">
                <ShieldCheck className="size-4.5 text-emerald-700 shrink-0" />
                <div>
                  <div className="font-extrabold text-slate-900">Syariah & Paripurna</div>
                  <div className="text-[11px] text-slate-500">Sertifikasi DSN-MUI</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Ronas IT Arched Doctor Frame & 3 Floating Cards */}
          <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Background Accent Decorative Shape */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-[36px] rotate-1 opacity-20 blur-md" />

              {/* Main Photo Card with 32px rounded corners */}
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/4.8]">
                <img
                  src="/images/banner-slide-1.webp"
                  alt="Dokter Spesialis RSI Muhammad Ali"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider bg-emerald-700/90 backdrop-blur-md px-2.5 py-1 rounded-lg inline-flex items-center gap-1 mb-1.5">
                    <Sparkles className="size-3 text-emerald-300" />
                    <span>Layanan Unggulan</span>
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    Pusat Penanganan Medis Holistik & Syariah
                  </h3>
                  <p className="text-xs text-white/80 mt-0.5 line-clamp-1">
                    Didukung teknologi bedah minimal invasif & dokter konsultan.
                  </p>
                </div>
              </div>

              {/* Floating Card 1: Emergency 24/7 (Top Right) */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300 z-20">
                <div className="size-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                  <Phone className="size-5 fill-current animate-pulse" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-red-600 tracking-wider">
                    IGD & Ambulans 24 Jam
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900">
                    (021) 573 2241
                  </div>
                </div>
              </div>

              {/* Floating Card 2: Doctors Available (Bottom Left) */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-500 z-20">
                <div className="size-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <HeartPulse className="size-5 text-emerald-700" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold text-slate-900">Praktik Hari Ini</span>
                  </div>
                  <div className="text-[11px] text-emerald-700 font-semibold">
                    Konsultasi & Reservasi Aktif
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Highlights Strip (Ronas IT Signature Grid below Hero) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 sm:mt-16 pt-8 border-t border-slate-200/80">
          <div className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-2xs hover:shadow-md transition-all">
            <div className="size-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
              <Stethoscope className="size-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">
              Dokter Berpengalaman
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Tim dokter spesialis & subspesialis lulusan universitas terkemuka dengan jam terbang tinggi.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-2xs hover:shadow-md transition-all">
            <div className="size-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-3">
              <ShieldCheck className="size-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">
              Teknologi Canggih
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Didukung peralatan modern MRI 1.5 Tesla, CT-Scan 128 Slice, dan Ruang Operasi Modular.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-2xs hover:shadow-md transition-all">
            <div className="size-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
              <Sparkles className="size-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">
              Nilai Layanan Islami
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Pendampingan rohani, bimbingan doa kesembuhan, privasi aurat, dan konsumsi halal bernutrisi.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-2xs hover:shadow-md transition-all">
            <div className="size-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center mb-3">
              <Clock className="size-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">
              Respon Darurat 24 Jam
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Instalasi Gawat Darurat dan ambulans siaga 24 jam siap respon cepat tanpa jeda administrasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

