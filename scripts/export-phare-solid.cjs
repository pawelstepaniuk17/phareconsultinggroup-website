const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const publicDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/phareconsultinggroup-website/public";
const exportedDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/exported-logos";

const cx = 512;
const cy = 512;

// 6 radiating rays (angles: -90°, -30°, 30°, 90°, 150°, 210°)
const beams = Array.from({ length: 6 }).map((_, i) => {
  const angle = (Math.PI / 3) * i - Math.PI / 2;
  const inner = 240;
  const outer = 440;
  return {
    x1: cx + Math.cos(angle) * inner,
    y1: cy + Math.sin(angle) * inner,
    x2: cx + Math.cos(angle) * outer,
    y2: cy + Math.sin(angle) * outer,
    color: i % 2 === 0 ? "#1B6C70" : "#F06A58", // Signature Teal & Warm Coral
  };
});

// Solid, 100% Opaque Architectural Charcoal Ink (#1E293B / #111827)
const phareSvgSolid = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024" fill="none">
  <!-- Outer Concentric Ring — Solid Opaque Architectural Slate/Black -->
  <circle cx="${cx}" cy="${cy}" r="320" stroke="#1E293B" stroke-width="44" />
  
  <!-- Inner Concentric Ring — Solid Signature Teal -->
  <circle cx="${cx}" cy="${cy}" r="200" stroke="#1B6C70" stroke-width="44" />

  <!-- 6 Radiating Ray Traces — Solid Opaque Architectural Slate/Black -->
  ${beams.map((b) => `
    <line x1="${b.x1.toFixed(2)}" y1="${b.y1.toFixed(2)}" x2="${b.x2.toFixed(2)}" y2="${b.y2.toFixed(2)}" stroke="#1E293B" stroke-width="44" stroke-linecap="round" />
    <circle cx="${b.x2.toFixed(2)}" cy="${b.y2.toFixed(2)}" r="56" fill="${b.color}" />
  `).join("")}

  <!-- Central Beacon Core Node (The Lighthouse Lamp) -->
  <circle cx="${cx}" cy="${cy}" r="96" fill="#1B6C70" />
  <circle cx="${cx}" cy="${cy}" r="40" fill="#35ABA7" />
</svg>`;

async function exportPhareSolid() {
  fs.mkdirSync(exportedDir, { recursive: true });

  const buf = Buffer.from(phareSvgSolid);

  // 1. Export 2K Master PNG (2048x2048 Transparent)
  await sharp(buf)
    .resize(2048, 2048)
    .png({ compressionLevel: 9 })
    .toFile(path.join(exportedDir, "phare-consulting-group-logo-2k.png"));

  await sharp(buf)
    .resize(2048, 2048)
    .png({ compressionLevel: 9 })
    .toFile("/Users/pawelstepaniuk/.gemini/antigravity/brain/0821aad7-6ecb-4579-b666-7dcb6320c5fb/phare-logo-2k.png");

  // 2. Export to Public
  fs.writeFileSync(path.join(publicDir, "logo.svg"), phareSvgSolid);
  fs.writeFileSync(path.join(publicDir, "favicon.svg"), phareSvgSolid);

  await sharp(buf).resize(512, 512).png().toFile(path.join(publicDir, "favicon.png"));
  await sharp(buf).resize(2048, 2048).png().toFile(path.join(publicDir, "phare-logo-2k.png"));

  console.log("Phare Consulting Group solid 2K logo exported successfully!");
}

exportPhareSolid().catch(console.error);
