export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t-4 border-red-800 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-white font-bold font-mono mb-3 tracking-wider">INCIDENT PROTOCOL</h4>
            <p className="text-sm text-gray-400 leading-relaxed font-mono">
              Federal investigation into unknown entity at Census Bureau facility. 
              Witness reports accepted via secure portal. All submissions classified for review.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3 tracking-wider" style={{ fontFamily: 'Courier New, monospace' }}>DOCUMENTATION</h4>
            <div className="text-sm text-gray-400 space-y-2" style={{ fontFamily: 'Courier New, monospace' }}>
              <p><span className="text-red-700">[F]</span> Federal Case File</p>
              <p>Investigation Database</p>
              <p><span className="text-red-700">[C]</span> Classified Records</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3 tracking-wider" style={{ fontFamily: 'Courier New, monospace' }}>CONTACT</h4>
            <div className="text-sm text-gray-400 space-y-2" style={{ fontFamily: 'Courier New, monospace' }}>
              <p>
                <a href="mailto:tj@wrkhrs.co" className="text-red-700 hover:text-red-600 transition">
                  SECURE CONTACT
                </a>
              </p>
              <p>
                <a href="https://wrkhrs.co" className="text-red-700 hover:text-red-600 transition">
                  MAIN OFFICE
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-red-800 pt-8">
          <p className="text-xs text-gray-600 text-center tracking-wider" style={{ fontFamily: 'Courier New, monospace' }}>
            [DECLASSIFIED] CASE FILE | FEDERAL DATABASE | CREATED BY TJ CICHECKI
          </p>
        </div>
      </div>
    </footer>
  )
}
