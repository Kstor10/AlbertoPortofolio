import path from "node:path";
import process from "node:process";
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const sourceDir = process.argv[2];
const outputDir = process.argv[3];

if (!sourceDir || !outputDir) {
  console.error("Uso: node scripts/build-the-looper-shots.mjs <capturas> <salida>");
  process.exit(1);
}

await mkdir(outputDir, { recursive: true });

const canvas = { width: 1600, height: 1000 };
const colors = {
  ink: "#061914",
  panel: "#0b2a21",
  green: "#143c30",
  blue: "#78aef5",
  cream: "#f0f4ef",
  muted: "#a9bbb4",
};

const escapeXml = (value) => value.replace(/[<>&'\"]/g, (char) => ({
  "<": "&lt;",
  ">": "&gt;",
  "&": "&amp;",
  "'": "&apos;",
  '"': "&quot;",
})[char]);

function backdrop(title, kicker, detail) {
  return Buffer.from(`
    <svg width="${canvas.width}" height="${canvas.height}" viewBox="0 0 ${canvas.width} ${canvas.height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glow" cx="82%" cy="48%" r="72%">
          <stop offset="0" stop-color="#245948"/>
          <stop offset="0.55" stop-color="#0b2a21"/>
          <stop offset="1" stop-color="#061914"/>
        </radialGradient>
        <filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="8"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="table" tableValues="0 0.035"/></feComponentTransfer></filter>
      </defs>
      <rect width="1600" height="1000" fill="url(#glow)"/>
      <rect width="1600" height="1000" filter="url(#noise)" opacity="0.7"/>
      <path d="M0 840 C300 735 510 955 805 820 C1110 680 1330 760 1600 650 L1600 1000 L0 1000 Z" fill="#0d3127" opacity="0.72"/>
      <circle cx="1438" cy="135" r="6" fill="${colors.blue}"/>
      <text x="92" y="112" fill="${colors.blue}" font-family="Arial, sans-serif" font-size="25" font-weight="700" letter-spacing="5">${escapeXml(kicker.toUpperCase())}</text>
      <text x="92" y="210" fill="${colors.cream}" font-family="Arial, sans-serif" font-size="78" font-weight="800">${escapeXml(title)}</text>
      <text x="96" y="267" fill="${colors.muted}" font-family="Arial, sans-serif" font-size="28">${escapeXml(detail)}</text>
      <line x1="94" y1="316" x2="500" y2="316" stroke="#376052" stroke-width="2"/>
      <text x="95" y="873" fill="${colors.cream}" font-family="Arial, sans-serif" font-size="23" font-weight="700">THE LOOPER</text>
      <text x="95" y="912" fill="${colors.muted}" font-family="Arial, sans-serif" font-size="20">React Native · Expo · TypeScript</text>
    </svg>
  `);
}

async function phone(sourceName, width = 370, height = 800) {
  const bezel = 14;
  const radius = 48;
  const screenRadius = 36;
  const screenshot = await sharp(path.join(sourceDir, sourceName))
    .resize(width, height, { fit: "cover", position: "top" })
    .composite([{ input: Buffer.from(`<svg width="${width}" height="${height}"><rect width="${width}" height="${height}" rx="${screenRadius}" fill="white"/></svg>`), blend: "dest-in" }])
    .png()
    .toBuffer();

  const shell = await sharp({
    create: {
      width: width + bezel * 2,
      height: height + bezel * 2,
      channels: 4,
      background: { r: 4, g: 8, b: 7, alpha: 1 },
    },
  })
    .composite([
      { input: screenshot, left: bezel, top: bezel },
      { input: Buffer.from(`<svg width="${width + bezel * 2}" height="${height + bezel * 2}"><rect x="4" y="4" width="${width + bezel * 2 - 8}" height="${height + bezel * 2 - 8}" rx="${radius}" fill="none" stroke="#406459" stroke-width="3"/></svg>`), left: 0, top: 0 },
      { input: Buffer.from(`<svg width="${width + bezel * 2}" height="${height + bezel * 2}"><rect width="${width + bezel * 2}" height="${height + bezel * 2}" rx="${radius}" fill="white"/></svg>`), left: 0, top: 0, blend: "dest-in" },
    ])
    .png()
    .toBuffer();

  return { input: shell, width: width + bezel * 2, height: height + bezel * 2 };
}

async function renderSingle({ file, source, title, kicker, detail }) {
  const device = await phone(source);
  await sharp(backdrop(title, kicker, detail))
    .composite([
      { input: Buffer.from(`<svg width="460" height="900"><rect x="28" y="34" width="404" height="830" rx="64" fill="#000" opacity="0.32"/></svg>`), left: 1000, top: 52 },
      { input: device.input, left: 1030, top: 72 },
    ])
    .webp({ quality: 88, effort: 6 })
    .toFile(path.join(outputDir, file));
}

async function renderOverview() {
  const home = await phone("dark-home.png", 340, 736);
  const score = await phone("android-jugar.png", 330, 736);
  await sharp(backdrop("The Looper", "Producto móvil", "Antes, durante y después del juego"))
    .composite([
      { input: home.input, left: 760, top: 132 },
      { input: score.input, left: 1140, top: 88 },
    ])
    .webp({ quality: 88, effort: 6 })
    .toFile(path.join(outputDir, "the-looper-v2-01-overview.webp"));
}

await renderOverview();

const shots = [
  {
    file: "the-looper-v2-02-inicio.webp",
    source: "dark-home.png",
    title: "Inicio",
    kicker: "Salidas",
    detail: "Partidas abiertas, luz disponible y ronda activa",
  },
  {
    file: "the-looper-v2-03-jugar.webp",
    source: "android-jugar.png",
    title: "Jugar",
    kicker: "Scorecard",
    detail: "GPS, entrada táctil, dictado y conflictos de sincronización",
  },
  {
    file: "the-looper-v2-04-hoyo-19.webp",
    source: "dark-feed-1.png",
    title: "Hoyo 19",
    kicker: "Comunidad",
    detail: "Clasificación, publicaciones, reacciones y comentarios",
  },
  {
    file: "the-looper-v2-05-perfil.webp",
    source: "android-perfil.png",
    title: "Perfil",
    kicker: "Rendimiento",
    detail: "Hándicap, progreso, historial y ronda en curso",
  },
  {
    file: "the-looper-v2-06-amigos.webp",
    source: "dark-profile-friends.png",
    title: "Amigos",
    kicker: "Red del club",
    detail: "Contactos, solicitudes y búsqueda de jugadores",
  },
  {
    file: "the-looper-v2-07-resumen.webp",
    source: "dark-round-summary.png",
    title: "Resumen de ronda",
    kicker: "Resultados",
    detail: "Tarjeta firmada, estadísticas y distribución de golpes",
  },
  {
    file: "the-looper-v2-08-modo-claro.webp",
    source: "light-home.png",
    title: "Modo claro",
    kicker: "Apariencia",
    detail: "La misma jerarquía en una apariencia luminosa",
  },
];

for (const shot of shots) await renderSingle(shot);

console.log(`Generadas ${shots.length + 1} capturas en ${outputDir}`);
