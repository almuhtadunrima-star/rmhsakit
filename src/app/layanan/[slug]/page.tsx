import React from "react";
import { notFound } from "next/navigation";
import { SERVICES_DATA, DOCTORS_DATA } from "@/data/hospitalData";
import { ServiceDetailClient } from "./ServiceDetailClient";

export function generateStaticParams() {
  return SERVICES_DATA.map((srv) => ({
    slug: srv.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug || s.id === slug);

  if (!service) {
    notFound();
  }

  // Find matching doctors for this service
  const matchedDoctors = DOCTORS_DATA.filter(
    (d) =>
      d.specialty.toLowerCase().includes(service.name.toLowerCase()) ||
      service.name.toLowerCase().includes(d.specialty.toLowerCase())
  ).slice(0, 3);

  return <ServiceDetailClient service={service} doctors={matchedDoctors} />;
}
