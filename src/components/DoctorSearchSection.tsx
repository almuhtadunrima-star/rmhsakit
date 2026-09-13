"use client";

import React, { useState, useMemo } from "react";
import { DOCTORS_DATA, Doctor } from "@/data/hospitalData";
import { DoctorCard } from "@/components/DoctorCard";
import { DoctorDetailModal } from "@/components/DoctorDetailModal";
import {
  Search,
  Stethoscope,
  RotateCcw,
  SlidersHorizontal,
  Check,
  X,
} from "lucide-react";

interface DoctorSearchSectionProps {
  onOpenBooking: (specialty?: string, doctorName?: string) => void;
}

export function DoctorSearchSection({ onOpenBooking }: DoctorSearchSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("ALL");
  const [selectedPoli, setSelectedPoli] = useState("ALL");
  const [selectedDay, setSelectedDay] = useState("ALL");
  const [onlyAvailableToday, setOnlyAvailableToday] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Selected doctor for Detail Modal
  const [selectedDoctorForModal, setSelectedDoctorForModal] = useState<Doctor | null>(null);

  // Derive unique specialties
  const specialties = useMemo(() => {
    const list = Array.from(new Set(DOCTORS_DATA.map((d) => d.specialty)));
    return ["ALL", ...list];
  }, []);

  // Derive unique polis
  const polis = useMemo(() => {
    const list = Array.from(new Set(DOCTORS_DATA.map((d) => d.poli)));
    return ["ALL", ...list];
  }, []);

  const days = ["ALL", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

  // Filter logic
  const filteredDoctors = useMemo(() => {
    return DOCTORS_DATA.filter((doc) => {
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        q === "" ||
        doc.name.toLowerCase().includes(q) ||
        doc.specialty.toLowerCase().includes(q) ||
        (doc.subspecialty && doc.subspecialty.toLowerCase().includes(q)) ||
        doc.skills.some((s) => s.toLowerCase().includes(q));

      const matchSpecialty =
        selectedSpecialty === "ALL" || doc.specialty === selectedSpecialty;

      const matchPoli =
        selectedPoli === "ALL" || doc.poli === selectedPoli;

      const matchDay =
        selectedDay === "ALL" ||
        doc.schedule.some((s) => s.days.includes(selectedDay));

      const matchAvailable =
        !onlyAvailableToday || doc.status === "available_today";

      return matchQuery && matchSpecialty && matchPoli && matchDay && matchAvailable;
    });
  }, [searchQuery, selectedSpecialty, selectedPoli, selectedDay, onlyAvailableToday]);

  const activeFilterCount =
    (selectedSpecialty !== "ALL" ? 1 : 0) +
    (selectedPoli !== "ALL" ? 1 : 0) +
    (selectedDay !== "ALL" ? 1 : 0) +
    (onlyAvailableToday ? 1 : 0) +
    (searchQuery.trim() !== "" ? 1 : 0);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedSpecialty("ALL");
    setSelectedPoli("ALL");
    setSelectedDay("ALL");
    setOnlyAvailableToday(false);
  };

  return (
    <section id="dokter-kami" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#00874e] text-xs font-bold uppercase tracking-wider mb-3">
            <Stethoscope className="size-4" />
            <span>Dokter Spesialis & Subspesialis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Temukan Dokter & Jadwal Praktik
          </h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Pelayanan medis prima berbasis empati islami dengan lebih dari 120 dokter spesialis & subspesialis terkemuka di Rumah Sakit Islam Muhammad Ali.
          </p>
        </div>

        {/* SEARCH & FILTER BAR */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xs border border-slate-200/90 mb-8">
          {/* Main Search Input */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari nama dokter, spesialisasi, atau keahlian (cth: dr. Wita, Bedah Saraf, Anak)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#00874e] focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          {/* Desktop Filter Dropdowns */}
          <div className="hidden lg:grid grid-cols-4 gap-3.5">
            {/* Filter 1: Spesialis */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                Spesialisasi
              </label>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#00874e] focus:bg-white transition-colors"
              >
                <option value="ALL">Semua Spesialis</option>
                {specialties.filter((s) => s !== "ALL").map((sp) => (
                  <option key={sp} value={sp}>
                    {sp}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter 2: Poli */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                Poliklinik
              </label>
              <select
                value={selectedPoli}
                onChange={(e) => setSelectedPoli(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#00874e] focus:bg-white transition-colors"
              >
                <option value="ALL">Semua Poliklinik</option>
                {polis.filter((p) => p !== "ALL").map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter 3: Hari Praktik */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                Hari Praktik
              </label>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#00874e] focus:bg-white transition-colors"
              >
                {days.map((d) => (
                  <option key={d} value={d}>
                    {d === "ALL" ? "Semua Hari" : `Hari ${d}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter 4: Status Tersedia Toggle */}
            <div className="flex flex-col justify-end">
              <button
                type="button"
                onClick={() => setOnlyAvailableToday(!onlyAvailableToday)}
                className={`w-full py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  onlyAvailableToday
                    ? "bg-emerald-50 border-emerald-500 text-[#00874e]"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                <div
                  className={`size-4 rounded-md border flex items-center justify-center ${
                    onlyAvailableToday
                      ? "bg-[#00874e] border-[#00874e] text-white"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  {onlyAvailableToday && <Check className="size-3 stroke-[3]" />}
                </div>
                <span>Tersedia Hari Ini</span>
              </button>
            </div>
          </div>

          {/* Mobile Filter Toggle Trigger */}
          <div className="lg:hidden flex items-center justify-between gap-3 pt-1">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <SlidersHorizontal className="size-4 text-emerald-700" />
              <span>Filter Dokter {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
            </button>

            {activeFilterCount > 0 && (
              <button
                onClick={resetFilters}
                className="py-2.5 px-3 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold flex items-center gap-1 hover:bg-slate-50"
              >
                <RotateCcw className="size-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Mobile Collapsible Filter Drawer */}
          {mobileFilterOpen && (
            <div className="lg:hidden pt-4 mt-3 border-t border-slate-100 space-y-3 animate-in fade-in duration-150">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Pilih Spesialisasi
                </label>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                >
                  <option value="ALL">Semua Spesialis</option>
                  {specialties.filter((s) => s !== "ALL").map((sp) => (
                    <option key={sp} value={sp}>
                      {sp}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Pilih Poliklinik
                </label>
                <select
                  value={selectedPoli}
                  onChange={(e) => setSelectedPoli(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                >
                  <option value="ALL">Semua Poliklinik</option>
                  {polis.filter((p) => p !== "ALL").map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Hari Praktik
                </label>
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                >
                  {days.map((d) => (
                    <option key={d} value={d}>
                      {d === "ALL" ? "Semua Hari" : `Hari ${d}`}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setOnlyAvailableToday(!onlyAvailableToday)}
                  className={`w-full py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 ${
                    onlyAvailableToday
                      ? "bg-emerald-50 border-emerald-500 text-[#00874e]"
                      : "bg-slate-50 border-slate-200 text-slate-700"
                  }`}
                >
                  <div
                    className={`size-4 rounded-md border flex items-center justify-center ${
                      onlyAvailableToday
                        ? "bg-[#00874e] border-[#00874e] text-white"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    {onlyAvailableToday && <Check className="size-3 stroke-[3]" />}
                  </div>
                  <span>Hanya yang Tersedia Hari Ini</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* RESULT BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 px-1">
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Menampilkan <strong className="text-slate-900 font-bold">{filteredDoctors.length} dokter</strong> dari total {DOCTORS_DATA.length} dokter spesialis
          </p>

          {activeFilterCount > 0 && (
            <button
              onClick={resetFilters}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#00874e] hover:text-emerald-800 font-bold cursor-pointer"
            >
              <RotateCcw className="size-3.5" />
              <span>Reset Semua Filter ({activeFilterCount})</span>
            </button>
          )}
        </div>

        {/* RESPONSIVE DOCTOR CARDS GRID */}
        {/* Mobile: 1 col | Tablet: 2 cols | Desktop: 3 cols */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onSelectDoctor={(doc) => setSelectedDoctorForModal(doc)}
                onOpenBooking={onOpenBooking}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-xs max-w-lg mx-auto">
            <div className="size-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
              <Search className="size-8" />
            </div>
            <h3 className="font-bold text-slate-800 text-base mb-1">
              Dokter Tidak Ditemukan
            </h3>
            <p className="text-xs text-slate-500 mb-5 leading-relaxed">
              Tidak ada dokter spesialis yang sesuai dengan kombinasi pencarian atau filter yang Anda pilih.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-xl bg-[#00874e] text-white font-bold text-xs shadow-xs hover:bg-[#00703f] transition-all cursor-pointer"
            >
              Reset Filter Pencarian
            </button>
          </div>
        )}
      </div>

      {/* DOCTOR DETAIL MODAL DOSSIER */}
      <DoctorDetailModal
        doctor={selectedDoctorForModal}
        isOpen={!!selectedDoctorForModal}
        onClose={() => setSelectedDoctorForModal(null)}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
}
