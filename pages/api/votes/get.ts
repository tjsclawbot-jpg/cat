import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Get vote counts
    const { data, error } = await supabase
      .from('votes')
      .select('cat_name')

    if (error) throw error

    // Count votes by cat name
    const voteCounts: Record<string, number> = {}
    data?.forEach((vote: any) => {
      voteCounts[vote.cat_name] = (voteCounts[vote.cat_name] || 0) + 1
    })

    return res.status(200).json(voteCounts)
  } catch (error) {
    console.error('Vote fetch error:', error)
    return res.status(500).json({ error: 'Failed to fetch votes' })
  }
}
