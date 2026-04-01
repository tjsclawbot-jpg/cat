'use client'

import { useState, useEffect } from 'react'

const suggestedNames = [
  { name: 'Agent Whiskers', icon: '[A]' },
  { name: 'Subject Zero', icon: '[0]' },
  { name: 'Tabby Classified', icon: '[C]' },
  { name: 'The Operative', icon: '[O]' },
  { name: 'Orange Suspect', icon: '[S]' },
  { name: 'File-13', icon: '[F]' },
  { name: 'Cipher Cat', icon: '[X]' },
  { name: 'Unknown Entity', icon: '[?]' },
]

interface CatNamesProps {
  onVote: (name: string) => void
  votes: Record<string, number>
}

export default function CatNames({ onVote, votes }: CatNamesProps) {
  const [customName, setCustomName] = useState('')
  const [showCustom, setShowCustom] = useState(false)
  const [liveVotes, setLiveVotes] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)

  // Fetch vote data on mount
  useEffect(() => {
    fetchVotes()
    const interval = setInterval(fetchVotes, 5000) // Refresh every 5 seconds
    return () => clearInterval(interval)
  }, [])

  const fetchVotes = async () => {
    try {
      const { supabase } = await import('@/lib/supabase')
      const { data, error } = await supabase
        .from('votes')
        .select('cat_name')

      if (error) throw error

      const voteCounts: Record<string, number> = {}
      data?.forEach((vote: any) => {
        voteCounts[vote.cat_name] = (voteCounts[vote.cat_name] || 0) + 1
      })
      setLiveVotes(voteCounts)
    } catch (error) {
      console.error('Error fetching votes:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleVote = async (name: string) => {
    try {
      const { supabase } = await import('@/lib/supabase')
      const { error } = await supabase
        .from('votes')
        .insert([{ cat_name: name, created_at: new Date() }])

      if (error) throw error
      onVote(name)
      fetchVotes()
    } catch (error) {
      console.error('Error submitting vote:', error)
    }
  }

  const handleSubmit = async () => {
    if (customName.trim()) {
      await handleVote(customName)
      setCustomName('')
      setShowCustom(false)
    }
  }

  const totalVotes = Object.values(liveVotes).reduce((a, b) => a + b, 0) || 0
  const topNames = suggestedNames
    .map(n => ({ ...n, count: liveVotes[n.name] || 0 }))
    .sort((a, b) => b.count - a.count)

  return (
    <section className="px-6 py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">Name the Cat</h2>
          <p className="section-subtitle">What should we call this mysterious feline?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Voting Grid */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Official Vote</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {suggestedNames.map((item) => {
                const count = votes[item.name] || 0
                const percentage = totalVotes > 0 ? (count / totalVotes) * 100 : 0
                
                return (
                  <button
                    key={item.name}
                    onClick={() => handleVote(item.name)}
                    className="card-interactive flex items-center gap-3"
                  >
                    <span className="text-sm font-bold text-black font-mono border border-black px-2 py-1 bg-yellow-50">{item.icon}</span>
                    <div className="text-left flex-1">
                      <p className="font-bold text-gray-900 text-sm">{item.name}</p>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 overflow-hidden">
                        <div 
                          className="data-bar transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{count} votes</p>
                    </div>
                  </button>
                )
              })}
            </div>
            <div className="mt-6 p-4 rounded-none bg-yellow-50 border-2 border-black text-sm text-gray-900 font-mono">
              <span className="font-semibold">TOTAL VOTES: </span>
              <span className="font-bold text-red-800">{totalVotes}</span>
            </div>
          </div>

          {/* Leaderboard & Custom */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Candidates</h3>
            
            <div className="card mb-4">
              {topNames.slice(0, 5).map((item, idx) => (
                <div key={item.name} className="flex items-center gap-3 py-3 border-b-2 border-black last:border-b-0 font-mono">
                  <span className="text-sm font-bold text-gray-700 w-8 text-center">{idx + 1}.</span>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-sm">{item.icon} {item.name}</p>
                  </div>
                  <span className="bg-red-200 text-red-900 px-2 py-1 text-xs font-bold border border-black">{item.count}</span>
                </div>
              ))}
            </div>

            {/* Custom submission */}
            <div className="card">
              <h4 className="font-bold text-gray-900 mb-3 font-mono">SUBMIT NEW DESIGNATION</h4>
              {!showCustom ? (
                <button
                  onClick={() => setShowCustom(true)}
                  className="btn-secondary w-full text-center text-sm font-mono"
                >
                  [+] ADD DESIGNATION
                </button>
              ) : (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="Enter a name..."
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    autoFocus
                  />
                  <div className="flex gap-2">
                    <button onClick={handleSubmit} className="btn-primary flex-1 text-sm font-mono">
                      SUBMIT
                    </button>
                    <button
                      onClick={() => setShowCustom(false)}
                      className="btn-secondary flex-1 text-sm font-mono"
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
