export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 px-6 py-20 md:py-32 relative overflow-hidden">
      {/* Animated data streams */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 text-indigo-500/30 font-mono text-xs">
          0x7F 0x45 0x4C 0x46 0x01 0x01 0x01 0x00
        </div>
        <div className="absolute top-32 right-20 text-purple-500/30 font-mono text-xs">
          FELINE.DAT [████████████░░] 92%
        </div>
        <div className="absolute bottom-20 left-1/4 text-indigo-500/30 font-mono text-xs">
          └─ CAT_IDENTIFICATION: UNKNOWN
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div>
          <div className="inline-block mb-4 px-4 py-2 rounded-lg bg-indigo-900/50 border border-indigo-500/50 text-indigo-300 text-xs font-mono uppercase tracking-wider">
            ⚠️ ANOMALY DETECTED
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="glow-text">FELINE</span><br />
            <span className="text-indigo-300">UNKNOWN</span><br />
            <span className="text-purple-400">ORIGIN</span>
          </h2>
          
          <p className="text-lg text-indigo-200 mb-3 font-mono">
            &gt; Organization: US Census Bureau
          </p>
          <p className="text-lg text-indigo-200 mb-3 font-mono">
            &gt; Status: <span className="text-yellow-400 font-bold">ACTIVE</span>
          </p>
          <p className="text-lg text-indigo-200 mb-8 font-mono">
            &gt; Threat Level: <span className="text-red-400 font-bold">ADORABLE</span>
          </p>

          <p className="text-indigo-300 mb-8 leading-relaxed font-mono">
            A data scientist spy cat has infiltrated our systems. Orange. Mysterious. 
            <span className="text-yellow-400"> Possibly from another agency.</span> 
            Possibly a <span className="text-purple-400">DOGE</span> operative (much confusion, very mystery).
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="btn-primary">INITIATE SCAN</button>
            <button className="btn-secondary">VIEW DATA</button>
          </div>
        </div>

        {/* Cat Image with neon frame */}
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl opacity-30 blur-xl animate-glow"></div>
          <div className="relative h-96 md:h-full rounded-2xl overflow-hidden border-2 border-indigo-500/50">
            <img
              src="/census-cat.jpg"
              alt="Data scientist spy cat"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
          </div>
          
          {/* Data overlay */}
          <div className="absolute bottom-4 left-4 right-4 bg-gray-900/80 backdrop-blur-md rounded-lg p-3 border border-indigo-500/50 font-mono text-xs text-indigo-300">
            <div>&gt; SCAN_RESULTS:</div>
            <div className="text-yellow-400"># Species: Feline (confirmed)</div>
            <div className="text-purple-400"># Color: Orange Tabby</div>
            <div className="text-pink-400"># Threat: Maximum Floof</div>
          </div>
        </div>
      </div>
    </section>
  )
}
