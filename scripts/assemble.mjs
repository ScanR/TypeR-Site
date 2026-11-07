// Puts TypeR Studio's files (the TypeR-Web repository) beside the site's build in dist/, as GitHub
// Pages serves them both at typer.hayasaku.fr. The installed TypeR Studio apps download them at
// the addresses they've always had: /web/, /i18n.js, /assets/brand/, /assets/fonts/,
// /images/icon.png and /images/kofi.svg. They take an update only when every file online is the
// one web/desktop-update.json names, signed. This checks that before anything is published, and
// stops otherwise.
//
//   node scripts/assemble.mjs [TypeR-Web folder]     STUDIO_DIR, or ../TypeR-Web beside this one
//
// The files are taken from a commit (STUDIO_REF, HEAD by default), not from the working tree: a
// change being made there doesn't go online. Studio's files go in last, over the site's.

import { execFileSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const site = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(site, "dist");
const studio = path.resolve(process.argv[2] || process.env.STUDIO_DIR || path.join(site, "..", "TypeR-Web"));
const ref = process.env.STUDIO_REF || "HEAD";
// What TypeR Studio serves from the site's root. Keep it in step with desktop/scripts/site-files.js
// in TypeR-Web, which lists what the apps download.
const SERVED = ["web", "assets/brand", "assets/fonts", "i18n.js", "images/icon.png", "images/kofi.svg"];

const stop = (why) => {
  console.error(`assemble: ${why}`);
  process.exit(1);
};
const git = (args, options = {}) => execFileSync("git", ["-C", studio, ...args], { maxBuffer: 512 * 1024 * 1024, ...options });

if (!fs.existsSync(path.join(dist, "index.html"))) stop("no dist/index.html: run npm run build first");
let commit;
try {
  commit = git(["rev-parse", "--verify", `${ref}^{commit}`], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
} catch (error) {
  stop(`no TypeR-Web repository at ${studio} (or no ${ref} in it)`);
}

// Every file of SERVED at that commit: { file, object }
const entries = git(["ls-tree", "-r", "-z", "--full-tree", commit, "--", ...SERVED], { encoding: "utf8" })
  .split("\0")
  .filter(Boolean)
  .map((line) => {
    const [meta, file] = line.split("\t");
    const [mode, type, object] = meta.split(" ");
    return { file, mode, type, object };
  })
  .filter((entry) => entry.type === "blob" && entry.mode !== "120000");
if (!entries.some((entry) => entry.file === "web/index.html")) stop(`no web/index.html in TypeR-Web at ${commit.slice(0, 12)}`);

const sha256 = (data) => crypto.createHash("sha256").update(data).digest("hex");
let replaced = 0;
for (const { file, object } of entries) {
  const data = git(["cat-file", "blob", object]);
  const target = path.join(dist, file);
  if (fs.existsSync(target) && sha256(fs.readFileSync(target)) !== sha256(data)) {
    replaced += 1;
    console.warn(`assemble: the site's ${file} is replaced by TypeR Studio's`);
  }
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, data);
}

// What the apps will check, checked here first
const updatePath = path.join(dist, "web", "desktop-update.json");
if (!fs.existsSync(updatePath)) stop("no web/desktop-update.json in TypeR-Web");
const signed = JSON.parse(fs.readFileSync(updatePath, "utf8"));
const key = git(["show", `${commit}:desktop/src/update-key.pub.pem`]);
if (!crypto.verify(null, Buffer.from(signed.payload), key, Buffer.from(signed.signature, "base64"))) stop("web/desktop-update.json has a bad signature");
const named = JSON.parse(signed.payload).files;
const wrong = Object.keys(named).filter((file) => {
  const target = path.join(dist, file);
  if (!fs.existsSync(target)) return true;
  const data = fs.readFileSync(target);
  return data.length !== named[file].size || sha256(data) !== named[file].sha256;
});
if (wrong.length) {
  stop(
    `${wrong.length} files online wouldn't be the ones the signed update names (${wrong.slice(0, 5).join(", ")}${wrong.length > 5 ? ", …" : ""}). ` +
      "The installed apps would refuse the update. In TypeR-Web, push main with the pre-push hook on (git config core.hooksPath .githooks).",
  );
}

console.log(`assemble: TypeR Studio ${commit.slice(0, 12)} put in dist/ (${entries.length} files${replaced ? `, ${replaced} of the site's replaced` : ""}); the signed update matches its ${Object.keys(named).length} files.`);
