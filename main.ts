import { mkdirSync, writeFileSync } from "node:fs";

// One emoji, one smile: a beaming face with smiling eyes (U+1F601).
// Exactly one code point, written as UTF-8 with no trailing newline.
const smile = "😁";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", smile, "utf8");

