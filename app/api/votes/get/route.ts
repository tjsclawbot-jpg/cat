import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  try {
    const { data, error } = await supabase
      .from('votes')
      .select('cat_name')

    if (error) throw error

    const voteCounts: Record<string, number> = {}
    data?.forEach((vote: any) => {
      voteCounts[vote.cat_name] = (voteCounts[vote.cat_name] || 0) + 1
    })

    return NextResponse.json(voteCounts)
  } catch (error) {
    console.error('Vote fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch votes' }, { status: 500 })
  }
}
