export interface DoctorEducation {
  degree: string;
  institution: string;
  year: string;
}

export interface DoctorSchedule {
  days: string[];
  hours: string;
  poli: string;
  room: string;
}

export interface Doctor {
  id: string;
  name: string;
  slug: string;
  specialty: string;
  subspecialty: string;
  sipStr: string;
  rating: number;
  reviewCount: number;
  experienceYears: number;
  experienceText: string;
  educationSummary: string;
  poli: string;
  location: string;
  status: "available_today" | "on_schedule" | "on_leave";
  statusText: string;
  languages: string[];
  photo: string;
  avatarColor: string;
  about: string;
  philosophy: string;
  educations: DoctorEducation[];
  skills: string[];
  certifications: string[];
  schedule: DoctorSchedule[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  longDescription: string;
  features: string[];
  procedures: string[];
  hours: string;
  location: string;
  doctorCount: number;
  badge?: string;
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
  slug: string;
  title: string;
  excerpt: string;
  category: "Kesehatan" | "Tips Kesehatan" | "Informasi Rumah Sakit" | "Edukasi Islami" | "Berita";
  date: string;
  readTime: string;
  image: string;
  content: string;
  author: string;
  doctorReviewer?: string;
  tags: string[];
}

export interface FacilityItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  highlights: string[];
  hours: string;
  location: string;
  capacity?: string;
  features: string[];
}

export interface PatientInfoHubItem {
  id: string;
  title: string;
  slug: string;
  badge?: string;
  description: string;
  iconName: string;
  points: string[];
  linkUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Pendaftaran" | "BPJS & Asuransi" | "Rawat Inap" | "IGD" | "Dokter & Jadwal";
}

export interface IslamicValueItem {
  id: string;
  title: string;
  arabic: string;
  subtitle: string;
  description: string;
  points: string[];
}

export interface StatisticItem {
  id: string;
  number: string;
  label: string;
  description: string;
  iconName: string;
}

export const HERO_SLIDES = [
  {
    id: "slide-1",
    title: "Pusat Layanan Medis Terpadu & Terpercaya",
    subtitle: "RUMAH SAKIT ISLAM MUHAMMAD ALI",
    description:
      "Menghadirkan pelayanan medis berstandar internasional yang dipadukan dengan nilai-nilai empati dan profesionalisme Islami. Didukung 120+ dokter spesialis dan teknologi diagnostik terkini.",
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
      "Solusi mutakhir untuk nyeri saraf terjepit (HNP) dan tulang belakang dengan luka sayatan minimal, minim nyeri, serta pemulihan yang jauh lebih cepat.",
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
      "Deteksi dini potensi penyakit secara komprehensif bersama tim dokter spesialis dan laboratorium terakreditasi KARS Paripurna.",
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
      "Layanan dokter spesialis tetap buka di hari Minggu demi kenyamanan Anda dan keluarga tanpa mengorbankan waktu kerja produktif.",
    badge: "Buka Setiap Minggu",
    image: "/images/banner-sunday-clinic.jpg",
    primaryCta: "Daftar Sunday Clinic",
    secondaryCta: "Cek Jadwal Dokter",
  },
];

