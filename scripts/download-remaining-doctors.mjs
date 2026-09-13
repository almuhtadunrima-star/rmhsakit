import fs from 'fs';
import path from 'path';

const doctorsDir = path.resolve('public/images/doctors');

const remainingImages = [
  { id: 'doc-1', url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80' },
  { id: 'doc-8', url: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=600&q=80' },
  { id: 'doc-11', url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80' },
  { id: 'doc-12', url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80' }
];

async function main() {
  for (const img of remainingImages) {
    const dest = path.join(doctorsDir, `${img.id}.jpg`);
    try {
      const res = await fetch(img.url);
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(dest, buf);
        console.log(`[DOWNLOADED] ${img.id}.jpg (${buf.length} bytes)`);
      } else {
        console.log(`[FAIL] ${img.id}: ${res.status}`);
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}

main();
