"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  Calendar,
  Menu,
  X,
  ChevronDown,
  ShieldAlert,
} from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/SocialIcons";
import { Logo } from "@/components/Logo";

interface NavbarProps {
  onOpenBooking: (prefillSpecialty?: string, prefillDoctor?: string) => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-40 bg-white transition-shadow duration-200">
      {/* Top Notification / Contact Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
          {/* Left: Contact & Hours */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="tel:+62215732241"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors font-medium"
            >
              <Phone className="size-3.5 text-emerald-400" />
              <span>Info & Pendaftaran: (021) 573 2241</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="size-3.5 text-emerald-400" />
              <span>UGD & Ambulans: 24 Jam Non-Stop</span>
            </div>
            <a
              href="https://maps.google.com/?q=Rumah+Sakit+Jakarta"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-slate-300"
            >
              <MapPin className="size-3.5 text-emerald-400" />
              <span>Jl. Garnisun No. 1, Karet Semanggi, Jakarta Selatan</span>
            </a>
          </div>

          {/* Right: Emergency Hotline & Socials */}
          <div className="flex items-center gap-4 ml-auto sm:ml-0">
            <a
              href="tel:+62215732241"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-[11px] animate-pulse transition-colors"
            >
              <ShieldAlert className="size-3" />
              <span>DARURAT: (021) 573 2241</span>
            </a>
            <div className="hidden sm:flex items-center gap-2 text-slate-400 pl-2 border-l border-slate-700">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="size-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="size-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full bg-white border-b transition-all duration-200 ${
          isScrolled
            ? "border-slate-200 shadow-md py-2.5"
            : "border-slate-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Logo variant="color" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-semibold text-slate-700">
            {/* Menu 1: Layanan Kesehatan */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-[#00874e] hover:bg-emerald-50/60 transition-colors"
              >
                <span>LAYANAN KESEHATAN</span>
                <ChevronDown className="size-4 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute top-full left-0 w-80 bg-white shadow-xl rounded-xl border border-slate-100 p-3 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <a
                    href="#layanan-kesehatan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                  >
                    Rawat Jalan
                  </a>
                  <a
                    href="#layanan-kesehatan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                  >
                    Rawat Inap
                  </a>
                  <a
                    href="#layanan-kesehatan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                  >
                    Medical Check Up
                  </a>
                  <a
                    href="#layanan-kesehatan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                  >
                    Hemodialisa
                  </a>
                  <a
                    href="#layanan-kesehatan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                  >
                    Laboratorium 24 Jam
                  </a>
                  <a
                    href="#layanan-kesehatan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                  >
                    Kamar Operasi
                  </a>
                  <a
                    href="#layanan-kesehatan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                  >
                    Fisioterapi
                  </a>
                  <a
                    href="#layanan-kesehatan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                  >
                    Radiologi & MRI
                  </a>
                  <a
                    href="#layanan-kesehatan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                  >
                    Farmasi 24 Jam
                  </a>
                  <a
                    href="#layanan-kesehatan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                  >
                    Sports Medicine
                  </a>
                  <a
                    href="#layanan-kesehatan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors font-bold text-red-600"
                  >
                    UGD 24 Jam
                  </a>
                  <a
                    href="#layanan-kesehatan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                  >
                    JBHC Akupuntur
                  </a>
                </div>
              </div>
            </div>

            {/* Menu 2: Pusat Unggulan */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-[#00874e] hover:bg-emerald-50/60 transition-colors"
              >
                <span>PUSAT UNGGULAN</span>
                <ChevronDown className="size-4 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-xl border border-slate-100 p-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex flex-col gap-1 text-xs">
                  <a
                    href="#pusat-unggulan"
                    className="p-2.5 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors font-medium flex items-center justify-between"
                  >
                    <span>Eye Center (Klinik Mata)</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">
                      Aini
                    </span>
                  </a>
                  <a
                    href="#pusat-unggulan"
                    className="p-2.5 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors font-medium"
                  >
                    Dental Clinic (Klinik Gigi Spesialis)
                  </a>
                  <a
                    href="#pusat-unggulan"
                    className="p-2.5 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors font-medium"
                  >
                    Orthopedic Center (Tulang & Sendi)
                  </a>
                  <a
                    href="#pusat-unggulan"
                    className="p-2.5 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors font-medium flex items-center justify-between"
                  >
                    <span>Brain & Spine Center</span>
                    <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded font-bold">
                      BESS
                    </span>
                  </a>
                  <a
                    href="#pusat-unggulan"
                    className="p-2.5 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors font-medium"
                  >
                    Endoscopy Center
                  </a>
                  <a
                    href="#pusat-unggulan"
                    className="p-2.5 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors font-medium"
                  >
                    Urology Center (Batu Ginjal / ESWL)
                  </a>
                </div>
              </div>
            </div>

            {/* Menu 3: Promo & Paket MCU */}
            <a
              href="#promo-paket"
              className="px-3 py-2 rounded-lg hover:text-[#00874e] hover:bg-emerald-50/60 transition-colors"
            >
              PROMO & PAKET MCU
            </a>

            {/* Menu 4: Dokter Kami */}
            <a
              href="#dokter-kami"
              className="px-3 py-2 rounded-lg hover:text-[#00874e] hover:bg-emerald-50/60 transition-colors"
            >
              DOKTER KAMI
            </a>

            {/* Menu 5: Informasi */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-[#00874e] hover:bg-emerald-50/60 transition-colors">
                <span>INFORMASI</span>
                <ChevronDown className="size-4 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full right-0 w-56 bg-white shadow-xl rounded-xl border border-slate-100 p-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-xs">
                <a
                  href="#tentang-kami"
                  className="block p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                >
                  Profil RS Muhammad Ali
                </a>
                <a
                  href="#artikel-kesehatan"
                  className="block p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                >
                  Artikel Kesehatan
                </a>
                <a
                  href="#mitra-asuransi"
                  className="block p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                >
                  Mitra Asuransi & Rekanan
                </a>
                <a
                  href="#kontak-lokasi"
                  className="block p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                >
                  Kontak & Lokasi Rumah Sakit
                </a>
              </div>
            </div>
          </nav>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#00874e] hover:bg-[#00703f] text-white font-semibold text-sm shadow-sm hover:shadow transition-all"
            >
              <Calendar className="size-4" />
              <span>Buat Janji</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#00874e] rounded-md"
            >
              Janji Temu
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#00874e] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto space-y-3">
          <div className="space-y-1 text-sm font-semibold text-slate-800">
            <a
              href="#layanan-kesehatan"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e]"
            >
              Layanan Kesehatan
            </a>
            <a
              href="#pusat-unggulan"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e]"
            >
              Pusat Unggulan (Eye, Orthopedic, Spine)
            </a>
            <a
              href="#promo-paket"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e]"
            >
              Promo & Paket MCU
            </a>
            <a
              href="#dokter-kami"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e]"
            >
              Jadwal Dokter Kami
            </a>
            <a
              href="#artikel-kesehatan"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e]"
            >
              Artikel Kesehatan
            </a>
            <a
              href="#tentang-kami"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e]"
            >
              Tentang RS Muhammad Ali
            </a>
            <a
              href="#mitra-asuransi"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e]"
            >
              Mitra Kerja & Asuransi
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-lg bg-[#00874e] text-white font-bold text-center flex items-center justify-center gap-2"
            >
              <Calendar className="size-4" />
              <span>Buat Janji Dokter Online</span>
            </button>
            <a
              href="tel:+62215732241"
              className="w-full py-2 rounded-lg bg-red-600 text-white font-bold text-center text-xs flex items-center justify-center gap-2"
            >
              <ShieldAlert className="size-4" />
              <span>UGD Darurat 24 Jam: (021) 573 2241</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
