import { useRef } from 'react'
import Hero from './components/Hero'
import ImpactStats from './components/ImpactStats'
import MissionSections from './components/MissionSections'
import Navbar from './components/Navbar'

function App() {
  const nextSectionRef = useRef<HTMLDivElement | null>(null)

  const handleScrollToNext = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="flex flex-col">
        <Hero onScrollToNext={handleScrollToNext} />
        <ImpactStats />
        <div id="next-section" ref={nextSectionRef}>
          <MissionSections />
        </div>
      </main>
    </div>
  )
}

export default App
