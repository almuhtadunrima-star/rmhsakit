import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rumah Sakit Islam Muhammad Ali (RSI Muhammad Ali) - Pelayanan Kesehatan Islami, Modern & Terpercaya",
  description:
    "Website resmi Rumah Sakit Islam Muhammad Ali (RSI Muhammad Ali). Layanan dokter spesialis & subspesialis terpadu, Pusat Unggulan Medis, UGD 24 Jam (021) 573 2241, dan pendaftaran janji temu dokter online dengan prinsip Syariah & standar internasional.",
  keywords: [
    "Rumah Sakit Islam Muhammad Ali",
    "RSI Muhammad Ali",
    "RS Muhammad Ali",
    "Dokter Spesialis",
    "Jadwal Dokter",
    "Rumah Sakit Syariah",
    "UGD 24 Jam",
    "Eye Center",
    "Orthopedic Center",
    "Brain and Spine Center",
    "Endoskopi BESS",
    "Medical Check Up",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
