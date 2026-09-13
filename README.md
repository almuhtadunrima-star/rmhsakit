# 🏥 RS Muhammad Ali - Website Resmi Rumah Sakit Modern

[![Next.js](https://img.shields.io/badge/Next.js-16.3.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)

> **Rumah Sakit Muhammad Ali** — *Pusat Layanan Kesehatan Terpadu, Modern & Terpercaya. Melayani Dengan Hati.*

Website profil dan portal layanan kesehatan modern untuk **RS Muhammad Ali** (berbasis kloning & modernisasi komprehensif dari website RS Jakarta). Dibangun menggunakan arsitektur **Next.js 16 (App Router)**, **React 19**, dan **Tailwind CSS v4** dengan performa tinggi, responsif *mobile-first*, serta integrasi sistem reservasi janji temu pasien online.

---

## 🌟 Fitur Utama

### 1. 🚑 Layanan Gawat Darurat (UGD) & Ambulans 24 Jam
- Hotline darurat siaga satu tombol: `(021) 573 2241`.
- Banner panggilan respon cepat dan ambulans berstandar ICU.
- Tombol aksi darurat melayang (*floating emergency button*).

### 2. 🩺 Pencarian & Jadwal Praktik Dokter Spesialis
- Pencarian cerdas berdasarkan nama dokter, poliklinik spesialis, atau kata kunci keluhan.
- Filter berdasarkan hari praktik (Senin s/d Minggu, termasuk program *Sunday Clinic*).
- Informasi profil dokter, gelar, keahlian subspesialis, dan jadwal poliklinik.
- Tombol integrasi **"Buat Janji Temu"** otomatis memilih dokter terkait.

### 3. 🏥 Pusat Layanan Unggulan (*Centers of Excellence*)
- **Muhammad Ali Eye Center** (Operasi Katarak Phacoemulsification, Vitreo-Retina, Glaukoma).
- **Muhammad Ali Orthopedic Center** (Arthroscopy Lutut/Bahu, Rekonstruksi Sendi, Terapi Secretome).
- **Muhammad Ali Brain & Spine Center** (Teknologi Minimal Invasif BESS untuk Saraf Terjepit).
- **Muhammad Ali Dental Clinic** (Klinik Spesialis Bedah Mulut, Konservasi Gigi, Ortodonti).
- **Muhammad Ali Endoscopy Center** (Gastroskopi & Kolonoskopi Berdefinisi Tinggi).
- **Muhammad Ali Urology Center** (Pemecah Batu Ginjal ESWL Tanpa Operasi & Terapi Prostat).

### 4. 🧪 12 Fasilitas & Penunjang Medis Terintegrasi
- Rawat Jalan Multi-Spesialis
- Rawat Inap (Kamar VVIP, VIP, Kelas 1, 2, 3)
- Medical Check Up (One-Stop Service)
- Unit Hemodialisa (Cuci Darah Modern)
- Laboratorium 24 Jam
- Kamar Operasi Modular Steril (HEPA Filter)
- Fisioterapi & Rehabilitasi Medik
- Radiologi & Imaging (MRI 1.5 Tesla, CT-Scan 128 Slice, USG 4D)
- Farmasi 24 Jam & Layanan Antar Obat
- Sports Medicine & Penanganan Cedera Olahraga
- UGD 24 Jam
- JBHC (Akupuntur Medik & Holistic Care)

### 5. 📅 Sistem Booking Janji Temu Online (`BookingModal`)
- Alur reservasi 4 langkah interaktif:
  1. Pilih Poliklinik & Dokter Spesialis.
  2. Pilih Tanggal Rencana Kunjungan.
  3. Pengisian Data Pasien & Metode Pembayaran (Umum, BPJS Kesehatan, Asuransi Swasta).
  4. Terbit **Nomor Booking Resmi** (`RSMA-XXXXXX`) dengan tombol konfirmasi langsung ke WhatsApp loket pendaftaran.

### 6. 🏷️ Promo & Paket Medical Check Up (MCU)
- Tampilan kartu promo interaktif dengan penanda kategori (*Rehabilitasi, MCU, Pemeriksaan, Tindakan*).
- Diskon Happy Hour MRI Non-Kontras 17%, Promo Fisioterapi, Paket MCU Lansia Sehat Rp 599.000, Vaksinasi Flu, dan Skrining Vitamin D.

### 7. 📰 Edukasi Kesehatan & Testimoni Video Pasien
- Artikel kesehatan terverifikasi dokter spesialis (BESS Saraf Terjepit, Kesehatan Gigi, Deteksi Mata, Arthroscopy Lutut).
- Modal pembaca artikel interaktif.
- Kisah kesembuhan pasien nyata dengan pemutar video testimoni.

### 8. 🛡️ Kerjasama Asuransi & Pembayaran Cashless
- Kerjasama rekanan BPJS Kesehatan, BPJS Ketenagakerjaan, serta puluhan asuransi terkemuka (Prudential, Allianz, AIA, Manulife, Sinarmas, Mandiri Inhealth, AdMedika, dll.).

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Library UI:** React 19
- **Bahasa:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4 & tw-animate-css
- **Iconography:** Lucide React & Custom Medical SVG Icons
- **Font:** Geist Sans & Geist Mono (Google Fonts)

---

## 📁 Struktur Direktori

```text
rs-muhammad-ali/
├── public/
│   └── images/               # Aset gambar lokal (banner, promo, ikon layanan, dokter)
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css       # Desain token warna hijau rumah sakit & gaya dasar
│   │   ├── layout.tsx        # Root layout, metadata SEO RS Muhammad Ali
│   │   └── page.tsx          # Halaman utama landing page
│   ├── components/
│   │   ├── AboutSection.tsx            # Profil sejarah, visi-misi, akreditasi KARS
│   │   ├── ArticleSection.tsx          # Artikel edukasi kesehatan + modal reader
│   │   ├── BookingModal.tsx            # Modal wizard reservasi pasien online
│   │   ├── CenterOfExcellence.tsx      # Tab pusat layanan unggulan
│   │   ├── DoctorSearchSection.tsx     # Filter pencarian dokter & jadwal
│   │   ├── EmergencyBanner.tsx         # Banner gawat darurat & kontak UGD
│   │   ├── FloatingActions.tsx         # Tombol cepat WhatsApp & UGD
│   │   ├── Footer.tsx                  # Footer resmi, navigasi & hak cipta
│   │   ├── HeroSlider.tsx              # Carousel banner beranda
│   │   ├── InsurancePartners.tsx       # Mitra asuransi & BPJS
│   │   ├── Logo.tsx                    # Logo SVG resmi RS Muhammad Ali
│   │   ├── Navbar.tsx                  # Navigasi sticky, top bar & drawer mobile
│   │   ├── PromoSection.tsx            # Daftar paket promo & MCU
│   │   ├── QuickActionCards.tsx        # 4 Kartu aksi cepat di bawah hero
│   │   ├── ServicesSection.tsx         # 12 Layanan penunjang + modal info
│   │   ├── SocialIcons.tsx             # Ikon media sosial (FB, IG, YT)
│   │   └── TestimonialVideoSection.tsx # Cerita kesembuhan pasien + modal video
│   ├── data/
│   │   └── hospitalData.ts   # Database lokal data dokter, layanan, promo, & artikel
│   └── lib/
│       └── utils.ts          # Helper classname merge (cn)
├── package.json
└── tsconfig.json
```

---

## 🚀 Memulai Proyek (Getting Started)

### Prasyarat
- Node.js versi 20+ (direkomendasikan Node.js LTS)
- npm / yarn / pnpm

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Jalankan Server Pengembangan
```bash
npm run dev
```
Buka peramban Anda di alamat [http://localhost:3000](http://localhost:3000).

### 3. Pemeriksaan Kode & Validasi
```bash
npm run check
```
Perintah ini akan menjalankan:
- `npm run lint` — Pengecekan standar kode ESLint
- `npm run typecheck` — Pengecekan tipe ketat TypeScript (`tsc --noEmit`)
- `npm run build` — Kompilasi build produksi Next.js

---

## 📞 Informasi Kontak & Lokasi

- **Alamat:** Jl. Garnisun No. 1, Karet Semanggi, Setiabudi, Jakarta Selatan 12930
- **Telepon Pendaftaran:** (021) 573 2241
- **UGD & Ambulans 24 Jam:** (021) 573 2241
- **WhatsApp Customer Care:** +62 811-9722-241
- **Email:** info@rsmuhammadali.co.id

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi **MIT**. Hak Cipta © 2026 RS Muhammad Ali. All Rights Reserved.
