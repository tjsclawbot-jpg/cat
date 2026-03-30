# Deployment Guide - Census Cat Mystery

## Quick Deploy to Vercel (2 minutes)

### Option 1: GitHub Auto-Deploy (Recommended)

1. **Create GitHub repo:**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/censuscat.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to vercel.com
   - Click "New Project"
   - Import your GitHub repo
   - Vercel auto-detects Next.js
   - Click "Deploy"
   - Done! Get live URL

3. **Automatic redeploys:**
   - Every push to main → auto-deploys
   - Preview URLs for pull requests

### Option 2: Direct Vercel Deploy

```bash
npm i -g vercel
vercel login
vercel deploy --prod
```

## Environment Setup

No env variables needed. Site works out of the box.

## Site Features Enabled

- ✅ Static generation (fast)
- ✅ Client-side interactivity (voting, forms)
- ✅ Mobile responsive
- ✅ SEO optimized

## Custom Domain

After deployment:
1. Go to Vercel dashboard
2. Project → Settings → Domains
3. Add your domain (e.g., `censuscat.com`)
4. Follow DNS instructions

## Customization Before Deploy

Edit these files:
- `app/page.tsx` — Main page structure
- `src/components/*` — Individual sections
- `app/globals.css` — Colors & styling
- `src/components/Footer.tsx` — Contact info

## Monitoring

Vercel dashboard shows:
- Page views
- Load times
- Error reports
- Traffic patterns

## Next Steps

1. **Collect real sightings** — Sighting form stores data in browser (local storage)
2. **Add database** — Connect Supabase for persistent storage
3. **Add voting API** — Save cat name votes to database
4. **Email notifications** — Alert team when sightings submitted
5. **Social media** — Share website link on Census Bureau channels

## Support

- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs
- Contact: tj@wrkhrs.co
