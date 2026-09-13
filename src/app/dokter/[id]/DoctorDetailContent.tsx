"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Doctor } from "@/data/hospitalData";
import { Navbar } from "@/components/Navbar";
import { BookingModal } from "@/components/BookingModal";
import {
  ChevronRight,
  Home,
  Star,
  Briefcase,
  MapPin,
  Calendar,
  Clock,
  GraduationCap,
  Award,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  HeartHandshake,
  User,
} from "lucide-react";

export function DoctorDetailContent({ doctor }: { doctor: Doctor }) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const isAvailableToday = doctor.status === "available_today";

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  return (
    <>
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Breadcrumbs */}
      <div className="bg-slate-100 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-emerald-700 flex items-center gap-1 transition-colors">
              <Home className="size-3.5" />
              <span>Beranda</span>
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <Link href="/dokter" className="hover:text-emerald-700 transition-colors">
              Dokter Kami
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="text-slate-900 font-bold truncate max-w-xs">{doctor.name}</span>
          </nav>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        {/* HERO / PROFILE CARD */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Doctor Large Photo */}
            <div className="relative size-40 sm:size-48 lg:size-52 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-slate-100 shadow-md">
              {!imageError ? (
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div
                  className={`w-full h-full flex items-center justify-center text-white ${doctor.avatarColor}`}
                >
                  <User className="size-20 opacity-90" />
                </div>
              )}
              {isAvailableToday && (
                <span className="absolute bottom-3 left-3 right-3 bg-emerald-600 text-white text-[11px] font-bold text-center py-1 rounded-md shadow-sm">
                  Tersedia Hari Ini
                </span>
              )}
            </div>

            {/* Doctor Dossier Meta */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#00874e] text-xs font-bold uppercase tracking-wider border border-emerald-200/60">
                  {doctor.specialty}
                </span>
                {doctor.subspecialty && (
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    {doctor.subspecialty}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                {doctor.name}
              </h1>

              <p className="text-xs sm:text-sm text-slate-500 font-mono mt-1">
                {doctor.sipStr}
              </p>

              {/* Badges Bar: Rating, Experience, Poli */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5">
                  <Star className="size-4 fill-amber-400 text-amber-400" />
                  <span className="font-extrabold text-slate-900">{doctor.rating.toFixed(1)}</span>
                  <span className="text-slate-400">({doctor.reviewCount} ulasan)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="size-4 text-emerald-600" />
                  <span className="font-semibold text-slate-800">{doctor.experienceText}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700">
                  <MapPin className="size-4 text-emerald-600 shrink-0" />
                  <span>{doctor.location}</span>
                </div>
              </div>

              {/* Action CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 mt-6">
                <button
                  onClick={handleOpenBooking}
                  className="px-6 py-3.5 rounded-xl bg-[#00874e] hover:bg-[#00703f] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-98"
                >
                  <Calendar className="size-4" />
                  <span>Buat Janji Temu</span>
                </button>

                <a
                  href="#jadwal-praktik"
                  className="px-5 py-3.5 rounded-xl border border-slate-200 hover:border-emerald-600 bg-white text-slate-700 font-semibold text-sm hover:bg-emerald-50/50 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Clock className="size-4 text-emerald-700" />
                  <span>Lihat Jadwal Praktik</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DETAILS GRID: 2 COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (2 spans): About, Education, Skills */}
          <div className="lg:col-span-2 space-y-8">
            {/* 1. Tentang Dokter */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">
                Tentang Dokter & Pengalaman Profesional
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                {doctor.about}
              </p>

              {doctor.philosophy && (
                <div className="bg-emerald-50 rounded-2xl p-4 sm:p-5 border border-emerald-100 flex items-start gap-3 mt-4">
                  <HeartHandshake className="size-5 text-[#00874e] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-emerald-900 uppercase tracking-wide">
                      Filosofi Pelayanan Islami:
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-800 mt-1 italic leading-relaxed">
                      &ldquo;{doctor.philosophy}&rdquo;
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Riwayat Pendidikan */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <GraduationCap className="size-5 text-emerald-600" />
                <span>Riwayat Pendidikan Kedokteran</span>
              </h2>

              <div className="space-y-4">
                {doctor.educations.map((edu, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="size-9 rounded-xl bg-emerald-100 text-[#00874e] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {edu.institution} • Lulus Tahun {edu.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Bidang Keahlian & Tindakan */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="size-5 text-emerald-600" />
                <span>Bidang Keahlian & Tindakan Klinis</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {doctor.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="size-4 text-[#00874e] shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (1 span): Schedule, Additional Info */}
          <div className="space-y-8">
            {/* Jadwal Praktik Card */}
            <div id="jadwal-praktik" className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs">
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Clock className="size-5 text-emerald-600" />
                <span>Jadwal Praktik Poliklinik</span>
              </h2>

              <div className="space-y-3 mb-5">
                {doctor.schedule.map((sch, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-1">
                    <span className="font-bold text-slate-900 text-sm block">
                      {sch.days.join(", ")}
                    </span>
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span>{sch.room}</span>
                      <span className="font-bold text-emerald-800 bg-white px-2 py-0.5 rounded border border-emerald-100">
                        {sch.hours}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleOpenBooking}
                className="w-full py-3 rounded-xl bg-[#00874e] hover:bg-[#00703f] text-white font-bold text-xs sm:text-sm text-center shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="size-4" />
                <span>Pilih Jadwal & Daftar</span>
              </button>
            </div>

            {/* Sertifikasi & Keanggotaan */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Award className="size-4 text-emerald-600" />
                <span>Sertifikasi & Organisasi</span>
              </h2>

              <div className="space-y-2">
                {doctor.certifications.map((cert, idx) => (
                  <div key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Informasi Bahasa & Asuransi */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <Globe2 className="size-4 text-emerald-600" />
                <span>Bahasa: <strong>{doctor.languages.join(", ")}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <ShieldCheck className="size-4 text-emerald-600" />
                <span>Menerima BPJS Kesehatan & Asuransi Cashless</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefillSpecialty={doctor.specialty}
        prefillDoctor={doctor.name}
      />
    </>
  );
}