export const DOCTORS_DATA: Doctor[] = [
  {
    id: "doc-1",
    name: "dr. Wita Jayanti, Sp.M",
    slug: "dr-wita-jayanti-sp-m",
    specialty: "Spesialis Mata",
    subspecialty: "Katarak & Bedah Refraktif",
    sipStr: "STR: 31.2.1.100.3.15.004128 • SIP: 503/0142/SIP-D/2021",
    rating: 4.9,
    reviewCount: 168,
    experienceYears: 14,
    experienceText: "14 Tahun Pengalaman",
    educationSummary: "Spesialis Mata - FK Universitas Indonesia",
    poli: "Poli Mata (Aini Eye Center)",
    location: "Gedung A, Lantai 3, Ruang 302",
    status: "available_today",
    statusText: "Tersedia Hari Ini",
    languages: ["Indonesia", "Inggris"],
    photo: "/images/doctors/doc-1.jpg",
    avatarColor: "bg-emerald-600",
    about:
      "dr. Wita Jayanti, Sp.M adalah dokter spesialis mata dengan pengalaman lebih dari 14 tahun dalam menangani berbagai gangguan penglihatan, operasi katarak modern tanpa jahit (Phacoemulsification), kelainan refraksi, dan penyakit kornea. Beliau aktif mengikuti perkembangan teknik bedah mata terkini di tingkat nasional maupun internasional.",
    philosophy:
      "Mengikhtiarkan penglihatan yang jernih dan sehat bagi pasien dengan pendekatan tindakan yang aman, minim rasa cemas, dan penuh kehangatan islami.",
    educations: [
      { degree: "Spesialis Mata (Sp.M)", institution: "Fakultas Kedokteran Universitas Indonesia", year: "2012" },
      { degree: "Dokter Umum (dr.)", institution: "Fakultas Kedokteran Universitas Padjadjaran", year: "2007" },
      { degree: "Fellowship Phacoemulsification", institution: "Jakarta Eye Institute", year: "2015" }
    ],
    skills: [
      "Operasi Katarak Phacoemulsification",
      "Koreksi Kelainan Refraksi Mata",
      "Skrining & Penanganan Glaukoma",
      "Pemeriksaan Funduskopi & Retinopati Diabetik",
      "Tindakan Laser Nd:YAG Capsulotomy"
    ],
    certifications: [
      "Anggota Ikatan Dokter Indonesia (IDI)",
      "Anggota Persatuan Dokter Spesialis Mata Indonesia (PERDAMI)",
      "Certified Phaco Surgeon - Indonesian Ophthalmologist Association"
    ],
    schedule: [
      { days: ["Senin", "Rabu", "Jumat"], hours: "09:00 - 13:00 WIB", poli: "Poli Mata", room: "R. 302" },
      { days: ["Sabtu"], hours: "10:00 - 14:00 WIB", poli: "Poli Mata", room: "R. 302" }
    ]
  },
  {
    id: "doc-2",
    name: "dr. Bondan Harmani, Sp.M(K)",
    slug: "dr-bondan-harmani-spm-k",
    specialty: "Spesialis Mata",
    subspecialty: "Konsultan Kornea, Lensa & Bedah Refraktif",
    sipStr: "STR: 31.1.1.100.2.11.008912 • SIP: 503/0204/SIP-D/2020",
    rating: 4.9,
    reviewCount: 215,
    experienceYears: 18,
    experienceText: "18 Tahun Pengalaman",
    educationSummary: "Subspesialis Kornea - FK Universitas Indonesia",
    poli: "Poli Mata (Aini Eye Center)",
    location: "Gedung A, Lantai 3, Ruang 304",
    status: "on_schedule",
    statusText: "Praktik Sesuai Jadwal",
    languages: ["Indonesia", "Inggris"],
    photo: "/images/doctors/doc-2.jpg",
    avatarColor: "bg-teal-600",
    about:
      "dr. Bondan Harmani, Sp.M(K) merupakan dokter spesialis mata konsultan kornea dan bedah refraktif. Memiliki dedikasi panjang dalam penanganan penyakit kornea kompleks, transplantasi kornea (keratoplasti), serta operasi refraksi dan katarak dengan lensa premium (toric, multifocal).",
    philosophy:
      "Melayani pasien dengan ketelitian tinggi, mendengarkan setiap keluhan secara tuntas, dan senantiasa berikhtiar memberikan hasil visual yang paling optimal.",
    educations: [
      { degree: "Konsultan Kornea, Lensa & Bedah Refraktif (K)", institution: "Kolegium Oftalmologi Indonesia", year: "2016" },
      { degree: "Spesialis Mata (Sp.M)", institution: "Fakultas Kedokteran Universitas Indonesia", year: "2008" },
      { degree: "Dokter Umum (dr.)", institution: "Fakultas Kedokteran Universitas Indonesia", year: "2003" }
    ],
    skills: [
      "Transplantasi & Rekonstruksi Kornea",
      "Katarak Lensa Premium (Toric & Multifocal)",
      "Penanganan Infeksi Kornea Berat & Ulkus Kornea",
      "Dry Eye Disease Comprehensive Management",
      "Cross-linking Kolagen Kornea"
    ],
    certifications: [
      "Anggota PERDAMI Kornea & Bedah Refraktif (INACRS)",
      "Fellow of the International Council of Ophthalmology (FICO)",
      "Anggota Asian Cornea Society"
    ],
    schedule: [
      { days: ["Selasa", "Kamis"], hours: "13:00 - 17:00 WIB", poli: "Poli Mata", room: "R. 304" },
      { days: ["Minggu"], hours: "09:00 - 12:00 WIB (Sunday Clinic)", poli: "Poli Mata", room: "R. 304" }
    ]
  },
  {
    id: "doc-3",
    name: "dr. Fachrisal, Sp.OT(K)",
    slug: "dr-fachrisal-sp-ot-k",
    specialty: "Spesialis Orthopedi",
    subspecialty: "Konsultan Panggul & Lutut (Adult Reconstruction)",
    sipStr: "STR: 31.1.1.201.2.09.006541 • SIP: 503/0088/SIP-D/2019",
    rating: 4.9,
    reviewCount: 310,
    experienceYears: 19,
    experienceText: "19 Tahun Pengalaman",
    educationSummary: "Subspesialis Rekonstruksi Sendi - FK UI",
    poli: "Poli Orthopedi & Sendi",
    location: "Gedung B, Lantai 1, Ruang 108",
    status: "available_today",
    statusText: "Tersedia Hari Ini",
    languages: ["Indonesia", "Inggris"],
    photo: "/images/doctors/doc-3.jpg",
    avatarColor: "bg-blue-600",
    about:
      "dr. Fachrisal, Sp.OT(K) adalah konsultan bedah orthopedi terkemuka yang berpengalaman dalam menangani radang sendi degeneratif, osteoarthritis lanjut, cedera olahraga, serta prosedur penggantian sendi lutut dan panggul total (Total Knee & Hip Arthroplasty).",
    philosophy:
      "Mengembalikan mobilitas dan kualitas hidup pasien agar dapat kembali beribadah dan beraktivitas dengan nyaman tanpa derita nyeri sendi.",
    educations: [
      { degree: "Konsultan Rekonstruksi Panggul & Lutut (K)", institution: "Kolegium Orthopaedi & Traumatologi Indonesia", year: "2013" },
      { degree: "Spesialis Orthopedi & Traumatologi (Sp.OT)", institution: "Fakultas Kedokteran Universitas Indonesia", year: "2007" },
      { degree: "Fellowship Joint Replacement Surgery", institution: "Singapore General Hospital", year: "2014" }
    ],
    skills: [
      "Total Knee Replacement (TKR)",
      "Total Hip Replacement (THR)",
      "Arthroscopy Lutut Minimal Invasif",
      "Terapi Regeneratif & Secretome Nyeri Sendi",
      "Rekonstruksi Patah Tulang Kompleks"
    ],
    certifications: [
      "Anggota Perhimpunan Dokter Spesialis Orthopaedi & Traumatologi Indonesia (PABOI)",
      "Indonesian Hip and Knee Society (IHKS)",
      "AO Trauma International Certified Faculty"
    ],
    schedule: [
      { days: ["Senin", "Kamis"], hours: "14:00 - 18:00 WIB", poli: "Poli Orthopedi", room: "R. 108" },
      { days: ["Rabu"], hours: "09:00 - 12:00 WIB", poli: "Poli Orthopedi", room: "R. 108" }
    ]
  },
  {
    id: "doc-4",
    name: "dr. Roslan Yusni Hasan, Sp.BS",
    slug: "dr-roslan-yusni-hasan-sp-bs",
    specialty: "Spesialis Bedah Saraf",
    subspecialty: "Bedah Saraf Minimal Invasif & BESS Spine",
    sipStr: "STR: 31.1.1.100.1.06.002234 • SIP: 503/0315/SIP-D/2021",
    rating: 5.0,
    reviewCount: 420,
    experienceYears: 24,
    experienceText: "24 Tahun Pengalaman",
    educationSummary: "Spesialis Bedah Saraf - FK Universitas Airlangga",
    poli: "Brain & Spine Center",
    location: "Gedung B, Lantai 2, Ruang 212",
    status: "available_today",
    statusText: "Tersedia Hari Ini",
    languages: ["Indonesia", "Inggris", "Belanda"],
    photo: "/images/doctors/doc-4.jpg",
    avatarColor: "bg-indigo-600",
    about:
      "dr. Roslan Yusni Hasan, Sp.BS (dr. Ryu Hasan) adalah dokter spesialis bedah saraf senior yang mempelopori penggunaan teknik Biportal Endoscopic Spinal Surgery (BESS) di Indonesia. Dikenal luas karena keahliannya dalam menangani saraf terjepit (HNP) dan kelainan tulang belakang dengan sayatan mikro.",
    philosophy:
      "Pendekatan bedah saraf modern mengedepankan seminimal mungkin manipulasi jaringan biologis alami demi keselamatan dan proses pemulihan tercepat bagi pasien.",
    educations: [
      { degree: "Spesialis Bedah Saraf (Sp.BS)", institution: "Fakultas Kedokteran Universitas Airlangga", year: "2001" },
      { degree: "Dokter Umum (dr.)", institution: "Fakultas Kedokteran Universitas Airlangga", year: "1994" },
      { degree: "Fellowship Endoscopic Spine Surgery", institution: "Barun Hospital, Seoul, Korea Selatan", year: "2017" }
    ],
    skills: [
      "Biportal Endoscopic Spinal Surgery (BESS)",
      "Microscopic Discectomy (Mikrodisektomi)",
      "Intervensi Nyeri Saraf Tulang Belakang (Pain Intervention)",
      "Operasi Saraf Tepi & Carpal Tunnel Syndrome",
      "Dekompresi Stenosis Kanalis Spinalis"
    ],
    certifications: [
      "Anggota Perhimpunan Dokter Spesialis Bedah Saraf Indonesia (PERSPEBSI)",
      "International Society for Minimal Intervention in Spinal Surgery (ISMISS)",
      "World Federation of Neurosurgical Societies (WFNS)"
    ],
    schedule: [
      { days: ["Selasa", "Jumat"], hours: "15:00 - 19:00 WIB", poli: "Brain & Spine Center", room: "R. 212" },
      { days: ["Sabtu"], hours: "09:00 - 13:00 WIB", poli: "Brain & Spine Center", room: "R. 212" }
    ]
  },
  {
    id: "doc-5",
    name: "dr. Ferika Widya Suryani, Sp.PD",
    slug: "dr-ferika-widya-suryani-sp-pd",
    specialty: "Spesialis Penyakit Dalam",
    subspecialty: "Penyakit Dalam Umum & Manajemen Metabolik",
    sipStr: "STR: 31.2.1.100.2.16.009415 • SIP: 503/0112/SIP-D/2022",
    rating: 4.8,
    reviewCount: 184,
    experienceYears: 13,
    experienceText: "13 Tahun Pengalaman",
    educationSummary: "Spesialis Penyakit Dalam - FK Universitas Indonesia",
    poli: "Poli Penyakit Dalam (Interna)",
    location: "Gedung Utama, Lantai 2, Ruang 201",
    status: "available_today",
    statusText: "Tersedia Hari Ini",
    languages: ["Indonesia", "Inggris"],
    photo: "/images/doctors/doc-5.jpg",
    avatarColor: "bg-sky-600",
    about:
      "dr. Ferika Widya Suryani, Sp.PD memiliki kepakaran komprehensif dalam diagnosis dan penatalaksanaan penyakit kronis seperti diabetes melitus, hipertensi, dislipidemia, gangguan lambung (GERD/Dispepsia), serta infeksi tropis dan penyakit autoimun.",
    philosophy:
      "Memberikan edukasi gaya hidup sehat dan pengobatan holistik yang menyentuh akar permasalahan kesehatan pasien secara menyeluruh.",
    educations: [
      { degree: "Spesialis Penyakit Dalam (Sp.PD)", institution: "Fakultas Kedokteran Universitas Indonesia", year: "2013" },
      { degree: "Dokter Umum (dr.)", institution: "Fakultas Kedokteran Universitas Gadjah Mada", year: "2008" }
    ],
    skills: [
      "Manajemen Diabetes Terintegrasi & Terapi Insulin",
      "Penanganan Hipertensi Esensial & Komplikasi Kardiovaskular",
      "Pemeriksaan Skrining Komplikasi Metabolik",
      "Penatalaksanaan Gangguan Lambung & Saluran Cerna Akut",
      "Perawatan Geriatri & Sindroma Polifarmasi"
    ],
    certifications: [
      "Anggota Perhimpunan Dokter Spesialis Penyakit Dalam Indonesia (PAPDI)",
      "Certified Advanced Cardiac Life Support (ACLS)",
      "American College of Physicians (International Affiliate)"
    ],
    schedule: [
      { days: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"], hours: "08:00 - 14:00 WIB", poli: "Poli Penyakit Dalam", room: "R. 201" },
      { days: ["Minggu"], hours: "08:00 - 12:00 WIB (Sunday Clinic)", poli: "Poli Penyakit Dalam", room: "R. 201" }
    ]
  },
  {
    id: "doc-6",
    name: "drg. Dian Permatasari, Sp.KG",
    slug: "drg-dian-permatasari-sp-kg",
    specialty: "Spesialis Gigi",
    subspecialty: "Konservasi Gigi & Estetika Endodontik",
    sipStr: "STR: 31.2.2.100.3.17.005118 • SIP: 503/0074/SIP-DG/2021",
    rating: 4.9,
    reviewCount: 156,
    experienceYears: 11,
    experienceText: "11 Tahun Pengalaman",
    educationSummary: "Spesialis Konservasi Gigi - FKG Universitas Indonesia",
    poli: "Poli Gigi & Mulut (Dental Clinic)",
    location: "Gedung A, Lantai 2, Ruang Dental 2",
    status: "on_schedule",
    statusText: "Praktik Sesuai Jadwal",
    languages: ["Indonesia", "Inggris"],
    photo: "/images/doctors/doc-6.jpg",
    avatarColor: "bg-emerald-700",
    about:
      "drg. Dian Permatasari, Sp.KG ahli dalam bidang restorasi gigi estetik, perawatan saluran akar berteknologi mikroskop (microscopic endodontics), penambalan estetik sewarna gigi, serta pemutihan gigi (bleaching). Mengutamakan penyelamatan gigi asli pasien dengan rasa nyaman maksimal.",
    philosophy:
      "Merawat senyum sehat pasien dengan ketelitian artistik, tanpa rasa sakit, serta menjaga kebersihan dan sterilisasi alat berstandar tinggi.",
    educations: [
      { degree: "Spesialis Konservasi Gigi (Sp.KG)", institution: "Fakultas Kedokteran Gigi Universitas Indonesia", year: "2015" },
      { degree: "Dokter Gigi (drg.)", institution: "Fakultas Kedokteran Gigi Universitas Padjadjaran", year: "2011" }
    ],
    skills: [
      "Perawatan Saluran Akar Gigi (Root Canal Treatment)",
      "Restorasi Gigi Estetik & Direct Veneer",
      "Bleaching / Teeth Whitening Medis",
      "Pemasangan Mahkota Gigi (Dental Crown)",
      "Penanganan Nyeri Gigi Akut & Abses Periapikal"
    ],
    certifications: [
      "Anggota Ikatan Konservasi Gigi Indonesia (IKORGI)",
      "Persatuan Dokter Gigi Indonesia (PDGI)",
      "Certified Microscopic Endodontics Practitioner"
    ],
    schedule: [
      { days: ["Senin", "Rabu", "Jumat"], hours: "10:00 - 16:00 WIB", poli: "Poli Gigi", room: "Dental Unit 2" },
      { days: ["Sabtu"], hours: "10:00 - 15:00 WIB", poli: "Poli Gigi", room: "Dental Unit 2" }
    ]
  },
  {
    id: "doc-7",
    name: "dr. H. Bambang Hermanto, Sp.U",
    slug: "dr-h-bambang-hermanto-sp-u",
    specialty: "Spesialis Urologi",
    subspecialty: "Endourologi & Penanganan Batu Ginjal (ESWL)",
    sipStr: "STR: 31.1.1.100.1.08.003450 • SIP: 503/0199/SIP-D/2020",
    rating: 4.9,
    reviewCount: 198,
    experienceYears: 20,
    experienceText: "20 Tahun Pengalaman",
    educationSummary: "Spesialis Urologi - FK Universitas Indonesia",
    poli: "Poli Urologi & Ginjal",
    location: "Gedung B, Lantai 2, Ruang 206",
    status: "available_today",
    statusText: "Tersedia Hari Ini",
    languages: ["Indonesia", "Inggris"],
    photo: "/images/doctors/doc-7.jpg",
    avatarColor: "bg-amber-700",
    about:
      "dr. H. Bambang Hermanto, Sp.U adalah dokter spesialis urologi berpengalaman tinggi dalam menangani batu saluran kemih tanpa operasi bedah terbuka (ESWL dan URS Laser), pembesaran prostat jinak (BPH) dengan prosedur TURP, serta kelainan saluran kemih pria maupun wanita.",
    philosophy:
      "Solusi penanganan urologi dengan teknologi minimal invasif yang teruji, mengutamakan kenyamanan pemulihan pasien dan etika kedokteran islami.",
    educations: [
      { degree: "Spesialis Urologi (Sp.U)", institution: "Fakultas Kedokteran Universitas Indonesia", year: "2006" },
      { degree: "Dokter Umum (dr.)", institution: "Fakultas Kedokteran Universitas Indonesia", year: "1999" }
    ],
    skills: [
      "ESWL (Extracorporeal Shock Wave Lithotripsy)",
      "URS Laser Litotripsi Batu Ginjal & Ureter",
      "TURP (Transurethral Resection of the Prostate)",
      "Biopsi Prostat USG Guided",
      "Penanganan Infeksi Saluran Kemih Kronis & Inkontinensia"
    ],
    certifications: [
      "Anggota Ikatan Ahli Urologi Indonesia (IAUI)",
      "European Association of Urology (EAU)",
      "Certified ESWL Expert Operator"
    ],
    schedule: [
      { days: ["Selasa", "Kamis"], hours: "10:00 - 14:00 WIB", poli: "Poli Urologi", room: "R. 206" },
      { days: ["Jumat"], hours: "13:00 - 16:00 WIB", poli: "Poli Urologi", room: "R. 206" }
    ]
  },
  {
    id: "doc-8",
    name: "dr. Fatma Asyari, Sp.M",
    slug: "dr-fatma-asyari-sp-m",
    specialty: "Spesialis Mata",
    subspecialty: "Konsultan Infeksi & Imunologi Mata",
    sipStr: "STR: 31.2.1.100.2.13.007812 • SIP: 503/0166/SIP-D/2021",
    rating: 4.8,
    reviewCount: 142,
    experienceYears: 15,
    experienceText: "15 Tahun Pengalaman",
    educationSummary: "Spesialis Mata - FK Universitas Indonesia",
    poli: "Poli Mata (Aini Eye Center)",
    location: "Gedung A, Lantai 3, Ruang 306",
    status: "on_schedule",
    statusText: "Praktik Sesuai Jadwal",
    languages: ["Indonesia", "Inggris"],
    photo: "/images/doctors/doc-8.jpg",
    avatarColor: "bg-teal-700",
    about:
      "dr. Fatma Asyari, Sp.M fokus pada penanganan infeksi mata yang kompleks, radang uvea (uveitis), penyakit autoimun yang bermanifestasi pada mata, serta pemeriksaan skrining mata komprehensif bagi anak maupun dewasa.",
    philosophy:
      "Ketelitian dalam mendiagnosis inflamasi okular yang mendalam dan memberikan terapi tepat sasaran untuk mempertahankan fungsi penglihatan pasien.",
    educations: [
      { degree: "Spesialis Mata (Sp.M)", institution: "Fakultas Kedokteran Universitas Indonesia", year: "2011" },
      { degree: "Dokter Umum (dr.)", institution: "Fakultas Kedokteran Universitas Andalas", year: "2005" }
    ],
    skills: [
      "Diagnosis & Terapi Uveitis Akut / Kronik",
      "Penanganan Skleritis & Episkleritis Autoimun",
      "Operasi Katarak Phacoemulsification",
      "Skrining Sitologi & Kultur Mikrobiologi Mata",
      "Terapi Imunosupresif pada Penyakit Mata"
    ],
    certifications: [
      "Anggota PERDAMI",
      "International Uveitis Study Group (IUSG) Participant",
      "IDI Cabang Jakarta Selatan"
    ],
    schedule: [
      { days: ["Senin", "Rabu"], hours: "13:00 - 17:00 WIB", poli: "Poli Mata", room: "R. 306" },
      { days: ["Kamis"], hours: "09:00 - 12:00 WIB", poli: "Poli Mata", room: "R. 306" }
    ]
  },
  {
    id: "doc-9",
    name: "dr. Amanda Putri, Sp.A, M.Kes",
    slug: "dr-amanda-putri-sp-a",
    specialty: "Spesialis Anak",
    subspecialty: "Pediatri Umum & Tumbuh Kembang Anak",
    sipStr: "STR: 31.2.1.100.3.18.012356 • SIP: 503/0091/SIP-D/2023",
    rating: 4.9,
    reviewCount: 280,
    experienceYears: 12,
    experienceText: "12 Tahun Pengalaman",
    educationSummary: "Spesialis Anak - FK Universitas Gadjah Mada",
    poli: "Poli Anak & Tumbuh Kembang",
    location: "Gedung Utama, Lantai 2, Ruang 204",
    status: "available_today",
    statusText: "Tersedia Hari Ini",
    languages: ["Indonesia", "Inggris"],
    photo: "/images/doctors/doc-9.jpg",
    avatarColor: "bg-rose-600",
    about:
      "dr. Amanda Putri, Sp.A, M.Kes dikenal sangat ramah, sabar, dan komunikatif dengan anak-anak dan orang tua. Beliau berpengalaman menangani tumbuh kembang anak, imunisasi terjadwal, penyakit infeksi anak, gizi buruk/stunting, serta alergi pediatrik.",
    philosophy:
      "Setiap anak adalah amanah berharga. Kami berkomitmen memberikan perawatan yang menyenangkan, tanpa trauma medis, dan selalu berorientasi pada masa depan si kecil.",
    educations: [
      { degree: "Spesialis Ilmu Kesehatan Anak (Sp.A)", institution: "Fakultas Kedokteran Universitas Gadjah Mada", year: "2014" },
      { degree: "Magister Kesehatan (M.Kes)", institution: "Universitas Gadjah Mada", year: "2014" },
      { degree: "Dokter Umum (dr.)", institution: "Fakultas Kedokteran Universitas Sebelas Maret", year: "2009" }
    ],
    skills: [
      "Pemantauan Tumbuh Kembang & Denver II Screening",
      "Vaksinasi & Imunisasi Lengkap Bayi / Anak",
      "Penanganan Alergi & Asma Anak",
      "Konsultasi Nutrisi & Manajemen Stunting",
      "Penanganan Kejang Demam & Infeksi Anak"
    ],
    certifications: [
      "Anggota Ikatan Dokter Anak Indonesia (IDAI)",
      "Pediatric Advanced Life Support (PALS) Certified Provider",
      "Certified Lactation Consultant (Konselor ASI)"
    ],
    schedule: [
      { days: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"], hours: "09:00 - 13:00 WIB", poli: "Poli Anak", room: "R. 204" },
      { days: ["Sabtu", "Minggu"], hours: "09:00 - 12:00 WIB (Sunday Clinic)", poli: "Poli Anak", room: "R. 204" }
    ]
  },
  {
    id: "doc-10",
    name: "dr. Hendra Wijaya, Sp.JP, FIHA",
    slug: "dr-hendra-wijaya-sp-jp",
    specialty: "Spesialis Jantung",
    subspecialty: "Kardiologi Intervensi & Pencegahan Vaskular",
    sipStr: "STR: 31.1.1.100.2.10.005511 • SIP: 503/0188/SIP-D/2021",
    rating: 4.9,
    reviewCount: 230,
    experienceYears: 16,
    experienceText: "16 Tahun Pengalaman",
    educationSummary: "Spesialis Jantung - FK Universitas Indonesia",
    poli: "Poli Jantung & Pembuluh Darah",
    location: "Gedung B, Lantai 1, Ruang 102",
    status: "on_schedule",
    statusText: "Praktik Sesuai Jadwal",
    languages: ["Indonesia", "Inggris"],
    photo: "/images/doctors/doc-10.jpg",
    avatarColor: "bg-red-600",
    about:
      "dr. Hendra Wijaya, Sp.JP, FIHA adalah spesialis jantung dan pembuluh darah dengan keahlian khusus dalam kateterisasi jantung (angiografi), pemasangan ring/stent jantung (PCI), diagnosis penyakit jantung koroner, aritmia, serta gagal jantung.",
    philosophy:
      "Pencegahan dan tindakan tepat waktu adalah kunci menyelamatkan setiap denyut jantung pasien. Melayani dengan kesiagaan penuh dan empati.",
    educations: [
      { degree: "Spesialis Jantung & Pembuluh Darah (Sp.JP)", institution: "Fakultas Kedokteran Universitas Indonesia", year: "2010" },
      { degree: "Dokter Umum (dr.)", institution: "Fakultas Kedokteran Universitas Indonesia", year: "2004" },
      { degree: "Fellowship Interventional Cardiology", institution: "National Heart Centre Singapore", year: "2013" }
    ],
    skills: [
      "Percutaneous Coronary Intervention (PCI / Pasang Ring Jantung)",
      "Echocardiography (USG Jantung) Doppler",
      "Treadmill Stress Test & Holter Monitoring",
      "Penanganan Sindroma Koroner Akut & Serangan Jantung UGD",
      "Manajemen Gagal Jantung & Rehabilitasi Kardiovaskular"
    ],
    certifications: [
      "Fellow of Indonesian Heart Association (FIHA)",
      "Perhimpunan Dokter Spesialis Kardiovaskular Indonesia (PERKI)",
      "European Society of Cardiology (ESC Member)"
    ],
    schedule: [
      { days: ["Senin", "Rabu", "Jumat"], hours: "15:00 - 19:00 WIB", poli: "Poli Jantung", room: "R. 102" },
      { days: ["Sabtu"], hours: "08:00 - 12:00 WIB", poli: "Poli Jantung", room: "R. 102" }
    ]
  },
  {
    id: "doc-11",
    name: "dr. Nurul Aini, Sp.OG",
    slug: "dr-nurul-aini-sp-og",
    specialty: "Spesialis Kebidanan",
    subspecialty: "Obstetri Ginekologi & USG 4D Fetomaternal",
    sipStr: "STR: 31.2.1.100.2.14.008899 • SIP: 503/0145/SIP-D/2022",
    rating: 4.9,
    reviewCount: 340,
    experienceYears: 14,
    experienceText: "14 Tahun Pengalaman",
    educationSummary: "Spesialis Kebidanan & Kandungan - FK UNAIR",
    poli: "Poli Kebidanan & Kandungan (Obgyn)",
    location: "Gedung Utama, Lantai 2, Ruang 208",
    status: "available_today",
    statusText: "Tersedia Hari Ini",
    languages: ["Indonesia", "Inggris", "Arab"],
    photo: "/images/doctors/doc-11.jpg",
    avatarColor: "bg-pink-600",
    about:
      "dr. Nurul Aini, Sp.OG memberikan pelayanan komprehensif bagi calon ibu, mulai dari program kehamilan, pemeriksaan prenatal dengan USG 4D resolusi tinggi, persalinan normal maupun sectio caesarea dengan metode ERACS (pemulihan cepat pasca operasi caesar).",
    philosophy:
      "Mendampingi setiap ibu dalam fase kehamilan dan persalinan dengan penuh ketenangan, doa, dan prosedur medis teraman sesuai kaidah syariah.",
    educations: [
      { degree: "Spesialis Obstetri & Ginekologi (Sp.OG)", institution: "Fakultas Kedokteran Universitas Airlangga", year: "2012" },
      { degree: "Dokter Umum (dr.)", institution: "Fakultas Kedokteran Universitas Airlangga", year: "2006" }
    ],
    skills: [
      "Persalinan Metode ERACS (Enhanced Recovery After Cesarean)",
      "USG 4D Real-Time Skrining Kelainan Janin",
      "Penanganan Mioma Uteri & Kista Ovarium Minimal Invasif",
      "Skrining Kanker Serviks & Pap Smear Terpadu",
      "Konsultasi Program Hamil & Kesehatan Reproduksi Wanita"
    ],
    certifications: [
      "Perkumpulan Obstetri & Ginekologi Indonesia (POGI)",
      "International Society of Ultrasound in Obstetrics and Gynecology (ISUOG)",
      "Certified ERACS Practitioner"
    ],
    schedule: [
      { days: ["Selasa", "Kamis", "Sabtu"], hours: "09:00 - 14:00 WIB", poli: "Poli Kebidanan", room: "R. 208" },
      { days: ["Minggu"], hours: "10:00 - 13:00 WIB (Sunday Clinic)", poli: "Poli Kebidanan", room: "R. 208" }
    ]
  },
  {
    id: "doc-12",
    name: "dr. Rudi Kurnia, Sp.Rad",
    slug: "dr-rudi-kurnia-sp-rad",
    specialty: "Spesialis Radiologi",
    subspecialty: "Radiologi Diagnostik & Imaging Intervensional",
    sipStr: "STR: 31.1.1.100.1.12.003322 • SIP: 503/0068/SIP-D/2021",
    rating: 4.8,
    reviewCount: 95,
    experienceYears: 15,
    experienceText: "15 Tahun Pengalaman",
    educationSummary: "Spesialis Radiologi - FK Universitas Padjadjaran",
    poli: "Instalasi Radiologi & Imaging",
    location: "Gedung B, Lantai Dasar (Basement)",
    status: "available_today",
    statusText: "Tersedia Hari Ini",
    languages: ["Indonesia", "Inggris"],
    photo: "/images/doctors/doc-12.jpg",
    avatarColor: "bg-slate-700",
    about:
      "dr. Rudi Kurnia, Sp.Rad bertanggung jawab atas penafsiran dan pembacaan hasil pencitraan diagnostik tingkat tinggi, termasuk MRI 1.5 Tesla, CT-Scan 128 Slice dengan rekonstruksi 3D, fluoroskopi, mamografi digital, dan biopsi berpanduan USG.",
    philosophy:
      "Ketepatan diagnosis visual adalah fondasi utama dari keberhasilan terapi medis dan pembedahan para klinisi bagi keselamatan pasien.",
    educations: [
      { degree: "Spesialis Radiologi (Sp.Rad)", institution: "Fakultas Kedokteran Universitas Padjadjaran", year: "2011" },
      { degree: "Dokter Umum (dr.)", institution: "Fakultas Kedokteran Universitas Diponegoro", year: "2005" }
    ],
    skills: [
      "Interpretasi MRI Otak, Tulang Belakang & Muskuloskeletal",
      "Pencitraan CT-Scan Jantung & Vaskular (CT Angiography)",
      "USG Doppler Pembuluh Darah & Organ Abdomen",
      "Mamografi Digital Skrining Kanker Payudara",
      "Biopsi Jarum Halus Berpanduan USG (FNAB Guided)"
    ],
    certifications: [
      "Perhimpunan Dokter Spesialis Radiologi Indonesia (PDSRI)",
      "Radiological Society of North America (RSNA Member)",
      "European Society of Radiology (ESR Member)"
    ],
    schedule: [
      { days: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"], hours: "08:00 - 16:00 WIB", poli: "Radiologi", room: "Ruang Baca Radiologi" }
    ]
  }
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
      "Klinik Pediatrik Oftalmologi & Mata Anak"
    ],
    bannerUrl: "/images/article-mata.png",
    specialists: ["dr. Wita Jayanti, Sp.M", "dr. Bondan Harmani, Sp.M(K)", "dr. Fatma Asyari, Sp.M"]
  },
  {
    id: "orthopedic-center",
    title: "Muhammad Ali Orthopedic Center",
    subtitle: "Pusat Tulang, Sendi, & Bedah Rekonstruksi",
    description:
      "Menangani kelainan muskuloskeletal, cedera ligamen olahraga, arthroscopy lutut dan bahu, rekonstruksi patah tulang, serta penggantian sendi pinggul dan lutut (Arthroplasty).",
    highlights: [
      "Bedah Minimal Invasif Arthroscopy Lutut & Bahu",
      "Total Knee & Hip Replacement (TKR/THR)",
      "Perawatan Cedera Olahraga (Sports Injury)",
      "Terapi Regeneratif & Secretome Nyeri Sendi"
    ],
    bannerUrl: "/images/article-lutut.png",
    specialists: ["dr. Fachrisal, Sp.OT(K)"]
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
      "Rehabilitasi Neurologis & Pasca Stroke"
    ],
    bannerUrl: "/images/article-endoskopi.jpg",
    specialists: ["dr. Roslan Yusni Hasan, Sp.BS"]
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
      "Ortodonti (Kawat Gigi & Aligner Transparan)"
    ],
    bannerUrl: "/images/article-gigi.png",
    specialists: ["drg. Dian Permatasari, Sp.KG"]
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
      "Pemeriksaan Bebas Sakit dengan Sleep Endoscopy"
    ],
    bannerUrl: "/images/service-laboratorium.png",
    specialists: ["dr. Ferika Widya Suryani, Sp.PD"]
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
      "Klinik Disfungsi Seksual & Andrologi"
    ],
    bannerUrl: "/images/service-hemodialisa.png",
    specialists: ["dr. H. Bambang Hermanto, Sp.U"]
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "srv-1",
    slug: "poliklinik",
    name: "Poliklinik Spesialis",
    category: "Layanan Rawat Jalan",
    icon: "/images/service-rawat-jalan.png",
    badge: "25+ Spesialis",
    description: "Layanan konsultasi medis dokter spesialis dan subspesialis dengan antrean online terpadu.",
    longDescription:
      "Poliklinik Spesialis RSI Muhammad Ali menghadirkan layanan konsultasi komprehensif bersama dokter spesialis dan konsultan senior. Dilengkapi ruang periksa modern berstandar higienis, sistem rekam medis elektronik (RME), dan integrasi langsung ke instalasi farmasi serta laboratorium untuk kenyamanan maksimal pasien.",
    features: [
      "Pendaftaran online via Web & WhatsApp",
      "Sistem antrean real-time terpadu",
      "Konsultasi dokter spesialis & subspesialis",
      "Ruang tunggu nyaman ber-AC ramah anak",
    ],
    procedures: [
      "Pemeriksaan Fisik & Diagnostik Awal",
      "Skrining Penyakit Kronis & Degeneratif",
      "Konsultasi Rencana Terapi & Tindakan",
      "Penerbitan Surat Rujukan & Keterangan Sehat",
    ],
    hours: "Senin - Sabtu: 08:00 - 21:00 WIB",
    location: "Gedung Utama, Lantai 1 & 2",
    doctorCount: 48,
  },
  {
    id: "srv-2",
    slug: "igd-24-jam",
    name: "IGD 24 Jam",
    category: "Layanan Gawat Darurat",
    icon: "/images/service-ugd.png",
    badge: "Siaga 24/7",
    description: "Unit Gawat Darurat siap siaga 24 jam dengan tim dokter bersertifikasi dan armada ambulans respons cepat.",
    longDescription:
      "Instalasi Gawat Darurat (IGD) RSI Muhammad Ali melayani pasien darurat medis, trauma kecelakaan, dan kondisi kritis selama 24 jam penuh. Dilengkapi sistem triase modern, ruang resusitasi berstandar ICU, kamar bedah minor, serta akses langsung ke laboratorium darah dan CT-scan.",
    features: [
      "Hotline Darurat Siaga (021) 573 2241",
      "Dokter jaga bersertifikat ACLS, ATLS, dan PALS",
      "Armada ambulans mobile ICU siaga jemput",
      "Penanganan darurat langsung tanpa penundaan administrasi",
    ],
    procedures: [
      "Resusitasi Jantung Paru (RJP) & Bantuan Hidup Dasar/Lanjut",
      "Penanganan Trauma Kepala, Fraktur, & Luka Akut",
      "Tindakan Bedah Minor Cito & Penjahitan Luka",
      "Stabilisasi Pasien Serangan Jantung & Stroke Akut",
    ],
    hours: "24 Jam Nonstop Setiap Hari",
    location: "Gedung Utama, Lantai Dasar (Akses Langsung Ambulans)",
    doctorCount: 16,
  },
  {
    id: "srv-3",
    slug: "rawat-jalan",
    name: "Rawat Jalan",
    category: "Layanan Medis",
    icon: "/images/service-rawat-jalan.png",
    badge: "Layanan Terpadu",
    description: "Layanan pemeriksaan, konsultasi, dan terapi medis tanpa memerlukan rawat inap semalam.",
    longDescription:
      "Layanan Rawat Jalan RSI Muhammad Ali dirancang untuk memberikan perawatan komprehensif bagi pasien yang membutuhkan pemeriksaan berkala, fisioterapi, luka diabetes, hemodialisa, maupun tindakan medis non-invasif dengan alur pelayanan yang cepat dan terintegrasi.",
    features: [
      "Klinik Asy-Syifa dengan pendekatan holistik",
      "Layanan Perawatan Luka Modern (Modern Wound Care)",
      "Apotek Rawat Jalan dengan konseling apoteker",
      "Koneksi terpadu BPJS Kesehatan & Asuransi Swasta",
    ],
    procedures: [
      "Perawatan Luka Kronis & Ulkus Diabetikum",
      "Pemeriksaan Spirometri & Audiometri",
      "Pemberian Terapi Inhalasi / Nebulisasi",
      "Ganti Verban & Angkat Jahitan Pasca Operasi",
    ],
    hours: "Senin - Sabtu: 07:30 - 20:00 WIB",
    location: "Gedung A, Lantai 1",
    doctorCount: 35,
  },
  {
    id: "srv-4",
    slug: "rawat-inap",
    name: "Rawat Inap",
    category: "Perawatan Pasien",
    icon: "/images/service-rawat-inap.png",
    badge: "Kenyamanan Islami",
    description: "Kamar perawatan President Suite, VVIP, VIP, dan Kelas 1-3 yang asri, tenang, dan berstandar higienis tinggi.",
    longDescription:
      "Kenyamanan, ketenangan, dan privasi proses penyembuhan pasien adalah komitmen utama kami. Ruang rawat inap RSI Muhammad Ali memadukan fasilitas modern setara hotel berbintang dengan pendampingan rohani Islam (bimbingan doa dan tayamum untuk pasien), pantauan perawat 24 jam, serta gizi halal seimbang.",
    features: [
      "Pilihan kamar: President Suite, VVIP, VIP, Kelas 1, 2, dan 3",
      "Monitoring perawat & visit dokter spesialis setiap hari",
      "Menu makanan halal lezat diawasi ahli gizi klinis",
      "Bimbingan doa dan pendampingan rohani pasien",
    ],
    procedures: [
      "Perawatan Medis Intensif Non-ICU",
      "Pemberian Obat & Cairan Infus Terjadwal",
      "Pemantauan Tanda Vital Digital 24 Jam",
      "Rehabilitasi Medik Bertahap di Samping Tempat Tidur",
    ],
    hours: "24 Jam (Jam Kunjungan: 11:00-13:00 & 17:00-19:00 WIB)",
    location: "Gedung A & B, Lantai 3 s/d 6",
    doctorCount: 52,
  },
  {
    id: "srv-5",
    slug: "laboratorium",
    name: "Laboratorium 24 Jam",
    category: "Pusat Diagnostik",
    icon: "/images/service-laboratorium.png",
    badge: "Akurasi Tinggi",
    description: "Uji patologi klinik, mikrobiologi, dan hematologi otomatis dengan akurasi tinggi dan hasil online.",
    longDescription:
      "Instalasi Laboratorium RSI Muhammad Ali menggunakan peralatan analiser otomatis generasi mutakhir yang terkalibrasi secara ketat dan tersertifikasi ISO. Melayani pengujian darah rutin, profil lipid, fungsi organ vital, imunoserologi, penanda tumor, hingga kultur mikrobiologi dengan hasil cepat yang dapat diakses online.",
    features: [
      "Buka 24 jam melayani pasien UGD, Rawat Inap, & Mandiri",
      "Hasil tes terintegrasi ke Portal Pasien Online",
      "Pemeriksaan hematologi, kimia klinik, urin, imunologi",
      "Layanan Home Blood Sampling (ambil sampel di rumah)",
    ],
    procedures: [
      "Uji Darah Lengkap (CBC) Otomatis",
      "Pemeriksaan Profil Glukosa & HbA1c",
      "Uji Fungsi Hati (SGOT/SGPT) & Fungsi Ginjal (Ureum/Kreatinin)",
      "Pemeriksaan Penanda Jantung (Troponin I/T) & D-Dimer Cito",
    ],
    hours: "24 Jam Nonstop",
    location: "Gedung Utama, Lantai 1",
    doctorCount: 6,
  },
  {
    id: "srv-6",
    slug: "radiologi",
    name: "Radiologi & Pencitraan",
    category: "Pusat Diagnostik",
    icon: "/images/service-radiologi.png",
    badge: "Teknologi Terkini",
    description: "MRI 1.5 Tesla, CT-Scan 128 Slice, USG 4D Doppler, dan Digital X-Ray dengan radiasi minimal.",
    longDescription:
      "Pusat Pencitraan Diagnostik RSI Muhammad Ali didukung oleh modalitas imaging tercanggih untuk membantu dokter menegakkan diagnosis secara presisi. Setiap hasil foto dan scan diinterpretasikan langsung oleh Dokter Spesialis Radiologi berpengalaman.",
    features: [
      "MRI 1.5 Tesla tanpa radiasi dengan ruang periksa tenang",
      "CT-Scan 128 Slice dosis radiasi ultra-rendah",
      "Digital Radiography (X-Ray) hasil instan tajam",
      "USG 4D Fetomaternal & Vaskular Doppler",
    ],
    procedures: [
      "MRI Otak, Tulang Belakang, & Ekstremitas Sendi",
      "CT Angiography Pembuluh Darah & Jantung",
      "Rontgen Thorax, Abdomen, & Tulang Rangka",
      "Mamografi Digital Skrining Dini Kanker Payudara",
    ],
    hours: "Senin - Sabtu: 08:00 - 21:00 WIB (UGD Cito: 24 Jam)",
    location: "Gedung B, Lantai Dasar (Basement)",
    doctorCount: 8,
  },
  {
    id: "srv-7",
    slug: "farmasi",
    name: "Farmasi 24 Jam",
    category: "Pelayanan Obat",
    icon: "/images/service-farmasi.png",
    badge: "Obat Asli & Halal",
    description: "Instalasi farmasi rumah sakit berstandar Cara Distribusi Obat yang Baik (CDOB) dengan konseling apoteker.",
    longDescription:
      "Instalasi Farmasi RSI Muhammad Ali menyediakan obat-obatan esensial, antibiotik, sediaan steril, hingga produk herbal fitofarmaka halal yang terjamin keaslian dan suhunya. Apoteker kami siap memberikan konseling edukasi interaksi obat bagi pasien dan keluarga.",
    features: [
      "Layanan obat 24 jam untuk pasien UGD, Rawat Inap, & Rawat Jalan",
      "Sistem peracikan steril & digital dispensing",
      "Konseling penggunaan obat khusus (insulin, inhaler)",
      "Layanan antar obat ke alamat rumah pasien",
    ],
    procedures: [
      "Skrining Resep & Verifikasi Dosis Farmakologis",
      "Peracikan Obat Puyer & Sirup Anak Higienis",
      "Rekonsiliasi Obat Pasien Rawat Inap",
      "Konseling Edukasi Kepatuhan Minum Obat",
    ],
    hours: "24 Jam Nonstop",
    location: "Gedung Utama, Lantai 1 (Dekat Lobi)",
    doctorCount: 12,
  },
  {
    id: "srv-8",
    slug: "medical-check-up",
    name: "Medical Check Up (MCU)",
    category: "Pencegahan & Skrining",
    icon: "/images/service-mcu.png",
    badge: "One-Stop Service",
    description: "Paket deteksi dini komprehensif untuk individu, calon pengantin, lansia, dan skrining korporat.",
    longDescription:
      "Layanan MCU RSI Muhammad Ali berada dalam satu area terpadu (one-stop service) tanpa harus berpindah antar gedung. Hasil pemeriksaan dirangkum dalam buku laporan medis komprehensif disertai konsultasi gaya hidup sehat bersama Dokter Spesialis Okupasi dan Dokter Spesialis Penyakit Dalam.",
    features: [
      "Paket Silver, Gold, Platinum, Eksekutif, & Pranikah",
      "Hasil pemeriksaan selesai cepat dengan resume dokter",
      "Ruang tunggu eksklusif dilengkapi snack sehat dan teh",
      "Layanan skrining kesehatan on-site untuk instansi & perusahaan",
    ],
    procedures: [
      "Pemeriksaan Tanda Vital & Indeks Massa Tubuh",
      "Rekam Jantung (EKG) & Treadmill Stress Test",
      "Rontgen Thorax & USG Abdomen Lengkap",
      "Panel Darah Lengkap, Fungsi Organ, & Penanda Kanker",
    ],
    hours: "Senin - Sabtu: 07:30 - 15:00 WIB",
    location: "Gedung A, Lantai 2 (Klinik MCU Eksekutif)",
    doctorCount: 14,
  },
  {
    id: "srv-9",
    slug: "klinik-anak",
    name: "Klinik Anak (Pediatri)",
    category: "Poliklinik Spesialis",
    icon: "/images/service-rawat-jalan.png",
    badge: "Ramah Anak",
    description: "Perawatan kesehatan bayi dan anak, vaksinasi lengkap, pemantauan tumbuh kembang, dan penanganan alergi.",
    longDescription:
      "Klinik Anak RSI Muhammad Ali didesain dengan konsep ramah anak (child-friendly) agar si kecil merasa aman dan nyaman saat berkunjung. Didukung dokter spesialis anak berpengalaman, ruang bermain edukatif, ruang laktasi khusus, serta pemisahan ruang tunggu anak sehat (imunisasi) dan anak sakit.",
    features: [
      "Pemisahan ruang imunisasi (anak sehat) dan anak sakit",
      "Jadwal vaksinasi lengkap sesuai rekomendasi IDAI",
      "Konsultasi tumbuh kembang anak & pencegahan stunting",
      "Klinik laktasi & ruang menyusui privat ber-AC",
    ],
    procedures: [
      "Imunisasi Bayi, Balita, & Anak Remaja",
      "Skrining Perkembangan Denver II & Tes Tumbuh Kembang",
      "Penanganan Demam, Kejang, Asma, & Infeksi Tropis",
      "Konseling Gizi Anak & MPASI oleh Dokter Spesialis",
    ],
    hours: "Senin - Sabtu: 08:30 - 20:00 WIB (Sunday Clinic: 09:00 - 12:00 WIB)",
    location: "Gedung Utama, Lantai 2, Ruang 204-206",
    doctorCount: 8,
  },
  {
    id: "srv-10",
    slug: "klinik-kandungan",
    name: "Klinik Kebidanan & Kandungan",
    category: "Poliklinik Spesialis",
    icon: "/images/service-rawat-jalan.png",
    badge: "Metode ERACS",
    description: "Pemeriksaan kehamilan USG 4D, program hamil, penanganan ginekologi, dan persalinan metode ERACS.",
    longDescription:
      "Klinik Kebidanan dan Kandungan (Obgyn) RSI Muhammad Ali memberikan pendampingan tulus bagi kaum wanita dalam setiap fase kehidupan. Melayani pemeriksaan pranikah, program kesuburan, antenatal care dengan USG 4D fetomaternal, serta persalinan nyaman dengan metode pemulihan cepat ERACS (Enhanced Recovery After Cesarean Surgery).",
    features: [
      "USG 4D Fetomaternal resolusi tinggi",
      "Persalinan normal & metode ERACS minim rasa sakit",
      "Kamar bersalin bernuansa tenang dan privat (Intimate Delivery Room)",
      "Dokter spesialis dan bidan perempuan bersertifikasi",
    ],
    procedures: [
      "Skrining Kesehatan Kehamilan Trimester I, II, III",
      "USG Skrining Kelainan Kongenital Janin",
      "Pap Smear & Vaksinasi Kanker Serviks (HPV)",
      "Operasi Laparoskopi Kista Ovarium & Mioma Uteri",
    ],
    hours: "Senin - Sabtu: 08:00 - 20:30 WIB",
    location: "Gedung Utama, Lantai 2, Ruang 208-210",
    doctorCount: 10,
  },
  {
    id: "srv-11",
    slug: "klinik-penyakit-dalam",
    name: "Klinik Penyakit Dalam (Internis)",
    category: "Poliklinik Spesialis",
    icon: "/images/service-hemodialisa.png",
    badge: "Konsultan Subspesialis",
    description: "Diagnosis dan tata laksana komprehensif penyakit organ dalam dewasa, diabetes, hipertensi, dan ginjal.",
    longDescription:
      "Klinik Penyakit Dalam RSI Muhammad Ali diperkuat oleh para dokter spesialis penyakit dalam (Sp.PD) dan konsultan subspesialis (Ginjal-Hipertensi, Gastroentero-Hepatologi, Endokrin-Diabetes, Alergi-Imunologi). Menangani penyakit akut maupun kronis secara holistik.",
    features: [
      "Tim konsultan ginjal, lambung, metabolik, & imunologi",
      "Koneksi langsung ke unit hemodialisa dan endoskopi",
      "Edukasi pengelolaan diabetes mandiri & pola hidup sehat",
      "Pemeriksaan cepat profil glukosa darah dan elektrolit",
    ],
    procedures: [
      "Pemeriksaan Asam Urat, Kolesterol, & Tekanan Darah Terpadu",
      "Manajemen Diabetes Melitus & Sindroma Metabolik",
      "Evaluasi & Terapi Gangguan Fungsi Hati dan Saluran Cerna",
      "Penanganan Gangguan Ginjal Akut & Kronis",
    ],
    hours: "Senin - Sabtu: 08:00 - 20:00 WIB",
    location: "Gedung A, Lantai 2, Ruang 212-215",
    doctorCount: 12,
  },
  {
    id: "srv-12",
    slug: "klinik-bedah",
    name: "Klinik Bedah Umum & Subspesialis",
    category: "Poliklinik Spesialis",
    icon: "/images/service-operasi.png",
    badge: "Minimal Invasif",
    description: "Konsultasi pra dan pasca bedah, bedah laparoskopi, bedah digestif, bedah onkologi, dan bedah plastik.",
    longDescription:
      "Klinik Bedah RSI Muhammad Ali menangani tindakan operasi terencana maupun darurat dengan teknik modern minimal invasif (laparoskopi). Menjamin luka sayatan kecil, rasa sakit pasca operasi minimal, dan masa pemulihan pasien yang jauh lebih singkat.",
    features: [
      "Kamar Operasi Modular HEPA Filter steril berstandar internasional",
      "Laparoskopi & Endoskopi bedah generasi terbaru",
      "Tim dokter bedah umum, bedah tulang, bedah saraf, dan urologi",
      "Perawatan luka bedah modern (modern dressing)",
    ],
    procedures: [
      "Operasi Usus Buntu & Batu Empedu Laparoskopi",
      "Bedah Hernia & Wasir (Hemoroid) Tanpa Sayatan Lebar",
      "Pengangkatan Tumor Jinak Kulit & Jaringan Lunak (Eksisi)",
      "Konsultasi Bedah Digestif & Onkologi Terpadu",
    ],
    hours: "Senin - Sabtu: 09:00 - 20:00 WIB",
    location: "Gedung A, Lantai 2, Ruang 216-218",
    doctorCount: 15,
  },
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: "fac-1",
    slug: "igd-24-jam",
    name: "Instalasi Gawat Darurat (IGD) 24 Jam",
    category: "Layanan Kritis",
    description: "Unit penanganan darurat berkecepatan tinggi dengan dokter siaga dan fasilitas resusitasi lengkap.",
    longDescription:
      "IGD RSI Muhammad Ali beroperasi 24 jam sehari dengan sistem triase modern yang memprioritaskan pasien berdasarkan derajat kegawatan. Dilengkapi ruang resusitasi kritis, monitor tanda vital otomatis, defibrilator, serta akses tercepat menuju kamar operasi dan ruang radiologi.",
    image: "/images/service-ugd.png",
    highlights: ["Siaga 24 Jam Nonstop", "Akses Langsung Jalur Ambulans", "Ruang Resusitasi Kritis Berstandar ICU", "Dokter Bersertifikasi ATLS/ACLS"],
    hours: "24 Jam Nonstop",
    location: "Gedung Utama, Lantai Dasar",
    capacity: "18 Tempat Tidur Triase & Resusitasi",
    features: ["Ruang Triase Khusus", "Ruang Tindakan Bedah Minor", "Ruang Dekontaminasi & Isolasi", "Peralatan Oksigen Terpusat"],
  },
  {
    id: "fac-2",
    slug: "ruang-rawat-inap",
    name: "Ruang Rawat Inap (Suite, VIP & Reguler)",
    category: "Akomodasi Pasien",
    description: "Kamar rawat inap dengan pencahayaan alami, suasana tenang, pendingin udara, dan higienitas tinggi.",
    longDescription:
      "Kamar rawat inap RSI Muhammad Ali dirancang untuk mendukung pemulihan lahir dan batin pasien. Menyediakan berbagai kelas mulai dari President Suite, VVIP, VIP, hingga Kelas 1, 2, dan 3 yang dilengkapi ranjang medis elektrik, sofa pendamping, smart TV, kamar mandi air hangat, dan sistem pemanggilan perawat digital.",
    image: "/images/service-rawat-inap.png",
    highlights: ["Pilihan Kamar Lengkap (Suite s/d Kelas 3)", "Ranjang Medis Elektrik Multi-Posisi", "Pendampingan Rohani & Doa", "Menu Makanan Pasien Halal Sehat"],
    hours: "24 Jam (Jam Kunjungan: 11:00-13:00 & 17:00-19:00 WIB)",
    location: "Gedung A & B, Lantai 3, 4, 5, dan 6",
    capacity: "180+ Tempat Tidur Rawat Inap",
    features: ["Nurse Call Button di Setiap Ranjang", "Kamar Mandi Privat Air Hangat", "Free Wi-Fi & Smart TV", "Air Purifier HEPA Filter"],
  },
  {
    id: "fac-3",
    slug: "ruang-operasi",
    name: "Ruang Operasi Modular (MOT)",
    category: "Tindakan Medis",
    description: "Modular Operating Theatre dengan sistem tata udara Laminar Air Flow dan filtrasi HEPA steril maksimal.",
    longDescription:
      "Instalasi Bedah Sentral RSI Muhammad Ali memiliki 4 kamar operasi modern berteknologi Modular Operating Theatre (MOT). Dinding anti-bakteri, sistem tata udara tekanan positif, serta peralatan laparoskopi dan mikroskop bedah memastikan tingkat kesterilan tertinggi bagi tindakan operasi bedah saraf, orthopedi, mata, kebidanan, maupun bedah umum.",
    image: "/images/service-operasi.png",
    highlights: ["Sistem Tata Udara HEPA Filter Laminar", "Teknologi Laparoskopi & BESS Terkini", "Kamera Bedah Ultra HD Terhubung Monitor", "Ruang Pulih Sadar (PACU) 6 Bed"],
    hours: "24 Jam (Operasi Elektif: 08:00 - 18:00 WIB, Cito Darurat: 24 Jam)",
    location: "Gedung B, Lantai 2",
    capacity: "4 Kamar Operasi Modular Steril",
    features: ["Laminar Air Flow Positif", "Lampu Operasi LED Dual-Arm", "Mesin Anestesi Digital Terintegrasi", "Sistem Pintu Hermetik Otomatis"],
  },
  {
    id: "fac-4",
    slug: "laboratorium-patologi",
    name: "Laboratorium Patologi & Analisis Darah",
    category: "Pusat Diagnostik",
    description: "Pusat pemeriksaan darah, urin, kimia klinik, dan imunoserologi otomatis dengan akurasi terkalibrasi.",
    longDescription:
      "Laboratorium kami dilengkapi instrumen otomasi canggih yang terhubung ke Laboratory Information System (LIS). Meminimalisir kesalahan human error, mempercepat waktu tunggu hasil (Turn-Around Time), serta terhubung langsung dengan rekam medis dokter.",
    image: "/images/service-laboratorium.png",
    highlights: ["Buka 24 Jam Tanpa Libur", "Hasil Uji Kritis Cito < 60 Menit", "Sertifikasi Mutu Nasional & Internasional", "Akses Hasil Online via Portal Pasien"],
    hours: "24 Jam Nonstop",
    location: "Gedung Utama, Lantai 1",
    capacity: "Kapasitas 1.200 Tes per Hari",
    features: ["Automated Hematology Analyzer", "Clinical Chemistry Analyzer Otomatis", "Unit Bank Darah & Hemovigilance", "Ruang Sampling Darah Nyaman"],
  },
  {
    id: "fac-5",
    slug: "radiologi-mri-ctscan",
    name: "Pusat Radiologi, MRI & CT-Scan",
    category: "Pusat Diagnostik",
    description: "Peralatan pencitraan canggih: MRI 1.5 Tesla, CT-Scan 128 Slice, USG 4D, dan Panoramic X-Ray.",
    longDescription:
      "Fasilitas radiologi RSI Muhammad Ali dirancang luas dengan peredam suara dan visual menenangkan untuk mengurangi kecemasan pasien (terutama pasien claustrophobia). Menyajikan visualisasi detail pembuluh darah, jaringan lunak otak, persendian, serta organ dalam tubuh.",
    image: "/images/service-radiologi.png",
    highlights: ["MRI 1.5 Tesla Resolusi Tinggi", "CT-Scan 128 Slice Dosis Radiasi Rendah", "USG 4D Fetomaternal & Vaskular", "Dibaca Spesialis Radiologi Senior"],
    hours: "Senin - Sabtu: 08:00 - 21:00 WIB (Darurat IGD: 24 Jam)",
    location: "Gedung B, Lantai Dasar",
    capacity: "Melayani 80+ Pemeriksaan Imaging / Hari",
    features: ["Bilik Ganti Baju Privat", "Shielding Timbal Anti-Radiasi Standar BAPETEN", "Penyimpanan Gambar Medis PACS Digital", "Ruang Diskusi Konsultasi Radiologi"],
  },
  {
    id: "fac-6",
    slug: "farmasi-24-jam",
    name: "Instalasi Farmasi 24 Jam",
    category: "Pelayanan Obat",
    description: "Apotek rumah sakit lengkap dengan sistem resep elektronik (e-prescribing) dan ruangan konseling obat.",
    longDescription:
      "Instalasi Farmasi RSI Muhammad Ali menjamin ketersediaan obat generik, paten, dan sediaan khusus yang terdaftar di BPOM dan bersertifikasi halal. Dilengkapi ruangan konseling khusus apoteker untuk menjelaskan aturan minum, cara pemakaian alat kesehatan khusus, dan potensi efek samping obat.",
    image: "/images/service-farmasi.png",
    highlights: ["Buka 24 Jam Nonstop", "Penyimpanan Berstandar Suhu Ketat (Cold Chain)", "Konseling Apoteker Bebas Biaya", "Sistem e-Prescribing Bebas Antre Panjang"],
    hours: "24 Jam Nonstop",
    location: "Gedung Utama, Lantai 1",
    capacity: "5 Loket Pelayanan Resep Cepat",
    features: ["Ruang Peracikan Steril Puyer", "Chiller Penyimpanan Insulin & Vaksin", "Layar Panggilan Antrean Digital", "Ruang Konseling Apoteker Privat"],
  },
  {
    id: "fac-7",
    slug: "ambulans-gawat-darurat",
    name: "Armada Ambulans & ICU Mobile",
    category: "Transportasi Medis",
    description: "Armada ambulans tanggap darurat dilengkapi ventilator portabel, monitor jantung, dan tabung oksigen.",
    longDescription:
      "Armada ambulans RSI Muhammad Ali selalu siaga menjemput pasien gawat darurat dari rumah, tempat kerja, atau lokasi kecelakaan, serta melayani rujukan antar rumah sakit. Dilengkapi peralatan penunjang hidup setara ruang rawat intensif (ICU Mobile) dan didampingi perawat bersertifikasi kegawatdaruratan.",
    image: "/images/service-ugd.png",
    highlights: ["Call Center Siaga 24 Jam (021) 573 2241", "Ventilator Transport & Defibrilator", "Tim Paramedis Emergency Berpengalaman", "GPS Tracking Navigasi Cepat"],
    hours: "24 Jam Siaga Panggilan",
    location: "Area Parkir Khusus Ambulans Gedung Utama",
    capacity: "4 Unit Armada Ambulans (2 ICU Mobile, 2 Standar Transport)",
    features: ["Stretcher Multi-Level Otomatis", "Suction Unit Portabel", "Monitor EKG & Pulse Oximeter", "Kotak Obat Emergency Lengkap"],
  },
  {
    id: "fac-8",
    slug: "musholla-asy-syifa",
    name: "Musholla Asy-Syifa & Bimbingan Rohani",
    category: "Fasilitas Ibadah & Rohani",
    description: "Musholla yang luas, sejuk, ber-AC, dengan tempat wudhu bersih dan fasilitas bimbingan doa kesembuhan.",
    longDescription:
      "Sesuai nilai luhur Rumah Sakit Islam, RSI Muhammad Ali menyediakan Musholla Asy-Syifa yang nyaman untuk salat berjamaah bagi pasien, keluarga, dan pengunjung. Tersedia pula tim bimbingan rohani Islam yang siap memberikan motivasi spiritual, membimbing doa kesembuhan, tayamum, dan salat bagi pasien yang sedang dirawat inap.",
    image: "/images/service-rawat-jalan.png",
    highlights: ["Ruang Ibadah Ber-AC Luas & Wangi", "Tempat Wudhu Terpisah Pria & Wanita", "Tersedia Mukena, Sarung, & Al-Quran Bersih", "Layanan Bimbingan Rohani Pasien"],
    hours: "Terbuka 24 Jam Setiap Hari",
    location: "Gedung A, Lantai 1 (Akses Dekat Taman Dalam)",
    capacity: "Kapasitas 120 Jamaah",
    features: ["Koleksi Buku Doa Kesembuhan", "Arah Kiblat Terverifikasi Akurat", "Tempat Penitipan Sepatu Aman", "Jalur Akses Ramah Kursi Roda"],
  },
];

