import React from 'react'
import { PageType } from '../../app';

interface HeroProps {
  onNavigate: (page: PageType) => void;
}
export function Hero({ onNavigate }: HeroProps) {}