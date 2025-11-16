import { Phone, ChevronDown } from 'lucide-react'

type HeroProps = {
  onScrollToNext: () => void
}

const Hero = ({ onScrollToNext }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-900 text-white"
    >
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="Sunrise representing hope"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#7b2ff7]/90 via-[#6a38f2]/80 to-[#1b1449]/95" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-32 pb-24 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-white/80">Shield of Athena</p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
        Every woman deserves safety. Every child deserves joy. Every future deserves hope.
        </h1>
        <p className="mt-6 text-lg text-white/80 sm:text-xl">Welcome to Shield of Athena.</p>

        <div className="mt-10 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="tel:1-800-555-0199"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-green-600/30 transition hover:brightness-110 hover:shadow-xl sm:w-auto"
          >
            <Phone className="h-5 w-5 text-white" />
            Get Help Now
          </a>
          <a
            href="#about"
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-purple to-brand-dark px-6 py-3 text-base font-semibold text-white shadow-xl shadow-purple-900/40 transition hover:opacity-90 sm:w-auto"
          >
            Learn Our Story
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={onScrollToNext}
        aria-label="Scroll to next section"
        className="group absolute bottom-10 left-1/2 -translate-x-1/2 text-white/90 transition hover:text-white"
      >
        <ChevronDown className="h-8 w-8 animate-bounce-slow" />
      </button>
    </section>
  )
}

export default Hero
