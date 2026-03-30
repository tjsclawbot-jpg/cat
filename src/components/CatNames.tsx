'use client'

import { useState } from 'react'

const suggestedNames = [
  { name: 'Whiskers', icon: '👀' },
  { name: 'Census', icon: '📊' },
  { name: 'Deputy', icon: '🎯' },
  { name: 'Orange Alert', icon: '🚨' },
  { name: 'The Count', icon: '🔢' },
  { name: 'Patches', icon: '🧩' },
  { name: 'Bureau', icon: '🏛️' },
  { name: 'Mystery', icon: '❓' },
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
    <section className="px-6 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">Name the Cat</h2>
          <p className="section-subtitle">
            What should we call our mysterious friend? Vote for your favorite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Voting Grid */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Official Vote</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {suggestedNames.map((item) => {
                const count = votes[item.name] || 0
                const percentage = totalVotes > 0 ? (count / totalVotes) * 100 : 0
                
                return (
                  <button
                    key={item.name}
                    onClick={() => onVote(item.name)}
                    className="card-interactive flex items-center gap-3"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div className="text-left flex-1">
                      <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 overflow-hidden">
                        <div 
                          className="bg-blue-500 h-full transition-all"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{count} votes</p>
                    </div>
                  </button>
                )
              })}
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Total votes: <span className="font-semibold">{totalVotes}</span>
            </p>
          </div>

          {/* Leaderboard & Custom */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Candidates</h3>
            
            <div className="card mb-4">
              {topNames.slice(0, 5).map((item, idx) => (
                <div key={item.name} className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-b-0">
                  <span className="text-2xl font-bold text-gray-300 w-6 text-center">{idx + 1}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{item.icon} {item.name}</p>
                  </div>
                  <span className="badge badge-info text-xs">{item.count} votes</span>
                </div>
              ))}
            </div>

            {/* Custom submission */}
            <div className="card">
              <h4 className="font-semibold text-gray-900 mb-3">Suggest a Name</h4>
              {!showCustom ? (
                <button
                  onClick={() => setShowCustom(true)}
                  className="btn-ghost w-full text-center"
                >
                  + Add Your Suggestion
                </button>
              ) : (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="Enter cat name..."
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    autoFocus
                  />
                  <div className="flex gap-2">
                    <button onClick={handleSubmit} className="btn-primary flex-1">
                      Submit
                    </button>
                    <button
                      onClick={() => setShowCustom(false)}
                      className="btn-secondary flex-1"
                    >
                      Cancel
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
