"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  ShieldAlert,
  ExternalLink,
} from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="kontak-lokasi" className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1 & 2: Hospital Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="white" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Rumah Sakit Islam Muhammad Ali (RSI Muhammad Ali) adalah pusat layanan kesehatan modern berstandar internasional yang memadukan keunggulan klinis dengan nilai-nilai empati dan bimbingan syariah.
            </p>

            <div className="space-y-2 text-xs pt-1">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Jl. Garnisun No. 1, Karet Semanggi, Setiabudi, Jakarta Selatan 12930</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="size-4 text-emerald-400 shrink-0" />
                <span>Info & Pendaftaran: (021) 573 2241</span>
              </div>
              <div className="flex items-center gap-2.5 text-red-400 font-bold">
                <ShieldAlert className="size-4 text-red-400 shrink-0" />
                <span>IGD & Ambulans 24 Jam: (021) 573 2241</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="size-4 text-emerald-400 shrink-0" />
                <span>info@rsimuhammadali.co.id</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="size-8 rounded-lg bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="size-8 rounded-lg bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="size-8 rounded-lg bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="size-4" />
              </a>
              <a
                href="https://maps.google.com/?q=Rumah+Sakit+Jakarta"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-emerald-700 text-emerald-400 hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors"
              >
                <span>Google Maps</span>
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigasi Cepat */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm tracking-wide">
              Navigasi Utama
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover:text-emerald-400 transition-colors">
                  Tentang Rumah Sakit
                </Link>
              </li>
              <li>
                <Link href="/dokter" className="hover:text-emerald-400 transition-colors">
                  Temukan Dokter Spesialis
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-emerald-400 transition-colors">
                  Layanan Medis Terpadu
                </Link>
              </li>
              <li>
                <Link href="/fasilitas" className="hover:text-emerald-400 transition-colors">
                  Fasilitas & Ruang Perawatan
                </Link>
              </li>
              <li>
                <Link href="/informasi-pasien" className="hover:text-emerald-400 transition-colors">
                  Informasi & Panduan Pasien
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-emerald-400 transition-colors">
                  Kontak & Lokasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Layanan Unggulan */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm tracking-wide">
              Layanan Medis
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/layanan/igd-24-jam" className="hover:text-emerald-400 transition-colors">
                  IGD 24 Jam
                </Link>
              </li>
              <li>
                <Link href="/layanan/poliklinik" className="hover:text-emerald-400 transition-colors">
                  Poliklinik Spesialis
                </Link>
              </li>
              <li>
                <Link href="/layanan/rawat-inap" className="hover:text-emerald-400 transition-colors">
                  Rawat Inap Suite & VIP
                </Link>
              </li>
              <li>
                <Link href="/layanan/laboratorium" className="hover:text-emerald-400 transition-colors">
                  Laboratorium Patologi 24 Jam
                </Link>
              </li>
              <li>
                <Link href="/layanan/radiologi" className="hover:text-emerald-400 transition-colors">
                  Radiologi, MRI & CT-Scan
                </Link>
              </li>
              <li>
                <Link href="/layanan/farmasi" className="hover:text-emerald-400 transition-colors">
                  Instalasi Farmasi 24 Jam
                </Link>
              </li>
              <li>
                <Link href="/layanan/medical-check-up" className="hover:text-emerald-400 transition-colors">
                  Paket Medical Check Up (MCU)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Pasien & Akun */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm tracking-wide">
              Layanan Pasien
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/buat-janji" className="hover:text-emerald-400 transition-colors font-bold text-emerald-400">
                  Buat Janji Dokter Online
                </Link>
              </li>
              <li>
                <Link href="/portal-pasien" className="hover:text-emerald-400 transition-colors">
                  Portal Pasien & Hasil Lab
                </Link>
              </li>
              <li>
                <Link href="/informasi-pasien#faq" className="hover:text-emerald-400 transition-colors">
                  FAQ & Bantuan
                </Link>
              </li>
              <li>
                <Link href="/informasi-pasien" className="hover:text-emerald-400 transition-colors">
                  Panduan Alur BPJS
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="hover:text-emerald-400 transition-colors">
                  Artikel & Tips Kesehatan
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Exact Copyright Requirement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© 2026 Rumah Sakit Islam Muhammad Ali. All Rights Reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-emerald-400 font-semibold">Terkreditasi Paripurna KARS & Sertifikasi Syariah DSN-MUI</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 transition-colors border border-slate-800 text-xs cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
