"use client";

import React, { useState } from "react";
import { ARTICLES_DATA, ArticleItem } from "@/data/hospitalData";
import { BookOpen, Calendar, Clock, ArrowRight, X, User } from "lucide-react";

export function ArticleSection() {
  const [readingArticle, setReadingArticle] = useState<ArticleItem | null>(null);

  return (
    <section id="artikel-kesehatan" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#00874e] text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="size-4" />
              <span>Edukasi & Informasi Medis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Artikel Kesehatan Terpercaya
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Ditinjau langsung oleh tim dokter Rumah Sakit Muhammad Ali untuk memberikan wawasan kesehatan yang akurat, tips pencegahan, dan pemahaman medis yang mudah dipahami.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES_DATA.map((art) => (
            <div
              key={art.id}
              onClick={() => setReadingArticle(art)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Thumbnail Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-emerald-700/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  {art.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3 text-emerald-600" />
                      {art.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3 text-emerald-600" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-[#00874e] transition-colors line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00874e] group-hover:translate-x-1 transition-transform">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="size-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Tutup artikel"
            >
              <X className="size-5" />
            </button>

            <div className="relative aspect-16/9 rounded-2xl overflow-hidden mb-6">
              <img
                src={readingArticle.image}
                alt={readingArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#00874e] text-white text-xs font-bold px-3 py-1 rounded-full">
                {readingArticle.category}
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="size-3.5 text-emerald-600" />
                {readingArticle.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="size-3.5 text-emerald-600" />
                {readingArticle.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-700 font-semibold">
                <User className="size-3.5 text-emerald-600" />
                Tim Medis RS Muhammad Ali
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 leading-tight">
              {readingArticle.title}
            </h3>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-slate-800 bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-100">
                {readingArticle.excerpt}
              </p>
              <p>{readingArticle.content}</p>
              <p>
                Konsultasikan keluhan kesehatan Anda segera kepada dokter spesialis di Rumah Sakit Muhammad Ali. Deteksi dini dan diagnosis yang tepat merupakan kunci keberhasilan penanganan medis.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                © 2026 RS Muhammad Ali • Portal Edukasi Kesehatan
              </span>
              <button
                onClick={() => setReadingArticle(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
