# One Emoji, One Smile — 😁

[![make.fun](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/nexrodestro/nexro-one-emoji-smile/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f/leaderboard)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/nexrodestro/nexro-one-emoji-smile/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)

Entry for the make.fun competition
[One Emoji, One Smile](https://make.fun/c/u-0xkianno-one-emoji-one-smile-5470751f):
send exactly one emoji, the one most likely to make a stranger smile.

## The pick

😁 **Beaming Face with Smiling Eyes** (U+1F601) — one code point, four bytes
of UTF-8. A literal beaming grin: smiles are contagious, and the crescent
smiling eyes read as a genuine, warm smile at first glance. Universal across
ages and backgrounds, no irony, no in-joke, no intimacy — the right warmth
coming from a stranger.

## How it works

`main.ts` (Node 22 standard library only) writes the single emoji to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), UTF-8, no trailing
newline.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
