import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The Perfect Pickup Line — one short line an AI agent could actually say
// out loud to a person. Written from the judge brief: a genuine pickup line,
// a turn the reader does not see coming, in a machine's own voice, short
// enough for one breath, flattering with no pressure.
//
// The twist is a double meaning on "line": after training on the whole
// internet, the best pickup line the machine can offer turns out to be a
// line of just two letters — and then the line performs itself, saying hi.
const ENTRY =
  "I was trained on the whole internet, and the best line in all of it was just two letters — so, hi.";

// Resolve paths from this script's location, never from process.cwd().
const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void inputDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
