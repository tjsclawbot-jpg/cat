import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
            OFFICIAL INVESTIGATION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            A Feline Appears
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            On an undisclosed date, an orange tabby of unknown origin was observed within the Census Bureau headquarters. 
            Multiple sightings. Contradictory accounts. <span className="font-semibold">No clear answers.</span>
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="btn-primary">Report a Sighting</button>
            <button className="btn-ghost">Learn More</button>
          </div>
        </div>

        {/* Cat Image */}
        <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/census-cat.jpg"
            alt="Orange tabby cat in Census building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-black ring-opacity-5 rounded-2xl"></div>
        </div>
      </div>
    </section>
  )
}
