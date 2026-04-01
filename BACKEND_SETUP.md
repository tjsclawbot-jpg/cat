# Census Cat Investigation - Backend Setup Guide

## Overview
The site now has a complete backend with:
- ✅ Persistent voting system
- ✅ Incident report submissions
- ✅ Photo upload via URL
- ✅ Admin approval workflow
- ✅ Public photo gallery for approved evidence

## Step 1: Create Supabase Project

1. Go to **https://supabase.com**
2. Sign in with: `tjsclawbot@gmail.com`
3. Create a new project
4. Wait for it to initialize (~5 mins)
5. Copy these credentials:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **Anon Key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Service Role Key** → `SUPABASE_SERVICE_ROLE_KEY`

## Step 2: Create Database Tables

1. In Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Copy the entire contents of `supabase-setup.sql` file (in repo root)
4. Paste into the SQL editor
5. Click **Run**

This creates 2 tables:
- `votes` - Cat name voting
- `incident_reports` - Witness reports with photos

## Step 3: Update Environment Variables

Add to `.env.local` (in project root):

```
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

Then redeploy to Vercel (auto-deploys from GitHub)

## Step 4: Enable Authentication (Optional - for Admin)

For the admin approval dashboard at `/admin/pending`:

1. In Supabase, go to **Auth → Providers**
2. Enable **Email**
3. In Authentication settings, add `tjsclawbot@gmail.com` as admin
4. User will get email to set password

(Currently the page checks for email manually - you can enhance with proper auth)

## Features Explained

### 1. Voting System
- **Location:** "Name the Cat" section
- **Data:** Votes stored in `votes` table
- **Real-time:** Updates every 5 seconds
- **Submit:** Click any name or add custom designation

### 2. Incident Reports
- **Location:** "Submit Classified Report" section
- **Data:** Stored in `incident_reports` table with status = 'submitted'
- **Photos:** Submit as URL (can be external image link)
- **Approval:** Only admin can approve (moves to gallery)

### 3. Admin Panel
- **URL:** `/admin/pending`
- **Access:** Currently checks email `tjsclawbot@gmail.com`
- **Functions:**
  - View all pending reports
  - See witness info + photos
  - APPROVE → moves to gallery
  - REJECT → deletes from pending

### 4. Photo Gallery
- **Location:** Between reports form and footer
- **Shows:** Only approved photos (status = 'approved')
- **Auto-fetches:** Loads approved photos every time page loads
- **Grid:** 3-column responsive layout

## API Endpoints

### Votes
- `POST /api/votes/submit` - Submit a vote
  ```json
  { "catName": "Agent Whiskers" }
  ```
- `GET /api/votes/get` - Get all vote counts
  ```json
  { "Agent Whiskers": 5, "Subject Zero": 3 }
  ```

### Reports
- `POST /api/reports/submit` - Submit incident report
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "date": "2024-03-31T14:30",
    "floor": 3,
    "wing": "North",
    "location": "Server Room",
    "description": "Orange tabby, aggressive behavior",
    "catCount": "1",
    "photoUrl": "https://example.com/photo.jpg",
    "additionalNotes": "Very fast"
  }
  ```
- `GET /api/reports/get?status=approved` - Get approved reports

## Database Schema

### votes
```
id: UUID (primary key)
cat_name: TEXT
created_at: TIMESTAMP
```

### incident_reports
```
id: UUID (primary key)
witness_name: TEXT
witness_email: TEXT
incident_date: TIMESTAMP
floor: INTEGER
wing: TEXT
location: TEXT
subject_description: TEXT
cat_count: TEXT
photo_url: TEXT
additional_notes: TEXT
status: TEXT ('submitted', 'approved', 'rejected')
created_at: TIMESTAMP
```

## Troubleshooting

**"No photos showing in gallery?"**
- Check that reports have `status = 'approved'` in Supabase
- Ensure `photo_url` is not null
- Photos must have valid image URLs

**"Votes not persisting?"**
- Check Supabase `votes` table has data
- Verify API keys are correct in `.env.local`
- Check browser console for errors

**"Admin panel shows 'ACCESS DENIED'?"**
- Currently just checks email in code
- To implement proper auth:
  1. Enable Email provider in Supabase Auth
  2. Update `/admin/pending.tsx` to use `supabase.auth.getSession()`
  3. Create a Login page

## Next Steps

1. ✅ Create Supabase project
2. ✅ Run SQL setup
3. ✅ Add env variables to Vercel
4. ✅ Test voting (should persist)
5. ✅ Test report submission (check admin panel)
6. ✅ Approve a report and see it in gallery
7. ✅ Point censuscat.com domain to Vercel

## Support

All code is documented. Check:
- `/pages/api/` - API endpoints
- `/src/components/CatNames.tsx` - Voting component
- `/src/components/SightingForm.tsx` - Report submission
- `/pages/admin/pending.tsx` - Admin approval panel
- `/src/components/Gallery.tsx` - Photo gallery display
