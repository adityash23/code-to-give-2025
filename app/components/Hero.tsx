import { HeartHandshake, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="border-b border-purple-100/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-purple-100/70 px-3 py-1 text-[11px] font-medium text-purple-900 border border-purple-200">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[10px] text-white font-medium">DV</span>
            <span>Domestic Violence Awareness Month: Every voice matters</span>
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            Safe homes, strong futures for survivors of domestic violence.
          </h1>
          <p className="mt-5 max-w-xl text-sm sm:text-base font-normal text-slate-600">
            Shield of Athena provides support to victims of family and conjugal violence, especially women and children.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="/donate"
              className="inline-flex items-center justify-center rounded-full bg-purple-700 px-5 py-2.5 text-sm font-semibold tracking-tight text-white shadow-md shadow-purple-500/30 hover:bg-purple-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F2FF]"
            >
              Donate Now
              <HeartHandshake className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-purple-200 bg-white/70 px-4 py-2 text-xs font-medium text-slate-800 shadow-sm hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F2FF]"
            >
              Learn how we help
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-4 max-w-md text-xs sm:text-sm">
            <div>
              <dt className="text-slate-500 font-medium">Survivors supported</dt>
              <dd className="mt-1 text-lg font-semibold tracking-tight text-slate-900">12,000+</dd>
            </div>
            <div>
              <dt className="text-slate-500 font-medium">Safe nights provided</dt>
              <dd className="mt-1 text-lg font-semibold tracking-tight text-slate-900">85,000</dd>
            </div>
            <div>
              <dt className="text-slate-500 font-medium">Hotline answered</dt>
              <dd className="mt-1 text-lg font-semibold tracking-tight text-slate-900">24/7</dd>
            </div>
          </dl>
        </div>
        <div className="relative">
        </div>
      </div>
    </section>
  );
}
