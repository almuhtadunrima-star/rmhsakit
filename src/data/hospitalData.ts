export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  subspecialty: string;
  schedule: {
    days: string[];
    hours: string;
  }[];
  avatarColor: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  longDescription: string;
  features: string[];
}

export interface CenterOfExcellenceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  bannerUrl: string;
  specialists: string[];
}

export interface PromoItem {
  id: string;
  title: string;
  badge: "New" | "Promo Spesial" | "Populer" | "Best Seller";
  price?: string;
  originalPrice?: string;
  description: string;
  validUntil: string;
  image: string;
  category: "Pemeriksaan" | "Rehabilitasi" | "Tindakan" | "MCU";
}

export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export const HERO_SLIDES = [
  {
    id: "slide-1",
    title: "Pusat Layanan Medis Terpadu & Terpercaya",
    subtitle: "RUMAH SAKIT MUHAMMAD ALI",
    description:
      "Didukung oleh lebih dari 120 dokter spesialis & subspesialis terkemuka, fasilitas diagnostik terkini, dan standar perawatan medis berorientasi keselamatan pasien.",
    badge: "Pelayanan 24 Jam",
    image: "/images/banner-slide-1.webp",
    primaryCta: "Buat Janji Dokter",
    secondaryCta: "Jadwal Praktik",
  },
  {
    id: "slide-2",
    title: "Endoskopi BESS & Bedah Saraf Minimal Invasif",
    subtitle: "BRAIN & SPINE CENTER",
    description:
      "Solusi modern untuk nyeri tulang belakang dan saraf terjepit (HNP) dengan luka sayatan minimal, minim rasa sakit, dan proses pemulihan lebih cepat.",
    badge: "Teknologi Modern",
    image: "/images/banner-slide-2.webp",
    primaryCta: "Konsultasi Spesialis",
    secondaryCta: "Lihat Layanan",
  },
  {
    id: "slide-3",
    title: "Promo Medis & Pemeriksaan Kesehatan Berkala",
    subtitle: "PROGRAM MEDICAL CHECK UP",
    description:
      "Deteksi dini penyakit dengan paket MCU komprehensif, pemeriksaan laboratorium lengkap, serta penanganan dokter spesialis berpengalaman.",
    badge: "Promo Terbatas",
    image: "/images/banner-promo-1.webp",
    primaryCta: "Lihat Paket MCU",
    secondaryCta: "Info Promo",
  },
  {
    id: "slide-4",
    title: "Sunday Clinic & Poliklinik Akhir Pekan",
    subtitle: "FLEKSIBEL UNTUK KELUARGA",
    description:
      "Layanan dokter spesialis tetap buka di hari Minggu untuk kenyamanan Anda dan keluarga tanpa mengganggu jadwal aktivitas harian.",
    badge: "Buka Setiap Minggu",
    image: "/images/banner-sunday-clinic.jpg",
    primaryCta: "Daftar Sunday Clinic",
    secondaryCta: "Cek Jadwal Dokter",
  },
];

