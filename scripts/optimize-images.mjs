/**
 * Resize and re-encode images under public/images for faster cold transforms.
 * Run: node scripts/optimize-images.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public", "images");
const MAX_EDGE = 1920;
const JPEG_QUALITY = 78;
const PNG_QUALITY = 80;
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimize(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const before = (await fs.stat(filePath)).size;
  const image = sharp(filePath, { failOn: "none" });
  const meta = await image.metadata();
  const needsResize =
    (meta.width ?? 0) > MAX_EDGE || (meta.height ?? 0) > MAX_EDGE;

  let pipeline = sharp(filePath, { failOn: "none" }).rotate();

  if (needsResize) {
    pipeline = pipeline.resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  if (ext === ".png") {
    pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 });
  } else if (ext === ".webp") {
    pipeline = pipeline.webp({ quality: JPEG_QUALITY });
  } else {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  }

  const buffer = await pipeline.toBuffer();
  const afterMeta = await sharp(buffer).metadata();
  await fs.writeFile(filePath, buffer);
  const after = buffer.length;

  console.log(
    `${path.relative(process.cwd(), filePath)}: ${before} -> ${after} bytes (${afterMeta.width}x${afterMeta.height})`,
  );
}

const files = await walk(ROOT);
console.log(`Optimizing ${files.length} images under public/images...`);
for (const file of files) {
  await optimize(file);
}
console.log("Done.");
