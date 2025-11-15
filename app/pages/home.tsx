import React from 'react';
import { Hero } from '../components/home/hero';
import { Statistics } from '../components/home/statistics';
import { Mission } from '../components/home/mission';
import { FundraisingSection } from '../components/home/fundraising';
import { Services } from '../components/home/services';
import { TestimonialsCarousel } from '../components/home/testimonials';
import { CurrentProjects } from '../components/home/projects';
import { Sponsors } from '../components/home/sponsors';
import { PageType } from '../app';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onDonateClick?: () => void;
}

export function HomePage({ onNavigate, onDonateClick }: HomePageProps) {
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <Statistics />
      <Mission />
      <FundraisingSection onDonateClick={onDonateClick || (() => {})} />
      <Services onNavigate={onNavigate} />
      <TestimonialsCarousel onNavigate={onNavigate} />
      <CurrentProjects />
      <Sponsors onNavigate={onNavigate} />
    </div>
  );
}
