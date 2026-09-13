"use client";

import React, { useState } from "react";
import { TESTIMONIALS_DATA } from "@/data/hospitalData";
import { Play, Star, Quote, HeartHandshake, X } from "lucide-react";

export function TestimonialVideoSection() {
  const [activeVideo, setActiveVideo] = useState<{ name: string; role: string } | null>(null);

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#00874e] text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="size-4" />
            <span>Kisah Kesembuhan Pasien</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dedikasi Tanpa Batas untuk Pasien & Keluarga
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Kami menggabungkan keahlian medis terbaik, fasilitas modern, dan kenyamanan perawatan terpadu dalam satu atap di Rumah Sakit Muhammad Ali. Bagi kami, kesehatan Anda adalah prioritas utama.
          </p>
        </div>

        {/* Testimonials Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testi) => (
            <div
              key={testi.id}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Video Thumbnail with Play Button */}
              <div
                onClick={() => setActiveVideo({ name: testi.name, role: testi.role })}
                className="relative aspect-16/9 bg-slate-900 cursor-pointer group overflow-hidden"
              >
                <img
                  src={testi.image}
                  alt={testi.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors" />

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-14 rounded-full bg-[#00874e] text-white flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:bg-emerald-500 transition-all duration-300">
                    <Play className="size-6 fill-current ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded text-white text-[11px] font-semibold">
                  Cerita Pasien
                </div>
              </div>

              {/* Text Quote Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(testi.stars)].map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic relative pl-5">
                    <Quote className="size-4 text-emerald-600/40 absolute left-0 top-0 -scale-x-100" />
                    &ldquo;{testi.text}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-sm">
                      {testi.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {testi.role}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                    Terverifikasi
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="bg-slate-900 text-white rounded-3xl max-w-xl w-full p-6 relative border border-slate-800 shadow-2xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <X className="size-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs text-emerald-400 font-bold uppercase">
                Video Edukasi & Pengalaman Pasien
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                {activeVideo.name}
              </h3>
              <p className="text-xs text-slate-400">{activeVideo.role}</p>
            </div>

            {/* Video mockup frame */}
            <div className="relative aspect-16/9 bg-black rounded-xl overflow-hidden flex items-center justify-center border border-slate-800">
              <div className="text-center p-6 space-y-2">
                <div className="size-16 rounded-full bg-emerald-600/30 text-emerald-400 flex items-center justify-center mx-auto mb-2 border border-emerald-500/40">
                  <Play className="size-8 fill-current ml-1" />
                </div>
                <p className="text-xs text-slate-300 font-medium">
                  Video Testimonial Pasien RS Muhammad Ali
                </p>
                <p className="text-[11px] text-slate-500">
                  &ldquo;Pelayanan ramah, teknologi modern, dan pemulihan cepat tanpa rasa sakit.&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={() => setActiveVideo(null)}
                className="px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
              >
                Tutup Video
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
