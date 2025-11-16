import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

export function VisionMissionPage() {
  const values = [
    'A warm welcoming environment',
    'Empower women by providing respect and support in their time of need',
    'Promote an interdisciplinary and multisectoral approach',
    'Ensure the security and confidentiality of all clients',
    'Provide equal access to services and issues of social justice',
    'Act with integrity and professionalism in our interventions',
    'A culturally sensitive approach that stresses violence is unacceptable and non-negotiable irrespective of ethnic, educational, religious, and socioeconomic background'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6">Vision, Mission and Values</h1>
          <p className="text-xl opacity-95">
            Guiding principles that shape our work and commitment to ending family violence
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-[#8B7BA8] rounded-full flex items-center justify-center">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl text-[#5B4B7A]">Our Vision</h2>
          </div>
          <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 lg:p-12 border border-[#E8E3F0]">
            <p className="text-xl text-gray-700 leading-relaxed">
              To play a leadership role in helping women and their children, as well as communities, break the cycle of psychological, emotional, verbal, economic and physical violence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-[#8B7BA8] rounded-full flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl text-[#5B4B7A]">Our Mission</h2>
          </div>
          <div className="bg-white rounded-lg p-8 lg:p-12 border border-[#E8E3F0] shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed">
              The Shield is a charitable organization offering education, professional support, intervention and prevention services that are culturally and linguistically adapted to meet the needs of women, their children and ethnocultural communities.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-[#8B7BA8] rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl text-[#5B4B7A]">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0] hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#8B7BA8] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
