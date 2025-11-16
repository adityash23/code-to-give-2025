import { Heart } from 'lucide-react'

const NewShelterSection = () => {
  return (
    <section className="bg-white px-6 py-24 animate-fade-in">
      <div className="mx-auto max-w-3xl text-center space-y-8">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 shadow-xl shadow-purple-500/30">
          <Heart className="h-10 w-10 text-white" strokeWidth={1.6} />
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl font-semibold text-purple-700 tracking-wide">
            We&apos;ve Just Opened a New Shelter
          </h2>
          <p className="text-lg text-gray-700">
            Our new facility in Laval has 17 apartments, allowing us to house significantly more women and children who need safety and support.
          </p>
          <p className="text-lg font-semibold text-purple-800">
            But we need your help. We rely entirely on donations from generous sponsors and people like you.
          </p>
          <p className="text-lg text-purple-500 tracking-wide">
            Your compassion keeps our doors open for every survivor seeking refuge.
          </p>
        </div>

        <div>
          <a
            href="#donate"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:brightness-110 hover:shadow-xl"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default NewShelterSection
