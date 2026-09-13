"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSlider } from "@/components/HeroSlider";
import { QuickActionCards } from "@/components/QuickActionCards";
import { DoctorSearchSection } from "@/components/DoctorSearchSection";
import { CenterOfExcellence } from "@/components/CenterOfExcellence";
import { ServicesSection } from "@/components/ServicesSection";
import { PromoSection } from "@/components/PromoSection";
import { ArticleSection } from "@/components/ArticleSection";
import { TestimonialVideoSection } from "@/components/TestimonialVideoSection";
import { InsurancePartners } from "@/components/InsurancePartners";
import { AboutSection } from "@/components/AboutSection";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { FloatingActions } from "@/components/FloatingActions";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [prefillSpecialty, setPrefillSpecialty] = useState("");
  const [prefillDoctor, setPrefillDoctor] = useState("");

  const handleOpenBooking = (specialty?: string, doctorName?: string) => {
    setPrefillSpecialty(specialty || "");
    setPrefillDoctor(doctorName || "");
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Slider */}
        <HeroSlider onOpenBooking={() => handleOpenBooking()} />

        {/* Floating Quick Action Cards */}
        <QuickActionCards onOpenBooking={() => handleOpenBooking()} />

        {/* Doctor Search & Schedule Section */}
        <DoctorSearchSection onOpenBooking={handleOpenBooking} />

        {/* Centers of Excellence */}
        <CenterOfExcellence onOpenBooking={handleOpenBooking} />

        {/* Medical Services & Facilities */}
        <ServicesSection onOpenBooking={(s) => handleOpenBooking(s)} />

        {/* Promo & MCU Packages */}
        <PromoSection onOpenBooking={(p) => handleOpenBooking("Medical Check Up", p)} />

        {/* Patient Experience & Video Testimonials */}
        <TestimonialVideoSection />

        {/* Educational Health Articles */}
        <ArticleSection />

        {/* About Hospital, History, Accreditation */}
        <AboutSection />

        {/* Insurance Partners */}
        <InsurancePartners />

        {/* Emergency & Ambulance Banner */}
        <EmergencyBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Appointment Modal Wizard */}
      <BookingModal
        key={`${prefillSpecialty}-${prefillDoctor}-${bookingModalOpen}`}
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefillSpecialty={prefillSpecialty}
        prefillDoctor={prefillDoctor}
      />

      {/* Floating WhatsApp & Emergency Triggers */}
      <FloatingActions />
    </div>
  );
}
