'use client'

import { useState } from 'react'

const mysteries = [
  {
    question: "What is the cat's origin?",
    status: "UNRESOLVED",
    icon: "📍",
    details: "Did someone bring the cat intentionally? Was it already in the building? Or did it enter through an unknown access point?"
  },
  {
    question: "How many cats are there?",
    status: "UNKNOWN",
    icon: "🔢",
    details: "Multiple sightings of orange tabbies. Is it one cat moving rapidly, or a coordinated group? Could we contain hundreds?"
  },
  {
    question: "What is its purpose?",
    status: "SPECULATION",
    icon: "🎯",
    details: "Mouse control? Accidental entry? Part of a workforce diversity initiative? The intent remains unclear."
  },
  {
    question: "Are pets now allowed?",
    status: "POLICY CONFLICT",
    icon: "📋",
    details: "Official pet-free policy exists, yet... there is a cat. Does this constitute an exception or policy change?"
  },
  {
    question: "Where does it sleep?",
    status: "UNKNOWN",
    icon: "💤",
    details: "No documented rest area or cat bed provided. Spotted on blue chairs and various locations throughout building."
  },
  {
    question: "What are its dietary needs?",
    status: "UNCONFIRMED",
    icon: "🍽️",
    details: "No official food provision documented. Mice, sushi scraps, or other sources remain speculated."
  },
]

export default function Mystery() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="mysteries" className="px-6 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">Unanswered Questions</h2>
          <p className="section-subtitle">
            The official record. Growing daily. Still perplexing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mysteries.map((mystery, idx) => (
            <button
              key={idx}
              onClick={() => setExpanded(expanded === idx ? null : idx)}
              className="card-interactive text-left"
            >
              <div className="flex items-start gap-4 mb-3">
                <span className="text-3xl">{mystery.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">{mystery.question}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`badge text-xs ${
                      mystery.status.includes('UNRESOLVED') 
                        ? 'badge-error'
                        : mystery.status.includes('UNKNOWN')
                        ? 'badge-warning'
                        : mystery.status.includes('CONFLICT')
                        ? 'badge-error'
                        : 'badge-warning'
                    }`}>
                      {mystery.status}
                    </span>
                  </div>
                </div>
                <span className="text-lg text-gray-400">{expanded === idx ? '−' : '+'}</span>
              </div>

              {expanded === idx && (
                <div className="mt-4 pt-4 border-t border-gray-200 text-gray-700 text-sm leading-relaxed animate-slide-up">
                  {mystery.details}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
