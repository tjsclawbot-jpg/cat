export default function Hero() {
  return (
    <section className="bg-amber-100 px-6 py-20 md:py-32 relative overflow-hidden border-b-4 border-red-800">
      {/* Redacted lines effect */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div>
          <div className="inline-block mb-4 px-2 py-1 border-4 border-red-800 text-red-800 text-xs font-black uppercase tracking-widest bg-red-200">
            ▓▓▓ DECLASSIFIED ▓▓▓
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-black font-mono" style={{ letterSpacing: '1px' }}>
            FEDERAL CASE FILE
            <br/>
            UNKNOWN ENTITY
          </h2>
          
          <p className="text-lg text-black mb-3 font-mono border-l-4 border-red-800 pl-4 bg-yellow-50 px-3 py-2">
            SUBJECT: Unidentified feline specimen
            FACILITY: Census Bureau Headquarters
            STATUS: ACTIVE SURVEILLANCE
          </p>
          <p className="text-lg text-gray-900 mb-3 font-mono text-sm">
            └─ THREAT LEVEL: UNKNOWN
            └─ ORIGIN: UNIDENTIFIED
            └─ CROSS-REFERENCE: [REDACTED]
          </p>
          <p className="text-sm text-gray-800 mb-8 font-mono bg-red-50 px-3 py-2 border-l-4 border-red-800">
            Multiple independent sightings. Description: Orange tabby, medium frame. Behavior observed: Non-hostile, highly elusive. Purpose: [CLASSIFIED]
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="btn-primary font-mono tracking-wider">FILE INCIDENT REPORT</button>
            <button className="btn-secondary font-mono">ACCESS EVIDENCE</button>
          </div>
        </div>

        {/* Cat Image with Evidence Aesthetic */}
        <div className="relative">
          <div className="relative h-96 md:h-full rounded-none overflow-hidden border-4 border-black bg-amber-50 shadow-xl transform -rotate-1">
            <div className="absolute top-0 left-0 right-0 bg-black text-amber-50 px-3 py-2 text-xs font-mono font-bold tracking-wider">
              ════════════════════════════════════════════════════════
              EVIDENCE FILE | SPECIMEN DOCUMENTATION
              CLASSIFICATION: DECLASSIFIED
              ════════════════════════════════════════════════════════
            </div>
            <img
              src="/census-cat.jpg"
              alt="Subject specimen - Unidentified feline"
              className="w-full h-full object-cover mt-16 grayscale"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black text-amber-50 px-3 py-2 text-xs font-mono">
              CATALOGUED: 2024 • LOCATION: SECTOR [REDACTED] • REFERENCE: X-091
            </div>
          </div>
          
          {/* Stamp effect */}
          <div className="absolute -top-8 -right-8 border-4 border-red-800 px-4 py-2 transform rotate-45 bg-red-200" style={{ fontSize: '11px', fontWeight: 'bold', color: '#991b1b', letterSpacing: '2px' }}>
            [DECLASSIFIED]
          </div>
        </div>
      </div>
    </section>
  )
}
