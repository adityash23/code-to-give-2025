import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '../ui/carousel';
import { Button } from '../ui/button';
import Autoplay from 'embla-carousel-autoplay';

interface TestimonialsCarouselProps {
  onDonateClick?: () => void;
}

export function TestimonialsCarousel({ onDonateClick }: TestimonialsCarouselProps) {
  const testimonials = [
    {
      image: 'https://images.unsplash.com/photo-1663045281813-c7407a6ec613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBjaGlsZCUyMGhhcHB5fGVufDF8fHx8MTc2MzE4ODUzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Maria found safety for her children at Athena\'s House.',
      subtext: 'Your donations keep our doors open 24/7.'
    },
    {
      image: 'https://images.unsplash.com/photo-1758273240403-052b3c99f636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNvdW5zZWxpbmclMjBzdXBwb3J0fGVufDF8fHx8MTc2MzE0OTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Fatima found her voice again through multilingual counseling.',
      subtext: 'We offer therapy in over 12 languages.'
    },
    {
      image: 'https://images.unsplash.com/photo-1759738101500-6d8d522b2681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwd29tZW4lMjBjb21tdW5pdHl8ZW58MXx8fHwxNzYzMTc3OTM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Noura found the guidance she needed to rebuild her life.',
      subtext: 'Your support funds our free legal clinics.'
    },
    {
      image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjB3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjMxMzg0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Claire built a new life with strength, confidence, and independence.',
      subtext: 'Life skills programs empower every survivor\'s next step.'
    }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const handleDonate = onDonateClick || (() => {});

  return (
    <section className="py-20 bg-gradient-to-br from-[#F3F0F8] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl text-[#5B4B7A] mb-4">Voices of Hope</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stories of transformation and new beginnings
          </p>
        </div>

        <Carousel 
          className="w-full max-w-4xl mx-auto"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="h-80">
                      <img
                        src={testimonial.image}
                        alt="Story of hope"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center h-80">
                      <h3 className="text-2xl lg:text-3xl text-[#5B4B7A] mb-4">
                        {testimonial.text}
                      </h3>
                      <p className="text-lg text-gray-700">
                        {testimonial.subtext}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
            {/* Final slide */}
            <CarouselItem>
              <div className="bg-gradient-to-br from-[#8B7BA8] to-[#9B89BC] rounded-lg shadow-lg p-12 md:p-16 text-center text-white h-80 flex flex-col items-center justify-center">
                <h3 className="text-3xl lg:text-5xl mb-8">
                  You make these miracles possible.
                </h3>
                <Button
                  size="lg"
                  onClick={handleDonate}
                  className="bg-white text-[#8B7BA8] hover:bg-gray-100"
                >
                  Choose Your Gift
                </Button>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="text-[#5B4B7A] border-[#5B4B7A] hover:bg-[#F3F0F8]" />
          <CarouselNext className="text-[#5B4B7A] border-[#5B4B7A] hover:bg-[#F3F0F8]" />
        </Carousel>

        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            Names have been changed to protect the privacy of our clients
          </p>
        </div>
      </div>
    </section>
  );
}
