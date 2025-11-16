import React from 'react';
import { Hero } from '../components/home/hero';

/*
import { Statistics } from '../components/home/Statistics';
import { Mission } from '../components/home/Mission';
import { FundraisingSection } from '../components/home/FundraisingSection';
import { Services } from '../components/home/Services';
import { TestimonialsCarousel } from '../components/home/TestimonialsCarousel';
import { CurrentProjects } from '../components/home/CurrentProjects';
import { Sponsors } from '../components/home/Sponsors';
*/
import type { PageType } from '../App';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onDonateClick?: () => void;
}

export function HomePage({ onNavigate, onDonateClick }: HomePageProps) {
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      {/*
      <Statistics />
      <Mission />
      <FundraisingSection onDonateClick={onDonateClick || (() => {})} />
      <Services onNavigate={onNavigate} />
      <TestimonialsCarousel onNavigate={onNavigate} />
      <CurrentProjects />
      <Sponsors onNavigate={onNavigate} />
      */}
    </div>
  );
}
