import fs from 'fs';
import path from 'path';

const doctorsDir = path.resolve('public/images/doctors');
if (!fs.existsSync(doctorsDir)) {
  fs.mkdirSync(doctorsDir, { recursive: true });
}

// 12 curated professional doctor portraits
const doctorImages = [
  { id: 'doc-1', url: 'https://images.unsplash.com/photo-1594824813589-d10207fa65e2?auto=format&fit=crop&w=600&q=80' }, // Female doctor (dr. Wita)
  { id: 'doc-2', url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80' }, // Male doctor (dr. Bondan)
  { id: 'doc-3', url: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80' }, // Male surgeon (dr. Fachrisal)
  { id: 'doc-4', url: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80' }, // Male neurosurgeon (dr. Roslan)
  { id: 'doc-5', url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80' }, // Female internist (dr. Ferika)
  { id: 'doc-6', url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80' }, // Female dentist (drg. Dian)
  { id: 'doc-7', url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80' }, // Male urologist (dr. Bambang)
  { id: 'doc-8', url: 'https://images.unsplash.com/photo-1594824813606-538a0f9a24c7?auto=format&fit=crop&w=600&q=80' }, // Female ophthalmologist (dr. Fatma)
  { id: 'doc-9', url: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80' }, // Female pediatrician (dr. Amanda)
  { id: 'doc-10', url: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=600&q=80' }, // Male cardiologist (dr. Hendra)
  { id: 'doc-11', url: 'https://images.unsplash.com/photo-1676288176848-18e44e21a711?auto=format&fit=crop&w=600&q=80' }, // Female obgyn (dr. Nurul)
  { id: 'doc-12', url: 'https://images.unsplash.com/photo-1622902046487-d86a635848bb?auto=format&fit=crop&w=600&q=80' }  // Male radiologist (dr. Rudi)
];

async function downloadDoctorImage(item) {
  const dest = path.join(doctorsDir, `${item.id}.jpg`);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    console.log(`[EXISTS] ${item.id}.jpg`);
    return;
  }
  try {
    const res = await fetch(item.url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    console.log(`[DOWNLOADED] ${item.id}.jpg (${buf.length} bytes)`);
  } catch (err) {
    console.error(`[ERROR] ${item.id}:`, err.message);
  }
}

async function main() {
  for (const img of doctorImages) {
    await downloadDoctorImage(img);
  }
  console.log('All doctor images processed.');
}

main();
