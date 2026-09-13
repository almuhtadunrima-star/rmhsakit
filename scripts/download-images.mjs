import fs from 'fs';
import path from 'path';

const targetDir = path.resolve('public/images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const imagesToDownload = [
  { name: 'service-rawat-jalan.png', url: 'https://rsjakarta.co.id/wp-content/uploads/2025/09/34.png' },
  { name: 'service-rawat-inap.png', url: 'https://rsjakarta.co.id/wp-content/uploads/2025/09/38.png' },
  { name: 'service-mcu.png', url: 'https://rsjakarta.co.id/wp-content/uploads/2025/09/33.png' },
  { name: 'service-hemodialisa.png', url: 'https://rsjakarta.co.id/wp-content/uploads/2025/09/35.png' },
  { name: 'service-laboratorium.png', url: 'https://rsjakarta.co.id/wp-content/uploads/2025/09/36.png' },
  { name: 'service-operasi.png', url: 'https://rsjakarta.co.id/wp-content/uploads/2025/09/31.png' },
  { name: 'service-fisioterapi.png', url: 'https://rsjakarta.co.id/wp-content/uploads/2025/09/39.png' },
  { name: 'service-radiologi.png', url: 'https://rsjakarta.co.id/wp-content/uploads/2025/09/32.png' },
  { name: 'service-farmasi.png', url: 'https://rsjakarta.co.id/wp-content/uploads/2025/09/40.png' },
  { name: 'service-sports.png', url: 'https://rsjakarta.co.id/wp-content/uploads/2025/09/37.png' },
  { name: 'service-ugd.png', url: 'https://rsjakarta.co.id/wp-content/uploads/2025/09/30.png' },
  { name: 'service-jbhc.png', url: 'https://rsjakarta.co.id/wp-content/uploads/2025/09/41.png' },
  
  { name: 'banner-promo-1.webp', url: 'https://rsjakarta.co.id/wp-content/uploads/2026/02/PROMO-WEB.webp' },
  { name: 'banner-sunday-clinic.jpg', url: 'https://rsjakarta.co.id/wp-content/uploads/2026/04/Sunday-Clinic-Website.jpg.jpeg' },
  { name: 'banner-slide-1.webp', url: 'https://rsjakarta.co.id/wp-content/uploads/2025/09/1-3.webp' },
  { name: 'banner-slide-2.webp', url: 'https://rsjakarta.co.id/wp-content/uploads/2025/09/2-2.webp' },
  
  { name: 'promo-fisioterapi.jpeg', url: 'https://rsjakarta.co.id/wp-content/uploads/2026/06/Promo-Fisioterapi-2026.jpeg' },
  { name: 'promo-stem-cell.jpeg', url: 'https://rsjakarta.co.id/wp-content/uploads/2026/08/Promo-Stem-Cell.jpeg' },
  { name: 'promo-lansia.jpeg', url: 'https://rsjakarta.co.id/wp-content/uploads/2026/07/Promo-Lansia.jpeg' },
  { name: 'promo-kartini.jpeg', url: 'https://rsjakarta.co.id/wp-content/uploads/2026/01/PROMO-KARTINI.jpg.jpeg' },

  { name: 'article-endoskopi.jpg', url: 'https://rsjakarta.co.id/wp-content/uploads/2026/04/Endoskopi-BESS-RS-Jakarta-1-768x367.jpg' },
  { name: 'article-gigi.png', url: 'https://rsjakarta.co.id/wp-content/uploads/2022/09/artikel-web-768x490.png' },
  { name: 'article-mata.png', url: 'https://rsjakarta.co.id/wp-content/uploads/2022/03/rawat-inap-web-1-768x490.png' },
  { name: 'article-lutut.png', url: 'https://rsjakarta.co.id/wp-content/uploads/2023/04/rawat-inap-web-2-768x490.png' },

  { name: 'testi-1.jpeg', url: 'https://rsjakarta.co.id/wp-content/uploads/2026/07/Thumbnail-YT-Ny.Erny-Taher.jpg.jpeg' },
  { name: 'testi-2.jpeg', url: 'https://rsjakarta.co.id/wp-content/uploads/2026/07/Thumbnail-YT-Tn.-Sharul-Mubarak.jpg.jpeg' },
  { name: 'testi-3.jpeg', url: 'https://rsjakarta.co.id/wp-content/uploads/2026/07/Thumbnail-YT-Ny-Dina-Hanum.jpg.jpeg' }
];

async function downloadFile(item) {
  const dest = path.join(targetDir, item.name);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 500) {
    console.log(`[SKIPPED] ${item.name} already exists`);
    return true;
  }
  
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    const res = await fetch(item.url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    clearTimeout(timeout);
    
    if (!res.ok) {
      console.warn(`[FAIL] ${item.name}: HTTP ${res.status}`);
      return false;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    console.log(`[DOWNLOADED] ${item.name} (${buf.length} bytes)`);
    return true;
  } catch (err) {
    console.warn(`[ERROR] ${item.name}: ${err.message}`);
    return false;
  }
}

async function run() {
  console.log(`Downloading ${imagesToDownload.length} assets...`);
  for (const item of imagesToDownload) {
    await downloadFile(item);
  }
  console.log('Finished downloading assets.');
}

run();
