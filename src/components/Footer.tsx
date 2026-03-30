export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-white font-bold mb-3">About This Investigation</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              A satirical investigation into the mysterious cat incident at the Census Bureau. 
              Combining data visualization, citizen science, and genuine questions about workplace mysteries.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Built By</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p><span className="text-purple-400">🐴</span> Workhorse Collective</p>
              <p>Brand design & web development</p>
              <p><span className="text-purple-300">Tj Cichecki</span></p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Contact</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>
                <a href="mailto:tj@wrkhrs.co" className="text-purple-400 hover:text-purple-300 transition">
                  tj@wrkhrs.co
                </a>
              </p>
              <p>
                <a href="https://wrkhrs.co" className="text-purple-400 hover:text-purple-300 transition">
                  wrkhrs.co
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-500 text-center">
            Census Cat Investigation | A satirical project | Built with Next.js + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
