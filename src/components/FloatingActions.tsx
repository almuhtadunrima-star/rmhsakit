"use client";

import React from "react";
import { MessageCircle, ShieldAlert } from "lucide-react";

export function FloatingActions() {

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Emergency Call Floating Button */}
      <a
        href="tel:+62215732241"
        className="group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3.5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
        title="UGD Darurat 24 Jam"
      >
        <ShieldAlert className="size-5 animate-pulse" />
        <span className="text-xs font-black tracking-wide hidden sm:inline">
          UGD 24 Jam
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/628119722241?text=${encodeURIComponent(
          "Halo Customer Care RS Muhammad Ali, saya ingin menanyakan informasi layanan / pendaftaran dokter."
        )}`}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95"
        title="Chat WhatsApp RS Muhammad Ali"
      >
        <MessageCircle className="size-6 fill-current" />
        <span className="text-xs sm:text-sm font-bold tracking-wide">
          Chat WhatsApp
        </span>
      </a>
    </div>
  );
}
