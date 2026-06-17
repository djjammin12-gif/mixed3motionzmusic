import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");

const copyTargets = [
  "index.html",
  "styles.css",
  "script.js",
  "privacy.html",
  "success.html",
  "robots.txt",
  "sitemap.xml",
  "assets",
  "content"
];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const target of copyTargets) {
  await cp(path.join(root, target), path.join(dist, target), { recursive: true });
}

console.log("Built static site to dist/");
