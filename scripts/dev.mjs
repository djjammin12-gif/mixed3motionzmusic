import { createServer } from "node:http";
import { existsSync, readFileSync } from "node:fs";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import "./build.mjs";

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

createServer((req, res) => {
  const cleanPath = decodeURIComponent((req.url || "/").split("?")[0]);
  const filePath = cleanPath === "/" ? join(dist, "index.html") : join(dist, cleanPath);
  const target = existsSync(filePath) ? filePath : join(dist, "index.html");
  res.setHeader("Content-Type", types[extname(target)] || "application/octet-stream");
  res.end(readFileSync(target));
}).listen(port, () => {
  console.log(`MIXED3MOTIONZ site running at http://localhost:${port}`);
});
