import fs from 'fs';

async function main() {
  const res = await fetch('https://rsjakarta.co.id/');
  const html = await res.text();
  
  const imgRegex = /https:\/\/rsjakarta\.co\.id\/wp-content\/uploads\/[^\s"'()><\\]+/g;
  const matches = [...new Set(html.match(imgRegex) || [])];
  
  console.log(`Found ${matches.length} unique images:`);
  console.log(JSON.stringify(matches, null, 2));
  fs.writeFileSync('scripts/extracted_images.json', JSON.stringify(matches, null, 2));
}

main().catch(console.error);
