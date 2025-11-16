import { Home, Heart, Scale, GraduationCap, Globe2, Users } from 'lucide-react';
import type { PageType } from '../../App';

interface ServicesProps {
  onNavigate: (page: PageType) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Home,
      title: 'Emergency Shelter',
      description: '24/7 safe housing at Athena\'s House with psychosocial care and essentials for women and children escaping abuse'
    },
    {
      icon: Heart,
      title: 'Counseling & Intervention',
      description: 'Crisis response, trauma recovery, and empowerment groups led by trained professionals'
    },
    {
      icon: Scale,
      title: 'Legal Clinics',
      description: 'Assistance with family law, divorce, sponsorship fraud, and forced marriage'
    },
    {
      icon: GraduationCap,
      title: 'Life Skills Training',
      description: 'Financial help, life-skills training, computer literacy, and free French classes'
    },
    {
      icon: Globe2,
      title: 'Multilingual Services',
      description: 'Available in 12+ languages with culturally adapted support'
    },
    {
      icon: Users,
      title: 'Long-term Housing',
      description: '17 apartments in our new Laval shelter for up to 2 years of support to rebuild independence'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl text-[#5B4B7A] mb-4">Our Services & Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive support for women and children at every stage of their journey to safety and independence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => onNavigate('programs')}
              className="bg-gradient-to-br from-[#F3F0F8] to-white p-6 rounded-lg border border-[#E8E3F0] hover:shadow-lg transition-shadow text-left"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#8B7BA8] rounded-lg mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-[#5B4B7A] mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
