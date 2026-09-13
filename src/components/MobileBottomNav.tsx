"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Stethoscope,
  Calendar,
  BriefcaseMedical,
  User,
} from "lucide-react";

interface MobileBottomNavProps {
  onOpenBooking?: () => void;
}

export function MobileBottomNav({ onOpenBooking }: MobileBottomNavProps) {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Beranda",
      href: "/",
      icon: Home,
      isActive: pathname === "/",
    },
    {
      label: "Dokter",
      href: "/dokter",
      icon: Stethoscope,
      isActive: pathname.startsWith("/dokter"),
    },
    {
      label: "Layanan",
      href: "/layanan",
      icon: BriefcaseMedical,
      isActive: pathname.startsWith("/layanan"),
    },
    {
      label: "Portal Pasien",
      href: "/portal-pasien",
      icon: User,
      isActive: pathname.startsWith("/portal-pasien") || pathname.startsWith("/login"),
    },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-3 py-1.5 pb-safe">
      <div className="max-w-md mx-auto flex items-center justify-around relative">
        {/* Left 2 items */}
        {navItems.slice(0, 2).map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors ${
                item.isActive
                  ? "text-emerald-800 font-bold"
                  : "text-slate-500 hover:text-slate-900 font-medium"
              }`}
            >
              <Icon className={`size-5 ${item.isActive ? "stroke-[2.5]" : "stroke-[1.8]"}`} />
              <span className="text-[10px] mt-0.5 tracking-tight">{item.label}</span>
            </Link>
          );
        })}

        {/* Center elevated Booking Action Button */}
        <div className="flex flex-col items-center justify-center -mt-6">
          {onOpenBooking ? (
            <button
              onClick={onOpenBooking}
              className="size-13 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white shadow-lg shadow-emerald-700/30 flex items-center justify-center border-4 border-white active:scale-95 transition-transform"
              aria-label="Buat Janji Dokter"
            >
              <Calendar className="size-6 stroke-[2.2]" />
            </button>
          ) : (
            <Link
              href="/buat-janji"
              className="size-13 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white shadow-lg shadow-emerald-700/30 flex items-center justify-center border-4 border-white active:scale-95 transition-transform"
              aria-label="Buat Janji Dokter"
            >
              <Calendar className="size-6 stroke-[2.2]" />
            </Link>
          )}
          <span className="text-[10px] font-bold text-emerald-800 mt-1">Buat Janji</span>
        </div>

        {/* Right 2 items */}
        {navItems.slice(2).map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors ${
                item.isActive
                  ? "text-emerald-800 font-bold"
                  : "text-slate-500 hover:text-slate-900 font-medium"
              }`}
            >
              <Icon className={`size-5 ${item.isActive ? "stroke-[2.5]" : "stroke-[1.8]"}`} />
              <span className="text-[10px] mt-0.5 tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
