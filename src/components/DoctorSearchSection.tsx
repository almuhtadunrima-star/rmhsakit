"use client";

import React, { useState, useMemo } from "react";
import { DOCTORS_DATA } from "@/data/hospitalData";
import { Search, Stethoscope, Calendar, Clock, Filter, UserRound } from "lucide-react";

interface DoctorSearchSectionProps {
  onOpenBooking: (specialty?: string, doctorName?: string) => void;
}

export function DoctorSearchSection({ onOpenBooking }: DoctorSearchSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("ALL");
  const [selectedDay, setSelectedDay] = useState("ALL");

  const specialties = useMemo(() => {
    const list = Array.from(new Set(DOCTORS_DATA.map((d) => d.specialty)));
    return ["ALL", ...list];
  }, []);

  const days = ["ALL", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

  const filteredDoctors = useMemo(() => {
    return DOCTORS_DATA.filter((doc) => {
      const matchQuery =
        searchQuery.trim() === "" ||
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.subspecialty.toLowerCase().includes(searchQuery.toLowerCase());

      const matchSpecialty =
        selectedSpecialty === "ALL" || doc.specialty === selectedSpecialty;

      const matchDay =
        selectedDay === "ALL" ||
        doc.schedule.some((s) => s.days.includes(selectedDay));

      return matchQuery && matchSpecialty && matchDay;
    });
  }, [searchQuery, selectedSpecialty, selectedDay]);

  return (
    <section id="dokter-kami" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#00874e] text-xs font-bold uppercase tracking-wider mb-3">
            <Stethoscope className="size-4" />
            <span>Dokter Spesialis & Subspesialis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Temukan Dokter & Jadwal Praktik
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Pusat penanganan medis dengan dokter berpengalaman lulusan universitas terbaik di dalam maupun luar negeri. Cari jadwal dokter dan buat janji temu online secara instan.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-200/90 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="relative">
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                Nama Dokter / Kata Kunci
              </label>
              <div className="relative flex items-center">
                <Search className="absolute left-3.5 size-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Contoh: dr. Wita, Bedah, Mata..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#00874e] focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Specialty Dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                Spesialisasi
              </label>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#00874e] focus:bg-white transition-colors"
              >
                {specialties.map((sp) => (
                  <option key={sp} value={sp}>
                    {sp === "ALL" ? "Semua Spesialisasi" : sp}
                  </option>
                ))}
              </select>
            </div>

            {/* Day Dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                Hari Praktik
              </label>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#00874e] focus:bg-white transition-colors"
              >
                {days.map((d) => (
                  <option key={d} value={d}>
                    {d === "ALL" ? "Semua Hari (Termasuk Minggu)" : `Hari ${d}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Button / Result count */}
            <div className="flex flex-col justify-end">
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSpecialty("ALL");
                  setSelectedDay("ALL");
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors"
              >
                <Filter className="size-3.5" />
                <span>Reset Filter ({filteredDoctors.length} Dokter)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Doctor Cards Grid */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-200 hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Top Avatar & Name */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`size-14 rounded-2xl ${doctor.avatarColor} text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0`}
                    >
                      <UserRound className="size-7" />
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#00874e] text-[11px] font-bold border border-emerald-100 mb-1">
                        {doctor.specialty}
                      </span>
                      <h3 className="font-extrabold text-slate-900 text-base leading-snug">
                        {doctor.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {doctor.subspecialty}
                      </p>
                    </div>
                  </div>

                  {/* Schedule Box */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-2 mb-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                      <Clock className="size-3.5 text-emerald-600" />
                      <span>Jadwal Praktik:</span>
                    </div>
                    {doctor.schedule.map((sch, idx) => (
                      <div
                        key={idx}
                        className="text-xs text-slate-600 flex items-center justify-between border-b border-slate-200/50 pb-1 last:border-0 last:pb-0"
                      >
                        <span className="font-medium">{sch.days.join(", ")}</span>
                        <span className="text-slate-800 font-semibold">{sch.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onOpenBooking(doctor.specialty, doctor.name)}
                  className="w-full py-2.5 rounded-xl bg-[#00874e] hover:bg-[#00703f] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Calendar className="size-3.5" />
                  <span>Buat Janji Temu</span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-slate-500 text-sm">
              Tidak ada dokter yang cocok dengan kriteria pencarian Anda.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedSpecialty("ALL");
                setSelectedDay("ALL");
              }}
              className="mt-3 text-xs font-bold text-[#00874e] underline hover:text-emerald-800"
            >
              Reset semua filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
