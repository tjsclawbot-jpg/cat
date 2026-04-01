import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const { name, email, date, floor, wing, location, description, catCount, photoUrl, additionalNotes } = await req.json()

    if (!name || !email || !date || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('incident_reports')
      .insert([
        {
          witness_name: name,
          witness_email: email,
          incident_date: date,
          floor,
          wing,
          location,
          subject_description: description,
          cat_count: catCount,
          photo_url: photoUrl,
          additional_notes: additionalNotes,
          status: 'submitted',
          created_at: new Date(),
        },
      ])
      .select()

    if (error) throw error

    return NextResponse.json({ success: true, reportId: data?.[0]?.id })
  } catch (error) {
    console.error('Report submission error:', error)
    return NextResponse.json({ error: 'Failed to submit report' }, { status: 500 })
  }
}
