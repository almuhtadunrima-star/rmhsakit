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
    id: "rawat-jalan",
    name: "Rawat Jalan",
    icon: "/images/service-rawat-jalan.png",
    description: "Poliklinik dokter spesialis dan subspesialis lengkap dengan ruang tunggu nyaman.",
    longDescription:
      "Layanan Rawat Jalan RSI Muhammad Ali menyediakan lebih dari 25 poliklinik spesialis dengan sistem antrean online yang efisien. Pasien didampingi oleh perawat ramah dan dokter ahli terpercaya.",
    features: ["Pendaftaran Online Tanpa Antre", "25+ Poliklinik Multi-Spesialis", "Konsultasi Dokter Ahli Berpengalaman", "Apotek & Kasir Terintegrasi"]
  },
  {
    id: "rawat-inap",
    name: "Rawat Inap",
    icon: "/images/service-rawat-inap.png",
    description: "Kamar perawatan VVIP, VIP, dan Kelas 1-3 berstandar higienis tinggi.",
    longDescription:
      "Kenyamanan dan ketenangan proses pemulihan pasien adalah prioritas kami. Ruang rawat inap RSI Muhammad Ali didesain dengan fasilitas lengkap, menu nutrisi halal dan terpadu dari ahli gizi klinis, serta pantauan medis 24 jam.",
    features: ["Pilihan Kamar VVIP, VIP, Kelas 1, 2, 3", "Monitoring Perawat & Tim Medis 24/7", "Menu Nutrisi Pasien Terpadu Halal", "Fasilitas Pendamping Pasien Nyaman"]
  },
  {
    id: "medical-check-up",
    name: "Medical Check Up",
    icon: "/images/service-mcu.png",
    description: "Paket deteksi dini kesehatan untuk individu, pra-nikah, maupun korporat.",
    longDescription:
      "Layanan MCU terpadu dalam satu lantai khusus (One-Stop Service) untuk menjamin privasi dan kelancaran proses pemeriksaan kesehatan rutin Anda secara menyeluruh.",
    features: ["Ruang Khusus MCU Terpadu", "Hasil Pemeriksaan Cepat & Akurat", "Paket Silver, Gold, Platinum, Eksekutif", "Layanan On-Site untuk Perusahaan"]
  },
  {
    id: "hemodialisa",
    name: "Hemodialisa",
    icon: "/images/service-hemodialisa.png",
    description: "Unit cuci darah modern dengan mesin canggih dan filter higienis bersertifikasi.",
    longDescription:
      "Unit Hemodialisa RSI Muhammad Ali diawasi langsung oleh Dokter Spesialis Penyakit Dalam Konsultan Ginjal & Hipertensi (Sp.PD-KGH) serta perawat hemodialisa bersertifikat resmi.",
    features: ["Mesin Dialisis Generasi Terbaru", "Sistem Water Treatment Standar Internasional", "Single-Use Dialyzer Tersedia", "Ruang Tindakan Ber-AC & Hiburan TV"]
  },
  {
    id: "laboratorium",
    name: "Laboratorium 24 Jam",
    icon: "/images/service-laboratorium.png",
    description: "Uji patologi klinik, mikrobiologi, dan hematologi otomatis dengan akurasi tinggi.",
    longDescription:
      "Laboratorium RSI Muhammad Ali beroperasi 24 jam nonstop untuk melayani kebutuhan tes darah, urine, kimia klinik, imunoserologi, hingga penanda tumor secara presisi.",
    features: ["Buka 24 Jam Nonstop", "Peralatan Automatisasi Berkalibrasi", "Hasil Lab Online via Portal Pasien", "Layanan Home Blood Sampling"]
  },
  {
    id: "kamar-operasi",
    name: "Kamar Operasi",
    icon: "/images/service-operasi.png",
    description: "Modular Operating Theatre dengan sistem filtrasi HEPA filter steril maksimal.",
    longDescription:
      "Kamar Operasi RSI Muhammad Ali dilengkapi sistem tata udara Laminar Air Flow dan tekanan positif untuk meminimalisir risiko infeksi luka operasi (ILO) pada setiap tindakan bedah mayor maupun minor.",
    features: ["Sistem Tata Udara HEPA Filter", "Peralatan Laparoskopi & Endoskopi Canggih", "Tim Anestesi & Bedah Siaga 24 Jam", "Ruang Pulih Sadar (PACU) Terpantau"]
  },
  {
    id: "fisioterapi",
    name: "Fisioterapi",
    icon: "/images/service-fisioterapi.png",
    description: "Rehabilitasi medik pasca operasi, stroke, cedera sendi, dan nyeri otot kronis.",
    longDescription:
      "Didukung fisioterapis berlisensi dan alat terapi modalitas (ultrasound therapy, TENS, traksi komputer, infra-red, gym rehabilitasi) untuk memulihkan fungsi gerak tubuh Anda secara optimal.",
    features: ["Fisioterapi Neurologi & Stroke", "Fisioterapi Orthopedi & Cedera Sendi", "Fisioterapi Geriatri / Lansia", "Program Latihan Home Care Fisioterapi"]
  },
  {
    id: "radiologi",
    name: "Radiologi & Imaging",
    icon: "/images/service-radiologi.png",
    description: "MRI 1.5 Tesla, CT-Scan 128 Slice, USG 4D, dan Rontgen Digital resolusi tinggi.",
    longDescription:
      "Pusat pencitraan radiologi canggih membantu dokter menegakkan diagnosis secara tepat dan cepat, dibaca langsung oleh Dokter Spesialis Radiologi terpercaya.",
    features: ["MRI 1.5 Tesla Tanpa Radiasi", "CT-Scan Multislice Kontras & Non-Kontras", "Digital Radiography (X-Ray)", "USG Doppler & USG Kandungan 4D"]
  },
  {
    id: "farmasi",
    name: "Farmasi 24 Jam",
    icon: "/images/service-farmasi.png",
    description: "Apotek rumah sakit dengan ketersediaan obat lengkap dan layanan antar resep.",
    longDescription:
      "Instalasi Farmasi RSI Muhammad Ali menjamin keaslian obat, penyimpanan berstandar suhu ketat, serta konseling obat oleh Apoteker profesional untuk keselamatan pengobatan pasien.",
    features: ["Buka 24 Jam untuk Pasien UGD & Umum", "Sistem Antrean Resep Digital", "Layanan Konseling Edukasi Obat", "Jasa Antar Obat ke Rumah Pasien"]
  },
  {
    id: "sports-medicine",
    name: "Sports Medicine",
    icon: "/images/service-sports.png",
    description: "Penanganan cedera olahraga, kebugaran atlet, dan program return-to-sport.",
    longDescription:
      "Klinik Kesehatan Olahraga memadukan keahlian dokter spesialis kedokteran olahraga, orthopedi konsultan sports, dan fisioterapis atlet untuk mempercepat proses kembali aktif berolahraga.",
    features: ["Asesmen Kebugaran Fisik", "Penanganan Cedera ACL & Meniskus", "Program Return to Sport Terarah", "Konsultasi Nutrisi & Pola Latihan"]
  },
  {
    id: "ugd",
    name: "UGD 24 Jam",
    icon: "/images/service-ugd.png",
    description: "Unit Gawat Darurat siap siaga 24 jam dengan ambulans darurat respon cepat.",
    longDescription:
      "UGD RSI Muhammad Ali dilengkapi fasilitas triage, ruang resusitasi darurat, ruang tindakan steril, serta tim dokter jaga bersertifikat ACLS/ATLS yang tanggap mengatasi kondisi darurat medis.",
    features: ["Hotline Darurat Siaga (021) 573 2241", "Layanan Ambulans Jemput Pasien", "Ruang Resusitasi Kritis Lengkap", "Penanganan Cepat Tanpa Menunggu Admin"]
  },
  {
    id: "jbhc",
    name: "JBHC Akupuntur & Herbal",
    icon: "/images/service-jbhc.png",
    description: "Layanan akupuntur medis dan terapi holistik komplementer berstandar klinis.",
    longDescription:
      "Jakarta Bio-Health Clinic (JBHC) RSI Muhammad Ali menggabungkan akupuntur medik barat dan terapi holistik untuk membantu pemulihan nyeri, relaksasi saraf, insomnia, dan daya tahan tubuh.",
    features: ["Akupuntur Medik oleh Dokter Ahli", "Terapi Nyeri Kronis & Migrain", "Pendamping Pemulihan Pasca Stroke", "Konsultasi Kesehatan Holistik"]
  }
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
    category: "Rehabilitasi"
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
    category: "Pemeriksaan"
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
    category: "Tindakan"
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
    category: "MCU"
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
    category: "Pemeriksaan"
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
    category: "Pemeriksaan"
  }
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
      "Biportal Endoscopic Spinal Surgery (BESS) adalah teknik bedah endoskopi modern yang memanfaatkan dua portal sayatan kecil (kurang dari 1 cm). Melalui portal pertama dimasukkan kamera endoskopi beresolusi tinggi, dan melalui portal kedua dimasukkan instrumen bedah mikro. Pasien merasakan nyeri pasca operasi yang sangat minim, risiko kerusakan jaringan otot sangat kecil, dan pasien umumnya dapat berjalan kembali dalam 24 jam."
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
      "Kesehatan gigi dan mulut memiliki hubungan erat dengan kesehatan tubuh secara menyeluruh. Menyikat gigi terlalu keras dapat mengikis enamel dan menyebabkan resesi gusi. Selain itu, kebiasaan membuka kemasan plastik dengan gigi atau sering mengonsumsi minuman berkarbonasi manis meningkatkan risiko karies dan infeksi pulpa."
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
      "Mata adalah jendela dunia. Banyak penyakit mata yang berjalan tanpa gejala nyeri pada tahap awal, misalnya glaukoma (pencuri penglihatan diam-diam). Pemeriksaan mata rutin tahunan sangat dianjurkan terutama bagi mereka yang berusia di atas 40 tahun, penderita diabetes mellitus, atau pengguna kacamata dengan minus tinggi."
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
      "Arthroscopy merupakan tindakan bedah minimal invasif di mana kamera kecil dimasukkan ke dalam rongga sendi. Prosedur ini memungkinkan dokter melihat struktur dalam sendi secara visual langsung di layar monitor dan melakukan perbaikan jaringan robek dengan akurasi millimeter tanpa perlu membuka sendi lutut lebar-lebar."
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: "testi-1",
    name: "Ny. Erny Taher",
    role: "Pasien Operasi Katarak Phacoemulsification",
    text: "Pelayanan di RSI Muhammad Ali sungguh luar biasa. Mulai dari dokter mata, perawat, sampai petugas pendaftaran sangat ramah, sopan, dan sabar. Operasi katarak saya berjalan tanpa rasa sakit, penglihatan saya kini kembali jernih seperti muda dulu.",
    image: "/images/testi-1.jpeg",
    stars: 5
  },
  {
    id: "testi-2",
    name: "Tn. Sharul Mubarak",
    role: "Pasien Penanganan Saraf Terjepit BESS",
    text: "Sudah berbulan-bulan menderita nyeri saraf pinggang menjalar ke kaki. Setelah tindakan BESS di RSI Muhammad Ali, hari kedua saya sudah bisa bangun dan berjalan tanpa nyeri. Terima kasih banyak tim dokter dan seluruh staf yang melayani dengan tulus!",
    image: "/images/testi-2.jpeg",
    stars: 5
  },
  {
    id: "testi-3",
    name: "Ny. Dina Hanum",
    role: "Pasien Rawat Inap & MCU Eksekutif",
    text: "Kamar rawat inapnya sangat bersih, asri, dan nyaman serasa di hotel. Makanan gizinya halal, higienis, dan pelayanan perawat 24 jam sangat cepat tanggap. Sangat merekomendasikan RSI Muhammad Ali untuk keluarga.",
    image: "/images/testi-3.jpeg",
    stars: 5
  }
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
  "Sequis Life"
];
