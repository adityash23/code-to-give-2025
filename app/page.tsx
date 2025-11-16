'use client';

import React from 'react';
import { Hero } from './components/home/hero';

import { PageType } from './app';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onDonateClick?: () => void;
}

export default function HomePage({ onNavigate, onDonateClick }: HomePageProps) {
  return (
    <div>
      {/* Pass the onNavigate prop to Hero */}
      <Hero onNavigate={onNavigate} />
    </div>
  );
}
