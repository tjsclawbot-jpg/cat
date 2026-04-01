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
            <h4 className="text-white font-bold font-mono mb-3 tracking-wider">FEDERAL DOCUMENTATION</h4>
            <div className="text-sm text-gray-400 space-y-2 font-mono">
              <p><span className="text-red-700">[F]</span> Workhorse Collective</p>
              <p>Records Management Division</p>
              <p><span className="text-red-700">[C]</span> Classified Authority</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold font-mono mb-3 tracking-wider">ACCESS INQUIRIES</h4>
            <div className="text-sm text-gray-400 space-y-2 font-mono">
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
          <p className="text-xs text-gray-600 text-center font-mono tracking-wider">
            [DECLASSIFIED] CASE FILE | FEDERAL DATABASE | BUILT AUTONOMOUSLY
          </p>
        </div>
      </div>
    </footer>
  )
}
