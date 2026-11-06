import path from "node:path";
import sharp from "sharp";

const source = path.resolve("public/images/projects/focusflow/focusflow-04-movil-claro.webp");
const output = path.resolve("public/images/projects/focusflow/focusflow-04-movil-claro-framed.webp");

const width = 1600;
const height = 1000;

const background = Buffer.from(`
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="surface" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0b1e30"/>
        <stop offset="1" stop-color="#12382d"/>
      </linearGradient>
      <radialGradient id="light" cx="77%" cy="38%" r="62%">
        <stop offset="0" stop-color="#2a624d" stop-opacity="0.62"/>
        <stop offset="1" stop-color="#0b1e30" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1600" height="1000" fill="url(#surface)"/>
    <rect width="1600" height="1000" fill="url(#light)"/>
    <path d="M0 820 C310 720 510 940 790 835 C1080 724 1300 746 1600 660 L1600 1000 L0 1000 Z" fill="#0d2d25" opacity="0.78"/>
    <text x="96" y="202" fill="#f3f6f2" font-family="Arial, sans-serif" font-size="78" font-weight="800">FocusFlow móvil</text>
    <text x="100" y="266" fill="#b7c8c1" font-family="Arial, sans-serif" font-size="29">Tema claro · sesión y prioridades</text>
    <line x1="100" y1="318" x2="560" y2="318" stroke="#4e7769" stroke-width="2"/>
    <text x="100" y="866" fill="#f3f6f2" font-family="Arial, sans-serif" font-size="24" font-weight="700">FOCUSFLOW</text>
    <text x="100" y="907" fill="#b7c8c1" font-family="Arial, sans-serif" font-size="21">Extensión Chrome · experiencia web responsive</text>
  </svg>
`);

async function phone(cropTop) {
  const screenWidth = 342;
  const screenHeight = 760;
  const bezel = 14;
  const radius = 48;

  const screenshot = await sharp(source)
    .extract({ left: 0, top: cropTop, width: 390, height: 868 })
    .resize(screenWidth, screenHeight, { fit: "fill" })
    .composite([
      {
        input: Buffer.from(`<svg width="${screenWidth}" height="${screenHeight}"><rect width="${screenWidth}" height="${screenHeight}" rx="34" fill="white"/></svg>`),
        blend: "dest-in",
      },
    ])
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: screenWidth + bezel * 2,
      height: screenHeight + bezel * 2,
      channels: 4,
      background: { r: 4, g: 8, b: 7, alpha: 1 },
    },
  })
    .composite([
      { input: screenshot, left: bezel, top: bezel },
      {
        input: Buffer.from(`<svg width="${screenWidth + bezel * 2}" height="${screenHeight + bezel * 2}"><rect x="4" y="4" width="${screenWidth + bezel * 2 - 8}" height="${screenHeight + bezel * 2 - 8}" rx="${radius}" fill="none" stroke="#4c7064" stroke-width="3"/></svg>`),
      },
      {
        input: Buffer.from(`<svg width="${screenWidth + bezel * 2}" height="${screenHeight + bezel * 2}"><rect width="${screenWidth + bezel * 2}" height="${screenHeight + bezel * 2}" rx="${radius}" fill="white"/></svg>`),
        blend: "dest-in",
      },
    ])
    .png()
    .toBuffer();
}

const session = await phone(0);
const priorities = await phone(1110);

await sharp(background)
  .composite([
    { input: session, left: 770, top: 116 },
    { input: priorities, left: 1160, top: 76 },
  ])
  .webp({ quality: 90, effort: 6 })
  .toFile(output);

console.log(output);
