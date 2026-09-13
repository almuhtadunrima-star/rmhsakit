"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import {
  Home,
  ChevronRight,
  User,
  Lock,
  FileText,
  ShieldCheck,
  Calendar,
  Activity,
  Download,
} from "lucide-react";

export default function PortalPasienPage() {
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Registration state
  const [regName, setRegName] = useState("");
  const [regNik, setRegNik] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regDob, setRegDob] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier) {
      alert("Silakan masukkan Nomor Rekam Medis, NIK, atau Email.");
      return;
    }
    setIsLoggedIn(true);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName || !regNik || !regPhone) {
      alert("Mohon lengkapi data pendaftaran pasien baru.");
      return;
    }
    alert("Pendaftaran berhasil! Nomor Rekam Medis sementara telah diterbitkan.");
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-3">
            <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <Home className="size-3.5" />
              <span>Beranda</span>
            </Link>
            <ChevronRight className="size-3 text-emerald-400" />
            <span className="text-white font-semibold">Portal Pasien Online</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Portal Pasien RSI Muhammad Ali
          </h1>
          <p className="mt-3 text-emerald-100 text-sm sm:text-base max-w-2xl leading-relaxed">
            Akses riwayat rekam medis, unduh hasil laboratorium online, pantau antrean poliklinik live, dan kelola jadwal janji temu keluarga Anda.
          </p>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        {!isLoggedIn ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
            {/* Left Col: Auth Card (7 cols) */}
            <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl">
              {/* Tab Selector */}
              <div className="flex rounded-2xl bg-slate-100 p-1.5 mb-8">
                <button
                  type="button"
                  onClick={() => setAuthMode("login")}
                  className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    authMode === "login"
                      ? "bg-white text-emerald-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Masuk (Login Pasien)
                </button>
                <button
                  type="button"
                  onClick={() => setAuthMode("register")}
                  className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    authMode === "register"
                      ? "bg-white text-emerald-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Pendaftaran Pasien Baru
                </button>
              </div>

              {authMode === "login" ? (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      No. Rekam Medis (RM) / NIK KTP / Email
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Contoh: RM-104928 atau 3174XXXXXXXX"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Kata Sandi / PIN
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                      <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500" />
                      <span>Ingat saya di perangkat ini</span>
                    </label>
                    <a href="#" className="text-emerald-700 hover:underline font-semibold">
                      Lupa Kata Sandi?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer mt-2"
                  >
                    Masuk ke Portal Pasien
                  </button>
                </form>
              ) : (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nama Lengkap Pasien (Sesuai KTP) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Lengkap"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nomor NIK KTP (16 Digit) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="3174XXXXXXXXXXXX"
                        value={regNik}
                        onChange={(e) => setRegNik(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nomor WhatsApp Aktif *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0812-XXXX-XXXX"
                        value={regPhone}
                        onChange={(e) => setRegPhone(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Tanggal Lahir Pasien *
                    </label>
                    <input
                      type="date"
                      required
                      value={regDob}
                      onChange={(e) => setRegDob(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer mt-2"
                  >
                    Daftar Sebagai Pasien Baru
                  </button>
                </form>
              )}
            </div>

            {/* Right Col: Benefits Overview (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <ShieldCheck className="size-5 text-emerald-700" />
                  <span>Fitur Utama Portal Pasien</span>
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="size-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold">
                      <FileText className="size-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-bold">
                        Hasil Laboratorium & Radiologi Online
                      </strong>
                      <span className="text-slate-500 text-xs">
                        Unduh hasil tes darah dan scan medis dalam format PDF resmi bertanda tangan digital.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="size-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold">
                      <Activity className="size-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-bold">
                        Live Tracking Antrean Poliklinik
                      </strong>
                      <span className="text-slate-500 text-xs">
                        Pantau nomor antrean dokter yang sedang berlangsung secara real-time dari ponsel Anda.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="size-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold">
                      <Calendar className="size-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-bold">
                        Kelola Riwayat Janji Temu
                      </strong>
                      <span className="text-slate-500 text-xs">
                        Lihat tanggal konsultasi mendatang, reschedule, atau batalkan jadwal tanpa repot.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Assistance Card */}
              <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-2">
                <h4 className="font-bold text-sm">Butuh Bantuan Akses?</h4>
                <p className="leading-relaxed">
                  Jika Anda belum mengetahui Nomor Rekam Medis (No. RM) Anda, silakan hubungi bagian admisi kami di (021) 573 2241 atau WhatsApp di 0812-8888-2241.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* LOGGED IN DASHBOARD PREVIEW */
          <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-200">
            {/* User Greeting Bar */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="size-16 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-bold text-2xl shadow-md">
                  MA
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                    Pasien Terverifikasi
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Selamat Datang, Muhammad Ali
                  </h2>
                  <p className="text-xs text-slate-500 font-mono">
                    No. RM: 00-48-29 • NIK: 3174020910890001
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsLoggedIn(false)}
                className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-xs font-bold text-slate-700"
              >
                Keluar (Logout)
              </button>
            </div>

            {/* Dashboard Modules */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Module 1: Upcoming Appointment */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Jadwal Konsultasi
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    Konfirmasi
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  dr. Wita Jayanti, Sp.M
                </h3>
                <p className="text-xs text-slate-600">
                  Poli Mata (Aini Eye Center) • R. 302
                </p>
                <div className="pt-2 text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                  <Calendar className="size-3.5" />
                  <span>Senin, 15 Sept 2026 • 09:30 WIB</span>
                </div>
              </div>

              {/* Module 2: Live Queue Tracker */}
              <div className="p-6 rounded-3xl bg-emerald-900 text-white shadow-xs space-y-3">
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
                  Antrean Poliklinik Live
                </span>
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-black">A-08</div>
                  <span className="text-xs text-emerald-200">/ Antrean Anda: A-12</span>
                </div>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  Estimasi giliran Anda: 15 menit lagi. Mohon mendekati ruang poliklinik.
                </p>
              </div>

              {/* Module 3: Lab Results Download */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Hasil Pemeriksaan Terbaru
                </span>
                <h4 className="text-sm font-bold text-slate-900">
                  Pemeriksaan Darah Lengkap & Profil Lipid
                </h4>
                <p className="text-xs text-slate-500">
                  Tanggal tes: 10 Sept 2026 • Laboratorium 24 Jam
                </p>
                <button
                  onClick={() => alert("Mengunduh hasil lab resmi format PDF...")}
                  className="w-full py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Download className="size-3.5" />
                  <span>Unduh Hasil PDF</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
