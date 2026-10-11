# Bhagaban — cyberpunk portfolio

React + TypeScript + Vite + Tailwind CSS v4 + Motion, with a continuously floating **Builder Pass** card.

## Run

```bash
npm install
npm run dev        # development server
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

## Files

- `PROFILE_README.md` — GitHub profile README. Paste it into the `bablu-bd7/bablu-bd7` repo's `README.md` and copy `assets/builder-pass.svg` alongside it.
- `src/data/profile.ts` — all personal data, social links and widget URLs.

## Builder Pass animation

Three nested layers keep the transforms from fighting each other:

1. `.pass-float` (CSS keyframes, `src/index.css`): infinite 6.5s ease-in-out loop of vertical travel, slight horizontal drift, ±1.5° tilt and <1% scale. First and last keyframes match, so there is no seam.
2. A Motion wrapper adds an optional ±3° cursor tilt, enabled only for mouse/trackpad users and never under reduced motion.
3. `.pass-card` holds the visuals.

Tune it with CSS variables on `.pass-stage`: `--float-duration`, `--float-y`, `--float-x`, `--float-rot`, `--float-scale`.

With `prefers-reduced-motion: reduce`, the float stops and the card renders statically.

## Placeholders to confirm

LinkedIn and Instagram links are flagged `confirmed: false` in `profile.ts` and render a "placeholder" chip until you set them to `true`.
