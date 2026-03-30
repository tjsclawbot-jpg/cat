'use client'

import { useState } from 'react'

const mysteries = [
  {
    question: "IS THIS A DOGE OPERATIVE?",
    status: "UNCONFIRMED",
    confidence: 45,
    icon: "🚀",
    details: "Much confusion. Very mystery. Wow. Could be a DOGE employee left over from the meme agency. Evidence: Orange. Cat. Spy. Very data scientist.",
    metric: "DOGE_PROBABILITY: 45%"
  },
  {
    question: "DATA SOURCE: UNKNOWN?",
    status: "ENCRYPTED",
    confidence: 78,
    icon: "🔐",
    details: "All sightings logged to encrypted database. Entry vector unclear. Did it upload from external server? Exfiltrate our census data? Much concerning.",
    metric: "ENCRYPTION_LEVEL: MILITARY"
  },
  {
    question: "OBJECTIVE: INTELLIGENCE GATHERING?",
    status: "ANALYZING",
    confidence: 62,
    icon: "📊",
    details: "Observed near data centers. Detected in server rooms. Downloaded files at 3AM. This is not normal cat behavior. Definitely a spy.",
    metric: "THREAT_LEVEL: CLASSIFIED"
  },
  {
    question: "TRANSMISSION PROTOCOL?",
    status: "INTERCEPTED",
    confidence: 88,
    icon: "📡",
    details: "Catches mice = collects data. Meows = sends signals. Sleeps on keyboards = uploads documents. Pattern recognized. Very sophisticated.",
    metric: "SIGNAL_STRENGTH: 88dB"
  },
  {
    question: "BIOLOGICAL ORIGIN?",
    status: "UNKNOWN",
    confidence: 33,
    icon: "🧬",
    details: "Is it sentient? Engineered? Escaped from research lab? Or just... a really intelligent orange tabby with spy training?",
    metric: "DNA_MATCH: PENDING"
  },
  {
    question: "WHY THE ORANGE COLOR?",
    status: "THEORY",
    confidence: 91,
    icon: "🎨",
    details: "Orange = visible. Visible = memorable. Memorable = psychological warfare. Or it's just a cute orange cat. But the data suggests... conspiracy.",
    metric: "VISIBILITY_INDEX: 999"
  },
]

export default function Mystery() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="data" className="px-6 py-20 md:py-32 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">INCIDENT DATA ANALYSIS</h2>
          <p className="section-subtitle">Classified intelligence. Decrypt if you can.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mysteries.map((mystery, idx) => (
            <button
              key={idx}
              onClick={() => setExpanded(expanded === idx ? null : idx)}
              className="card-interactive text-left"
            >
              {/* Header with confidence meter */}
              <div className="flex items-start gap-4 mb-3">
                <span className="text-3xl animate-glow">{mystery.icon}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-indigo-200 mb-2 uppercase text-sm tracking-wider">{mystery.question}</h3>
                  
                  {/* Confidence bar */}
                  <div className="mb-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-indigo-400 font-mono">CONFIDENCE</span>
                      <span className="text-xs text-yellow-400 font-bold">{mystery.confidence}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden border border-indigo-500/30">
                      <div 
                        className="data-bar h-full"
                        style={{ width: `${mystery.confidence}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`badge text-xs ${
                      mystery.status.includes('UNKNOWN') 
                        ? 'badge-warning'
                        : mystery.status.includes('ANALYZING')
                        ? 'badge-info'
                        : mystery.status.includes('ENCRYPTED')
                        ? 'badge-error'
                        : 'badge-success'
                    }`}>
                      {mystery.status}
                    </span>
                  </div>
                </div>
                <span className="text-lg text-indigo-500 group-hover:text-indigo-300 transition">{expanded === idx ? '−' : '+'}</span>
              </div>

              {/* Expanded details */}
              {expanded === idx && (
                <div className="mt-4 pt-4 border-t border-indigo-500/30 text-indigo-300 text-sm leading-relaxed animate-slide-up font-mono">
                  <p className="mb-3">{mystery.details}</p>
                  <div className="bg-gray-900/50 rounded p-2 border border-indigo-500/20 text-yellow-400 text-xs">
                    &gt; {mystery.metric}
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Fun doge section */}
        <div className="mt-12 p-8 rounded-xl border-2 border-purple-500/50 bg-gray-900/50 text-center">
          <p className="text-3xl mb-4">
            <span className="wow-text such-data">such</span> 
            <span className="wow-text very-mystery"> confusion</span>
          </p>
          <p className="text-indigo-300 font-mono">
            Much data. Very mystery. <span className="text-yellow-400 font-bold">WOW</span>.
          </p>
          <p className="text-pink-400 mt-2">
            Could this be a doge? Is doge still active? Are we living in a timeline where doge and cat merge?
          </p>
        </div>
      </div>
    </section>
  )
}
