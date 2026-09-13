"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { DoctorSearchSection } from "@/components/DoctorSearchSection";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { FloatingActions } from "@/components/FloatingActions";
import { ChevronRight, Home } from "lucide-react";

export default function DokterPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [prefillSpecialty, setPrefillSpecialty] = useState("");
  const [prefillDoctor, setPrefillDoctor] = useState("");

  const handleOpenBooking = (specialty?: string, doctorName?: string) => {
    setPrefillSpecialty(specialty || "");
    setPrefillDoctor(doctorName || "");
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* Page Breadcrumb & Header */}
        <div className="bg-emerald-900 text-white py-10 sm:py-14 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-3">
              <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
                <Home className="size-3.5" />
                <span>Beranda</span>
              </Link>
              <ChevronRight className="size-3 text-emerald-400" />
              <span className="text-white font-semibold">Dokter Kami</span>
            </nav>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Daftar Dokter Spesialis & Jadwal Praktik
            </h1>
            <p className="mt-2 text-emerald-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Temukan informasi profil lengkap, gelar akademik, sertifikasi, riwayat pendidikan, dan jadwal poliklinik para dokter ahli di Rumah Sakit Islam Muhammad Ali.
            </p>
          </div>
        </div>

        {/* Doctor Search & Filter Section */}
        <DoctorSearchSection onOpenBooking={handleOpenBooking} />

        {/* Emergency Callout */}
        <EmergencyBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Appointment Modal */}
      <BookingModal
        key={`${prefillSpecialty}-${prefillDoctor}-${bookingModalOpen}`}
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefillSpecialty={prefillSpecialty}
        prefillDoctor={prefillDoctor}
      />

      {/* Floating Triggers */}
      <FloatingActions />
    </div>
  );
}
