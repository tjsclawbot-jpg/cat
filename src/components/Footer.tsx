export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-white font-semibold mb-3">About This Site</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              A modern design exploration into the mysteries of the Census Cat. Built with contemporary UI principles and a touch of satire.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Built By</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p><span className="font-semibold text-white">Workhorse Collective</span></p>
              <p>Design & web development</p>
              <p>Led by <span className="text-orange-400">Tj Cichecki</span></p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Get In Touch</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>
                <a href="mailto:tj@wrkhrs.co" className="text-orange-400 hover:text-orange-300 transition">
                  tj@wrkhrs.co
                </a>
              </p>
              <p>
                <a href="https://wrkhrs.co" className="text-orange-400 hover:text-orange-300 transition">
                  wrkhrs.co
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-500 text-center">
            The Census Cat Mystery • A modern design case study • Built with Next.js & modern UI principles
          </p>
        </div>
      </div>
    </footer>
  )
}
