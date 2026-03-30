export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-6 py-20 md:py-32 relative overflow-hidden">
      {/* Subtle gradient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-purple-100 to-transparent rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-indigo-100 to-transparent rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <div className="inline-block mb-4 px-4 py-2 rounded-lg bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wide">
            Ongoing Investigation
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            The Census Cat Mystery
          </h2>
          
          <p className="text-lg text-gray-700 mb-3 font-medium">
            An unidentified feline has been observed within Census Bureau headquarters.
          </p>
          <p className="text-lg text-gray-600 mb-3">
            Multiple sightings. Contradictory reports. No clear origin or purpose.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            This investigation seeks citizen reports to understand: Is this a data scientist spy cat? 
            A leftover DOGE operative? Or something else entirely?
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="btn-primary">View Cases</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>

        {/* Cat Image */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-2xl opacity-50 blur-xl"></div>
          <div className="relative h-96 md:h-full rounded-2xl overflow-hidden border border-gray-200 bg-white">
            <img
              src="/census-cat.jpg"
              alt="Orange tabby cat observed at Census Bureau"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
