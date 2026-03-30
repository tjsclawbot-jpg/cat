# Quick Start Guide

## What's This?
A modern, satirical website about a census cat mystery. Forms don't connect to anything yet—perfect for demonstrations and prototyping.

## Features ✨
- **Modern Design** — Clean, professional UI with contemporary styling
- **Real Cat Photo** — Orange tabby in office chair (government vibes confirmed)
- **Interactive Forms** — Sighting reports & cat naming votes
- **Satire Disclaimer** — "Thanks for your interest" modal explains it's satire
- **Responsive** — Mobile, tablet, desktop optimized
- **No Backend** — Client-side only (data disappears on refresh)

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open in browser
# http://localhost:3000
```

## Production Build

```bash
# Build for production
npm run build

# Start production server
npm start

# Runs on http://localhost:3000
```

## Deployment Options

### Option 1: Vercel (Easiest)
1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploys on push
4. Get live URL instantly

See: `DEPLOYMENT.md`

### Option 2: Your Server
1. Clone repo on server
2. Run `npm install && npm run build`
3. Use PM2 or similar
4. Configure Nginx reverse proxy
5. Add SSL certificate

See: `DEPLOYMENT-SERVER.md`

## Customization

### Edit Content
- `src/components/Hero.tsx` — Main headline
- `src/components/Mystery.tsx` — Questions
- `src/components/CatNames.tsx` — Cat name suggestions
- `src/components/Footer.tsx` — Contact info

### Edit Styling
- `app/globals.css` — Colors, spacing, animations
- `tailwind.config.ts` — Tailwind theme

### Add Backend Later
Currently forms are client-side. To save data:
1. Add Supabase project
2. Create tables for `sightings` and `cat_votes`
3. Add API routes (`app/api/`)
4. Update form components to POST data

## Files Structure
```
.
├── app/                      # Next.js app
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── src/components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Mystery.tsx
│   ├── SightingForm.tsx
│   ├── CatNames.tsx
│   └── Footer.tsx
├── public/
│   └── census-cat.jpg       # The cat photo
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Tech Stack
- **Next.js 14** — React framework
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling
- **React Hooks** — State management

## Support
- Email: tj@wrkhrs.co
- Website: wrkhrs.co
- GitHub: [your-repo-url]

---

**Status:** ✅ Production Ready
