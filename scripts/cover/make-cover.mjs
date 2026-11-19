// Renders scripts/cover/cover.html to a news cover (1672 x 941 WebP), in the installed Chrome:
//
//   node scripts/cover/make-cover.mjs <out.webp> [--title "TypeR Studio"] [--line "Mid-November update"]
//                                     [--list "Flow mode|Auto Perspective|Actions|Clip Studio brushes"]
//
// The title's last word is in light blue. Needs cwebp (brew install webp).
import { chromium } from "@playwright/test";
import { fileURLToPath, pathToFileURL } from "node:url";
import { execFileSync } from "node:child_process";
import path from "node:path";
import os from "node:os";

const args = process.argv.slice(2);
const out = args.find((a, i) => !a.startsWith("--") && !(i && args[i - 1].startsWith("--")));
if (!out) throw new Error("usage: make-cover.mjs <out.webp> [--title …] [--line …] [--list A|B|C]");
const query = new URLSearchParams();
for (const key of ["title", "line", "list"]) {
  const at = args.indexOf(`--${key}`);
  if (at >= 0) query.set(key, args[at + 1]);
}

const here = path.dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1672, height: 941 } });
await page.goto(`${pathToFileURL(path.join(here, "cover.html")).href}?${query}`);
await page.waitForFunction(() => window.coverReady);
await page.evaluate(() => document.fonts.ready);
await page.evaluate(() => Promise.all([...document.images].map((img) => img.decode())));
const png = path.join(os.tmpdir(), "typer-news-cover.png");
await page.screenshot({ path: png });
await browser.close();
execFileSync("cwebp", ["-quiet", "-q", "86", png, "-o", out]);
console.log(`${out} written`);