export const CENTERS_OF_EXCELLENCE: CenterOfExcellenceItem[] = [
  {
    id: "eye-center",
    title: "Muhammad Ali Eye Center",
    subtitle: "Klinik Mata Terpadu & Bedah Refraktif",
    description:
      "Pusat diagnostik dan terapi gangguan penglihatan terlengkap, mulai dari katarak phacoemulsification, vitreo-retina, glaukoma, strabismus, hingga rekonstruksi okular dengan alat diagnostik mutakhir.",
    highlights: [
      "Operasi Katarak Modern Tanpa Jahitan (Phacoemulsification)",
      "Penanganan Vitreo-Retina & Degenerasi Makula",
      "Skrining & Terapi Glaukoma Komprehensif",
      "Klinik Pediatrik Oftalmologi & Mata Anak",
    ],
    bannerUrl: "/images/article-mata.png",
    specialists: ["dr. Wita Jayanti, Sp.M", "dr. Bondan Harmani, Sp.M(K)", "dr. Fatma Asyari, Sp.M", "dr. M. Sidik, Sp.M(K)"],
  },
  {
    id: "orthopedic-center",
    title: "Muhammad Ali Orthopedic Center",
    subtitle: "Pusat Tulang, Sendi, & Bedah Rekonstruksi",
    description:
      "Menangani kelainan muskuloskeletal, cedera ligamen olahraga, arthroscopy lutut dan bahu, rekonstruksi patah tulang, serta penggantian sendi pinggul dan lutut (Arthroplasty).",
    highlights: [
      "Bedah Minimal Invasif Arthroscopy Lutut & Bahu",
      "Total Knee & Hip Replacement",
      "Perawatan Cedera Olahraga (Sports Injury)",
      "Terapi Regeneratif & Secretome Nyeri Sendi",
    ],
    bannerUrl: "/images/article-lutut.png",
    specialists: ["dr. Fachrisal, Sp.OT (K)", "dr. Bobby N. Nelwan, Sp.OT", "dr. Raden Andri, Sp.OT"],
  },
  {
    id: "brain-spine-center",
    title: "Muhammad Ali Brain & Spine Center",
    subtitle: "Bedah Saraf & Terapi Tulang Belakang",
    description:
      "Pusat penanganan kasus saraf tepi, saraf pusat, kelainan vaskular otak, serta penyakit tulang belakang menggunakan teknik Biportal Endoscopic Spinal Surgery (BESS) terdepan.",
    highlights: [
      "Teknologi BESS (Biportal Endoscopic Spinal Surgery)",
      "Mikrodisektomi & Stabilisasi Tulang Belakang",
      "Penanganan Nyeri Kronis (Pain Intervention)",
      "Rehabilitasi Neurologis & Pasca Stroke",
    ],
    bannerUrl: "/images/article-endoskopi.jpg",
    specialists: ["dr. Roslan Yusni Hasan, Sp.BS", "dr. M. Sofyan, Sp.BS", "dr. Christianus, Sp.S"],
  },
  {
    id: "dental-center",
    title: "Muhammad Ali Dental Clinic",
    subtitle: "Perawatan Gigi & Bedah Mulut Komprehensif",
    description:
      "Layanan perawatan gigi menyeluruh dengan dokter spesialis konservasi gigi, bedah mulut, ortodonti, periodonsia, dan prostodonsia dengan fasilitas dental unit modern.",
    highlights: [
      "Bedah Odontektomi Gigi Bungsu Impaksi",
      "Bleaching Gigi & Estetika Senyum (Veneer)",
      "Perawatan Saluran Akar Berteknologi Mikroskop",
      "Ortodonti (Kawat Gigi & Aligner Transparan)",
    ],
    bannerUrl: "/images/article-gigi.png",
    specialists: ["drg. Dian Permatasari, Sp.KG", "drg. Ari Kurniawan, Sp.BM", "drg. Maya Lestari, Sp.Ort"],
  },
  {
    id: "endoscopy-center",
    title: "Muhammad Ali Endoscopy Center",
    subtitle: "Saluran Cerna & Intervensi Endoskopik",
    description:
      "Fasilitas endoskopi canggih untuk diagnosis dan tindakan terapeutik lambung, usus besar (kolonoskopi), polipektomi, serta perdarahan saluran cerna dengan sedasi nyaman dan aman.",
    highlights: [
      "Gastroskopi & Kolonoskopi Berdefinisi Tinggi",
      "Skrining Dini Kanker Saluran Cerna",
      "Ekstraksi Benda Asing & Polipektomi Endoskopik",
      "Pemeriksaan Bebas Sakit dengan Sleep Endoscopy",
    ],
    bannerUrl: "/images/service-laboratorium.png",
    specialists: ["dr. Hendra S., Sp.PD-KGEH", "dr. Rudianto, Sp.B-KBD"],
  },
  {
    id: "urology-center",
    title: "Muhammad Ali Urology Center",
    subtitle: "Pusat Kesehatan Urologi & Ginjal Terpadu",
    description:
      "Penanganan batu ginjal tanpa operasi terbuka menggunakan gelombang kejut (ESWL), laser urologi, pembesaran prostat (TURP), dan gangguan sistem perkemihan pria dan wanita.",
    highlights: [
      "ESWL (Penghancuran Batu Ginjal Tanpa Operasi)",
      "Laser URS & Flexible Ureterorenoscopy",
      "Minimal Invasif Operasi Prostat (TURP)",
      "Klinik Disfungsi Seksual & Andrologi",
    ],
    bannerUrl: "/images/service-hemodialisa.png",
    specialists: ["dr. H. Bambang Hermanto, Sp.U", "dr. Farhan Malik, Sp.U"],
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "rawat-jalan",
    name: "Rawat Jalan",
    icon: "/images/service-rawat-jalan.png",
    description: "Poliklinik dokter spesialis dan subspesialis lengkap dengan ruang tunggu nyaman.",
    longDescription:
      "Layanan Rawat Jalan RS Muhammad Ali menyediakan lebih dari 25 poliklinik spesialis dengan sistem antrean online yang efisien. Pasien didampingi oleh perawat ramah dan dokter ahli terpercaya.",
    features: ["Pendaftaran Online Tanpa Antre", "25+ Poliklinik Multi-Spesialis", "Konsultasi Dokter Ahli Berpengalaman", "Apotek & Kasir Terintegrasi"],
  },
  {
    id: "rawat-inap",
    name: "Rawat Inap",
    icon: "/images/service-rawat-inap.png",
    description: "Kamar perawatan VVIP, VIP, dan Kelas 1-3 berstandar higienis tinggi.",
    longDescription:
      "Kenyamanan dan ketenangan proses pemulihan pasien adalah prioritas kami. Ruang rawat inap RS Muhammad Ali didesain dengan fasilitas lengkap, menu gizi personalized dari ahli gizi klinis, dan pantauan medis 24 jam.",
    features: ["Pilihan Kamar VVIP, VIP, Kelas 1, 2, 3", "Monitoring Perawat & Tim Medis 24/7", "Menu Nutrisi Pasien Terpadu", "Fasilitas Pendamping Pasien Nyaman"],
  },
  {
    id: "medical-check-up",
    name: "Medical Check Up",
    icon: "/images/service-mcu.png",
    description: "Paket deteksi dini kesehatan untuk individu, pra-nikah, maupun korporat.",
    longDescription:
      "Layanan MCU terpadu dalam satu lantai khusus (One-Stop Service) untuk menjamin privasi dan kelancaran proses pemeriksaan kesehatan rutin Anda secara menyeluruh.",
    features: ["Ruang Khusus MCU Terpadu", "Hasil Pemeriksaan Cepat & Akurat", "Paket Silver, Gold, Platinum, Eksekutif", "Layanan On-Site untuk Perusahaan"],
  },
  {
    id: "hemodialisa",
    name: "Hemodialisa",
    icon: "/images/service-hemodialisa.png",
    description: "Unit cuci darah modern dengan mesin canggih dan filter higienis bersertifikasi.",
    longDescription:
      "Unit Hemodialisa RS Muhammad Ali diawasi langsung oleh Dokter Spesialis Penyakit Dalam Konsultan Ginjal & Hipertensi (Sp.PD-KGH) serta perawat hemodialisa bersertifikat resmi.",
    features: ["Mesin Dialisis Generasi Terbaru", "Sistem Water Treatment Standar Internasional", "Single-Use Dialyzer Tersedia", "Ruang Tindakan Ber-AC & Hiburan TV"],
  },
  {
    id: "laboratorium",
    name: "Laboratorium 24 Jam",
    icon: "/images/service-laboratorium.png",
    description: "Uji patologi klinik, mikrobiologi, dan hematologi otomatis dengan akurasi tinggi.",
    longDescription:
      "Laboratorium RS Muhammad Ali beroperasi 24 jam nonstop untuk melayani kebutuhan tes darah, urine, kimia klinik, imunoserologi, hingga penanda tumor secara presisi.",
    features: ["Buka 24 Jam Nonstop", "Peralatan Automatisasi Berkalibrasi", "Hasil Lab Online via Portal Pasien", "Layanan Home Blood Sampling"],
  },
  {
    id: "kamar-operasi",
    name: "Kamar Operasi",
    icon: "/images/service-operasi.png",
    description: "Modular Operating Theatre dengan sistem filtrasi HEPA filter steril maksimal.",
    longDescription:
      "Kamar Operasi RS Muhammad Ali dilengkapi sistem tata udara Laminar Air Flow dan tekanan positif untuk meminimalisir risiko infeksi luka operasi (ILO) pada setiap tindakan bedah mayor maupun minor.",
    features: ["Sistem Tata Udara HEPA Filter", "Peralatan Laparoskopi & Endoskopi Canggih", "Tim Anestesi & Bedah Siaga 24 Jam", "Ruang Pulih Sadar (PACU) Terpantau"],
  },
  {
    id: "fisioterapi",
    name: "Fisioterapi",
    icon: "/images/service-fisioterapi.png",
    description: "Rehabilitasi medik pasca operasi, stroke, cedera sendi, dan nyeri otot kronis.",
    longDescription:
      "Didukung fisioterapis berlisensi dan alat terapi modalitas (ultrasound therapy, TENS, traksi komputer, infra-red, gym rehabilitasi) untuk memulihkan fungsi gerak tubuh Anda secara optimal.",
    features: ["Fisioterapi Neurologi & Stroke", "Fisioterapi Orthopedi & Cedera Sendi", "Fisioterapi Geriatri / Lansia", "Program Latihan Home Care Fisioterapi"],
  },
  {
    id: "radiologi",
    name: "Radiologi & Imaging",
    icon: "/images/service-radiologi.png",
    description: "MRI 1.5 Tesla, CT-Scan 128 Slice, USG 4D, dan Rontgen Digital resolusi tinggi.",
    longDescription:
      "Pusat pencitraan radiologi canggih membantu dokter menegakkan diagnosis secara tepat dan cepat, dibaca langsung oleh Dokter Spesialis Radiologi terpercaya.",
    features: ["MRI 1.5 Tesla Tanpa Radiasi", "CT-Scan Multislice Kontras & Non-Kontras", "Digital Radiography (X-Ray)", "USG Doppler & USG Kandungan 4D"],
  },
  {
    id: "farmasi",
    name: "Farmasi 24 Jam",
    icon: "/images/service-farmasi.png",
    description: "Apotek rumah sakit dengan ketersediaan obat lengkap dan layanan antar resep.",
    longDescription:
      "Instalasi Farmasi RS Muhammad Ali menjamin keaslian obat, penyimpanan berstandar suhu ketat, serta konseling obat oleh Apoteker profesional untuk keselamatan pengobatan pasien.",
    features: ["Buka 24 Jam untuk Pasien UGD & Umum", "Sistem Antrean Resep Digital", "Layanan Konseling Edukasi Obat", "Jasa Antar Obat ke Rumah Pasien"],
  },
  {
    id: "sports-medicine",
    name: "Sports Medicine",
    icon: "/images/service-sports.png",
    description: "Penanganan cedera olahraga, kebugaran atlet, dan program return-to-sport.",
    longDescription:
      "Klinik Kesehatan Olahraga memadukan keahlian dokter spesialis kedokteran olahraga (Sp.KO), orthopedi konsultan sports, dan fisioterapis atlet untuk mempercepat proses kembali aktif berolahraga.",
    features: ["Asesmen Kebugaran Fisik", "Penanganan Cedera ACL & Meniskus", "Program Return to Sport Terarah", "Konsultasi Nutrisi & Pola Latihan"],
  },
  {
    id: "ugd",
    name: "UGD 24 Jam",
    icon: "/images/service-ugd.png",
    description: "Unit Gawat Darurat siap siaga 24 jam dengan ambulans darurat respon cepat.",
    longDescription:
      "UGD RS Muhammad Ali dilengkapi fasilitas triage, ruang resusitasi darurat, ruang tindakan steril, serta tim dokter jaga bersertifikat ACLS/ATLS yang tanggap mengatasi kondisi darurat medis.",
    features: ["Hotline Darurat Siaga (021) 573 2241", "Layanan Ambulans Jemput Pasien", "Ruang Resusitasi Kritis Lengkap", "Penanganan Cepat Tanpa Menunggu Admin"],
  },
  {
    id: "jbhc",
    name: "JBHC Akupuntur & Herbal",
    icon: "/images/service-jbhc.png",
    description: "Layanan akupuntur medis dan terapi holistik komplementer berstandar klinis.",
    longDescription:
      "Jakarta Bio-Health Clinic (JBHC) RS Muhammad Ali menggabungkan akupuntur medik barat dan terapi holistik untuk membantu pemulihan nyeri, relaksasi saraf, insomnia, dan daya tahan tubuh.",
    features: ["Akupuntur Medik oleh Dokter Ahli", "Terapi Nyeri Kronis & Migrain", "Pendamping Pemulihan Pasca Stroke", "Konsultasi Kesehatan Holistik"],
  },
];

