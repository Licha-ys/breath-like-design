import { mkdir, writeFile } from "node:fs/promises";
import { createWriteStream } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const assetDir = join(root, "public", "products");
const sourceFile = join(root, "src", "data", "imageSources.js");

const works = [
  {
    id: "wall-cd-player",
    title: "Wall mounted CD Player",
    file: "wall-cd-player.png",
    sourcePage: "https://naotofukasawa.com/projects/540/",
    fallbackPages: ["https://www.moma.org/collection/works/94351"],
    note: "Image source: Naoto Fukasawa Design / MUJI project page"
  },
  {
    id: "humidifier",
    title: "Humidifier",
    file: "humidifier.png",
    sourcePage: "https://naotofukasawa.com/projects/365/",
    fallbackPages: ["https://www.moma.org/collection/works/105070"],
    note: "Image source: Naoto Fukasawa Design / ±0 project page"
  },
  {
    id: "infobar",
    title: "INFOBAR",
    file: "infobar.png",
    sourcePage: "https://naotofukasawa.com/projects/392/",
    fallbackPages: ["https://www.mobilephonemuseum.com/phone-detail/kddi-infobar"],
    note: "Image source: Naoto Fukasawa Design / au KDDI project page"
  },
  {
    id: "hiroshima-chair",
    title: "Hiroshima Arm Chair",
    file: "hiroshima-chair.png",
    sourcePage: "https://naotofukasawa.com/projects/487/",
    fallbackPages: ["https://www.maruni.com/en/product/hr_armchair_wooden_seat/"],
    note: "Image source: Naoto Fukasawa Design / maruni project page"
  },
  {
    id: "pao-lamp",
    title: "Pao Glass Table Lamp",
    file: "pao-lamp.png",
    sourcePage: "https://naotofukasawa.com/projects/3645/",
    fallbackPages: ["https://www.hay.com/hay/lighting/table-lamp/pao-glass-table-lamp"],
    note: "Image source: Naoto Fukasawa Design / HAY project page"
  }
];

const headers = {
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125 Safari/537.36",
  accept: "text/html,image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
};

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#039;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function getAttr(tag, attr) {
  const match = tag.match(new RegExp(`${attr}\\s*=\\s*["']([^"']+)["']`, "i"));
  return match ? decodeHtml(match[1]) : "";
}

function srcsetToUrls(srcset) {
  return srcset
    .split(",")
    .map((part) => part.trim().split(/\s+/)[0])
    .filter(Boolean);
}

function normalizeUrl(candidate, pageUrl) {
  if (!candidate || candidate.startsWith("data:") || candidate.startsWith("blob:")) return "";
  try {
    return new URL(decodeHtml(candidate), pageUrl).href;
  } catch {
    return "";
  }
}

function extractCandidates(html, pageUrl) {
  const urls = [];
  const push = (value) => {
    const normalized = normalizeUrl(value, pageUrl);
    if (normalized) urls.push(normalized);
  };

  for (const pattern of [
    /<meta[^>]+property=["']og:image(?::secure_url)?["'][^>]*>/gi,
    /<meta[^>]+name=["']twitter:image(?::src)?["'][^>]*>/gi
  ]) {
    for (const tag of html.matchAll(pattern)) push(getAttr(tag[0], "content"));
  }

  for (const tag of html.matchAll(/<img[^>]*>/gi)) {
    push(getAttr(tag[0], "src"));
    push(getAttr(tag[0], "data-src"));
    push(getAttr(tag[0], "data-lazy-src"));
    for (const url of srcsetToUrls(getAttr(tag[0], "srcset"))) push(url);
    for (const url of srcsetToUrls(getAttr(tag[0], "data-srcset"))) push(url);
  }

  for (const tag of html.matchAll(/<source[^>]*>/gi)) {
    for (const url of srcsetToUrls(getAttr(tag[0], "srcset"))) push(url);
    for (const url of srcsetToUrls(getAttr(tag[0], "data-srcset"))) push(url);
  }

  for (const match of html.matchAll(/https?:\/\/[^"'()<>\\\s]+?\.(?:jpe?g|png|webp)(?:\?[^"'()<>\\\s]*)?/gi)) {
    push(match[0]);
  }

  const unique = [...new Set(urls)].filter((url) => /\.(jpe?g|png|webp)(\?|$)/i.test(url));
  return unique.sort((a, b) => scoreUrl(b) - scoreUrl(a));
}

function scoreUrl(url) {
  const lower = url.toLowerCase();
  let score = 0;
  if (lower.includes("og")) score += 20;
  if (lower.includes("main") || lower.includes("hero") || lower.includes("project")) score += 18;
  if (lower.includes("large") || lower.includes("full") || lower.includes("1200") || lower.includes("1600") || lower.includes("2048")) score += 16;
  if (lower.includes("thumb") || lower.includes("thumbnail") || lower.includes("logo") || lower.includes("icon")) score -= 40;
  if (lower.includes("naotofukasawa.com")) score += 8;
  if (lower.endsWith(".jpg") || lower.includes(".jpg?")) score += 4;
  return score + Math.min(url.length / 30, 20);
}

async function fetchText(url) {
  const response = await fetch(url, { headers, redirect: "follow" });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.text();
}

async function downloadImage(url, target) {
  const response = await fetch(url, { headers, redirect: "follow" });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.startsWith("image/")) throw new Error(`Not an image: ${contentType}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  if (buffer.length < 4000) throw new Error("Image too small");
  await writeFile(target, buffer);
}

function placeholderSvg(title) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
  <rect width="1200" height="900" fill="#F6F3EC"/>
  <circle cx="600" cy="390" r="170" fill="none" stroke="#C9C4B8" stroke-width="2"/>
  <path d="M360 585 C480 520 720 520 840 585" fill="none" stroke="#B7926A" stroke-width="2" stroke-linecap="round"/>
  <text x="600" y="700" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" fill="#77736A">图片待替换</text>
  <text x="600" y="752" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#77736A">${title}</text>
</svg>`;
}

async function writePlaceholder(work) {
  const target = join(assetDir, work.file);
  await writeFile(target, placeholderSvg(work.title));
  console.log(`未能自动下载该作品图片，请手动替换：${work.title}`);
}

async function processWork(work) {
  const pages = [work.sourcePage, ...work.fallbackPages];
  const tried = [];

  for (const page of pages) {
    try {
      const html = await fetchText(page);
      const candidates = extractCandidates(html, page);
      for (const imageUrl of candidates) {
        tried.push(imageUrl);
        try {
          await downloadImage(imageUrl, join(assetDir, work.file));
          console.log(`Downloaded ${work.title}: ${imageUrl}`);
          return {
            id: work.id,
            title: work.title,
            sourcePage: page,
            imageUrl,
            note: work.note
          };
        } catch (error) {
          console.warn(`Skip image for ${work.title}: ${imageUrl} (${error.message})`);
        }
      }
    } catch (error) {
      console.warn(`Could not read page for ${work.title}: ${page} (${error.message})`);
    }
  }

  await writePlaceholder(work);
  return {
    id: work.id,
    title: work.title,
    sourcePage: work.sourcePage,
    imageUrl: "",
    note: `${work.note}; placeholder generated because automatic download failed. Tried ${tried.length} candidate image URLs.`
  };
}

await mkdir(assetDir, { recursive: true });
const sources = [];
for (const work of works) sources.push(await processWork(work));

await writeFile(
  sourceFile,
  `export const imageSources = ${JSON.stringify(sources, null, 2)};\n`
);

console.log(`Wrote ${sourceFile}`);
