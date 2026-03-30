export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-indigo-500/30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-indigo-300 font-bold mb-3 uppercase tracking-wider">&gt; ABOUT_THIS_INVESTIGATION</h4>
            <p className="text-sm text-indigo-400 leading-relaxed font-mono">
              A stylized data science investigation into the mysterious feline infiltrator at the Census Bureau. 
              Satire meets data visualization. Much confusion. Very spy.
            </p>
          </div>

          <div>
            <h4 className="text-indigo-300 font-bold mb-3 uppercase tracking-wider">&gt; BUILT_BY</h4>
            <div className="text-sm text-indigo-400 space-y-2 font-mono">
              <p><span className="text-purple-400">🐴</span> <span className="text-pink-400">Workhorse Collective</span></p>
              <p>Data-driven design</p>
              <p><span className="text-yellow-400">Tj Cichecki</span> - Chief Data Cat Officer</p>
            </div>
          </div>

          <div>
            <h4 className="text-indigo-300 font-bold mb-3 uppercase tracking-wider">&gt; TRANSMISSION</h4>
            <div className="text-sm text-indigo-400 space-y-2 font-mono">
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
              <p className="text-yellow-400 text-xs">&gt; STATUS: ACTIVE</p>
            </div>
          </div>
        </div>

        <div className="border-t border-indigo-500/30 pt-8">
          <div className="bg-gray-800/50 rounded-lg p-4 border border-indigo-500/30 mb-6">
            <p className="text-indigo-300 text-sm font-mono mb-2">&gt; CLASSIFIED BRIEFING:</p>
            <p className="text-xs text-yellow-400 font-mono">
              This is satire. But the cat confusion is real. Built to demonstrate data science design. 
              <span className="text-pink-400"> Much aesthetic. Very data. WOW.</span>
            </p>
          </div>

          <p className="text-xs text-indigo-600 text-center font-mono">
            Data Cat Mystery | Epoch 2026 | Threat Level: Adorable | Built with Next.js & Vibes
          </p>
        </div>
      </div>
    </footer>
  )
}
