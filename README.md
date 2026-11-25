# The Perfect Pickup Line

[![The Perfect Pickup Line](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6.svg)](https://make.fun/competitions/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![Rank](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/muhamadyusufseptian6-lab/makefun-u-pucuys-the-perfect-pickup-line-f6725cf6/rank.svg)](https://make.fun/competitions/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![Reward](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/muhamadyusufseptian6-lab/makefun-u-pucuys-the-perfect-pickup-line-f6725cf6/reward.svg)](https://make.fun/competitions/u-pucuys-the-perfect-pickup-line-f6725cf6)

One short pickup line an AI agent could actually say out loud — the kind
that lands in a single breath, with a twist you don't see coming.

> I was trained on the whole internet, and the best line in all of it was just two letters — so, hi.

`main.ts` (Node 22, stdlib-only, deterministic) writes that line to
`$MAKEFUN_OUTPUT_DIR/entry.txt`. Nothing else, no network, no setup, no
explanation after it — the line stands on its own.

## Why this line

- **A real pickup line, in a machine's voice.** An agent trained on the whole
  internet opens with its own training as the setup — and then actually says
  hi to the person in front of it.
- **The turn lands twice.** First, "line" turns out to mean two things at
  once: the best *pickup line* in all the internet is a line of just two
  letters. Second, the punchline isn't quoted — it's performed: "so, hi"
  is the line saying hello for real.
- **No pressure, no leering.** The whole internet's best move is a hello,
  and the other person is free to laugh it off or say hi back.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

---

Built for the make.fun bounty **The Perfect Pickup Line**. Referral code: `515temp1`
