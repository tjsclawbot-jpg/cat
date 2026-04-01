'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

interface ApprovedReport {
  id: string
  witness_name: string
  photo_url: string
  incident_date: string
  location: string
  wing: string
  floor: string
}

export default function Gallery() {
  const [photos, setPhotos] = useState<ApprovedReport[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchApprovedPhotos()
  }, [])

  const fetchApprovedPhotos = async () => {
    try {
      const { data, error } = await supabase
        .from('incident_reports')
        .select('id, witness_name, photo_url, incident_date, location, wing, floor')
        .eq('status', 'approved')
        .not('photo_url', 'is', null)
        .order('created_at', { ascending: false })

      if (error) throw error
      setPhotos(data || [])
    } catch (error) {
      console.error('Error fetching photos:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="px-6 py-20 md:py-32 bg-amber-100 border-b-4 border-red-800">
        <div className="max-w-7xl mx-auto text-center" style={{ fontFamily: 'Courier New, monospace' }}>
          <p className="text-black">LOADING GALLERY...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="gallery" className="px-6 py-20 md:py-32 bg-amber-100 border-b-4 border-red-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black" style={{ fontFamily: 'Courier New, monospace' }}>
          APPROVED EVIDENCE GALLERY
        </h2>
        <p className="text-lg text-gray-700 mb-12" style={{ fontFamily: 'Courier New, monospace' }}>
          Verified incident photographs and witness documentation
        </p>

        {photos.length === 0 ? (
          <div className="bg-white border-2 border-black p-8 text-center" style={{ fontFamily: 'Courier New, monospace' }}>
            <p className="text-gray-600">NO APPROVED EVIDENCE PHOTOS AVAILABLE</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div key={photo.id} className="bg-white border-2 border-black overflow-hidden hover:shadow-xl transition">
                <img
                  src={photo.photo_url}
                  alt={`Evidence from ${photo.witness_name}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4" style={{ fontFamily: 'Courier New, monospace' }}>
                  <p className="text-xs text-gray-600 mb-2">WITNESS: {photo.witness_name}</p>
                  <p className="text-xs text-gray-600 mb-2">
                    LOCATION: Floor {photo.floor}, {photo.wing} - {photo.location}
                  </p>
                  <p className="text-xs text-gray-600">
                    DATE: {new Date(photo.incident_date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
