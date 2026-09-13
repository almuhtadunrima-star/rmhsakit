"use client";

import React from "react";
import { Users, Award, Clock, HeartPulse } from "lucide-react";
import { STATISTICS_DATA } from "@/data/hospitalData";

export function StatisticsSection() {
  const iconMap: Record<string, React.ElementType> = {
    Users,
    Award,
    Clock,
    HeartPulse,
  };

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATISTICS_DATA.map((item) => {
            const IconComponent = iconMap[item.iconName] || Users;
            return (
              <div
                key={item.id}
                className="p-6 rounded-3xl bg-slate-50/80 hover:bg-emerald-50/50 border border-slate-100/90 transition-all duration-200 group flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <div className="size-12 rounded-2xl bg-emerald-100/90 text-emerald-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="size-6 text-emerald-800 stroke-[2.2]" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-1">
                  {item.number}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-800 mb-1">
                  {item.label}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
