import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const { catName } = await req.json()

    if (!catName) {
      return NextResponse.json({ error: 'Cat name required' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('votes')
      .insert([{ cat_name: catName, created_at: new Date() }])
      .select()

    if (error) throw error

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Vote submission error:', error)
    return NextResponse.json({ error: 'Failed to submit vote' }, { status: 500 })
  }
}
