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
    setTimeout(() => setShowThanks(false), 4000)
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
    <section id="report" className="px-6 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">Report a Sighting</h2>
          <p className="section-subtitle">
            Help us understand the mystery. Your observations are valuable.
          </p>
        </div>

        {/* Thanks Modal */}
        {showThanks && (
          <div className="modal-overlay animate-fade-in">
            <div className="modal animate-slide-up">
              <div className="text-5xl mb-4">🙏</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-2">Your sighting has been recorded.</p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Note:</span> This is a satire. But we're genuinely confused about the cat. Where did it go? Can we contain hundreds? 🐱
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="card">
          {/* Personal Info */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
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
          <div className="mb-8 pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sighting Details</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Date & Time</label>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Floor</label>
                <select name="floor" value={formData.floor} onChange={handleChange}>
                  {[1, 2, 3, 4, 5, 6].map(f => <option key={f} value={f}>Floor {f}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Wing</label>
                <select name="wing" value={formData.wing} onChange={handleChange}>
                  <option>North</option>
                  <option>South</option>
                  <option>East</option>
                  <option>West</option>
                  <option>Central</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Specific Area</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Cafeteria, Records Room"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Cat Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Color, size, behavior, distinguishing marks..."
                className="h-24"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Cats Observed</label>
              <select name="catCount" value={formData.catCount} onChange={handleChange}>
                <option value="1">1 cat</option>
                <option value="2">2 cats</option>
                <option value="3-5">3-5 cats</option>
                <option value="5+">5+ cats (possibly hundreds?)</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Photo URL (Optional)</label>
              <input
                type="url"
                name="photoUrl"
                value={formData.photoUrl}
                onChange={handleChange}
                placeholder="https://example.com/cat-photo.jpg"
              />
            </div>
          </div>

          {/* Additional Notes */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Observations</label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              placeholder="Any other details? Questions raised? Theories?"
              className="h-20"
            />
          </div>

          <button type="submit" className="btn-primary w-full md:w-auto">
            Submit Sighting Report
          </button>
        </form>
      </div>
    </section>
  )
}