export const ISLAMIC_VALUES_DATA: IslamicValueItem[] = [
  {
    id: "val-1",
    title: "Amanah",
    arabic: "الأمانة",
    subtitle: "Integritas & Tanggung Jawab Moral",
    description: "Menjaga kepercayaan pasien, keluarga, dan masyarakat dengan menjunjung tinggi kejujuran medis, kerahasiaan data pasien, serta tanggung jawab profesional di hadapan Allah SWT.",
    points: [
      "Transparansi diagnosis dan rencana pengobatan",
      "Kerahasiaan rekam medis pasien terjaga ketat",
      "Tidak membebankan tindakan medis yang tidak perlu",
    ],
  },
  {
    id: "val-2",
    title: "Profesional",
    arabic: "الإتقان",
    subtitle: "Keahlian Medis Berstandar Unggul",
    description: "Menerapkan ilmu kedokteran berbasis bukti (Evidence-Based Medicine) dengan standar mutu klinis tertinggi, continuous learning, dan akreditasi KARS Paripurna.",
    points: [
      "Dokter spesialis dan subspesialis tersertifikasi",
      "Prosedur keselamatan pasien (Patient Safety First)",
      "Teknologi medis modern dan terkalibrasi berkala",
    ],
  },
  {
    id: "val-3",
    title: "Ramah",
    arabic: "البشاشة",
    subtitle: "Kehangatan Senyum & Kesantunan",
    description: "Menebarkan senyum, salam, sapa, sopan, dan santun (5S) kepada setiap pasien dan keluarga untuk menghadirkan ketenangan serta meredakan rasa cemas dalam masa sakit.",
    points: [
      "Pelayanan penuh senyum dan tutur kata santun",
      "Mendengarkan keluhan pasien dengan empati dan sabar",
      "Suasana rumah sakit yang menyejukkan hati",
    ],
  },
  {
    id: "val-4",
    title: "Peduli",
    arabic: "الرحمة",
    subtitle: "Empati & Kasih Sayang Bagi Sesama",
    description: "Memperlakukan setiap pasien seperti keluarga sendiri dengan kepedulian tulus tanpa membeda-bedakan status sosial, suku, maupun latar belakang.",
    points: [
      "Akses kesehatan inklusif bagi seluruh lapisan masyarakat",
      "Pelayanan tanggap darurat tanpa diskriminasi",
      "Dukungan konseling psikologis dan pendampingan keluarga",
    ],
  },
  {
    id: "val-5",
    title: "Islami",
    arabic: "الإسلامي",
    subtitle: "Bimbingan Doa & Standar Syariah",
    description: "Mengintegrasikan ikhtiar medis ilmiah dengan nilai-nilai tauhid dan doa kesembuhan, sertifikasi syariah DSN-MUI, obat dan makanan halal, serta menjaga aurat dan adab pergaulan islami.",
    points: [
      "Bimbingan doa kesembuhan dan tayamum bagi pasien rawat inap",
      "Makanan dan obat-obatan terjamin kehalalannya",
      "Menjaga privasi, aurat, dan etika interaksi tenaga medis",
    ],
  },
];

