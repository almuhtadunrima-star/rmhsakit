"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  X,
  Stethoscope,
  BriefcaseMedical,
  Building2,
  FileText,
  ChevronRight,
  ArrowRight,
  MapPin,
} from "lucide-react";
import {
  DOCTORS_DATA,
  SERVICES_DATA,
  FACILITIES_DATA,
  ARTICLES_DATA,
} from "@/data/hospitalData";

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking?: (specialty?: string, doctorName?: string) => void;
}

export function QuickSearchModal({
  isOpen,
  onClose,
  onOpenBooking,
}: QuickSearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        // toggle handled by caller
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const cleanQuery = query.toLowerCase().trim();

  const matchedDoctors = useMemo(() => {
    if (!cleanQuery) return DOCTORS_DATA.slice(0, 3);
    return DOCTORS_DATA.filter(
      (d) =>
        d.name.toLowerCase().includes(cleanQuery) ||
        d.specialty.toLowerCase().includes(cleanQuery) ||
        (d.subspecialty && d.subspecialty.toLowerCase().includes(cleanQuery)) ||
        d.skills.some((s) => s.toLowerCase().includes(cleanQuery))
    ).slice(0, 4);
  }, [cleanQuery]);

  const matchedServices = useMemo(() => {
    if (!cleanQuery) return SERVICES_DATA.slice(0, 3);
    return SERVICES_DATA.filter(
      (s) =>
        s.name.toLowerCase().includes(cleanQuery) ||
        s.description.toLowerCase().includes(cleanQuery) ||
        s.features.some((f) => f.toLowerCase().includes(cleanQuery))
    ).slice(0, 3);
  }, [cleanQuery]);

  const matchedFacilities = useMemo(() => {
    if (!cleanQuery) return FACILITIES_DATA.slice(0, 2);
    return FACILITIES_DATA.filter(
      (f) =>
        f.name.toLowerCase().includes(cleanQuery) ||
        f.description.toLowerCase().includes(cleanQuery) ||
        f.category.toLowerCase().includes(cleanQuery)
    ).slice(0, 3);
  }, [cleanQuery]);

  const matchedArticles = useMemo(() => {
    if (!cleanQuery) return ARTICLES_DATA.slice(0, 2);
    return ARTICLES_DATA.filter(
      (a) =>
        a.title.toLowerCase().includes(cleanQuery) ||
        a.category.toLowerCase().includes(cleanQuery) ||
        a.excerpt.toLowerCase().includes(cleanQuery)
    ).slice(0, 3);
  }, [cleanQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150">
        {/* Search Input Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center gap-3 bg-white">
          <Search className="size-5 text-emerald-700 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Cari dokter, spesialisasi, layanan medis, fasilitas, atau artikel..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm sm:text-base text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-full"
            >
              <X className="size-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-slate-500 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-6 overflow-y-auto divide-y divide-slate-100 space-y-4">
          {/* Section: Doctors */}
          {matchedDoctors.length > 0 && (
            <div className="pt-2 first:pt-0">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                  <Stethoscope className="size-3.5" />
                  <span>Dokter Spesialis</span>
                </span>
                <Link
                  href="/dokter"
                  onClick={onClose}
                  className="text-xs text-emerald-700 hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Semua Dokter</span>
                  <ChevronRight className="size-3" />
                </Link>
              </div>
              <div className="space-y-1.5">
                {matchedDoctors.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-2.5 rounded-xl hover:bg-emerald-50/60 transition-colors flex items-center justify-between gap-3 group"
                  >
                    <Link
                      href={`/dokter/${doc.id}`}
                      onClick={onClose}
                      className="flex items-center gap-3 flex-1 min-w-0"
                    >
                      <img
                        src={doc.photo}
                        alt={doc.name}
                        className="size-10 rounded-xl object-cover object-top shrink-0 border border-slate-200"
                      />
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors truncate">
                          {doc.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 truncate">
                          {doc.specialty} • {doc.poli}
                        </p>
                      </div>
                    </Link>
                    {onOpenBooking && (
                      <button
                        onClick={() => {
                          onClose();
                          onOpenBooking(doc.specialty, doc.name);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shrink-0 transition-colors"
                      >
                        Janji
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Services */}
          {matchedServices.length > 0 && (
            <div className="pt-4">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                  <BriefcaseMedical className="size-3.5" />
                  <span>Layanan Medis</span>
                </span>
                <Link
                  href="/layanan"
                  onClick={onClose}
                  className="text-xs text-emerald-700 hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Semua Layanan</span>
                  <ChevronRight className="size-3" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedServices.map((srv) => (
                  <Link
                    key={srv.id}
                    href={`/layanan/${srv.slug}`}
                    onClick={onClose}
                    className="p-3 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:border-emerald-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                  >
                    <div className="size-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      +
                    </div>
                    <div className="min-w-0">
                      <h5 className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 truncate">
                        {srv.name}
                      </h5>
                      <p className="text-[10.5px] text-slate-500 line-clamp-1">
                        {srv.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Section: Facilities */}
          {matchedFacilities.length > 0 && (
            <div className="pt-4">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Building2 className="size-3.5" />
                  <span>Fasilitas Rumah Sakit</span>
                </span>
                <Link
                  href="/fasilitas"
                  onClick={onClose}
                  className="text-xs text-emerald-700 hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Lihat Fasilitas</span>
                  <ChevronRight className="size-3" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedFacilities.map((fac) => (
                  <Link
                    key={fac.id}
                    href="/fasilitas"
                    onClick={onClose}
                    className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2.5"
                  >
                    <MapPin className="size-4 text-emerald-600 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-900 truncate">
                        {fac.name}
                      </p>
                      <p className="text-[10.5px] text-slate-500 truncate">
                        {fac.location}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Section: Articles */}
          {matchedArticles.length > 0 && (
            <div className="pt-4">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <FileText className="size-3.5" />
                  <span>Artikel & Edukasi Kesehatan</span>
                </span>
                <Link
                  href="/artikel"
                  onClick={onClose}
                  className="text-xs text-emerald-700 hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Semua Artikel</span>
                  <ChevronRight className="size-3" />
                </Link>
              </div>
              <div className="space-y-1.5">
                {matchedArticles.map((art) => (
                  <Link
                    key={art.id}
                    href={`/artikel/${art.slug}`}
                    onClick={onClose}
                    className="block p-2 rounded-xl hover:bg-emerald-50/50 transition-colors group"
                  >
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">
                      {art.category}
                    </span>
                    <h5 className="text-xs font-semibold text-slate-800 group-hover:text-emerald-900 line-clamp-1">
                      {art.title}
                    </h5>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>Tips: Tekan tombol <strong>ESC</strong> untuk menutup</span>
          <Link
            href="/buat-janji"
            onClick={onClose}
            className="text-emerald-700 hover:text-emerald-900 font-bold flex items-center gap-1"
          >
            <span>Pendaftaran Janji Temu Online</span>
            <ArrowRight className="size-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
