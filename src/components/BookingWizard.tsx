"use client";

import React, { useState, useMemo } from "react";
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  BriefcaseMedical,
  Printer,
  Share2,
  Sparkles,
} from "lucide-react";
import { DOCTORS_DATA, SERVICES_DATA } from "@/data/hospitalData";

interface BookingWizardProps {
  prefillSpecialty?: string;
  prefillDoctor?: string;
  onSuccess?: (bookingCode: string) => void;
  isModal?: boolean;
}

export function BookingWizard({
  prefillSpecialty = "",
  prefillDoctor = "",
  onSuccess,
  isModal = false,
}: BookingWizardProps) {
  const [step, setStep] = useState(1);

  // Form states
  const [selectedService, setSelectedService] = useState(prefillSpecialty || "Poliklinik Spesialis");
  const [selectedDoctorId, setSelectedDoctorId] = useState(() => {
    if (prefillDoctor) {
      const found = DOCTORS_DATA.find((d) => d.name.toLowerCase().includes(prefillDoctor.toLowerCase()));
      return found ? found.id : DOCTORS_DATA[0].id;
    }
    return DOCTORS_DATA[0].id;
  });
  const [selectedDate, setSelectedDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("09:30 - 10:00 WIB");
  const [consultationType, setConsultationType] = useState<"tatap_muka" | "telekonsultasi">("tatap_muka");

  // Patient Info
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientNik, setPatientNik] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Umum / Pribadi");
  const [complaint, setComplaint] = useState("");

  // Result state
  const [bookingCode, setBookingCode] = useState("");
  const [queueNumber, setQueueNumber] = useState("");

  const currentDoctor = useMemo(() => {
    return DOCTORS_DATA.find((d) => d.id === selectedDoctorId) || DOCTORS_DATA[0];
  }, [selectedDoctorId]);

  const availableDoctors = useMemo(() => {
    if (!selectedService || selectedService === "Semua") return DOCTORS_DATA;
    const matched = DOCTORS_DATA.filter(
      (d) =>
        d.specialty.toLowerCase().includes(selectedService.toLowerCase()) ||
        selectedService.toLowerCase().includes(d.specialty.toLowerCase())
    );
    return matched.length > 0 ? matched : DOCTORS_DATA;
  }, [selectedService]);

  const timeSlots = [
    { time: "08:30 - 09:00 WIB", available: true, label: "Pagi" },
    { time: "09:30 - 10:00 WIB", available: true, label: "Pagi" },
    { time: "10:30 - 11:00 WIB", available: true, label: "Pagi" },
    { time: "13:30 - 14:00 WIB", available: true, label: "Siang" },
    { time: "14:30 - 15:00 WIB", available: true, label: "Siang" },
    { time: "16:00 - 16:30 WIB", available: false, label: "Sore (Penuh)" },
    { time: "18:30 - 19:00 WIB", available: true, label: "Malam" },
    { time: "19:30 - 20:00 WIB", available: true, label: "Malam" },
  ];

  const handleNext = () => {
    if (step === 1 && !selectedService) {
      alert("Silakan pilih layanan terlebih dahulu.");
      return;
    }
    if (step === 2 && !selectedDoctorId) {
      alert("Silakan pilih dokter terlebih dahulu.");
      return;
    }
    if (step === 3 && !selectedDate) {
      alert("Silakan pilih tanggal konsultasi.");
      return;
    }
    if (step === 4 && !selectedTimeSlot) {
      alert("Silakan pilih jam praktik yang tersedia.");
      return;
    }
    if (step === 5) {
      if (!patientName.trim() || !patientPhone.trim()) {
        alert("Mohon isi nama lengkap dan nomor WhatsApp aktif pasien.");
        return;
      }
      const code = `RSMA-${Math.floor(100000 + Math.random() * 900000)}`;
      const queue = `A-${Math.floor(1 + Math.random() * 25)}`;
      setBookingCode(code);
      setQueueNumber(queue);
      if (onSuccess) onSuccess(code);
    }
    setStep((prev) => Math.min(prev + 1, 6));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const stepsList = [
    "Pilih Layanan",
    "Pilih Dokter",
    "Pilih Tanggal",
    "Pilih Jam",
    "Data Pasien",
    "Konfirmasi",
  ];

  return (
    <div className={`w-full ${isModal ? "" : "max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl"}`}>
      {/* Visual Stepper Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between gap-1 mb-3">
          {stepsList.map((label, idx) => {
            const stepNum = idx + 1;
            const isDone = step > stepNum;
            const isCurrent = step === stepNum;
            return (
              <div key={idx} className="flex-1 text-center">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isDone
                      ? "bg-emerald-700"
                      : isCurrent
                      ? "bg-emerald-600 ring-2 ring-emerald-200"
                      : "bg-slate-200"
                  }`}
                />
                <span
                  className={`hidden sm:inline-block text-[10px] mt-1.5 font-bold ${
                    isCurrent
                      ? "text-emerald-800"
                      : isDone
                      ? "text-slate-700"
                      : "text-slate-400"
                  }`}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="font-semibold text-emerald-800">
            Langkah {step} dari 6: <span className="text-slate-900">{stepsList[step - 1]}</span>
          </span>
          <span className="font-mono text-[11px]">
            {Math.round((step / 6) * 100)}% Selesai
          </span>
        </div>
      </div>

      {/* STEP 1: CHOOSE SERVICE */}
      {step === 1 && (
        <div className="space-y-5 animate-in fade-in duration-150">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Langkah 1: Pilih Layanan Medis / Poliklinik
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Pilih jenis poliklinik spesialis atau fasilitas yang ingin Anda tuju.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
            {SERVICES_DATA.map((srv) => {
              const isSelected = selectedService === srv.name;
              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setSelectedService(srv.name)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "border-emerald-600 bg-emerald-50/70 shadow-sm ring-2 ring-emerald-500/20"
                      : "border-slate-200 bg-slate-50/50 hover:bg-white hover:border-emerald-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="size-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                      <BriefcaseMedical className="size-4" />
                    </div>
                    {isSelected && (
                      <CheckCircle2 className="size-5 text-emerald-700" />
                    )}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {srv.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {srv.category}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 2: CHOOSE DOCTOR */}
      {step === 2 && (
        <div className="space-y-5 animate-in fade-in duration-150">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Langkah 2: Pilih Dokter Spesialis
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Dokter spesialis yang tersedia di {selectedService}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-h-[380px] overflow-y-auto pr-1">
            {availableDoctors.map((doc) => {
              const isSelected = selectedDoctorId === doc.id;
              return (
                <div
                  key={doc.id}
                  onClick={() => setSelectedDoctorId(doc.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                    isSelected
                      ? "border-emerald-600 bg-emerald-50/70 shadow-sm ring-2 ring-emerald-500/20"
                      : "border-slate-200 bg-white hover:border-emerald-300"
                  }`}
                >
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    className="size-14 rounded-2xl object-cover object-top border border-slate-200 shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wide">
                      {doc.specialty}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {doc.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate">
                      {doc.experienceText} • ⭐ {doc.rating.toFixed(1)}
                    </p>
                  </div>
                  {isSelected && (
                    <CheckCircle2 className="size-5 text-emerald-700 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 3: CHOOSE DATE */}
      {step === 3 && (
        <div className="space-y-5 animate-in fade-in duration-150">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Langkah 3: Pilih Tanggal Konsultasi
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Pilih tanggal kunjungan untuk dokter <strong>{currentDoctor.name}</strong>.
            </p>
          </div>

          {/* Quick Dates Shortcuts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
            {[0, 1, 2, 3].map((offset) => {
              const d = new Date();
              d.setDate(d.getDate() + offset);
              const dateStr = d.toISOString().split("T")[0];
              const dayName = d.toLocaleDateString("id-ID", { weekday: "short" });
              const dayNum = d.toLocaleDateString("id-ID", { day: "numeric", month: "short" });
              const isSelected = selectedDate === dateStr;
              return (
                <button
                  key={offset}
                  type="button"
                  onClick={() => setSelectedDate(dateStr)}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                    isSelected
                      ? "border-emerald-600 bg-emerald-700 text-white shadow-sm font-bold"
                      : "border-slate-200 bg-slate-50 hover:bg-white text-slate-800"
                  }`}
                >
                  <span className={`block text-xs uppercase ${isSelected ? "text-emerald-100" : "text-slate-500"}`}>
                    {offset === 0 ? "Hari Ini" : offset === 1 ? "Besok" : dayName}
                  </span>
                  <span className="text-sm sm:text-base font-extrabold mt-0.5 block">
                    {dayNum}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Custom Date Input */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mt-4">
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Atau Pilih Tanggal Lain dari Kalender:
            </label>
            <input
              type="date"
              value={selectedDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:outline-none focus:border-emerald-600"
            />
          </div>
        </div>
      )}

      {/* STEP 4: CHOOSE AVAILABLE TIME */}
      {step === 4 && (
        <div className="space-y-5 animate-in fade-in duration-150">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Langkah 4: Pilih Sesi Jam Praktik
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Pilih slot waktu yang tersedia pada tanggal <strong>{selectedDate}</strong>.
            </p>
          </div>

          {/* Consultation Type Toggle */}
          <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-100 rounded-2xl">
            <button
              type="button"
              onClick={() => setConsultationType("tatap_muka")}
              className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                consultationType === "tatap_muka"
                  ? "bg-white text-emerald-800 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Konsultasi Tatap Muka (Di RS)
            </button>
            <button
              type="button"
              onClick={() => setConsultationType("telekonsultasi")}
              className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                consultationType === "telekonsultasi"
                  ? "bg-white text-emerald-800 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Telekonsultasi Online (Video Call)
            </button>
          </div>

          {/* Time Slots Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {timeSlots.map((slot, idx) => {
              const isSelected = selectedTimeSlot === slot.time;
              return (
                <button
                  key={idx}
                  type="button"
                  disabled={!slot.available}
                  onClick={() => setSelectedTimeSlot(slot.time)}
                  className={`p-3.5 rounded-2xl border text-center transition-all ${
                    !slot.available
                      ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-60"
                      : isSelected
                      ? "border-emerald-600 bg-emerald-50 text-emerald-900 font-bold ring-2 ring-emerald-500/20 shadow-xs cursor-pointer"
                      : "border-slate-200 bg-white hover:border-emerald-300 text-slate-800 cursor-pointer"
                  }`}
                >
                  <span className="text-[10px] font-semibold text-slate-400 block mb-0.5">
                    {slot.label}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold block">
                    {slot.time}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 5: PATIENT INFORMATION */}
      {step === 5 && (
        <div className="space-y-5 animate-in fade-in duration-150">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Langkah 5: Data Diri Pasien
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Mohon isi identitas pasien dengan akurat untuk penerbitan tiket rekam medis.
            </p>
          </div>

          <div className="space-y-3.5 pt-1">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nama Lengkap Pasien *
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Muhammad Ali, S.T."
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nomor WhatsApp Aktif *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0812-XXXX-XXXX"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  NIK KTP / No. Paspor (Opsional)
                </label>
                <input
                  type="text"
                  placeholder="16 digit NIK KTP"
                  value={patientNik}
                  onChange={(e) => setPatientNik(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Metode Pembayaran
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              >
                <option value="Umum / Pribadi">Pasien Umum / Bayar Pribadi</option>
                <option value="BPJS Kesehatan">BPJS Kesehatan (Dengan Surat Rujukan)</option>
                <option value="Asuransi Swasta">Asuransi Swasta (Prudential, Allianz, Inhealth, dll)</option>
                <option value="Perusahaan Rekanan">Jaminan Perusahaan Korporat</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Keluhan Medis Singkat (Opsional)
              </label>
              <textarea
                rows={2}
                placeholder="Tuliskan keluhan atau riwayat pengobatan sebelumnya..."
                value={complaint}
                onChange={(e) => setComplaint(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              />
            </div>
          </div>
        </div>
      )}

      {/* STEP 6: CONFIRMATION & DIGITAL TICKET */}
      {step === 6 && (
        <div className="space-y-6 animate-in zoom-in-95 duration-200 text-center sm:text-left">
          <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 text-center">
            <div className="size-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3 shadow-md">
              <CheckCircle2 className="size-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Pendaftaran Janji Temu Berhasil!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
              Konfirmasi dan bukti tiket digital telah diterbitkan. Notifikasi pengingat otomatis telah dikirimkan ke nomor WhatsApp <strong>{patientPhone}</strong>.
            </p>
          </div>

          {/* DIGITAL APPOINTMENT TICKET */}
          <div className="p-6 rounded-3xl border-2 border-dashed border-emerald-300 bg-white shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  KODE BOOKING PENDAFTARAN
                </span>
                <div className="text-xl sm:text-2xl font-mono font-black text-emerald-800">
                  {bookingCode}
                </div>
              </div>
              <div className="sm:text-right">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  ESTIMASI NO. ANTREAN
                </span>
                <div className="text-lg sm:text-xl font-bold text-slate-800">
                  {queueNumber}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div>
                <span className="text-slate-400 block text-[11px]">Nama Pasien:</span>
                <strong className="text-slate-900 font-bold">{patientName}</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Metode Pembayaran:</span>
                <strong className="text-slate-900 font-bold">{paymentMethod}</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Dokter Spesialis:</span>
                <strong className="text-slate-900 font-bold">{currentDoctor.name}</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Poliklinik & Ruangan:</span>
                <strong className="text-slate-900 font-bold">{currentDoctor.poli} ({currentDoctor.location})</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Tanggal & Waktu:</span>
                <strong className="text-emerald-800 font-bold">{selectedDate} • {selectedTimeSlot}</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Jenis Konsultasi:</span>
                <strong className="text-slate-900 font-bold">
                  {consultationType === "tatap_muka" ? "Tatap Muka di Poliklinik" : "Telekonsultasi Online"}
                </strong>
              </div>
            </div>

            <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/70 text-[11px] text-amber-900 flex items-start gap-2 text-left">
              <Sparkles className="size-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Panduan Pasien:</strong> Harap hadir 15 menit sebelum jam konsultasi dan tunjukkan kode booking ini kepada petugas admisi lobi RSI Muhammad Ali.
              </span>
            </div>
          </div>

          {/* Action Buttons after Success */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => window.print()}
              className="px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="size-4" />
              <span>Cetak Bukti Janji</span>
            </button>
            <a
              href={`https://wa.me/?text=Bukti%20Janji%20Temu%20RSI%20Muhammad%20Ali%20Kode%3A%20${bookingCode}%20Dokter%3A%20${encodeURIComponent(currentDoctor.name)}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Share2 className="size-4" />
              <span>Simpan ke WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* FOOTER NAVIGATION BUTTONS (Step 1 to 5) */}
      {step < 6 && (
        <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ChevronLeft className="size-4" />
              <span>Kembali</span>
            </button>
          ) : (
            <div />
          )}

          <button
            type="button"
            onClick={handleNext}
            className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer active:scale-98"
          >
            <span>{step === 5 ? "Konfirmasi & Terbitkan Tiket" : "Lanjut Langkah Berikutnya"}</span>
            <ChevronRight className="size-4" />
          </button>
        </div>
      )}
    </div>
  );
}
