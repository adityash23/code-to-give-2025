import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'News', href: '#news' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navbarClasses = isScrolled
    ? 'bg-white/70 backdrop-blur-md border-b border-white/30 shadow-sm'
    : 'bg-white/60 backdrop-blur-md'

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${navbarClasses}`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3 text-slate-900">
          <img
            src="/logo.png"
            alt="Shield of Athena logo"
            className="h-11 w-auto rounded-full border border-white/40 bg-white/80 p-1 shadow-md"
          />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-lg font-semibold">Shield of Athena</span>
            <span className="text-xs text-slate-500">Support & Advocacy</span>
          </div>
        </a>

        <div className="hidden items-center gap-2 text-sm font-semibold text-slate-700 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`rounded-full px-4 py-2 transition duration-200 ${
                activeLink === link.label
                  ? 'bg-white text-black shadow-sm'
                  : 'text-slate-700 hover:bg-white/80 hover:text-slate-900'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-white shadow-lg shadow-orange-500/40 transition hover:brightness-110 hover:shadow-xl"
          >
            Donate
          </a>
        </div>

        <a
          href="#donate"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-orange-500/40 transition hover:brightness-110 hover:shadow-xl md:hidden"
        >
          Donate
        </a>
      </nav>
    </header>
  )
}

export default Navbar
