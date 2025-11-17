import { Hero } from '../components/home/hero';
import { Statistics } from '../components/home/statistics';
import { Mission } from '../components/home/mission';
import { FundraisingSection } from '../components/home/fundraising';
import { SponsorsLeaderboard } from '../components/home/sponsorsLeaderboard';
import { Services } from '../components/home/services';
import { TestimonialsCarousel } from '../components/home/testimonials';
import { CurrentProjects } from '../components/home/currentProjects';
import { Sponsors } from '../components/home/sponsors';
import type { PageType } from '../App';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onDonateClick?: () => void;
}

export function HomePage({ onNavigate, onDonateClick }: HomePageProps) {
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <Statistics />
      <FundraisingSection onDonateClick={onDonateClick || (() => {})} />
      <SponsorsLeaderboard />
      <Mission />

      <Services onNavigate={onNavigate} />
      <TestimonialsCarousel onNavigate={onNavigate} />
      <CurrentProjects />
      <Sponsors onNavigate={onNavigate} />
    </div>
  );
}