export const PATIENT_INFO_DATA: PatientInfoHubItem[] = [
  {
    id: "inf-1",
    title: "Jadwal Praktik Dokter",
    slug: "jadwal-dokter",
    badge: "Terbaru",
    description: "Cek jadwal poliklinik harian para dokter spesialis dan subspesialis kami yang selalu diperbarui.",
    iconName: "Calendar",
    points: ["Poli buka Senin s/d Sabtu", "Layanan Sunday Clinic akhir pekan", "Jadwal dokter real-time"],
    linkUrl: "/dokter",
  },
  {
    id: "inf-2",
    title: "Cara Pendaftaran Pasien",
    slug: "cara-pendaftaran",
    badge: "Mudah & Cepat",
    description: "Panduan lengkap alur pendaftaran pasien baru dan pasien lama via website, WhatsApp, atau langsung di lobi.",
    iconName: "UserCheck",
    points: ["Pendaftaran online bebas antre", "Bisa menggunakan NIK KTP / No. RM", "Pilihan pembayaran umum & asuransi"],
    linkUrl: "/buat-janji",
  },
  {
    id: "inf-3",
    title: "Informasi Rawat Inap & Besuk",
    slug: "informasi-rawat-inap",
    description: "Ketentuan jam kunjungan pasien rawat inap, fasilitas kamar, tata tertib penunggu, dan menu gizi halal.",
    iconName: "BedDouble",
    points: ["Jam besuk siang 11:00-13:00", "Jam besuk sore 17:00-19:00", "Maksimal 2 penunggu dalam kamar"],
    linkUrl: "/layanan/rawat-inap",
  },
  {
    id: "inf-4",
    title: "Panduan Gawat Darurat (IGD)",
    slug: "panduan-igd",
    badge: "Siaga 24 Jam",
    description: "Langkah-langkah penanganan pasien darurat, kriteria triase merah/kuning/hijau, dan pemanggilan ambulans.",
    iconName: "AlertCircle",
    points: ["Hotline darurat: (021) 573 2241", "Penanganan langsung tanpa antre", "Ambulans ICU Mobile siaga"],
    linkUrl: "/layanan/igd-24-jam",
  },
  {
    id: "inf-5",
    title: "Informasi BPJS Kesehatan",
    slug: "informasi-bpjs",
    description: "Syarat dan alur rujukan berjenjang BPJS Kesehatan dari Faskes Tingkat 1 (Puskesmas/Klinik) ke RSI Muhammad Ali.",
    iconName: "ShieldCheck",
    points: ["Surat rujukan online e-Klaim", "Kartu JKN aktif / Aplikasi Mobile JKN", "Poliklinik dan rawat inap terintegrasi BPJS"],
    linkUrl: "/informasi-pasien",
  },
  {
    id: "inf-6",
    title: "Mitra Asuransi Swasta & Korporat",
    slug: "mitra-asuransi",
    description: "Daftar 16+ asuransi swasta nasional dan internasional dengan fasilitas cashless tanpa biaya tambahan.",
    iconName: "CreditCard",
    points: ["Sistem klaim cashless instan", "Meja admisi asuransi prioritas", "Didukung AdMedika, Inhealth, Prudential dll"],
    linkUrl: "/informasi-pasien",
  },
  {
    id: "inf-7",
    title: "Tarif Layanan & Paket Transparan",
    slug: "tarif-layanan",
    description: "Estimasi biaya rawat inap, paket persalinan ERACS, operasi katarak, dan paket Medical Check Up (MCU).",
    iconName: "FileText",
    points: ["Rincian biaya transparan", "Paket bersalin & bedah terjangkau", "Tidak ada biaya tersembunyi"],
    linkUrl: "/informasi-pasien",
  },
  {
    id: "inf-8",
    title: "Hak & Kewajiban Pasien",
    slug: "hak-kewajiban-pasien",
    description: "Informasi penting mengenai hak perlindungan hukum, persetujuan tindakan medis (Informed Consent), dan tata tertib.",
    iconName: "Scale",
    points: ["Hak atas informasi diagnosis lengkap", "Hak atas privasi dan kerahasiaan", "Kewajiban mematuhi arahan medis"],
    linkUrl: "/informasi-pasien",
  },
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Bagaimana cara membuat janji temu dengan dokter spesialis secara online?",
    answer:
      "Anda dapat memilih menu 'Buat Janji' di website ini, memilih poliklinik dan dokter yang dituju, menentukan tanggal dan jam konsultasi, lalu mengisi data diri. Tiket janji temu digital akan otomatis terbit dan konfirmasi akan dikirimkan melalui WhatsApp.",
    category: "Pendaftaran",
  },
  {
    id: "faq-2",
    question: "Apakah RSI Muhammad Ali melayani pasien BPJS Kesehatan?",
    answer:
      "Ya, RSI Muhammad Ali melayani pasien BPJS Kesehatan untuk rawat jalan maupun rawat inap dengan menyertakan surat rujukan dari Faskes Tingkat 1 (Puskesmas/Klinik) yang masih berlaku serta KTP dan kartu BPJS aktif.",
    category: "BPJS & Asuransi",
  },
  {
    id: "faq-3",
    question: "Berapa nomor telepon darurat IGD dan pemanggilan ambulans?",
    answer:
      "Nomor darurat UGD 24 Jam dan pemanggilan ambulans RSI Muhammad Ali adalah (021) 573 2241. Tim kami siaga 24 jam sehari 7 hari seminggu.",
    category: "IGD",
  },
  {
    id: "faq-4",
    question: "Kapan jadwal jam besuk untuk pasien yang dirawat inap?",
    answer:
      "Jam besuk rawat inap dibagi menjadi dua sesi: Sesi Siang pukul 11:00 - 13:00 WIB dan Sesi Sore pukul 17:00 - 19:00 WIB. Anak-anak di bawah usia 12 tahun diimbau tidak memasuki area ruang perawatan demi keselamatan kesehatan anak.",
    category: "Rawat Inap",
  },
  {
    id: "faq-5",
    question: "Apakah poliklinik spesialis buka di hari Minggu (akhir pekan)?",
    answer:
      "Ya, kami menyediakan program Sunday Clinic khusus di hari Minggu pukul 09:00 - 13:00 WIB untuk spesialis anak, spesialis kandungan, spesialis mata, dan spesialis penyakit dalam.",
    category: "Dokter & Jadwal",
  },
  {
    id: "faq-6",
    question: "Bagaimana cara melihat hasil pemeriksaan laboratorium atau radiologi secara online?",
    answer:
      "Pasien dapat mengakses menu 'Daftar / Login' di pojok kanan atas, masuk menggunakan Nomor Rekam Medis (No. RM) atau NIK KTP yang terdaftar, lalu mengunduh hasil laboratorium dan radiologi dalam format PDF resmi.",
    category: "Pendaftaran",
  },
  {
    id: "faq-7",
    question: "Apa saja asuransi swasta yang bisa digunakan secara Cashless?",
    answer:
      "Kami bekerja sama dengan berbagai asuransi swasta terkemuka seperti Prudential, Allianz, AIA, Manulife, AXA Mandiri, Mandiri Inhealth, Sinarmas MSIG, BNI Life, Sequis Life, AdMedika, dan Telkomedika.",
    category: "BPJS & Asuransi",
  },
  {
    id: "faq-8",
    question: "Apakah metode persalinan ERACS tersedia di RSI Muhammad Ali?",
    answer:
      "Ya, kami memiliki program persalinan ERACS (Enhanced Recovery After Cesarean Surgery) yang ditangani oleh tim Dokter Spesialis Kebidanan (Sp.OG) dan Dokter Spesialis Anestesi (Sp.An) tersertifikasi untuk pemulihan ibu yang jauh lebih cepat dan nyaman.",
    category: "Dokter & Jadwal",
  },
];

