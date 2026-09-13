"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { HERO_SLIDES } from "@/data/hospitalData";

interface HeroSliderProps {
  onOpenBooking: () => void;
}

export function HeroSlider({ onOpenBooking }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-950 text-white min-h-[500px] md:min-h-[580px] lg:min-h-[620px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image with Fallback & Gradient Overlay */}
      {HERO_SLIDES.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000 ease-out"
          />
          {/* Deep Dark/Emerald Gradient Overlay for maximum readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/40" />
          <div className="absolute inset-0 bg-emerald-950/30 mix-blend-multiply" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="max-w-2xl space-y-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <ShieldCheck className="size-4 text-emerald-400" />
            <span>{slide.badge}</span>
          </div>

          {/* Subtitle / Department */}
          <p className="text-emerald-400 font-bold text-sm md:text-base tracking-widest uppercase">
            {slide.subtitle}
          </p>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            {slide.title}
          </h1>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-xl">
            {slide.description}
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#00874e] hover:bg-[#00703f] text-white font-bold text-sm md:text-base shadow-lg shadow-emerald-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Calendar className="size-5" />
              <span>{slide.primaryCta}</span>
            </button>

            <a
              href="#dokter-kami"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm md:text-base border border-white/20 backdrop-blur-md transition-all"
            >
              <span>{slide.secondaryCta}</span>
              <ArrowRight className="size-4" />
            </a>
          </div>

          {/* Trust Metric pill */}
          <div className="pt-4 flex items-center gap-6 text-xs text-slate-300 border-t border-white/10">
            <div>
              <span className="font-extrabold text-white text-base">120+</span> Dokter Spesialis
            </div>
            <div className="w-1 h-1 rounded-full bg-emerald-400" />
            <div>
              <span className="font-extrabold text-white text-base">24/7</span> Layanan Gawat Darurat
            </div>
            <div className="w-1 h-1 rounded-full bg-emerald-400" />
            <div>
              <span className="font-extrabold text-white text-base">Paripurna</span> Akreditasi KARS
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 hover:bg-emerald-600 text-white backdrop-blur-sm border border-white/10 transition-all opacity-80 hover:opacity-100 hidden sm:flex items-center justify-center"
      >
        <ChevronLeft className="size-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 hover:bg-emerald-600 text-white backdrop-blur-sm border border-white/10 transition-all opacity-80 hover:opacity-100 hidden sm:flex items-center justify-center"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === currentSlide
                ? "w-8 bg-emerald-400"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
