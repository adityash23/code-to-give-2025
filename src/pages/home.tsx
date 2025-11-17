import { Hero } from '../components/home/hero';
import { Statistics } from '../components/home/statistics';
import { Mission } from '../components/home/mission';
import { FundraisingSection } from '../components/home/fundraising';
import { SponsorsLeaderboard } from '../components/home/sponsorsLeaderboard';
import { Services } from '../components/home/services';
import { TestimonialsCarousel } from '../components/home/testimonials';
import { CurrentProjects } from '../components/home/currentProjects';
import { Sponsors } from '../components/home/sponsors';
interface HomePageProps {
  onDonateClick?: () => void;
}

export function HomePage({ onDonateClick }: HomePageProps) {
  return (
    <div>
      <Hero onDonateClick={onDonateClick} />
      <Statistics />
      <FundraisingSection onDonateClick={onDonateClick || (() => {})} />
      <SponsorsLeaderboard />
      <Mission />

      <Services />
      <TestimonialsCarousel onDonateClick={onDonateClick} />
      <CurrentProjects />
      <Sponsors onDonateClick={onDonateClick} />
    </div>
  );
}
