export default function Header() {
  return (
    <header className="bg-gray-900 border-b-4 border-yellow-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-yellow-700 flex items-center justify-center text-xl font-bold text-yellow-600 bg-gray-800">
            📁
          </div>
          <div>
            <h1 className="text-lg font-bold text-white font-serif">CENSUS CAT INVESTIGATION</h1>
            <p className="text-xs text-yellow-600 font-mono">FEDERAL INCIDENT DATABASE</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#overview" className="text-gray-300 hover:text-yellow-600 font-mono text-xs uppercase transition">Overview</a>
          <a href="#data" className="text-gray-300 hover:text-yellow-600 font-mono text-xs uppercase transition">Cases</a>
          <a href="#report" className="text-gray-300 hover:text-yellow-600 font-mono text-xs uppercase transition">Submit</a>
          <button className="btn-primary text-xs px-4 py-2">FILE REPORT</button>
        </nav>
      </div>
    </header>
  )
}
