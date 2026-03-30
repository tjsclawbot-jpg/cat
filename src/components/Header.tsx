export default function Header() {
  return (
    <header className="bg-gray-900/80 border-b-2 border-indigo-500/50 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Animated cat icon */}
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-2xl font-bold animate-glow">
            🐱
          </div>
          <div>
            <h1 className="text-xl font-bold glow-text uppercase tracking-wider">Data Cat Incident</h1>
            <p className="text-xs text-indigo-400 font-mono">CLASSIFIED | UNIDENTIFIED FELINE | EPOCH_UNKNOWN</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#profile" className="text-indigo-300 hover:text-indigo-100 font-mono text-sm uppercase tracking-wider transition">
            &gt; Profile
          </a>
          <a href="#data" className="text-indigo-300 hover:text-indigo-100 font-mono text-sm uppercase tracking-wider transition">
            &gt; Data
          </a>
          <a href="#report" className="text-indigo-300 hover:text-indigo-100 font-mono text-sm uppercase tracking-wider transition">
            &gt; Submit
          </a>
          <button className="btn-primary text-xs px-4 py-2">ALERT</button>
        </nav>
      </div>
    </header>
  )
}
