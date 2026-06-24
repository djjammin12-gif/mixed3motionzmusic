import { createServer } from "node:http";
import { existsSync, readFileSync, watch } from "node:fs";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { build } from "./build.mjs";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");
const port = Number(process.env.PORT || 4321);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8"
};

// Initial build so dist/ exists before the first request.
build();

// Rebuild whenever editable content or styles change, so the Netlify Visual
// Editor preview reflects saved edits live without restarting the dev server.
const rebuild = () => {
  try {
    build();
    console.log("MIXED3MOTIONZ site rebuilt");
  } catch (error) {
    console.error("MIXED3MOTIONZ rebuild failed:", error);
  }
};

for (const dir of ["src/data", "src/styles", "public"]) {
  const target = join(root, dir);
  if (existsSync(target)) {
    watch(target, { recursive: true }, rebuild);
  }
}

createServer((req, res) => {
  const cleanPath = decodeURIComponent((req.url || "/").split("?")[0]);
  const filePath = cleanPath === "/" ? join(dist, "index.html") : join(dist, cleanPath);
  const target = existsSync(filePath) ? filePath : join(dist, "index.html");
  res.setHeader("Content-Type", types[extname(target)] || "application/octet-stream");
  res.end(readFileSync(target));
}).listen(port, () => {
  console.log(`MIXED3MOTIONZ site running at http://localhost:${port}`);
});
