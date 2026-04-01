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
    <section id="report" className="px-6 py-20 md:py-32 bg-gray-900 border-t-8 border-b-8 border-red-700">
      <div className="max-w-4xl mx-auto">
        <div className="section-header">
          <h2 className="section-title" style={{ color: 'white', fontFamily: 'Courier New, monospace' }}>SUBMIT CLASSIFIED REPORT</h2>
          <p className="section-subtitle" style={{ color: '#ccc', fontFamily: 'Courier New, monospace' }}>INCIDENT WITNESS STATEMENT — FEDERAL USE ONLY</p>
        </div>

        {/* Thanks Modal */}
        {showThanks && (
          <div className="modal-overlay animate-fade-in">
            <div className="modal animate-slide-up">
              <div className="text-5xl mb-4">🐱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You</h3>
              <p className="text-gray-700 mb-3">Your report has been recorded and logged.</p>
              <p className="text-sm text-gray-500">
                Note: This investigation is satirical in nature, but we remain genuinely puzzled about the cat.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="card bg-amber-100 border-4 border-black">
          {/* Your Information */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-black mb-4 font-mono" style={{ letterSpacing: '2px' }}>WITNESS INFORMATION</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2 font-mono">FULL NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2 font-mono">EMAIL ADDRESS</label>
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
          <div className="mb-8 pb-8 border-b-2 border-black">
            <h3 className="text-lg font-bold text-black mb-4 font-mono" style={{ letterSpacing: '2px' }}>INCIDENT DETAILS</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-black mb-2 font-mono">DATE & TIME OF OBSERVATION</label>
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
                <label className="block text-sm font-medium text-black mb-2 font-mono">FLOOR</label>
                <select name="floor" value={formData.floor} onChange={handleChange}>
                  {[1, 2, 3, 4, 5, 6].map(f => <option key={f} value={f}>Floor {f}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2 font-mono">WING/SECTOR</label>
                <select name="wing" value={formData.wing} onChange={handleChange}>
                  <option>North</option>
                  <option>South</option>
                  <option>East</option>
                  <option>West</option>
                  <option>Central</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2 font-mono">SPECIFIC LOCATION</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Server Room, Cafeteria"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-black mb-2 font-mono">SUBJECT DESCRIPTION & APPEARANCE</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Color, size, behavior, distinctive features..."
                className="h-24"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-black mb-2 font-mono">NUMBER OF SUBJECTS OBSERVED</label>
              <select name="catCount" value={formData.catCount} onChange={handleChange}>
                <option value="1">1 cat</option>
                <option value="2">2 cats</option>
                <option value="3-5">3-5 cats</option>
                <option value="5+">5+ cats (swarm?)</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-black mb-2 font-mono">EVIDENCE PHOTO (URL)</label>
              <input
                type="url"
                name="photoUrl"
                value={formData.photoUrl}
                onChange={handleChange}
                placeholder="https://example.com/photo.jpg"
              />
            </div>
          </div>

          {/* Additional Analysis */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-black mb-2 font-mono">INVESTIGATOR NOTES & ANALYSIS</label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              placeholder="Your thoughts, theories, or observations..."
              className="h-20"
            />
          </div>

          <button type="submit" className="btn-primary w-full md:w-auto">
            Submit Report
          </button>
        </form>
      </div>
    </section>
  )
}
