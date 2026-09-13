import React from "react";
import { notFound } from "next/navigation";
import { DOCTORS_DATA } from "@/data/hospitalData";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { DoctorDetailContent } from "./DoctorDetailContent";

export function generateStaticParams() {
  const ids = DOCTORS_DATA.map((d) => ({ id: d.id }));
  const slugs = DOCTORS_DATA.map((d) => ({ id: d.slug }));
  return [...ids, ...slugs];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DoctorDetailPage({ params }: PageProps) {
  const { id } = await params;

  const doctor = DOCTORS_DATA.find(
    (d) => d.id === id || d.slug === id
  );

  if (!doctor) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <DoctorDetailContent doctor={doctor} />
      <Footer />
      <FloatingActions />
    </div>
  );
}
