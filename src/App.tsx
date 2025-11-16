import { useRef } from 'react'
import Hero from './components/Hero'
import ImpactStats from './components/ImpactStats'
import MissionSections from './components/MissionSections'
import NewShelterSection from './components/NewShelterSection'
import Navbar from './components/Navbar'

function App() {
  const impactSectionRef = useRef<HTMLDivElement | null>(null)

  const handleScrollToNext = () => {
    impactSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="flex flex-col">
        <Hero onScrollToNext={handleScrollToNext} />
        <div id="impact-stats" ref={impactSectionRef}>
          <ImpactStats />
        </div>
        <div id="mission-sections">
          <MissionSections />
        </div>
        <NewShelterSection />
      </main>
    </div>
  )
}

export default App
