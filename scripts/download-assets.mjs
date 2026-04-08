#!/usr/bin/env node
// Downloads all assets listed in assets-manifest.json into public/
import { readFile, mkdir, writeFile, stat } from "node:fs/promises";
import { dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const MANIFEST = join(ROOT, "scripts/assets-manifest.json");
const PUBLIC = join(ROOT, "public");

async function exists(p) { try { await stat(p); return true; } catch { return false; } }

async function download(urlPath, outPath) {
  if (await exists(outPath)) return { skipped: true, outPath };
  const url = "https://" + urlPath;
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, buf);
  return { skipped: false, outPath, bytes: buf.length };
}

function destFor(category, urlPath) {
  const file = basename(urlPath);
  // Flatten into category dirs
  if (urlPath.includes("i.ytimg.com")) {
    // Preserve video id as filename
    const parts = urlPath.split("/");
    const videoId = parts[parts.length - 2];
    return join(PUBLIC, "images", `yt-${videoId}.webp`);
  }
  return join(PUBLIC, category, file);
}

async function batch(tasks, size = 4) {
  const results = [];
  for (let i = 0; i < tasks.length; i += size) {
    const chunk = tasks.slice(i, i + size);
    const out = await Promise.allSettled(chunk.map((t) => t()));
    results.push(...out);
    process.stdout.write(`  ${Math.min(i + size, tasks.length)}/${tasks.length}\n`);
  }
  return results;
}

const manifest = JSON.parse(await readFile(MANIFEST, "utf8"));

console.log(`Downloading ${manifest.images.length} images...`);
await batch(manifest.images.map((p) => () => download(p, destFor("images", p))));

console.log(`Downloading ${manifest.videos.length} videos...`);
await batch(manifest.videos.map((p) => () => download(p, destFor("videos", p))));

if (manifest.videoPosters) {
  console.log(`Downloading ${manifest.videoPosters.length} video posters...`);
  await batch(manifest.videoPosters.map((p) => () => download(p, destFor("images", p))));
}

console.log(`Downloading ${manifest.favicons.length} favicons...`);
await batch(manifest.favicons.map((p) => () => download(p, destFor("seo", p))));

console.log("Done.");