export const DOCTORS_DATA: Doctor[] = [
  {
    id: "doc-1",
    name: "dr. Wita Jayanti, Sp.M",
    specialty: "Spesialis Mata",
    subspecialty: "Katarak & Bedah Refraktif",
    schedule: [
      { days: ["Senin", "Rabu", "Jumat"], hours: "09:00 - 13:00 WIB" },
      { days: ["Sabtu"], hours: "10:00 - 14:00 WIB" },
    ],
    avatarColor: "bg-emerald-600",
  },
  {
    id: "doc-2",
    name: "dr. Bondan Harmani, Sp.M(K)",
    specialty: "Spesialis Mata",
    subspecialty: "Konsultan Kornea, Lensa & Bedah Refraktif",
    schedule: [
      { days: ["Selasa", "Kamis"], hours: "13:00 - 17:00 WIB" },
      { days: ["Minggu"], hours: "09:00 - 12:00 WIB (Sunday Clinic)" },
    ],
    avatarColor: "bg-teal-600",
  },
  {
    id: "doc-3",
    name: "dr. Fachrisal, Sp.OT(K)",
    specialty: "Spesialis Orthopedi & Traumatologi",
    subspecialty: "Konsultan Rekonstruksi Sendi & Trauma",
    schedule: [
      { days: ["Senin", "Kamis"], hours: "14:00 - 18:00 WIB" },
      { days: ["Rabu"], hours: "09:00 - 12:00 WIB" },
    ],
    avatarColor: "bg-blue-600",
  },
  {
    id: "doc-4",
    name: "dr. Roslan Yusni Hasan, Sp.BS",
    specialty: "Spesialis Bedah Saraf",
    subspecialty: "Bedah Tulang Belakang (BESS) & Neurovaskular",
    schedule: [
      { days: ["Selasa", "Jumat"], hours: "15:00 - 19:00 WIB" },
      { days: ["Sabtu"], hours: "09:00 - 13:00 WIB" },
    ],
    avatarColor: "bg-indigo-600",
  },
  {
    id: "doc-5",
    name: "dr. Ferika Widya Suryani, Sp.PD",
    specialty: "Spesialis Penyakit Dalam",
    subspecialty: "Internal Medicine & Pencegahan Kronis",
    schedule: [
      { days: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"], hours: "08:00 - 14:00 WIB" },
      { days: ["Minggu"], hours: "08:00 - 12:00 WIB (Sunday Clinic)" },
    ],
    avatarColor: "bg-sky-600",
  },
  {
    id: "doc-6",
    name: "drg. Dian Permatasari, Sp.KG",
    specialty: "Spesialis Gigi",
    subspecialty: "Konservasi Gigi & Estetika Endodontik",
    schedule: [
      { days: ["Senin", "Rabu", "Jumat"], hours: "10:00 - 16:00 WIB" },
      { days: ["Sabtu"], hours: "10:00 - 15:00 WIB" },
    ],
    avatarColor: "bg-emerald-700",
  },
  {
    id: "doc-7",
    name: "dr. H. Bambang Hermanto, Sp.U",
    specialty: "Spesialis Urologi",
    subspecialty: "Penanganan Batu Ginjal (ESWL) & Prostat",
    schedule: [
      { days: ["Selasa", "Kamis"], hours: "10:00 - 14:00 WIB" },
      { days: ["Jumat"], hours: "13:00 - 16:00 WIB" },
    ],
    avatarColor: "bg-amber-700",
  },
  {
    id: "doc-8",
    name: "dr. Fatma Asyari, Sp.M",
    specialty: "Spesialis Mata",
    subspecialty: "Konsultan Infeksi & Imunologi Mata",
    schedule: [
      { days: ["Senin", "Rabu"], hours: "13:00 - 17:00 WIB" },
      { days: ["Kamis"], hours: "09:00 - 12:00 WIB" },
    ],
    avatarColor: "bg-teal-700",
  },
  {
    id: "doc-9",
    name: "dr. Amanda Putri, Sp.A",
    specialty: "Spesialis Anak",
    subspecialty: "Tumbuh Kembang & Imunisasi Anak",
    schedule: [
      { days: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"], hours: "09:00 - 13:00 WIB" },
      { days: ["Sabtu", "Minggu"], hours: "09:00 - 12:00 WIB" },
    ],
    avatarColor: "bg-rose-600",
  },
  {
    id: "doc-10",
    name: "dr. Hendra Wijaya, Sp.JP, FIHA",
    specialty: "Spesialis Jantung & Pembuluh Darah",
    subspecialty: "Kardiologi Intervensi & Pencegahan Kardiovaskular",
    schedule: [
      { days: ["Senin", "Rabu", "Jumat"], hours: "15:00 - 19:00 WIB" },
      { days: ["Sabtu"], hours: "08:00 - 12:00 WIB" },
    ],
    avatarColor: "bg-red-600",
  },
  {
    id: "doc-11",
    name: "dr. Nurul Aini, Sp.OG",
    specialty: "Spesialis Kebidanan & Kandungan",
    subspecialty: "Fetomaternal & USG 4D Kehamilan",
    schedule: [
      { days: ["Selasa", "Kamis", "Sabtu"], hours: "09:00 - 14:00 WIB" },
      { days: ["Minggu"], hours: "10:00 - 13:00 WIB" },
    ],
    avatarColor: "bg-pink-600",
  },
  {
    id: "doc-12",
    name: "dr. Rudi Kurnia, Sp.Rad",
    specialty: "Spesialis Radiologi",
    subspecialty: "Pencitraan MRI & CT-Scan Diagnostic",
    schedule: [
      { days: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"], hours: "08:00 - 16:00 WIB" },
    ],
    avatarColor: "bg-slate-700",
  },
];

export const PROMO_DATA: PromoItem[] = [
  {
    id: "promo-1",
    title: "Pemulihan Optimal: Promo Spesial Fisioterapi RS Muhammad Ali",
    badge: "New",
    price: "Rp 175.000",
    originalPrice: "Rp 300.000",
    description:
      "Dapatkan paket terapi fisik komprehensif untuk nyeri leher, bahu, pinggang, atau pasca cedera bersama fisioterapis bersertifikasi.",
    validUntil: "30 April 2026",
    image: "/images/promo-fisioterapi.jpeg",
    category: "Rehabilitasi",
  },
  {
    id: "promo-2",
    title: "Happy Hour Diskon 17% Pemeriksaan MRI Non-Kontras",
    badge: "Promo Spesial",
    price: "Diskon 17%",
    originalPrice: "Harga Reguler",
    description:
      "Pemeriksaan pencitraan MRI 1.5 Tesla dengan kualitas gambar tajam dan waktu tunggu cepat pada jam layanan khusus happy hour.",
    validUntil: "31 Mei 2026",
    image: "/images/banner-slide-2.webp",
    category: "Pemeriksaan",
  },
  {
    id: "promo-3",
    title: "Bebas Nyeri Lutut: Inovasi Terapi Stem Cell & Secretome",
    badge: "Populer",
    price: "Konsultasi Gratis",
    originalPrice: "",
    description:
      "Terobosan medis mutakhir untuk mengatasi radang sendi lutut (osteoarthritis) tanpa bedah operasi berat, merangsang regenerasi tulang rawan.",
    validUntil: "15 Juni 2026",
    image: "/images/promo-stem-cell.jpeg",
    category: "Tindakan",
  },
  {
    id: "promo-4",
    title: "Paket Medical Check Up Lansia Sehat",
    badge: "Best Seller",
    price: "Rp 599.000",
    originalPrice: "Rp 1.100.000",
    description:
      "Pemeriksaan kesehatan menyeluruh bagi usia lanjut: tes fungsi ginjal, profil lipid darah, asam urat, gula darah, rontgen thoraks, dan EKG jantung.",
    validUntil: "30 Juni 2026",
    image: "/images/promo-lansia.jpeg",
    category: "MCU",
  },
  {
    id: "promo-5",
    title: "Proteksi Maksimal dari Flu Keluarga",
    badge: "New",
    price: "Rp 330.000",
    originalPrice: "Rp 450.000",
    description:
      "Vaksinasi influenza kuadrivalen untuk anak dan dewasa guna melindungi sistem pernapasan dari mutasi virus flu musiman.",
    validUntil: "31 Juli 2026",
    image: "/images/banner-promo-1.webp",
    category: "Pemeriksaan",
  },
  {
    id: "promo-6",
    title: "Promo Spesial Pemeriksaan Vitamin D 25-OH",
    badge: "Promo Spesial",
    price: "Rp 275.000",
    originalPrice: "Rp 420.000",
    description:
      "Uji kadar Vitamin D dalam darah untuk menjaga kekuatan tulang, fungsi kekebalan tubuh, dan mencegah penyakit autoimun.",
    validUntil: "31 Mei 2026",
    image: "/images/promo-kartini.jpeg",
    category: "Pemeriksaan",
  },
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: "art-1",
    title: "Layanan Endoskopi BESS: Solusi Nyeri Saraf Terjepit Tanpa Operasi Besar",
    excerpt:
      "Kondisi saraf terjepit atau Hernia Nukleus Pulposus (HNP) seringkali menjadi hambatan aktivitas. Kini hadir teknik Biportal Endoscopic Spinal Surgery (BESS) dengan sayatan minimal.",
    category: "Bedah Saraf & Tulang Belakang",
    date: "10 September 2026",
    readTime: "4 menit baca",
    image: "/images/article-endoskopi.jpg",
    content:
      "Biportal Endoscopic Spinal Surgery (BESS) adalah teknik bedah endoskopi modern yang memanfaatkan dua portal sayatan kecil (kurang dari 1 cm). Melalui portal pertama dimasukkan kamera endoskopi beresolusi tinggi, dan melalui portal kedua dimasukkan instrumen bedah mikro. Pasien merasakan nyeri pasca operasi yang sangat minim, risiko kerusakan jaringan otot sangat kecil, dan pasien umumnya dapat berjalan kembali dalam 24 jam.",
  },
  {
    id: "art-2",
    title: "Kenali 6 Kebiasaan Sehari-Hari yang Dapat Membahayakan Gigi dan Gusi",
    excerpt:
      "Banyak kebiasaan kecil seperti mengunyah es batu, menyikat gigi terlalu keras, atau menggemeretakkan gigi saat tidur yang memicu kerusakan enamel gigi secara permanen.",
    category: "Kesehatan Gigi & Mulut",
    date: "04 September 2026",
    readTime: "3 menit baca",
    image: "/images/article-gigi.png",
    content:
      "Kesehatan gigi dan mulut memiliki hubungan erat dengan kesehatan tubuh secara menyeluruh. Menyikat gigi terlalu keras dapat mengikis enamel dan menyebabkan resesi gusi. Selain itu, kebiasaan membuka kemasan plastik dengan gigi atau sering mengonsumsi minuman berkarbonasi manis meningkatkan risiko karies dan infeksi pulpa.",
  },
  {
    id: "art-3",
    title: "Kenali Tanda-Tanda Mata Sedang Bermasalah dan Wajib Diperiksakan",
    excerpt:
      "Penglihatan kabur perlahan, melihat lingkaran halo di sekitar lampu, atau bayangan melayang (floaters) bisa menjadi indikasi awal katarak, glaukoma, maupun gangguan retina.",
    category: "Kesehatan Mata",
    date: "28 Agustus 2026",
    readTime: "5 menit baca",
    image: "/images/article-mata.png",
    content:
      "Mata adalah jendela dunia. Banyak penyakit mata yang berjalan tanpa gejala nyeri pada tahap awal, misalnya glaukoma (pencuri penglihatan diam-diam). Pemeriksaan mata rutin tahunan sangat dianjurkan terutama bagi mereka yang berusia di atas 40 tahun, penderita diabetes mellitus, atau pengguna kacamata dengan minus tinggi.",
  },
  {
    id: "art-4",
    title: "Arthroscopy untuk Perbaiki Gangguan Sendi Lutut dan Cedera Ligamen",
    excerpt:
      "Prosedur bedah lubang kunci untuk mendiagnosis sekaligus memperbaiki robekan meniskus, rekonstruksi ACL, serta membersihkan serpihan tulang rawan lutut.",
    category: "Orthopedi & Bedah Sendi",
    date: "15 Agustus 2026",
    readTime: "4 menit baca",
    image: "/images/article-lutut.png",
    content:
      "Arthroscopy merupakan tindakan bedah minimal invasif di mana kamera kecil dimasukkan ke dalam rongga sendi. Prosedur ini memungkinkan dokter melihat struktur dalam sendi secara visual langsung di layar monitor dan melakukan perbaikan jaringan robek dengan akurasi millimeter tanpa perlu membuka sendi lutut lebar-lebar.",
  },
];

export const TESTIMONIALS_DATA = [
  {
    id: "testi-1",
    name: "Ny. Erny Taher",
    role: "Pasien Operasi Katarak Phacoemulsification",
    text: "Pelayanan di RS Muhammad Ali sungguh luar biasa. Mulai dari dokter mata, perawat, sampai petugas pendaftaran sangat ramah dan sabar. Operasi katarak saya berjalan tanpa rasa sakit, penglihatan saya kini kembali jernih seperti muda dulu.",
    image: "/images/testi-1.jpeg",
    stars: 5,
  },
  {
    id: "testi-2",
    name: "Tn. Sharul Mubarak",
    role: "Pasien Penanganan Saraf Terjepit BESS",
    text: "Sudah berbulan-bulan menderita nyeri saraf pinggang menjalar ke kaki. Setelah tindakan BESS di RS Muhammad Ali, hari kedua saya sudah bisa bangun dan berjalan tanpa nyeri. Terima kasih banyak tim dokter dan seluruh staf!",
    image: "/images/testi-2.jpeg",
    stars: 5,
  },
  {
    id: "testi-3",
    name: "Ny. Dina Hanum",
    role: "Pasien Rawat Inap & MCU Eksekutif",
    text: "Kamar rawat inapnya sangat bersih dan nyaman serasa di hotel. Makanan gizinya enak dan pelayanan perawat 24 jam sangat cepat tanggap. Sangat merekomendasikan RS Muhammad Ali untuk keluarga.",
    image: "/images/testi-3.jpeg",
    stars: 5,
  },
];

export const INSURANCE_PARTNERS = [
  "BPJS Kesehatan",
  "BPJS Ketenagakerjaan",
  "Prudential",
  "Allianz",
  "AIA Financial",
  "Manulife",
  "AXA Mandiri",
  "Sinarmas MSIG",
  "Mandiri Inhealth",
  "AdMedika",
  "Telkomedika",
  "BNI Life",
  "Chubb Life",
  "Great Eastern",
  "Zurich Insurance",
  "Sequis Life",
];
