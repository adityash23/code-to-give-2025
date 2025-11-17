import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import raiseHandImage from '../../assets/groupup.png';
import lilacGalaImage from '../../assets/Motherson.png';
import Autoplay from 'embla-carousel-autoplay';

export function CurrentProjects() {
  const campaigns = [
    {
      image: lilacGalaImage,
      title: '2025 Annual Lilac Gala',
      date: 'November 29th',
      description: 'Join us for our annual fundraising gala supporting women and children in crisis. An elegant evening featuring dinner, silent auction, and raffle.',
      buttons: [
        { label: 'Learn more and buy tickets', variant: 'primary' as const, link: 'https://www.zeffy.com/en-CA/ticketing/lilac-gala' },
        { label: 'Become a sponsor', variant: 'secondary' as const }
      ]
    },
    {
      image: raiseHandImage,
      title: 'Raise Your Hand Campaign',
      subtitle: 'Say No To Violence',
      description: 'Join us from November 25th until December 6th in raising awareness and saying no to violence against women. Together, we can make a difference.',
      date: 'November 25th - December 6th'
    }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl mb-4">Current Campaigns</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Join us in making a difference through our ongoing initiatives
          </p>
        </div>

        <Carousel 
          className="w-full max-w-5xl mx-auto"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {campaigns.map((campaign, index) => (
              <CarouselItem key={index}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20">
                  <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                    <div>
                      <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="w-full h-[300px] object-cover rounded-lg"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl">{campaign.title}</h3>
                      {campaign.subtitle && (
                        <p className="text-xl opacity-90">{campaign.subtitle}</p>
                      )}
                      {campaign.date && (
                        <p className="text-lg opacity-80">{campaign.date}</p>
                      )}
                      <p className="opacity-90">{campaign.description}</p>
                      {campaign.buttons && (
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          {campaign.buttons.map((button, idx) => (
                            <button
                              key={idx}
                              onClick={() => button.link && window.open(button.link, '_blank')}
                              className={`px-6 py-3 rounded-lg transition-colors ${
                                button.variant === 'primary'
                                  ? 'bg-white/20 hover:bg-white/30 border border-white/40'
                                  : 'bg-white/10 hover:bg-white/20 border border-white/30'
                              }`}
                            >
                              {button.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white border-white/40 hover:bg-white/20" />
          <CarouselNext className="text-white border-white/40 hover:bg-white/20" />
        </Carousel>
      </div>
    </section>
  );
}