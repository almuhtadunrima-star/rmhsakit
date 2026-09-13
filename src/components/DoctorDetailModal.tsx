"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Doctor } from "@/data/hospitalData";
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Star,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Award,
  Globe2,
  ShieldCheck,
  User,
  HeartHandshake,
  ExternalLink,
} from "lucide-react";

interface DoctorDetailModalProps {
  doctor: Doctor | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: (specialty?: string, doctorName?: string) => void;
}

export function DoctorDetailModal({
  doctor,
  isOpen,
  onClose,
  onOpenBooking,
}: DoctorDetailModalProps) {
  const [imageError, setImageError] = useState(false);
  const [activeTab, setActiveTab] = useState<"about" | "schedule" | "education">("about");

  if (!isOpen || !doctor) return null;

  const isAvailableToday = doctor.status === "available_today";

  const handleBooking = () => {
    onClose();
    onOpenBooking(doctor.specialty, doctor.name);
  };

  const scrollToSchedule = () => {
    setActiveTab("schedule");
    const elem = document.getElementById("doctor-schedule-tab");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden relative max-h-[92vh] flex flex-col">
        {/* Top Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors shadow-xs"
          aria-label="Tutup detail dokter"
        >
          <X className="size-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1 divide-y divide-slate-100">
          {/* SECTION 1: HERO / PROFILE HEADER */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-emerald-50/70 to-white">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Doctor Large Portrait Photo */}
              <div className="relative size-32 sm:size-36 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-white shadow-md">
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
                    <User className="size-16 opacity-90" />
                  </div>
                )}
                {/* Available Badge on photo */}
                {isAvailableToday && (
                  <span className="absolute bottom-2 left-2 right-2 bg-emerald-600 text-white text-[10px] font-bold text-center py-0.5 rounded shadow-xs">
                    Tersedia Hari Ini
                  </span>
                )}
              </div>

              {/* Doctor Details */}
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#00874e] text-xs font-bold uppercase tracking-wider mb-2">
                  <span>{doctor.specialty}</span>
                  {doctor.subspecialty && <span>• {doctor.subspecialty}</span>}
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                  {doctor.name}
                </h2>

                <p className="text-xs text-slate-500 font-mono mt-1">
                  {doctor.sipStr}
                </p>

                {/* Rating, Experience, Poli */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-xs text-slate-600">
                  <div className="flex items-center gap-1">
                    <Star className="size-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-slate-900">{doctor.rating.toFixed(1)}</span>
                    <span className="text-slate-400">({doctor.reviewCount} ulasan pasien)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="size-4 text-emerald-600" />
                    <span className="font-semibold text-slate-800">{doctor.experienceText}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-2 mt-2 text-xs text-slate-700">
                  <MapPin className="size-4 text-emerald-600 shrink-0" />
                  <span>{doctor.location}</span>
                </div>

                {/* Action Buttons in Header */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-5">
                  <button
                    onClick={handleBooking}
                    className="px-5 py-2.5 rounded-xl bg-[#00874e] hover:bg-[#00703f] text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Calendar className="size-4" />
                    <span>Buat Janji Temu</span>
                  </button>

                  <button
                    onClick={scrollToSchedule}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 hover:border-emerald-600 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-emerald-50/50 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Clock className="size-4 text-emerald-700" />
                    <span>Lihat Jadwal Praktik</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* TAB BUTTONS */}
          <div className="px-6 sm:px-8 bg-white border-b border-slate-200 flex gap-6 text-sm font-bold">
            <button
              onClick={() => setActiveTab("about")}
              className={`py-3.5 border-b-2 cursor-pointer transition-colors ${
                activeTab === "about"
                  ? "border-[#00874e] text-[#00874e]"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              Tentang & Keahlian
            </button>
            <button
              id="doctor-schedule-tab"
              onClick={() => setActiveTab("schedule")}
              className={`py-3.5 border-b-2 cursor-pointer transition-colors ${
                activeTab === "schedule"
                  ? "border-[#00874e] text-[#00874e]"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              Jadwal Praktik Lengkap
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`py-3.5 border-b-2 cursor-pointer transition-colors ${
                activeTab === "education"
                  ? "border-[#00874e] text-[#00874e]"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              Pendidikan & Sertifikasi
            </button>
          </div>

          {/* TAB 1: TENTANG & KEAHLIAN */}
          {activeTab === "about" && (
            <div className="p-6 sm:p-8 space-y-6">
              {/* Profil Singkat */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Profil & Pengalaman Profesional
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {doctor.about}
                </p>
              </div>

              {/* Filosofi Pelayanan Islami */}
              {doctor.philosophy && (
                <div className="bg-emerald-50/80 rounded-2xl p-4 border border-emerald-100 flex items-start gap-3">
                  <HeartHandshake className="size-5 text-[#00874e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wide">
                      Komitmen Pelayanan Islami:
                    </h4>
                    <p className="text-xs text-emerald-800/90 mt-1 italic leading-relaxed">
                      &ldquo;{doctor.philosophy}&rdquo;
                    </p>
                  </div>
                </div>
              )}

              {/* Bidang Keahlian Medis */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Bidang Keahlian & Tindakan Klinis
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {doctor.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="size-4 text-[#00874e] shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Informasi Bahasa & Lokasi */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-600 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Globe2 className="size-4 text-emerald-600" />
                  <span>Bahasa: <strong>{doctor.languages.join(", ")}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-600" />
                  <span>Menerima Pasien BPJS & Asuransi Swasta</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: JADWAL PRAKTIK */}
          {activeTab === "schedule" && (
            <div className="p-6 sm:p-8 space-y-5">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Jadwal Praktik Poliklinik
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Harap hadir 15 menit sebelum jam praktik dimulai untuk verifikasi pendaftaran di Rumah Sakit Islam Muhammad Ali.
                </p>
              </div>

              <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
                {doctor.schedule.map((sch, i) => (
                  <div key={i} className="p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors">
                    <div>
                      <span className="font-bold text-slate-900 text-sm block">
                        {sch.days.join(", ")}
                      </span>
                      <span className="text-xs text-slate-500">
                        {sch.poli} • {sch.room} ({doctor.location})
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-xs">
                        {sch.hours}
                      </span>
                      <button
                        onClick={handleBooking}
                        className="px-3.5 py-1.5 rounded-lg bg-[#00874e] hover:bg-[#00703f] text-white text-xs font-bold transition-colors cursor-pointer"
                      >
                        Pilih
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-50 text-xs text-slate-600 space-y-1">
                <p className="font-semibold text-slate-700">Informasi Penting:</p>
                <p>• Jadwal praktik dapat berubah sewaktu-waktu sesuai kondisi darurat medis.</p>
                <p>• Konfirmasi jadwal dokter via Customer Care WhatsApp: <strong>+62 811-9722-241</strong>.</p>
              </div>
            </div>
          )}

          {/* TAB 3: PENDIDIKAN & SERTIFIKASI */}
          {activeTab === "education" && (
            <div className="p-6 sm:p-8 space-y-6">
              {/* Riwayat Pendidikan */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <GraduationCap className="size-4 text-emerald-600" />
                  <span>Riwayat Pendidikan Kedokteran</span>
                </h3>

                <div className="space-y-3">
                  {doctor.educations.map((edu, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="size-8 rounded-lg bg-emerald-100 text-[#00874e] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                          {edu.degree}
                        </h4>
                        <p className="text-xs text-slate-600">
                          {edu.institution} • Lulus {edu.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sertifikasi & Keanggotaan */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Award className="size-4 text-emerald-600" />
                  <span>Sertifikasi & Keanggotaan Profesional</span>
                </h3>

                <div className="space-y-2">
                  {doctor.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="size-4 text-[#00874e] shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <Link
            href={`/dokter/${doctor.id}`}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs text-emerald-800 hover:text-emerald-950 font-semibold hover:underline"
          >
            <ExternalLink className="size-3.5" />
            <span>Buka Halaman Profil Penuh</span>
          </Link>

          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs cursor-pointer"
            >
              Tutup
            </button>
            <button
              onClick={handleBooking}
              className="px-5 py-2.5 rounded-xl bg-[#00874e] hover:bg-[#00703f] text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="size-4" />
              <span>Buat Janji Dokter</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