export const STATISTICS_DATA: StatisticItem[] = [
  {
    id: "stat-1",
    number: "50+",
    label: "Dokter & Tenaga Medis",
    description: "Dokter spesialis & subspesialis teruji dari universitas terkemuka",
    iconName: "Users",
  },
  {
    id: "stat-2",
    number: "10+",
    label: "Layanan Unggulan",
    description: "Centers of Excellence berteknologi modern & bersertifikasi syariah",
    iconName: "Award",
  },
  {
    id: "stat-3",
    number: "24 Jam",
    label: "Layanan IGD & Ambulans",
    description: "Kesiapsiagaan penuh penanganan gawat darurat medis sepanjang waktu",
    iconName: "Clock",
  },
  {
    id: "stat-4",
    number: "1000+",
    label: "Pasien Dilayani",
    description: "Masyarakat mempercayakan ikhtiar kesembuhan keluarga setiap bulan",
    iconName: "HeartPulse",
  },
];

export const PROMO_DATA: PromoItem[] = [
  {
    id: "promo-1",
    title: "Pemulihan Optimal: Promo Spesial Fisioterapi RSI Muhammad Ali",
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
    slug: "layanan-endoskopi-bess-solusi-nyeri-saraf-terjepit",
    title: "Layanan Endoskopi BESS: Solusi Nyeri Saraf Terjepit Tanpa Operasi Besar",
    excerpt:
      "Kondisi saraf terjepit atau Hernia Nukleus Pulposus (HNP) seringkali menjadi hambatan aktivitas. Kini hadir teknik Biportal Endoscopic Spinal Surgery (BESS) dengan sayatan minimal kurang dari 1 cm.",
    category: "Kesehatan",
    date: "10 September 2026",
    readTime: "4 menit baca",
    image: "/images/article-endoskopi.jpg",
    author: "Tim Redaksi Medis RSI Muhammad Ali",
    doctorReviewer: "dr. Roslan Yusni Hasan, Sp.BS",
    tags: ["Bedah Saraf", "Tulang Belakang", "HNP", "Minimal Invasif"],
    content:
      "Biportal Endoscopic Spinal Surgery (BESS) adalah teknik bedah endoskopi modern yang memanfaatkan dua portal sayatan kecil (kurang dari 1 cm). Melalui portal pertama dimasukkan kamera endoskopi beresolusi tinggi, dan melalui portal kedua dimasukkan instrumen bedah mikro. Pasien merasakan nyeri pasca operasi yang sangat minim, risiko kerusakan jaringan otot sangat kecil, dan pasien umumnya dapat berjalan kembali dalam waktu 24 jam pasca tindakan.",
  },
  {
    id: "art-2",
    slug: "tips-menjaga-kesehatan-jantung-ajaran-nabi-medis-modern",
    title: "Tips Menjaga Kesehatan Jantung: Perpaduan Sunnah Nabi & Kedokteran Modern",
    excerpt:
      "Jantung adalah pusat kehidupan. Mengatur pola makan halal-thayyib, menghindari stres berlebih dengan dzikir, dan olahraga kardio rutin terbukti menjaga kelenturan pembuluh darah.",
    category: "Edukasi Islami",
    date: "06 September 2026",
    readTime: "5 menit baca",
    image: "/images/article-mata.png",
    author: "dr. Hendra Wijaya, Sp.JP, FIHA",
    doctorReviewer: "dr. Hendra Wijaya, Sp.JP, FIHA",
    tags: ["Kesehatan Jantung", "Gaya Hidup Sehat", "Edukasi Islami", "Kardiologi"],
    content:
      "Rasulullah SAW mengajarkan prinsip makan secukupnya: sepertiga untuk makanan, sepertiga untuk air, dan sepertiga untuk udara. Secara medis, pola makan yang tidak berlebihan mencegah resistensi insulin dan penumpukan plak aterosklerosis di dinding arteri koroner. Dikombinasikan dengan jalan kaki rutin 30 menit sehari dan menjaga ketenangan batin, kesehatan kardiovaskular dapat terjaga secara optimal hingga usia senja.",
  },
  {
    id: "art-3",
    slug: "kenali-tanda-mata-bermasalah-wajib-periksa",
    title: "Kenali Tanda-Tanda Mata Sedang Bermasalah dan Wajib Segera Diperiksakan",
    excerpt:
      "Penglihatan kabur perlahan, melihat lingkaran halo di sekitar lampu, atau bayangan melayang (floaters) bisa menjadi indikasi awal katarak, glaukoma, maupun gangguan retina.",
    category: "Kesehatan",
    date: "28 Agustus 2026",
    readTime: "5 menit baca",
    image: "/images/article-mata.png",
    author: "dr. Wita Jayanti, Sp.M",
    doctorReviewer: "dr. Wita Jayanti, Sp.M",
    tags: ["Kesehatan Mata", "Katarak", "Glaukoma", "Pemeriksaan Rutin"],
    content:
      "Mata adalah jendela dunia. Banyak penyakit mata yang berjalan tanpa gejala nyeri pada tahap awal, misalnya glaukoma yang sering disebut sebagai pencuri penglihatan diam-diam. Pemeriksaan mata berkala setiap 6 hingga 12 bulan sangat dianjurkan, terutama bagi individu di atas 40 tahun, penderita diabetes mellitus, atau mereka yang memiliki riwayat keluarga dengan gangguan retina.",
  },
  {
    id: "art-4",
    slug: "panduan-puasa-sehat-diabetes-asam-lambung",
    title: "Panduan Puasa Sehat bagi Penderita Diabetes & Gangguan Asam Lambung (GERD)",
    excerpt:
      "Berpuasa memberikan manfaat detoksifikasi alami bagi metabolisme tubuh, asalkan disertai pengaturan menu sahur yang tepat, hidrasi cukup, dan penyesuaian dosis obat sesuai petunjuk dokter.",
    category: "Tips Kesehatan",
    date: "20 Agustus 2026",
    readTime: "4 menit baca",
    image: "/images/promo-fisioterapi.jpeg",
    author: "dr. Ferika Widya Suryani, Sp.PD",
    doctorReviewer: "dr. Ferika Widya Suryani, Sp.PD",
    tags: ["Diabetes", "Asam Lambung", "Tips Puasa", "Penyakit Dalam"],
    content:
      "Penderita diabetes yang ingin berpuasa disarankan mengonsumsi karbohidrat kompleks saat sahur (seperti beras merah atau oat) dan menghindari makanan tinggi gula sederhana saat berbuka secara mendadak. Bagi penderita GERD, hindari langsung berbaring setelah sahur dan batasi makanan yang memicu gas seperti santan kental, gorengan berlebih, dan kafein.",
  },
  {
    id: "art-5",
    slug: "rsi-muhammad-ali-raih-akreditasi-paripurna-kars",
    title: "RSI Muhammad Ali Raih Akreditasi Paripurna KARS & Sertifikasi Syariah DSN-MUI",
    excerpt:
      "Pencapaian ini membuktikan dedikasi berkelanjutan rumah sakit dalam memberikan pelayanan kesehatan berstandar internasional yang selaras dengan etika medis Islami.",
    category: "Informasi Rumah Sakit",
    date: "14 Agustus 2026",
    readTime: "3 menit baca",
    image: "/images/service-operasi.png",
    author: "Humas RSI Muhammad Ali",
    doctorReviewer: "Direksi Rumah Sakit",
    tags: ["Akreditasi KARS", "Sertifikasi Syariah", "Mutu Rumah Sakit", "Berita"],
    content:
      "Komisi Akreditasi Rumah Sakit (KARS) resmi menganugerahkan predikat Tingkat Paripurna (Bintang Lima) kepada Rumah Sakit Islam Muhammad Ali. Penilaian meliputi keselamatan pasien, pencegahan infeksi, kualifikasi tenaga medis, dan manajemen fasilitas. Bersamaan dengan itu, Dewan Syariah Nasional MUI memperbarui sertifikasi kepatuhan syariah dalam seluruh lini pelayanan dan pengelolaan obat halal.",
  },
  {
    id: "art-6",
    slug: "pentingnya-skrining-tumbuh-kembang-anak-usia-emas",
    title: "Pentingnya Skrining Tumbuh Kembang Anak Sejak Usia Emas (0-5 Tahun)",
    excerpt:
      "Deteksi dini keterlambatan bicara (speech delay), gangguan motorik, dan stunting sejak dini memungkinkan intervensi medis yang jauh lebih efektif dan terarah.",
    category: "Tips Kesehatan",
    date: "02 Agustus 2026",
    readTime: "4 menit baca",
    image: "/images/service-rawat-jalan.png",
    author: "dr. Amanda Putri, Sp.A, M.Kes",
    doctorReviewer: "dr. Amanda Putri, Sp.A, M.Kes",
    tags: ["Kesehatan Anak", "Tumbuh Kembang", "Stunting", "Imunisasi"],
    content:
      "Periode 1.000 hari pertama kehidupan (sejak masa konsepsi hingga anak berusia dua tahun) merupakan fase krusial pembentukan otak dan daya tahan tubuh anak. Orang tua dianjurkan rutin menimbang berat badan, mengukur tinggi badan, dan memeriksakan perkembangan motorik serta sosial anak di klinik tumbuh kembang secara terjadwal.",
  },
];

