"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatisticsSection } from "@/components/StatisticsSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { DoctorSearchSection } from "@/components/DoctorSearchSection";
import { CenterOfExcellence } from "@/components/CenterOfExcellence";
import { ServicesOverviewSection } from "@/components/ServicesOverviewSection";
import { ConsultationBanner } from "@/components/ConsultationBanner";
import { IslamicValuesSection } from "@/components/IslamicValuesSection";
import { FacilitiesSection } from "@/components/FacilitiesSection";
import { PromoSection } from "@/components/PromoSection";
import { PatientInfoSection } from "@/components/PatientInfoSection";
import { ArticleSection } from "@/components/ArticleSection";
import { TestimonialVideoSection } from "@/components/TestimonialVideoSection";
import { InsurancePartners } from "@/components/InsurancePartners";
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
      {/* Sticky Header Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section: Pelayanan Kesehatan Modern, Dengan Nilai Islami (Ronas IT Layout) */}
        <HeroSection onOpenBooking={(s, d) => handleOpenBooking(s, d)} />

        {/* Statistics Metric Counters */}
        <StatisticsSection />

        {/* Why Choose Us: Asymmetric Experience & Excellence Showcase (Ronas IT Layout) */}
        <WhyChooseUsSection onOpenBooking={() => handleOpenBooking()} />

        {/* Medical Services: 12 Services Overview with Category Filter Pills */}
        <ServicesOverviewSection onOpenBooking={(s) => handleOpenBooking(s)} />

        {/* Doctor Search & Discovery: Temukan Dokter */}
        <DoctorSearchSection onOpenBooking={handleOpenBooking} />

        {/* Consultation CTA Banner (Ronas IT Curved Banner) */}
        <ConsultationBanner onOpenBooking={() => handleOpenBooking()} />

        {/* Centers of Excellence */}
        <CenterOfExcellence onOpenBooking={handleOpenBooking} />

        {/* Islamic Values Section: Merawat Dengan Profesional, Melayani Dengan Amanah */}
        <IslamicValuesSection />

        {/* Hospital Facilities: Large Visual Cards */}
        <FacilitiesSection />

        {/* Promo & Medical Packages */}
        <PromoSection onOpenBooking={(p) => handleOpenBooking("Medical Check Up", p)} />

        {/* Patient Experience & Verified Testimonials */}
        <TestimonialVideoSection />

        {/* Patient Information Hub & Interactive FAQs */}
        <PatientInfoSection />

        {/* Health Articles & Educational News */}
        <ArticleSection />

        {/* Insurance Partners & BPJS */}
        <InsurancePartners />

        {/* Emergency Callout: IGD 24 Jam */}
        <EmergencyBanner />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* 6-Step Booking Appointment Modal */}
      <BookingModal
        key={`${prefillSpecialty}-${prefillDoctor}-${bookingModalOpen}`}
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefillSpecialty={prefillSpecialty}
        prefillDoctor={prefillDoctor}
      />

      {/* Floating WhatsApp & Emergency Contact Button */}
      <FloatingActions />
    </div>
  );
}
