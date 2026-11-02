import { readdir, readFile, stat } from "node:fs/promises";
import { resolve, relative, dirname } from "node:path";

const root = resolve("dist");
const files = (await readdir(root, { recursive: true })).filter((file) => file.endsWith(".html"));
const failures = [];
const external = new Set();
const fail = (file, message) => failures.push(`${file}: ${message}`);
const attr = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
let images = 0;
let links = 0;

for (const file of files) {
  const html = await readFile(resolve(root, file), "utf8");
  if ((html.match(/<h1\b/g) ?? []).length !== 1) fail(file, "Expected one h1.");
  if (!/<html[^>]+lang="(?:es|en)"/.test(html)) fail(file, "Missing page language.");
  if (!/<meta name="description" content="[^"]+"/.test(html)) fail(file, "Missing description.");
  if (/href="tel:/i.test(html) || /\+34[\s-]*[6789](?:[\s-]*\d){8}/.test(html)) fail(file, "Public phone number detected.");
  if (/<script\b[^>]*src=/.test(html)) fail(file, "Unexpected browser JavaScript.");
  for (const image of html.match(/<img\b[^>]*>/g) ?? []) {
    images++;
    if (!attr(image, "alt")) fail(file, "Missing meaningful image alt.");
    if (!(Number(attr(image, "width")) > 0 && Number(attr(image, "height")) > 0)) fail(file, "Missing image dimensions.");
  }
  for (const tag of html.match(/<(?:a|img|link)\b[^>]*>/g) ?? []) {
    const url = attr(tag, "href") ?? attr(tag, "src");
    if (!url || /^(mailto:|data:)/.test(url)) continue;
    links++;
    if (/^https?:/.test(url)) { external.add(url); continue; }
    const [pathPart, hashPart] = url.split("#");
    const pathname = decodeURIComponent(pathPart.split("?")[0]);
    let target = pathname.startsWith("/") ? resolve(root, `.${pathname}`) : resolve(dirname(resolve(root, file)), pathname);
    const inside = relative(root, target);
    if (inside.startsWith("..")) { fail(file, `Path outside dist: ${url}`); continue; }
    try {
      if ((await stat(target)).isDirectory()) target = resolve(target, "index.html");
      await stat(target);
      if (hashPart && target.endsWith(".html")) {
        const targetHtml = await readFile(target, "utf8");
        if (!targetHtml.includes(`id="${hashPart}"`)) fail(file, `Missing anchor: ${url}`);
      }
    } catch { fail(file, `Missing local destination: ${url}`); }
  }
}
for (const locale of ["es", "en"]) {
  const name = `cv-luis-alberto-davalos-${locale}.pdf`;
  try {
    const pdf = await readFile(resolve(root, name));
    if (pdf.length < 5000 || pdf.subarray(0, 5).toString() !== "%PDF-" || !pdf.subarray(-32).toString().includes("%%EOF")) {
      fail(name, "Incomplete or invalid PDF.");
    }
  } catch { fail(name, "Public CV PDF is missing."); }
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`${files.length} pages, ${images} image uses and ${links} links/assets checked. No local errors.`);
  console.log(`External destinations (not automatically crawled): ${[...external].join(", ")}`);
}