export const TESTIMONIALS_DATA = [
  {
    id: "testi-1",
    name: "Ny. Hj. Erny Taher",
    role: "Pasien Operasi Katarak Phacoemulsification",
    text: "Pelayanan di RSI Muhammad Ali sungguh luar biasa. Mulai dari dokter mata, perawat, sampai petugas pendaftaran sangat ramah, sopan, dan santun. Operasi katarak saya berjalan cepat tanpa rasa sakit, dan kini penglihatan saya kembali jernih. Masya Allah!",
    image: "/images/testi-1.jpeg",
    stars: 5,
    verified: true,
  },
  {
    id: "testi-2",
    name: "Tn. H. Sharul Mubarak",
    role: "Pasien Penanganan Saraf Terjepit BESS",
    text: "Sudah berbulan-bulan menderita nyeri saraf pinggang yang menjalar ke kaki. Setelah tindakan BESS di RSI Muhammad Ali, hari kedua saya sudah bisa bangun dan berjalan tanpa rasa sakit. Terima kasih banyak tim dokter dan seluruh staf yang melayani dengan tulus dan penuh amanah.",
    image: "/images/testi-2.jpeg",
    stars: 5,
    verified: true,
  },
  {
    id: "testi-3",
    name: "Ny. Dina Hanum, M.Si",
    role: "Pasien Rawat Inap & Persalinan ERACS",
    text: "Kamar rawat inapnya sangat bersih, asri, dan nyaman serasa di hotel berbintang. Menu makanannya halal, bergizi, dan perawatnya sangat cepat tanggap. Persalinan ERACS berjalan lancar dan 6 jam kemudian saya sudah bisa bergerak mandiri.",
    image: "/images/testi-3.jpeg",
    stars: 5,
    verified: true,
  },
  {
    id: "testi-4",
    name: "Tn. Ahmad Fauzi",
    role: "Pasien Medical Check Up Eksekutif",
    text: "Alur Medical Check Up sangat rapi, one-stop service tanpa harus antre lama. Dokter pemeriksanya komunikatif dalam menjelaskan hasil dan memberikan rekomendasi pola hidup sehat. Rumah sakit yang sangat terpercaya untuk keluarga.",
    image: "/images/testi-2.jpeg",
    stars: 5,
    verified: true,
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
