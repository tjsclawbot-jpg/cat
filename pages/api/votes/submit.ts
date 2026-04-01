import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { catName } = req.body

    if (!catName) {
      return res.status(400).json({ error: 'Cat name required' })
    }

    // Insert vote
    const { data, error } = await supabase
      .from('votes')
      .insert([{ cat_name: catName, created_at: new Date() }])
      .select()

    if (error) throw error

    return res.status(200).json({ success: true, data })
  } catch (error) {
    console.error('Vote submission error:', error)
    return res.status(500).json({ error: 'Failed to submit vote' })
  }
}
