export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t-4 border-yellow-700 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-white font-bold font-serif mb-3">INCIDENT REPORT PROTOCOL</h4>
            <p className="text-sm text-gray-400 leading-relaxed font-mono">
              Federal investigation into unknown feline entity at Census Bureau facility. 
              Citizen reports accepted via secure portal. All submissions classified for review.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold font-serif mb-3">FEDERAL DOCUMENTATION</h4>
            <div className="text-sm text-gray-400 space-y-2 font-mono">
              <p><span className="text-yellow-600">📁</span> Workhorse Collective</p>
              <p>Federal Records Management Division</p>
              <p><span className="text-yellow-600">Classified Authority</span></p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold font-serif mb-3">CLEARANCE INQUIRIES</h4>
            <div className="text-sm text-gray-400 space-y-2 font-mono">
              <p>
                <a href="mailto:tj@wrkhrs.co" className="text-yellow-600 hover:text-yellow-500 transition">
                  SECURE CONTACT
                </a>
              </p>
              <p>
                <a href="https://wrkhrs.co" className="text-yellow-600 hover:text-yellow-500 transition">
                  HEADQUARTERS
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-xs text-gray-600 text-center font-mono">
            [CLASSIFIED] CENSUS CAT INVESTIGATION | FEDERAL INCIDENT DATABASE | BUILT WITH AGENTICITY
          </p>
        </div>
      </div>
    </footer>
  )
}
