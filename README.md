# Snapstitch

Cute photo booths, right in your browser. Classic strips, pose challenges, or freeform polaroid collages.

**No account · No uploads · Photos stay private** — everything runs locally in the browser.

## Features

- **Classic Booth** — 3 or 4-shot portrait strips or a 2×2 landscape grid
- **Pose Match** — follow a reference pose and compare your shot
- **Polaroid** — free-floating instant photos you arrange, drag, resize and rotate
- Full **editor** with backgrounds, filters, captions, date stamps and a huge sticker pack
- **PNG export** of the final composition, rendered locally (nothing is uploaded)
- Camera capture with an **upload fallback**, plus retakes
- Keyboard controls, accessible labels, and reduced-motion support

## Tech

- React 19 + TypeScript + Vite 8
- Tailwind CSS v4
- No backend — fully client-side, session-only

## Setup

Requires Node.js 22 (see `.mise.toml`) and pnpm via corepack.

```sh
corepack pnpm install
```

## Scripts

```sh
corepack pnpm dev      # generate manifest + start Vite dev server
corepack pnpm build    # generate manifest + production build
corepack pnpm preview  # preview production build
corepack pnpm manifest # regenerate src/generated/manifest.json only
```

Assets in `public/stickers`, `public/backgrounds`, `public/poses` are indexed by `scripts/generate-manifest.mjs` into `src/generated/manifest.json` automatically on `dev`/`build`.

## Env

See `.env.example`. Only `VITE_BASE` is used (`vite.config.ts`); `PORT` is platform-managed.