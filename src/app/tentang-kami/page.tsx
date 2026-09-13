"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { BookingModal } from "@/components/BookingModal";
import { FloatingActions } from "@/components/FloatingActions";
import { IslamicValuesSection } from "@/components/IslamicValuesSection";
import {
  Home,
  ChevronRight,
  ShieldCheck,
  Award,
  Target,
  Eye,
  CheckCircle2,
} from "lucide-react";

export default function TentangKamiPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      <main className="flex-1">
        {/* Page Hero Banner */}
        <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white py-14 sm:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-3">
              <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
                <Home className="size-3.5" />
                <span>Beranda</span>
              </Link>
              <ChevronRight className="size-3 text-emerald-400" />
              <span className="text-white font-semibold">Tentang Kami</span>
            </nav>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Tentang Rumah Sakit Islam Muhammad Ali
            </h1>
            <p className="mt-3 text-emerald-100 text-sm sm:text-base max-w-2xl leading-relaxed">
              Pelopor pelayanan kesehatan modern berstandar internasional yang dipadukan dengan nilai-nilai luhur etika medis Islami dan kasih sayang bagi seluruh lapisan masyarakat.
            </p>
          </div>
        </div>

        {/* Profile Overview Section */}
        <div className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image & Stats */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/4.5]">
                <img
                  src="/images/banner-slide-1.webp"
                  alt="Gedung Rumah Sakit Islam Muhammad Ali"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider bg-emerald-700 px-2.5 py-1 rounded-md inline-block mb-1">
                    Sejak 1998
                  </span>
                  <h3 className="text-lg font-bold">
                    Mengabdi Untuk Kesehatan Umat
                  </h3>
                  <p className="text-xs text-emerald-100">
                    Kombinasi sains kedokteran & bimbingan syariah
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-200 flex items-center gap-3">
                <div className="size-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Award className="size-6 text-emerald-800" />
                </div>
                <div>
                  <div className="text-sm font-black text-slate-900">
                    Akreditasi Paripurna
                  </div>
                  <div className="text-xs text-emerald-700 font-semibold">
                    KARS Bintang Lima & DSN-MUI
                  </div>
                </div>
              </div>
            </div>

            {/* Right Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="size-3.5 text-emerald-700" />
                <span>Profil Institusi</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Melayani Dengan Hati, Menyembuhkan Dengan Ridho Ilahi
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong>Rumah Sakit Islam Muhammad Ali (RSI Muhammad Ali)</strong> didirikan sebagai wujud ikhtiar nyata menghadirkan fasilitas kesehatan rujukan yang tidak hanya unggul dalam kompetensi medis dan teknologi diagnostik, tetapi juga menghangatkan jiwa pasien dengan etika empati Islami.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Kami meyakini bahwa proses penyembuhan adalah perpaduan antara ikhtiar medis ilmiah terbaik dan doa kepada Sang Maha Penyembuh (Asy-Syifa). Oleh karena itu, seluruh dokter, perawat, dan tenaga penunjang kami dibekali standar pelayanan komprehensif: cepat, tepat, ramah, dan menenangkan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-1">
                    <CheckCircle2 className="size-4 text-emerald-600" />
                    <span>Keselamatan Pasien (Patient Safety)</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Standar pencegahan infeksi ketat dan protokol tindakan medis terverifikasi.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-1">
                    <CheckCircle2 className="size-4 text-emerald-600" />
                    <span>Layanan Syariah Terakreditasi</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Bimbingan rohani, konseling doa, serta obat dan makanan halal terjamin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                Arah & Panduan Langkah
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Visi & Misi Rumah Sakit
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Visi */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="size-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
                    <Eye className="size-7 text-emerald-800" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Visi Kami
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    &ldquo;Menjadi Rumah Sakit Islam terdepan dan terpercaya di tingkat nasional yang memberikan pelayanan kesehatan paripurna berstandar internasional dengan mengedepankan kemaslahatan umat dan nilai-nilai akhlakul karimah pada tahun 2030.&rdquo;
                  </p>
                </div>
              </div>

              {/* Misi */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="size-14 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center mb-5">
                    <Target className="size-7 text-teal-800" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Misi Kami
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Menyelenggarakan pelayanan medis berkualitas tinggi, aman, dan berorientasi pada keselamatan pasien.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Mengembangkan Pusat Unggulan Medis (Centers of Excellence) didukung teknologi modern dan tenaga medis terspesialisasi.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Menerapkan prinsip-prinsip tata kelola rumah sakit syariah yang transparan, akuntabel, dan amanah.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Membina sumber daya insani yang kompeten, berakhlak mulia, dan berdedikasi tinggi bagi masyarakat.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Islamic Values Highlight */}
        <IslamicValuesSection />

        {/* Emergency Banner */}
        <EmergencyBanner />
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      <FloatingActions />
    </div>
  );
}
