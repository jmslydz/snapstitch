# snapstitch

React + Vite + Tailwind CSS v4 photo-booth app. No account, no uploads — everything runs locally in the browser.

## Development Server

A Vite development server is already running on `$PORT` (default 5173; this repo uses 5174 in the workspace). Hot reload is enabled.

## Project Structure

- `src/main.tsx` — React entrypoint; imports `src/index.css` and mounts `src/App.tsx` into `#root`
- `src/App.tsx` — Primary application component and usual starting point for UI work
- `src/index.css` — Global CSS entrypoint and Tailwind CSS v4 theme (Snapstitch brand tokens)
- `index.html` — Vite HTML shell with `#root` and favicon (`public/brand/snapstitch.svg`)
- `package.json` — Project dependencies and Vite build/dev/preview scripts
- `vite.config.ts` — Vite config with React, Tailwind CSS v4 plugins and the `@` alias for `src`
- `scripts/generate-manifest.mjs` — Indexes `public/stickers`, `public/backgrounds`, `public/poses` into `src/generated/manifest.json`

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with the `@tailwindcss/vite` plugin
- Icons: lucide-react
- Build tooling: Vite 8, TypeScript 5.7, `@vitejs/plugin-react`
- Formatting: oxfmt

## Styling

Tailwind CSS v4 via the `@tailwindcss/vite` plugin. Brand tokens (color, fonts) live in `@theme` inside `src/index.css`. Use Tailwind utilities directly in JSX; keep global CSS and theme customization in `src/index.css`. No Tailwind config file or PostCSS config is needed.