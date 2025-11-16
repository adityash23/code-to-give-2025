'use client';

import React from 'react';
import { Button } from '../ui/button';
import { PageType } from '../../app';

interface HeroProps {
  onNavigate: (page: PageType) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl tracking-tight">
              Every woman deserves safety.
              <br />
              Every child deserves joy.
              <br />
              Every future deserves hope.
            </h1>
            <p className="text-lg lg:text-xl opacity-95">
              The Shield of Athena is a lifeline for women and children escaping conjugal and sexual violence. We provide immediate safety, trauma-informed counseling, children's programs, and long-term support so families can rebuild their lives with dignity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => onNavigate('emergency')}
                className="bg-[#FF8C00] hover:bg-[#FF7C00] text-white"
              >
                Get Help Now
              </Button>
              <Button 
                size="lg" 
                onClick={() => onNavigate('programs')}
                variant="outline" 
                className="bg-white/10 border-white text-white hover:bg-white/20"
              >
                Learn About Our Programs
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
            src="/globe.svg" 
            className="w-full h-[400px] object-cover"
          />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
