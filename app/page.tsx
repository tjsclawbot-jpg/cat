'use client'

import { useState } from 'react'
import Header from '@/src/components/Header'
import Hero from '@/src/components/Hero'
import Mystery from '@/src/components/Mystery'
import SightingForm from '@/src/components/SightingForm'
import CatNames from '@/src/components/CatNames'
import Footer from '@/src/components/Footer'

export default function Home() {
  const [sightings, setSightings] = useState<any[]>([])
  const [catVotes, setCatVotes] = useState<Record<string, number>>({})

  const handleNewSighting = (sighting: any) => {
    setSightings([sighting, ...sightings])
  }

  const handleCatVote = (catName: string) => {
    setCatVotes(prev => ({
      ...prev,
      [catName]: (prev[catName] || 0) + 1
    }))
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Mystery />
      <SightingForm onNewSighting={handleNewSighting} />
      <CatNames onVote={handleCatVote} votes={catVotes} />
      <Footer />
    </main>
  )
}
