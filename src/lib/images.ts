import { resolve } from "node:path";
import sharp from "sharp";

const metadata = new Map<string, Promise<{ width: number; height: number }>>();

// Runs only while building the static HTML, never in a visitor's browser.
export function imageDimensions(src: string) {
  if (!src.startsWith("/images/projects/") || src.includes("..")) {
    throw new Error(`Invalid project image path: ${src}`);
  }
  if (!metadata.has(src)) {
    metadata.set(src, sharp(resolve("public", src.slice(1))).metadata().then((image) => {
      if (!image.width || !image.height) throw new Error(`Unreadable image: ${src}`);
      return { width: image.width, height: image.height };
    }));
  }
  return metadata.get(src)!;
}
