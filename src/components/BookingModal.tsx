"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { DOCTORS_DATA } from "@/data/hospitalData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillSpecialty?: string;
  prefillDoctor?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  prefillSpecialty = "",
  prefillDoctor = "",
}: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [specialty, setSpecialty] = useState(prefillSpecialty);
  const [doctor, setDoctor] = useState(prefillDoctor);
  const [visitDate, setVisitDate] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientNik, setPatientNik] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Umum / Pribadi");
  const [complaint, setComplaint] = useState("");
  const [bookingCode, setBookingCode] = useState("");

  if (!isOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!specialty) {
        alert("Silakan pilih poliklinik / spesialisasi terlebih dahulu.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!visitDate) {
        alert("Silakan pilih tanggal kunjungan.");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!patientName || !patientPhone) {
        alert("Mohon lengkapi nama dan nomor WhatsApp/telepon pasien.");
        return;
      }
      // Generate booking code
      const code = `RSMA-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingCode(code);
      setStep(4);
    }
  };

  const handleResetAndClose = () => {
    setStep(1);
    setBookingCode("");
    onClose();
  };

  const specialtiesList = Array.from(new Set(DOCTORS_DATA.map((d) => d.specialty)));

  const availableDoctors = DOCTORS_DATA.filter(
    (d) => !specialty || d.specialty === specialty
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[95vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Tutup"
        >
          <X className="size-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-xs font-bold text-[#00874e] uppercase tracking-wider">
            Sistem Pendaftaran Pasien Online
          </span>
          <h3 className="text-2xl font-black text-slate-900 mt-1">
            Buat Janji Dokter RS Muhammad Ali
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Langkah {step} dari 4 — Reservasi jadwal pemeriksaan lebih cepat & praktis
          </p>

          {/* Stepper bar */}
          <div className="flex items-center gap-2 mt-4">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  s <= step ? "bg-[#00874e]" : "bg-slate-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* STEP 1: Poliklinik & Spesialisasi */}
        {step === 1 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                Pilih Poliklinik / Layanan Spesialis
              </label>
              <select
                value={specialty}
                onChange={(e) => {
                  setSpecialty(e.target.value);
                  setDoctor("");
                }}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#00874e] focus:bg-white"
                required
              >
                <option value="">-- Pilih Poliklinik Spesialis --</option>
                {specialtiesList.map((sp) => (
                  <option key={sp} value={sp}>
                    {sp}
                  </option>
                ))}
              </select>
            </div>

            {specialty && (
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Pilih Dokter (Opsional)
                </label>
                <select
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#00874e] focus:bg-white"
                >
                  <option value="">Dokter yang Tersedia / Rekomendasi Sistem</option>
                  {availableDoctors.map((doc) => (
                    <option key={doc.id} value={doc.name}>
                      {doc.name} ({doc.subspecialty})
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#00874e] hover:bg-[#00703f] text-white font-bold text-sm flex items-center gap-2 shadow-md transition-all"
              >
                <span>Lanjut Pilih Waktu</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Tanggal Kunjungan */}
        {step === 2 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                Pilihan Dokter & Poli:
              </label>
              <div className="p-3 bg-emerald-50 text-emerald-900 rounded-xl text-xs font-semibold border border-emerald-100">
                {specialty} {doctor ? `• ${doctor}` : "• Dokter Tersedia"}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                Pilih Tanggal Rencana Kunjungan
              </label>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#00874e] focus:bg-white"
                required
              />
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1.5 hover:bg-slate-50"
              >
                <ArrowLeft className="size-3.5" />
                <span>Kembali</span>
              </button>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#00874e] hover:bg-[#00703f] text-white font-bold text-sm flex items-center gap-2 shadow-md transition-all"
              >
                <span>Lanjut Isi Data Pasien</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Data Pasien */}
        {step === 3 && (
          <form onSubmit={handleNextStep} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Nama Lengkap Pasien *
              </label>
              <input
                type="text"
                placeholder="Sesuai KTP / Kartu Identitas"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#00874e] focus:bg-white"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Nomor WhatsApp / HP *
                </label>
                <input
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#00874e] focus:bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  NIK / No. Rekam Medis (Bila Ada)
                </label>
                <input
                  type="text"
                  placeholder="16 digit NIK atau No RM"
                  value={patientNik}
                  onChange={(e) => setPatientNik(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#00874e] focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Metode Jaminan Pembayaran
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#00874e] focus:bg-white"
              >
                <option value="Umum / Pribadi">Pasien Umum / Biaya Mandiri</option>
                <option value="BPJS Kesehatan">BPJS Kesehatan (Membawa Rujukan Faskes 1)</option>
                <option value="Asuransi Swasta">Asuransi Swasta / Korporasi (Cashless)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Keluhan Medis Singkat (Opsional)
              </label>
              <textarea
                rows={2}
                placeholder="Ceritakan keluhan atau gejala yang dirasakan..."
                value={complaint}
                onChange={(e) => setComplaint(e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#00874e] focus:bg-white"
              />
            </div>

            <div className="pt-3 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1.5 hover:bg-slate-50"
              >
                <ArrowLeft className="size-3.5" />
                <span>Kembali</span>
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#00874e] hover:bg-[#00703f] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all"
              >
                <CheckCircle2 className="size-4" />
                <span>Konfirmasi Janji Temu</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: Konfirmasi Tiket Sukses */}
        {step === 4 && (
          <div className="space-y-5 text-center py-2">
            <div className="size-16 rounded-full bg-emerald-100 text-[#00874e] flex items-center justify-center mx-auto">
              <CheckCircle2 className="size-10" />
            </div>

            <div>
              <h4 className="text-xl font-black text-slate-900">
                Pendaftaran Berhasil Dibuat!
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                Tiket janji temu Anda telah tercatat di sistem Rumah Sakit Muhammad Ali.
              </p>
            </div>

            {/* Ticket Card */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-medium">Nomor Booking:</span>
                <span className="font-extrabold text-[#00874e] text-sm">{bookingCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Nama Pasien:</span>
                <span className="font-bold text-slate-800">{patientName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Layanan:</span>
                <span className="font-bold text-slate-800">{specialty}</span>
              </div>
              {doctor && (
                <div className="flex justify-between">
                  <span className="text-slate-500">Dokter:</span>
                  <span className="font-bold text-slate-800">{doctor}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-slate-500">Tanggal Kunjungan:</span>
                <span className="font-bold text-slate-800">{visitDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Pembayaran:</span>
                <span className="font-bold text-slate-800">{paymentMethod}</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 text-left bg-emerald-50/70 p-3 rounded-xl border border-emerald-100">
              💡 Harap hadir 15 menit sebelum jadwal praktik dokter di loket pendaftaran Gedung RS Muhammad Ali (Jl. Garnisun No. 1, Jakarta Selatan) dengan menunjukkan nomor booking ini atau KTP.
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/628119722241?text=${encodeURIComponent(
                  `Halo RS Muhammad Ali, saya sudah mendaftar janji temu dokter:\nKode: ${bookingCode}\nNama: ${patientName}\nLayanan: ${specialty}\nTanggal: ${visitDate}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <span>Konfirmasi via WhatsApp</span>
              </a>

              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
              >
                Selesai
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
