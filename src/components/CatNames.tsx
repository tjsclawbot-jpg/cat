'use client'

import { useState } from 'react'

const suggestedNames = [
  { name: 'Agent Whiskers', icon: '🕵️' },
  { name: 'Data Floof', icon: '📊' },
  { name: 'Doge Spy', icon: '🐕' },
  { name: 'The Matrix Cat', icon: '💻' },
  { name: 'Orange AI', icon: '🤖' },
  { name: 'Crypto Kitten', icon: '🔐' },
  { name: 'Deep Learning Cat', icon: '🧠' },
  { name: 'Elon\`s Doge Cat', icon: '🚀' },
]

interface CatNamesProps {
  onVote: (name: string) => void
  votes: Record<string, number>
}

export default function CatNames({ onVote, votes }: CatNamesProps) {
  const [customName, setCustomName] = useState('')
  const [showCustom, setShowCustom] = useState(false)

  const handleSubmit = () => {
    if (customName.trim()) {
      onVote(customName)
      setCustomName('')
      setShowCustom(false)
    }
  }

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0) || 0
  const topNames = suggestedNames
    .map(n => ({ ...n, count: votes[n.name] || 0 }))
    .sort((a, b) => b.count - a.count)

  return (
    <section className="px-6 py-20 md:py-32 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">IDENTITY PROTOCOL</h2>
          <p className="section-subtitle">What shall we call this mysterious operative?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Voting Grid */}
          <div>
            <h3 className="text-lg font-bold text-indigo-300 mb-4 uppercase tracking-wider">&gt; CODE_NAMES</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {suggestedNames.map((item) => {
                const count = votes[item.name] || 0
                const percentage = totalVotes > 0 ? (count / totalVotes) * 100 : 0
                
                return (
                  <button
                    key={item.name}
                    onClick={() => onVote(item.name)}
                    className="card-interactive flex items-center gap-3 group"
                  >
                    <span className="text-2xl group-hover:animate-glow">{item.icon}</span>
                    <div className="text-left flex-1">
                      <p className="font-bold text-indigo-300 text-sm uppercase tracking-wider">{item.name}</p>
                      <div className="w-full bg-gray-800 rounded-full h-1.5 mt-2 overflow-hidden border border-indigo-500/30">
                        <div 
                          className="data-bar transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-yellow-400 mt-1 font-mono">{count} votes</p>
                    </div>
                  </button>
                )
              })}
            </div>
            <div className="mt-6 p-4 rounded-lg bg-gray-900/50 border border-indigo-500/30 font-mono text-xs text-indigo-300">
              <span className="text-yellow-400">&gt;</span> TOTAL_VOTES: <span className="text-pink-400 font-bold">{totalVotes}</span>
            </div>
          </div>

          {/* Leaderboard & Custom */}
          <div>
            <h3 className="text-lg font-bold text-indigo-300 mb-4 uppercase tracking-wider">&gt; TOP_CANDIDATES</h3>
            
            <div className="card mb-4">
              {topNames.slice(0, 5).map((item, idx) => (
                <div key={item.name} className="flex items-center gap-3 py-3 border-b border-indigo-500/20 last:border-b-0">
                  <span className="text-2xl font-bold text-indigo-500/50 w-8 text-center">#{idx + 1}</span>
                  <div className="flex-1">
                    <p className="font-bold text-indigo-300 uppercase text-sm">{item.icon} {item.name}</p>
                  </div>
                  <span className="badge badge-info text-xs">{item.count}</span>
                </div>
              ))}
            </div>

            {/* Custom submission */}
            <div className="card">
              <h4 className="font-bold text-indigo-300 mb-3 uppercase tracking-wider">&gt; CUSTOM_ID</h4>
              {!showCustom ? (
                <button
                  onClick={() => setShowCustom(true)}
                  className="btn-secondary w-full text-center text-sm"
                >
                  + ADD CODENAME
                </button>
              ) : (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="Enter code name..."
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    autoFocus
                  />
                  <div className="flex gap-2">
                    <button onClick={handleSubmit} className="btn-primary flex-1 text-sm">
                      EXECUTE
                    </button>
                    <button
                      onClick={() => setShowCustom(false)}
                      className="btn-secondary flex-1 text-sm"
                    >
                      ABORT
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Doge corner */}
            <div className="mt-4 p-4 rounded-lg bg-purple-900/30 border border-purple-500/50 text-center">
              <p className="text-sm">
                <span className="wow-text such-data">much</span> 
                <span className="wow-text very-mystery"> name</span>
              </p>
              <p className="text-xs text-purple-300 mt-2">very doge. such identity. WOW.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
