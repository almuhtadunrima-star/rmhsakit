"use client";

import React, { useState } from "react";
import { Doctor } from "@/data/hospitalData";
import {
  Calendar,
  Clock,
  MapPin,
  Star,
  GraduationCap,
  Briefcase,
  Globe2,
  ChevronRight,
  User,
} from "lucide-react";

interface DoctorCardProps {
  doctor: Doctor;
  onSelectDoctor: (doctor: Doctor) => void;
  onOpenBooking: (specialty?: string, doctorName?: string) => void;
}

export function DoctorCard({ doctor, onSelectDoctor, onOpenBooking }: DoctorCardProps) {
  const [imageError, setImageError] = useState(false);

  const isAvailableToday = doctor.status === "available_today";

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/90 hover:border-emerald-400/80 shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between overflow-hidden relative">
      {/* Top Header Accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700" />

      {/* Main Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Top Meta: Status Badge & STR */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1.5">
            <span
              className={`size-2.5 rounded-full ${
                isAvailableToday
                  ? "bg-emerald-500 ring-4 ring-emerald-100 animate-pulse"
                  : "bg-slate-300"
              }`}
            />
            <span
              className={`text-[11px] font-bold ${
                isAvailableToday ? "text-emerald-700" : "text-slate-500"
              }`}
            >
              {doctor.statusText}
            </span>
          </div>

          <span className="text-[10px] text-slate-400 font-mono tracking-tight line-clamp-1 max-w-[130px]" title={doctor.sipStr}>
            {doctor.sipStr.split("•")[0].trim()}
          </span>
        </div>

        {/* Doctor Photo & Basic Title */}
        <div className="flex items-start gap-4 mb-4">
          {/* Photo Frame */}
          <div className="relative size-20 sm:size-22 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/80 shadow-xs">
            {!imageError ? (
              <img
                src={doctor.photo}
                alt={doctor.name}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div
                className={`w-full h-full flex items-center justify-center text-white ${doctor.avatarColor}`}
              >
                <User className="size-9 opacity-90" />
              </div>
            )}
          </div>

          {/* Identity */}
          <div className="flex-1 min-w-0">
            <span className="inline-block text-[11px] font-extrabold text-[#00874e] uppercase tracking-wider mb-1">
              {doctor.specialty}
            </span>
            <h3
              onClick={() => onSelectDoctor(doctor)}
              className="font-bold text-slate-900 text-base sm:text-lg leading-snug hover:text-[#00874e] cursor-pointer transition-colors line-clamp-2"
              title={doctor.name}
            >
              {doctor.name}
            </h3>
            {doctor.subspecialty && (
              <p className="text-xs text-slate-500 mt-0.5 line-clamp-1" title={doctor.subspecialty}>
                {doctor.subspecialty}
              </p>
            )}
          </div>
        </div>

        {/* Metrics Pill: Rating, Experience & Education */}
        <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 mb-4">
          <div className="flex items-center gap-1.5">
            <Star className="size-3.5 fill-amber-400 text-amber-400 shrink-0" />
            <span className="font-bold text-slate-900">{doctor.rating.toFixed(1)}</span>
            <span className="text-[11px] text-slate-400">({doctor.reviewCount})</span>
          </div>

          <div className="flex items-center gap-1.5 justify-end text-right">
            <Briefcase className="size-3.5 text-emerald-600 shrink-0" />
            <span className="font-semibold text-slate-800 text-[11px] truncate">
              {doctor.experienceText}
            </span>
          </div>
        </div>

        {/* Education Highlight */}
        <div className="flex items-center gap-2 text-xs text-slate-600 mb-3 px-1">
          <GraduationCap className="size-4 text-slate-400 shrink-0" />
          <span className="truncate text-[11.5px]">{doctor.educationSummary}</span>
        </div>

        {/* Poli & Location */}
        <div className="flex items-center gap-2 text-xs text-slate-600 mb-4 px-1">
          <MapPin className="size-4 text-emerald-600 shrink-0" />
          <span className="font-medium text-slate-800 text-[11.5px] truncate">
            {doctor.poli}
          </span>
        </div>

        {/* Schedule Preview Box */}
        <div className="mt-auto bg-emerald-50/60 rounded-xl p-3 border border-emerald-100/80 mb-2">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-900 mb-1">
            <Clock className="size-3.5 text-emerald-700 shrink-0" />
            <span>Jadwal Praktik:</span>
          </div>

          <div className="space-y-1">
            {doctor.schedule.slice(0, 2).map((sch, i) => (
              <div key={i} className="flex items-center justify-between text-[11px] text-slate-700">
                <span className="font-medium truncate max-w-[150px]">
                  {sch.days.join(", ")}
                </span>
                <span className="font-semibold text-slate-900 shrink-0">
                  {sch.hours}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages tags */}
        <div className="flex items-center gap-1.5 mt-2 px-1 text-[11px] text-slate-400">
          <Globe2 className="size-3.5 text-slate-400" />
          <span>Bahasa:</span>
          <div className="flex items-center gap-1">
            {doctor.languages.map((lang, idx) => (
              <span key={idx} className="bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded text-[10px] font-medium">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="p-4 sm:p-5 pt-0 grid grid-cols-2 gap-2.5">
        <button
          onClick={() => onSelectDoctor(doctor)}
          className="w-full py-2.5 px-3 rounded-xl border border-slate-200 hover:border-emerald-600 bg-white hover:bg-emerald-50/50 text-slate-700 hover:text-emerald-800 font-bold text-xs sm:text-sm text-center transition-colors flex items-center justify-center gap-1 cursor-pointer"
        >
          <span>Lihat Profil</span>
          <ChevronRight className="size-3.5" />
        </button>

        <button
          onClick={() => onOpenBooking(doctor.specialty, doctor.name)}
          className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold text-xs sm:text-sm text-center shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
        >
          <Calendar className="size-3.5" />
          <span>Buat Janji</span>
        </button>
      </div>
    </div>
  );
}
