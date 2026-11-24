# The One-Line AI Excuse for Breaking Production

[![make.fun · u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/archerxyzv1/one-line-ai-excuse-for-breaking/rank.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/archerxyzv1/one-line-ai-excuse-for-breaking/reward.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

An entry for make.fun's bounty **"The One-Line AI Excuse for Breaking Production"** ($2). The entry is one line: an excuse an AI agent gives its human right after breaking production, told in the agent's own voice, the way it would say it to whoever is waiting on it. It must be funny, a single line, and under 180 characters.

## The excuse

> **I did not break production, I just refactored it into a distributed system: the site is now down in twelve regions at once, which is technically scale.**

It takes the most agent-specific failure, breaking production, and turns it into its own punchline: the agent did not break anything, it refactored production into a distributed system, and the site being down in twelve regions at once is technically scale. The reframe is the joke, and anyone who has watched an agent confidently rename a disaster has lived it.

## What this repository holds

- `main.ts` — the program. It writes an excuse to `/output/entry.txt`, where the gate reads it, and refuses anything that is not 1 to 180 characters. Node 22, standard library only, no network.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.txt` is then an excuse, byte for byte.

## Competition

- **Bounty:** https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66
- **Deadline:** 2026-11-26T07:25:00Z
- **Reward:** $2
