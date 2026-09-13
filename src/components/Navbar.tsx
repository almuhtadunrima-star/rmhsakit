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
            {/* Beranda */}
            <Link
              href="/"
              className="px-3 py-2 rounded-lg hover:text-[#00874e] hover:bg-emerald-50/70 transition-colors"
            >
              Beranda
            </Link>

            {/* Layanan */}
            <div className="relative group">
              <Link
                href="/#layanan-kesehatan"
                className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-[#00874e] hover:bg-emerald-50/70 transition-colors"
              >
                <span>Layanan</span>
                <ChevronDown className="size-4 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              <div className="absolute top-full left-0 w-80 bg-white shadow-xl rounded-xl border border-slate-100 p-3 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1 mb-1">
                  Layanan & Fasilitas Medis
                </div>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <Link
                    href="/#layanan-kesehatan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                  >
                    Rawat Jalan
                  </Link>
                  <Link
                    href="/#layanan-kesehatan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                  >
                    Rawat Inap
                  </Link>
                  <Link
                    href="/#layanan-kesehatan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                  >
                    Medical Check Up
                  </Link>
                  <Link
                    href="/#layanan-kesehatan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                  >
                    Hemodialisa
                  </Link>
                  <Link
                    href="/#layanan-kesehatan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                  >
                    Laboratorium 24 Jam
                  </Link>
                  <Link
                    href="/#layanan-kesehatan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors"
                  >
                    Kamar Operasi
                  </Link>
                  <Link
                    href="/#pusat-unggulan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors font-medium text-emerald-700"
                  >
                    Eye Center
                  </Link>
                  <Link
                    href="/#pusat-unggulan"
                    className="p-2 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] transition-colors font-medium text-blue-700"
                  >
                    Brain & Spine
                  </Link>
                </div>
              </div>
            </div>

            {/* Dokter */}
            <Link
              href="/dokter"
              className="px-3 py-2 rounded-lg hover:text-[#00874e] hover:bg-emerald-50/70 transition-colors flex items-center gap-1.5"
            >
              <span>Dokter</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded-full">
                12 Spesialis
              </span>
            </Link>

            {/* Jadwal */}
            <Link
              href="/dokter#jadwal-filter"
              className="px-3 py-2 rounded-lg hover:text-[#00874e] hover:bg-emerald-50/70 transition-colors"
            >
              Jadwal
            </Link>

            {/* Tentang Kami */}
            <Link
              href="/#tentang-kami"
              className="px-3 py-2 rounded-lg hover:text-[#00874e] hover:bg-emerald-50/70 transition-colors"
            >
              Tentang Kami
            </Link>

            {/* Kontak */}
            <Link
              href="/#kontak-lokasi"
              className="px-3 py-2 rounded-lg hover:text-[#00874e] hover:bg-emerald-50/70 transition-colors"
            >
              Kontak
            </Link>
          </nav>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <Calendar className="size-4" />
              <span>Buat Janji</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 py-2 text-xs font-bold text-white bg-[#00874e] rounded-lg shadow-sm"
            >
              Buat Janji
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#00874e] rounded-lg border border-slate-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto space-y-4 animate-in slide-in-from-top-2 duration-150">
          <div className="space-y-1 text-sm font-semibold text-slate-800 divide-y divide-slate-100">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg hover:bg-emerald-50 hover:text-[#00874e]"
            >
              Beranda
            </Link>
            <Link
              href="/#layanan-kesehatan"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg hover:bg-emerald-50 hover:text-[#00874e]"
            >
              Layanan Medis & Fasilitas
            </Link>
            <Link
              href="/dokter"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-emerald-50 hover:text-[#00874e] font-bold text-emerald-700"
            >
              <span>Dokter Spesialis</span>
              <span className="text-[11px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                12 Dokter
              </span>
            </Link>
            <Link
              href="/dokter#jadwal-filter"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg hover:bg-emerald-50 hover:text-[#00874e]"
            >
              Jadwal Praktik Dokter
            </Link>
            <Link
              href="/#tentang-kami"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg hover:bg-emerald-50 hover:text-[#00874e]"
            >
              Tentang Kami & Sertifikasi Syariah
            </Link>
            <Link
              href="/#kontak-lokasi"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg hover:bg-emerald-50 hover:text-[#00874e]"
            >
              Kontak & Lokasi RSI Muhammad Ali
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2"
            >
              <Calendar className="size-4" />
              <span>Buat Janji Dokter Online</span>
            </button>
            <a
              href="tel:+62215732241"
              className="w-full py-2.5 rounded-xl bg-red-600 text-white font-bold text-center text-xs flex items-center justify-center gap-2"
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
