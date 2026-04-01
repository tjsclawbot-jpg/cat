import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { status = 'approved' } = req.query

    // Get reports with optional status filter
    let query = supabase.from('incident_reports').select('*')
    
    if (status) {
      query = query.eq('status', status)
    }

    const { data, error } = await query.order('created_at', { ascending: false })

    if (error) throw error

    return res.status(200).json(data)
  } catch (error) {
    console.error('Report fetch error:', error)
    return res.status(500).json({ error: 'Failed to fetch reports' })
  }
}
