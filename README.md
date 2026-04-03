# SmartFuze Website

A premium product studio website built with **Next.js 16**, **Tailwind CSS v4**, and deployed on **Cloudflare Pages** via the OpenNext adapter.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Cloudflare Deployment

This project uses [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare) to run Next.js on Cloudflare Pages with the Edge runtime.

### Build & Deploy Scripts

| Command | Description |
|---|---|
| `npm run build` | Next.js build + OpenNext Cloudflare build |
| `npm run preview` | Build and preview locally with Wrangler |
| `npm run deploy` | Build and deploy to Cloudflare Pages |

### Configuration Files

- `wrangler.toml` — Cloudflare Workers / Pages config
- `open-next.config.ts` — OpenNext adapter config
- `.dev.vars` — Local environment variables (not committed)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Hosting:** Cloudflare Pages
- **Adapter:** @opennextjs/cloudflare
