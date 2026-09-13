"use client";

import React from "react";
import { X } from "lucide-react";
import { BookingWizard } from "@/components/BookingWizard";

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[92vh] overflow-y-auto">
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors z-20 cursor-pointer"
          aria-label="Tutup Pendaftaran"
        >
          <X className="size-5" />
        </button>

        {/* 6-Step Booking Wizard Engine */}
        <BookingWizard
          prefillSpecialty={prefillSpecialty}
          prefillDoctor={prefillDoctor}
          isModal={true}
        />
      </div>
    </div>
  );
}
