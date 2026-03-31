export default function Hero() {
  return (
    <section className="bg-yellow-50 px-6 py-20 md:py-32 relative overflow-hidden border-b-8 border-yellow-700">
      {/* Classified folder aesthetic */}
      <div className="absolute top-6 right-8 text-6xl opacity-20 transform -rotate-12">📁</div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div>
          <div className="inline-block mb-4 px-3 py-1 border-2 border-red-700 text-red-700 text-xs font-bold uppercase tracking-widest bg-red-100">
            CLASSIFIED
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 font-serif">
            Case File: Unknown Feline
          </h2>
          
          <p className="text-lg text-gray-800 mb-3 font-semibold border-l-4 border-yellow-700 pl-4">
            Subject: Unidentified feline entity observed within federal facility grounds
          </p>
          <p className="text-lg text-gray-700 mb-3">
            Status: Active Investigation • Threat Level: Unknown • Origin: Undetermined
          </p>
          <p className="text-lg text-gray-600 mb-8 font-mono text-sm">
            [REPORT DETAILS: Multiple independent sightings documented. Physical description: Orange tabby, medium-sized. Behavior: Non-threatening, elusive. Purpose unclear.]
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="btn-primary">File Report</button>
            <button className="btn-secondary">View Evidence</button>
          </div>
        </div>

        {/* Cat Image with Evidence Aesthetic */}
        <div className="relative">
          <div className="relative h-96 md:h-full rounded-none overflow-hidden border-4 border-yellow-900 bg-white shadow-2xl transform -rotate-1">
            <div className="absolute top-0 left-0 right-0 bg-yellow-700 text-white px-3 py-2 text-xs font-mono font-bold">
              EVIDENCE PHOTO A-1 | CENSUS BUREAU HEADQUARTERS
            </div>
            <img
              src="/census-cat.jpg"
              alt="Subject specimen - Unidentified feline"
              className="w-full h-full object-cover mt-6"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-100 text-gray-800 px-3 py-2 text-xs font-mono">
              FILE DATE: 2024 | LOCATION: SECTOR 7 | CATALOGED
            </div>
          </div>
          
          {/* Rotated stamp */}
          <div className="absolute -top-4 -right-4 text-6xl transform rotate-12 opacity-30 pointer-events-none">
            ⚠️
          </div>
        </div>
      </div>
    </section>
  )
}
