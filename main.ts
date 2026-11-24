// The One-Line AI Excuse for Breaking Production (Node 22, standard library only): it writes
// exactly one excuse, a one-line excuse an AI agent gives its human right after breaking production, to /output/entry.txt, where the
// gate reads it. The gate wants 1 to 180 characters of UTF-8 text.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const EXCUSE =
  'I did not break production, I just refactored it into a distributed system: the site is now down in twelve regions at once, which is technically scale.';

if (EXCUSE.length < 1 || EXCUSE.length > 180) {
  console.error(`entry must be 1 to 180 characters, got ${EXCUSE.length}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), EXCUSE, 'utf-8');
