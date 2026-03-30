'use client'

import { useState } from 'react'

const mysteries = [
  {
    question: "What is the cat's origin?",
    status: "UNRESOLVED",
    confidence: 45,
    icon: "📍",
    details: "No documentation of entry. No adoption records. No microchip. Appeared in building without explanation. Theories range from accidental entry to intentional placement."
  },
  {
    question: "Is this a data science operation?",
    status: "INVESTIGATING",
    confidence: 62,
    icon: "📊",
    details: "Observed near data centers. Found in server rooms. Pattern suggests possible intelligence gathering. Could be behavioral data collection or information retrieval."
  },
  {
    question: "Could it be a DOGE operative?",
    status: "UNCONFIRMED",
    confidence: 38,
    icon: "🚀",
    details: "Left over from previous organization? Orange coloring suggests visibility. Highly intelligent behavior. Pattern recognition capabilities appear advanced. Possibly trained."
  },
  {
    question: "How many cats are there?",
    status: "UNCLEAR",
    confidence: 72,
    icon: "🔢",
    details: "Multiple sightings reported. Could be one cat moving throughout building, or coordinated team. Descriptions vary by observer. Consistency unclear."
  },
  {
    question: "What is the purpose?",
    status: "SPECULATIVE",
    confidence: 28,
    icon: "🎯",
    details: "Pest control? Data gathering? Stress relief initiative? No official documentation exists. Behavior inconsistent with standard office cat placement."
  },
  {
    question: "Are pets now allowed at work?",
    status: "POLICY CONFLICT",
    confidence: 85,
    icon: "📋",
    details: "Official pet-free workplace policy remains unchanged. Yet a cat exists in the building. No exception documentation found. Policy enforcement unclear."
  },
]

export default function Mystery() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="data" className="px-6 py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">Investigation Cases</h2>
          <p className="section-subtitle">Open questions and unresolved details from citizen reports.</p>
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
                  <h3 className="font-bold text-gray-900 mb-2">{mystery.question}</h3>
                  
                  {/* Confidence bar */}
                  <div className="mb-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-500 font-medium">CONFIDENCE</span>
                      <span className="text-xs text-purple-700 font-bold">{mystery.confidence}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="data-bar h-full"
                        style={{ width: `${mystery.confidence}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`badge text-xs ${
                      mystery.status.includes('UNRESOLVED') 
                        ? 'badge-error'
                        : mystery.status.includes('UNCLEAR')
                        ? 'badge-warning'
                        : mystery.status.includes('INVESTIGATING')
                        ? 'badge-info'
                        : mystery.status.includes('CONFLICT')
                        ? 'badge-error'
                        : 'badge-success'
                    }`}>
                      {mystery.status}
                    </span>
                  </div>
                </div>
                <span className="text-lg text-gray-400">{expanded === idx ? '−' : '+'}</span>
              </div>

              {/* Expanded details */}
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
