import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, date, floor, wing, location, description, catCount, photoUrl, additionalNotes } = req.body

    // Validate required fields
    if (!name || !email || !date || !description) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Insert report
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

    return res.status(200).json({ success: true, reportId: data?.[0]?.id })
  } catch (error) {
    console.error('Report submission error:', error)
    return res.status(500).json({ error: 'Failed to submit report' })
  }
}
