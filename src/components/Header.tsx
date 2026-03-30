export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-xl font-bold text-white">
            🐱
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">The Census Cat</h1>
            <p className="text-xs text-gray-500">Feline Investigation Portal</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#overview" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Overview</a>
          <a href="#mysteries" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Questions</a>
          <a href="#report" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Report</a>
          <button className="btn-primary text-sm">Get Involved</button>
        </nav>
      </div>
    </header>
  )
}
