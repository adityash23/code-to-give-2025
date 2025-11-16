import React from 'react';
import { Button } from '../components/ui/button';
import type { PageType } from '../App';
import donationImpactImage from '../assets/react.svg';

interface DonationReasonsPageProps {
  onNavigate: (page: PageType) => void;
}

export function DonationReasonsPage({ onNavigate }: DonationReasonsPageProps) {
  const donationImpacts = [
    {
      amount: '$35',
      impact: 'Become a member and learn about violence and our services.',
      impactFr: 'Devenez membre et en savoir plus sur la violence conjugale.'
    },
    {
      amount: '$100',
      impact: 'Provide 2 weeks of meals for a family preparing to leave our shelter.',
      impactFr: 'Donner 2 semaines de repas pour une famille qui se prépare à quitter notre maison d\'hébergement.'
    },
    {
      amount: '$500',
      impact: 'Provide 2 weeks of meals for a family preparing to leave our shelter.',
      impactFr: 'Héberger une femme dans notre refuge pendant 40 jours.'
    },
    {
      amount: '$1,000',
      impact: 'Sponsor and furnish an apartment in our Second Step Resource.',
      impactFr: 'Héberger une femme et son enfant dans notre refuge pendant 40 jours.'
    },
    {
      amount: '$10,000',
      impact: 'Sponsor and furnish an apartment in our Second Step Resource.',
      impactFr: 'Parrainer et meubler un appartement dans notre ressource de deuxième étape.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6">How does my donation help?</h1>
          <p className="text-xl opacity-95">
            With your support we can make a difference!
          </p>
        </div>
      </section>

      {/* Donation Impact Visual */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <img 
              src={donationImpactImage} 
              alt="How your donation helps" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Donation Tiers */}
          <div className="space-y-6">
            {donationImpacts.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0] hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="text-4xl text-[#5B4B7A] font-semibold min-w-[120px]">
                    {item.amount}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-900 mb-1">{item.impact}</p>
                    <p className="text-gray-600 italic">{item.impactFr}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-2xl text-[#5B4B7A] mb-8">
              Every donation, no matter the size, makes a real difference in someone's life.
            </p>
            <Button
              size="lg"
              onClick={() => onNavigate('donation-amount')}
              className="bg-[#FF8C00] hover:bg-[#FF7C00] text-white px-12"
            >
              Choose Your Donation Amount
            </Button>
          </div>
        </div>
      </section>

      {/* Brick by Brick Project */}
      <section className="py-16 bg-gradient-to-br from-[#F3F0F8] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 lg:p-12 border border-[#E8E3F0] shadow-lg">
            <h2 className="text-3xl text-[#5B4B7A] mb-6 text-center">Brick by Brick Campaign</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  Help us build our home, brick by brick. Our Second Step Resource provides long-term housing for women and children, giving them the time and support they need to rebuild their lives.
                </p>
                <p className="text-gray-700 mb-6">
                  As a sponsor, your name will be placed on a plaque on the door of an apartment, or the room can be named in honor of a loved one.
                </p>
                <div className="space-y-3 text-gray-700">
                  <p><span className="text-[#5B4B7A] font-semibold">Apartment:</span> 10,000 $</p>
                  <p><span className="text-[#5B4B7A] font-semibold">Children's Room:</span> 5,000 $</p>
                  <p><span className="text-[#5B4B7A] font-semibold">Community Kitchen:</span> 15,000 $</p>
                  <p><span className="text-[#5B4B7A] font-semibold">Library:</span> 5,000 $</p>
                  <p><span className="text-[#5B4B7A] font-semibold">Brick:</span> 500 $</p>
                  <p><span className="text-[#5B4B7A] font-semibold">Star:</span> 1,000 $</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full h-64 bg-gradient-to-br from-[#8B7BA8]/10 to-[#B5A3D4]/10 rounded-lg flex items-center justify-center border-2 border-[#8B7BA8] border-dashed">
                  <p className="text-gray-400 text-center px-4">Brick by Brick<br/>Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Receipt Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#F3F0F8] rounded-lg p-8 border border-[#E8E3F0]">
            <h3 className="text-2xl text-[#5B4B7A] mb-4">All contributions are tax deductible</h3>
            <p className="text-gray-700">
              You will receive an official tax receipt for your donation. Your support helps us continue providing vital services to women and children in need.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
