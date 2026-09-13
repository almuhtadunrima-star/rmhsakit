"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Clock,
  Calendar,
  Menu,
  X,
  ShieldAlert,
  Search,
  User,
} from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/SocialIcons";
import { Logo } from "@/components/Logo";
import { QuickSearchModal } from "@/components/QuickSearchModal";

interface NavbarProps {
  onOpenBooking?: (prefillSpecialty?: string, prefillDoctor?: string) => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Dokter", href: "/dokter" },
    { label: "Layanan", href: "/layanan" },
    { label: "Fasilitas", href: "/fasilitas" },
    { label: "Informasi", href: "/informasi-pasien" },
    { label: "Kontak", href: "/kontak" },
  ];

  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-shadow duration-200">
        {/* Top Notification / Emergency Bar */}
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
                <span>UGD & Ambulans: 24 Jam Nonstop</span>
              </div>
            </div>

            {/* Right: Emergency Hotline & Socials */}
            <div className="flex items-center gap-4 ml-auto sm:ml-0">
              <a
                href="tel:+62215732241"
                className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-[11px] transition-colors shadow-xs"
              >
                <ShieldAlert className="size-3" />
                <span>IGD 24 JAM: (021) 573 2241</span>
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
              ? "border-slate-200/90 shadow-sm py-2.5"
              : "border-slate-100 py-3.5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
            {/* Left: Hospital Logo + Name */}
            <Link href="/" className="shrink-0 flex items-center gap-3">
              <Logo variant="color" />
            </Link>

            {/* Center: Desktop Navigation Links (Ronas IT Floating Pill Bar) */}
            <nav className="hidden xl:flex items-center gap-1 p-1 bg-slate-100/80 rounded-full border border-slate-200/70 text-[13.5px] font-semibold text-slate-700">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-full transition-all ${
                      isActive
                        ? "text-emerald-900 bg-white shadow-xs font-bold"
                        : "hover:text-emerald-800 hover:bg-white/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Search, Login, and CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Icon Trigger */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2 sm:px-2.5 sm:py-2 text-slate-600 hover:text-emerald-800 hover:bg-emerald-50/70 rounded-xl border border-slate-200 transition-colors flex items-center gap-2 text-xs font-medium"
                aria-label="Buka Pencarian"
                title="Pencarian Cepat (Ctrl+K)"
              >
                <Search className="size-4" />
                <span className="hidden md:inline text-slate-400">Cari...</span>
                <kbd className="hidden lg:inline px-1.5 py-0.5 text-[10px] bg-slate-100 text-slate-500 rounded border border-slate-200">
                  ⌘K
                </kbd>
              </button>

              {/* Daftar / Login */}
              <Link
                href="/portal-pasien"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-slate-700 hover:text-emerald-800 hover:bg-slate-50 text-xs sm:text-sm font-semibold transition-colors"
              >
                <User className="size-4 text-emerald-700" />
                <span>Daftar / Login</span>
              </Link>

              {/* Primary CTA: Buat Janji */}
              {onOpenBooking ? (
                <button
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 via-teal-800 to-emerald-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Calendar className="size-4" />
                  <span>Buat Janji</span>
                </button>
              ) : (
                <Link
                  href="/buat-janji"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 via-teal-800 to-emerald-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
                >
                  <Calendar className="size-4" />
                  <span>Buat Janji</span>
                </Link>
              )}

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 text-slate-700 hover:text-emerald-800 rounded-xl border border-slate-200 hover:bg-slate-50 focus:outline-none"
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
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto space-y-4 animate-in slide-in-from-top-2 duration-150">
            <div className="space-y-1 text-sm font-semibold text-slate-800 divide-y divide-slate-100">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl transition-colors ${
                    pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                      ? "text-emerald-800 bg-emerald-50 font-bold"
                      : "hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/portal-pasien"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700"
              >
                <User className="size-4 text-emerald-700" />
                <span>Portal Pasien (Daftar / Login)</span>
              </Link>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
              {onOpenBooking ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-800 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="size-4" />
                  <span>Buat Janji Dokter Online</span>
                </button>
              ) : (
                <Link
                  href="/buat-janji"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-800 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="size-4" />
                  <span>Buat Janji Dokter Online</span>
                </Link>
              )}

              <a
                href="tel:+62215732241"
                className="w-full py-2.5 rounded-xl bg-red-600 text-white font-bold text-center text-xs flex items-center justify-center gap-2"
              >
                <ShieldAlert className="size-4" />
                <span>IGD Darurat 24 Jam: (021) 573 2241</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Quick Search Modal */}
      <QuickSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onOpenBooking={onOpenBooking}
      />
    </>
  );
}
