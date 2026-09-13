import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ARTICLES_DATA } from "@/data/hospitalData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { FloatingActions } from "@/components/FloatingActions";
import {
  Home,
  ChevronRight,
  Calendar,
  Clock,
  User,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export function generateStaticParams() {
  return ARTICLES_DATA.map((art) => ({
    slug: art.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug || a.id === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES_DATA.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      {/* Breadcrumbs */}
      <div className="bg-slate-100 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-emerald-700 flex items-center gap-1 transition-colors">
              <Home className="size-3.5" />
              <span>Beranda</span>
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <Link href="/artikel" className="hover:text-emerald-700 transition-colors">
              Artikel Kesehatan
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="text-slate-900 font-bold truncate max-w-xs">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Content Container */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        <article className="space-y-6">
          {/* Meta header */}
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1 pb-4 border-b border-slate-100">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <User className="size-3.5 text-emerald-700" />
                <span>{article.author}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="size-3.5" />
                <span>{article.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="size-3.5" />
                <span>{article.readTime}</span>
              </span>

              {article.doctorReviewer && (
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border border-emerald-200/60">
                  <ShieldCheck className="size-3 text-emerald-600" />
                  <span>Ditinjau Medis: {article.doctorReviewer}</span>
                </span>
              )}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] bg-slate-100 shadow-md">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Article Excerpt Callout */}
          <div className="p-5 rounded-2xl bg-emerald-50/70 border-l-4 border-emerald-600 text-sm sm:text-base text-emerald-950 font-medium leading-relaxed italic">
            &ldquo;{article.excerpt}&rdquo;
          </div>

          {/* Main Article Body */}
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base pt-2">
            <p>{article.content}</p>
            <p>
              Di Rumah Sakit Islam Muhammad Ali, kami senantiasa menekankan bahwa pencegahan selalu lebih baik daripada pengobatan (Prevention is Better Than Cure). Melalui pemeriksaan berkala dan konsultasi dengan dokter spesialis, potensi kelainan dapat dideteksi sejak dini sebelum berkembang menjadi komplikasi berat.
            </p>
            <p>
              Pendekatan medis yang kami terapkan mengintegrasikan standar klinis modern berbasis bukti ilmiah (Evidence-Based Medicine) dengan sentuhan spiritual Islami, memfasilitasi doa kesembuhan dan kenyamanan batin bagi pasien dan keluarga.
            </p>
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 mr-2">Topik Terkait:</span>
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Consultation CTA Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-900 to-teal-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl my-10">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-bold">
                Punya Keluhan Kesehatan Terkait Topik Ini?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100">
                Konsultasikan langsung dengan dokter spesialis kami di RSI Muhammad Ali.
              </p>
            </div>
            <Link
              href="/buat-janji"
              className="px-6 py-3 rounded-xl bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-xs sm:text-sm shadow-md shrink-0 transition-colors"
            >
              Buat Janji Dokter
            </Link>
          </div>
        </article>

        {/* Related Articles Section */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            Artikel Terkait Lainnya
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/artikel/${rel.slug}`}
                className="group p-4 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-emerald-700 uppercase">
                    {rel.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-900 transition-colors line-clamp-2 mt-1 mb-2">
                    {rel.title}
                  </h4>
                </div>
                <span className="text-[11px] font-semibold text-emerald-800 flex items-center gap-1 pt-2">
                  <span>Baca artikel</span>
                  <ArrowRight className="size-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <EmergencyBanner />
      <Footer />
      <FloatingActions />
    </div>
  );
}
