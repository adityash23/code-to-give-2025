import React from 'react';
import { Button } from '../ui/button';
import type { PageType } from '../../App';

interface SponsorsProps {
  onNavigate: (page: PageType) => void;
}

export function Sponsors({ onNavigate }: SponsorsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl text-[#5B4B7A] mb-4">Our Supporters</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are grateful for the support of our sponsors who make our work possible
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-12 border border-[#E8E3F0]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Placeholder sponsor logos - replace with actual logos */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="flex items-center justify-center">
                <div className="w-32 h-20 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs">
                  Sponsor Logo
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl text-[#5B4B7A] mb-4">Become a Sponsor</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Partner with us to create measurable impact and support women and children in need. Your sponsorship provides visibility while making a real difference in our community.
            </p>
            <Button
              size="lg"
              onClick={() => onNavigate('sponsor')}
              className="bg-[#8B7BA8] hover:bg-[#7A6A97] text-white"
            >
              Learn About Sponsorship Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
