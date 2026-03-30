export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-2xl font-bold text-white">
            🐱
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Census Cat Investigation</h1>
            <p className="text-xs text-gray-500">Incident Report Portal</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#overview" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Overview</a>
          <a href="#data" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Cases</a>
          <a href="#report" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Report</a>
          <button className="btn-primary text-sm px-4 py-2">Submit Report</button>
        </nav>
      </div>
    </header>
  )
}
