"use client";

import React from "react";
import { Logo } from "@/components/Logo";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Hospital Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="white" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Rumah Sakit Muhammad Ali adalah pusat layanan kesehatan terpadu dan modern di jantung Jakarta. Kami berkomitmen memberikan penanganan medis komprehensif, berbasis empati dan teknologi terkini.
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
                <Phone className="size-4 text-red-400 shrink-0" />
                <span>UGD & Ambulans 24 Jam: (021) 573 2241</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="size-4 text-emerald-400 shrink-0" />
                <span>info@rsmuhammadali.co.id</span>
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
            </div>
          </div>

          {/* Col 3: Layanan Kesehatan */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm tracking-wide">
              Layanan Penunjang
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#layanan-kesehatan" className="hover:text-emerald-400 transition-colors">
                  Rawat Jalan Spesialis
                </a>
              </li>
              <li>
                <a href="#layanan-kesehatan" className="hover:text-emerald-400 transition-colors">
                  Rawat Inap VVIP & VIP
                </a>
              </li>
              <li>
                <a href="#layanan-kesehatan" className="hover:text-emerald-400 transition-colors">
                  Medical Check Up (MCU)
                </a>
              </li>
              <li>
                <a href="#layanan-kesehatan" className="hover:text-emerald-400 transition-colors">
                  Unit Hemodialisa
                </a>
              </li>
              <li>
                <a href="#layanan-kesehatan" className="hover:text-emerald-400 transition-colors">
                  Laboratorium 24 Jam
                </a>
              </li>
              <li>
                <a href="#layanan-kesehatan" className="hover:text-emerald-400 transition-colors">
                  Kamar Operasi Modular
                </a>
              </li>
              <li>
                <a href="#layanan-kesehatan" className="hover:text-emerald-400 transition-colors">
                  Radiologi & MRI 1.5T
                </a>
              </li>
              <li>
                <a href="#layanan-kesehatan" className="hover:text-emerald-400 transition-colors">
                  Fisioterapi & Rehab Medik
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Pusat Unggulan */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm tracking-wide">
              Pusat Unggulan
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#pusat-unggulan" className="hover:text-emerald-400 transition-colors">
                  Muhammad Ali Eye Center
                </a>
              </li>
              <li>
                <a href="#pusat-unggulan" className="hover:text-emerald-400 transition-colors">
                  Muhammad Ali Dental Clinic
                </a>
              </li>
              <li>
                <a href="#pusat-unggulan" className="hover:text-emerald-400 transition-colors">
                  Muhammad Ali Orthopedic Center
                </a>
              </li>
              <li>
                <a href="#pusat-unggulan" className="hover:text-emerald-400 transition-colors">
                  Brain & Spine Center (BESS)
                </a>
              </li>
              <li>
                <a href="#pusat-unggulan" className="hover:text-emerald-400 transition-colors">
                  Endoscopy Center
                </a>
              </li>
              <li>
                <a href="#pusat-unggulan" className="hover:text-emerald-400 transition-colors">
                  Urology Center (ESWL)
                </a>
              </li>
              <li>
                <a href="#layanan-kesehatan" className="hover:text-emerald-400 transition-colors">
                  Sports Medicine Clinic
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Informasi & Pasien */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm tracking-wide">
              Informasi & Pasien
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#tentang-kami" className="hover:text-emerald-400 transition-colors">
                  Profil Rumah Sakit
                </a>
              </li>
              <li>
                <a href="#dokter-kami" className="hover:text-emerald-400 transition-colors">
                  Jadwal Praktik Dokter
                </a>
              </li>
              <li>
                <a href="#promo-paket" className="hover:text-emerald-400 transition-colors">
                  Promo & Paket MCU
                </a>
              </li>
              <li>
                <a href="#artikel-kesehatan" className="hover:text-emerald-400 transition-colors">
                  Artikel Kesehatan
                </a>
              </li>
              <li>
                <a href="#mitra-asuransi" className="hover:text-emerald-400 transition-colors">
                  Mitra Asuransi & BPJS
                </a>
              </li>
              <li>
                <a href="#tentang-kami" className="hover:text-emerald-400 transition-colors">
                  Indikator Mutu Nasional
                </a>
              </li>
              <li>
                <a href="#dokter-kami" className="hover:text-emerald-400 transition-colors">
                  Portal Pasien & Janji Temu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© 2026 Rumah Sakit Islam Muhammad Ali (RSI Muhammad Ali). Hak Cipta Dilindungi.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-emerald-400 font-semibold">Terkreditasi Paripurna KARS & Syariah</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 transition-colors border border-slate-800 text-xs"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
