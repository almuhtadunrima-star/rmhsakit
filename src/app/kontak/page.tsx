"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { FloatingActions } from "@/components/FloatingActions";
import {
  Home,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  ShieldAlert,
  Send,
  CheckCircle2,
  Building,
} from "lucide-react";

export default function KontakPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Informasi Pelayanan");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Mohon lengkapi nama, email, dan pesan Anda.");
      return;
    }
    setIsSubmitted(true);
  };

  const departments = [
    { name: "IGD & Ambulans 24 Jam", phone: "(021) 573 2241", ext: "Ext. 118" },
    { name: "Pendaftaran & Informasi", phone: "(021) 573 2241", ext: "Ext. 101" },
    { name: "Admisi Rawat Inap", phone: "(021) 573 2241", ext: "Ext. 104" },
    { name: "Instalasi Farmasi 24 Jam", phone: "(021) 573 2241", ext: "Ext. 110" },
    { name: "Laboratorium & Radiologi", phone: "(021) 573 2241", ext: "Ext. 112" },
    { name: "Kemitraan Asuransi & Humas", phone: "(021) 573 2241", ext: "Ext. 201" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-3">
            <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <Home className="size-3.5" />
              <span>Beranda</span>
            </Link>
            <ChevronRight className="size-3 text-emerald-400" />
            <span className="text-white font-semibold">Kontak & Lokasi</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Hubungi Rumah Sakit Islam Muhammad Ali
          </h1>
          <p className="mt-3 text-emerald-100 text-sm sm:text-base max-w-2xl leading-relaxed">
            Tim kami siap melayani pertanyaan, konsultasi pendaftaran, serta tanggap darurat 24 jam dengan penuh keramahan dan kesiapan profesional.
          </p>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-16">
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
            <div className="size-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <MapPin className="size-6 text-emerald-800" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">
              Alamat Rumah Sakit
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Jl. Garnisun No. 1, Karet Semanggi, Setiabudi, Jakarta Selatan 12930
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
            <div className="size-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <Phone className="size-6 text-emerald-800" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">
              Telepon & Pendaftaran
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              (021) 573 2241 (Hunting)
            </p>
            <p className="text-xs text-emerald-700 font-semibold mt-1">
              WhatsApp: 0812-8888-2241
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-red-50 border border-red-200">
            <div className="size-12 rounded-2xl bg-red-600 text-white flex items-center justify-center mb-4">
              <ShieldAlert className="size-6" />
            </div>
            <h3 className="font-bold text-red-950 text-base mb-1">
              IGD & Ambulans 24 Jam
            </h3>
            <p className="text-xs text-red-900 leading-relaxed">
              Hotline Cepat: (021) 573 2241
            </p>
            <p className="text-[11px] text-red-700 font-bold mt-1">
              Siaga 24 Jam Tanpa Libur
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
            <div className="size-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <Mail className="size-6 text-emerald-800" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">
              Email Resmi
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              info@rsimuhammadali.co.id
            </p>
            <p className="text-xs text-slate-500 mt-1">
              humas@rsimuhammadali.co.id
            </p>
          </div>
        </div>

        {/* 2 Columns: Contact Form & Department Extensions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                Formulir Komunikasi
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Kirimkan Pesan atau Masukan Anda
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Kami merespon setiap pesan dalam waktu maksimal 1x24 jam kerja.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="size-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Pesan Anda Telah Terkirim!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Terima kasih <strong>{name}</strong>. Tim Humas & Pelayanan Pelanggan RSI Muhammad Ali akan segera menghubungi Anda melalui email <strong>{email}</strong>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Anda"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nama@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nomor WhatsApp / Telepon
                    </label>
                    <input
                      type="tel"
                      placeholder="0812-XXXX-XXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Kategori Keperluan
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                    >
                      <option value="Informasi Pelayanan">Informasi Pelayanan</option>
                      <option value="Jadwal Dokter">Jadwal Praktik Dokter</option>
                      <option value="Kemitraan Asuransi">Kemitraan Asuransi / Perusahaan</option>
                      <option value="Kritik & Saran">Kritik, Saran & Masukan</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pesan / Pertanyaan *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tuliskan pertanyaan atau informasi yang Anda butuhkan..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="size-4" />
                  <span>Kirim Pesan Sekarang</span>
                </button>
              </form>
            )}
          </div>

          {/* Department Extensions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                <Building className="size-4 text-emerald-700" />
                <span>Ekstensi Telepon Departemen</span>
              </h3>

              <div className="space-y-3">
                {departments.map((dept, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white rounded-2xl border border-slate-100 flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-bold text-slate-900 block">
                        {dept.name}
                      </span>
                      <span className="text-slate-500 text-[11px]">{dept.phone}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 font-mono font-bold text-[11px]">
                      {dept.ext}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="size-4 text-emerald-700" />
                <span>Peta Lokasi Rumah Sakit</span>
              </h4>
              <p className="text-xs text-slate-500 mb-4">
                Terletak strategis di kawasan Semanggi, Jakarta Selatan, mudah diakses melalui tol dalam kota dan transportasi umum (Halte Transjakarta Semanggi / MRT Bendungan Hilir).
              </p>
              <a
                href="https://maps.google.com/?q=Rumah+Sakit+Jakarta"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl border border-slate-200 hover:border-emerald-600 bg-slate-50 hover:bg-emerald-50 text-emerald-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Buka Petunjuk Arah di Google Maps</span>
                <ChevronRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>

        <EmergencyBanner />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
