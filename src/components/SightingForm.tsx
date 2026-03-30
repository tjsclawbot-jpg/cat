'use client'

import { useState } from 'react'

interface SightingFormProps {
  onNewSighting: (sighting: any) => void
}

export default function SightingForm({ onNewSighting }: SightingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    floor: '3',
    wing: 'North',
    location: '',
    description: '',
    catCount: '1',
    photoUrl: '',
    additionalNotes: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [showThanks, setShowThanks] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNewSighting(formData)
    setSubmitted(true)
    setShowThanks(true)
    setTimeout(() => setShowThanks(false), 5000)
    setFormData({
      name: '',
      email: '',
      date: '',
      floor: '3',
      wing: 'North',
      location: '',
      description: '',
      catCount: '1',
      photoUrl: '',
      additionalNotes: '',
    })
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section id="report" className="px-6 py-20 md:py-32 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">SUBMIT INCIDENT REPORT</h2>
          <p className="section-subtitle">Help us decode this mystery. All reports encrypted.</p>
        </div>

        {/* Thanks Modal */}
        {showThanks && (
          <div className="modal-overlay animate-fade-in">
            <div className="modal animate-slide-up">
              <div className="text-5xl mb-4 animate-glow">🐱</div>
              <h3 className="text-2xl font-bold text-indigo-300 mb-2 uppercase tracking-wider">DATA RECEIVED</h3>
              <p className="text-indigo-200 mb-4 font-mono">&gt; Sighting logged to encrypted database</p>
              <p className="text-sm text-purple-300 font-mono">
                <span className="text-yellow-400">&gt;</span> This is a satire investigation<br/>
                <span className="text-yellow-400">&gt;</span> But the cat confusion is REAL<br/>
                <span className="text-yellow-400">&gt;</span> Much mystery. Very data. WOW.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="card">
          {/* Agent Info */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-indigo-300 mb-4 uppercase tracking-wider">&gt; AGENT DETAILS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-mono text-indigo-300 mb-2">AGENT_NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-indigo-300 mb-2">CONTACT_EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Sighting Details */}
          <div className="mb-8 pb-8 border-b border-indigo-500/30">
            <h3 className="text-lg font-bold text-indigo-300 mb-4 uppercase tracking-wider">&gt; INCIDENT COORDINATES</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-mono text-indigo-300 mb-2">TIMESTAMP</label>
              <input
                type="datetime-local"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-mono text-indigo-300 mb-2">FLOOR</label>
                <select name="floor" value={formData.floor} onChange={handleChange}>
                  {[1, 2, 3, 4, 5, 6].map(f => <option key={f} value={f}>Floor {f}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-mono text-indigo-300 mb-2">SECTOR</label>
                <select name="wing" value={formData.wing} onChange={handleChange}>
                  <option>North</option>
                  <option>South</option>
                  <option>East</option>
                  <option>West</option>
                  <option>Central</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-mono text-indigo-300 mb-2">LOCATION</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Server Room 7"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-mono text-indigo-300 mb-2">FELINE_PROFILE</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Color, size, behavior, spy capabilities..."
                className="h-24"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-mono text-indigo-300 mb-2">UNIT_COUNT</label>
              <select name="catCount" value={formData.catCount} onChange={handleChange}>
                <option value="1">1 unit</option>
                <option value="2">2 units</option>
                <option value="3-5">3-5 units (distributed swarm?)</option>
                <option value="5+">5+ units (DOGE ARMY DETECTED)</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-mono text-indigo-300 mb-2">PHOTO_EVIDENCE</label>
              <input
                type="url"
                name="photoUrl"
                value={formData.photoUrl}
                onChange={handleChange}
                placeholder="https://..."
              />
            </div>
          </div>

          {/* Additional Data */}
          <div className="mb-8">
            <label className="block text-sm font-mono text-indigo-300 mb-2">ANALYSIS_NOTES</label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              placeholder="Theories? Connections? Is this a DOGE? Much confusion?"
              className="h-20"
            />
          </div>

          <button type="submit" className="btn-primary w-full md:w-auto uppercase font-bold tracking-wider">
            TRANSMIT DATA
          </button>
        </form>
      </div>
    </section>
  )
}
