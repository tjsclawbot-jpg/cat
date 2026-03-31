'use client'

import { useState } from 'react'

const mysteries = [
  {
    question: "What is the subject's origin?",
    status: "UNRESOLVED",
    confidence: 45,
    icon: "📍",
    details: "No documentation of entry. No adoption records. No microchip registration. Subject appeared in building without authorization. Theories range from accidental infiltration to deliberate placement by external party."
  },
  {
    question: "Is this a surveillance operation?",
    status: "INVESTIGATING",
    confidence: 62,
    icon: "📊",
    details: "Subject frequently observed near data centers and server facilities. Behavior pattern suggests possible intelligence gathering. Could indicate information retrieval or reconnaissance mission."
  },
  {
    question: "What is the operational purpose?",
    status: "UNCONFIRMED",
    confidence: 38,
    icon: "🔍",
    details: "Pest control? Building security test? Behavioral observation? No official documentation exists. Actions inconsistent with standard facility animal protocols. Purpose remains classified."
  },
  {
    question: "How many subjects are involved?",
    status: "UNCLEAR",
    confidence: 72,
    icon: "🔢",
    details: "Multiple independent sightings documented. Could be single subject moving throughout facility, or coordinated team. Witness descriptions vary. Identity confirmation pending."
  },
  {
    question: "What are the threat parameters?",
    status: "SPECULATIVE",
    confidence: 28,
    icon: "⚠️",
    details: "Subject displays non-aggressive behavior. No documented incidents. Threat level currently assessed as minimal. Recommend continued monitoring and incident reporting."
  },
  {
    question: "Policy status and authorization?",
    status: "POLICY CONFLICT",
    confidence: 85,
    icon: "📋",
    details: "Official no-animal workplace policy remains unchanged. Yet subject persists in secure facility. No exception documentation located. Policy enforcement status unclear and under review."
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
