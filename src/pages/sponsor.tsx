import React from 'react';
import { Building2, TrendingUp, Award, Users, DollarSign } from 'lucide-react';

export function SponsorPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Measurable Impact',
      description: 'Track tangible outcomes: number of women sheltered, families supported, and children helped through your sponsorship'
    },
    {
      icon: Award,
      title: 'Brand Recognition',
      description: 'Logo placement at events, on our website, in publications, and recognition in our annual report'
    },
    {
      icon: Users,
      title: 'Community Connection',
      description: 'Associate your brand with a trusted 30+ year organization making real change in Montreal and Laval'
    },
    {
      icon: DollarSign,
      title: 'Tax Benefits',
      description: 'Tax-deductible donation receipts and eligible for CSR reporting'
    }
  ];

  const sponsorshipLevels = [
    {
      level: 'Diamond Sponsor',
      amount: '$25,000+',
      benefits: [
        'Premier logo placement at all events',
        'Featured article in annual report',
        'Dedicated social media recognition campaign',
        'Invitation to exclusive sponsor appreciation events',
        'Opportunity to name a program or room'
      ]
    },
    {
      level: 'Platinum Sponsor',
      amount: '$15,000 - $24,999',
      benefits: [
        'Prominent logo placement at events',
        'Recognition in annual report',
        'Social media acknowledgment',
        'VIP seating at annual gala'
      ]
    },
    {
      level: 'Gold Sponsor',
      amount: '$10,000 - $14,999',
      benefits: [
        'Logo placement at events',
        'Recognition in annual report',
        'Social media mention',
        'Priority seating at events'
      ]
    },
    {
      level: 'Silver Sponsor',
      amount: '$5,000 - $9,999',
      benefits: [
        'Logo on event materials',
        'Listing in annual report',
        'Event attendance opportunities'
      ]
    }
  ];

  const impactMetrics = [
    {
      metric: '1,200+',
      description: 'Women & children supported annually',
      detail: 'Your sponsorship directly supports these families'
    },
    {
      metric: '100+',
      description: 'Women sheltered at Athena\'s House yearly',
      detail: 'Providing emergency safe housing 24/7'
    },
    {
      metric: '12+',
      description: 'Languages offered',
      detail: 'Culturally adapted, accessible services'
    },
    {
      metric: '30+',
      description: 'Years of proven impact',
      detail: 'Award-winning organization with track record'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl mb-6">Become a Corporate Sponsor</h1>
          <p className="text-xl opacity-95">
            Partner with us to create measurable impact while enhancing your brand and CSR initiatives
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#5B4B7A] mb-12 text-center">Measurable Outcomes You Can Advertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0] text-center">
                <div className="text-4xl text-[#8B7BA8] mb-2">{item.metric}</div>
                <div className="text-lg text-[#5B4B7A] mb-2">{item.description}</div>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#5B4B7A] mb-12 text-center">Why Partner With Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border border-[#E8E3F0] shadow-lg">
                <div className="w-12 h-12 bg-[#8B7BA8] rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-[#5B4B7A] mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Levels */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#5B4B7A] mb-12 text-center">Sponsorship Levels</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sponsorshipLevels.map((level, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border-2 border-[#E8E3F0] hover:border-[#8B7BA8] hover:shadow-xl transition-all"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl text-[#5B4B7A] mb-2">{level.level}</h3>
                  <p className="text-3xl text-[#8B7BA8]">{level.amount}</p>
                </div>
                <ul className="space-y-3">
                  {level.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#8B7BA8] mt-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Project */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 lg:p-12 border border-[#E8E3F0] shadow-lg">
            <h2 className="text-3xl text-[#5B4B7A] mb-6 text-center">Flagship Project: Expanded Capacity</h2>
            <div className="bg-gradient-to-br from-[#8B7BA8]/10 to-transparent rounded-lg p-6 mb-6">
              <p className="text-2xl text-[#8B7BA8] text-center mb-4">
                We've doubled our capacity with our new Laval shelter!
              </p>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Our new Second Step Resource features 17 apartments providing long-term support (up to 2 years) for women and children rebuilding their lives. This incredible accomplishment shows that we're moving forward and expanding our impact.
            </p>
            <p className="text-gray-700 mb-6">
              Your sponsorship helps maintain and expand these critical services, ensuring that every woman and child in need has access to safe housing and comprehensive support.
            </p>
            <div className="bg-[#F3F0F8] rounded-lg p-6">
              <h4 className="text-xl text-[#5B4B7A] mb-4">Sponsorship Opportunities for This Project:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span><span className="font-semibold">Apartment Sponsor</span> - $10,000: Name a fully furnished apartment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span><span className="font-semibold">Community Kitchen</span> - $15,000: Support the heart of our community</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span><span className="font-semibold">Children's Room</span> - $5,000: Create a safe space for healing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Matching Program */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#8B7BA8] to-[#9B89BC] rounded-lg p-8 lg:p-12 text-white">
            <h2 className="text-3xl mb-6 text-center">Corporate Matching Program</h2>
            <p className="text-xl mb-6 text-center opacity-95">
              Amplify your impact and engage your employees
            </p>
            <p className="text-lg mb-8">
              Partner with us in a dollar-for-dollar matching program. When you match employee donations, you not only double the impact but also demonstrate your company's commitment to the cause. This creates powerful incentives for community members to donate, knowing their contribution will be matched by a corporate leader like you.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="text-xl mb-4">Benefits:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span>Increased employee engagement and morale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span>Enhanced brand reputation as a community leader</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span>Measurable, amplified social impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span>Positive PR opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* McGill Partnership */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#5B4B7A] mb-8 text-center">Women Forward Initiative</h2>
          <div className="bg-white rounded-lg p-8 lg:p-12 border border-[#E8E3F0] shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              We're building partnerships with McGill University's women-focused clubs (Women in Computer Science, Women in Tech, Women in Leadership, Women in Business) to create empowerment events and networking opportunities.
            </p>
            <p className="text-gray-700 mb-6">
              These clubs have existing relationships with major sponsors like Microsoft, Morgan Stanley, Bell, and RBC. By partnering with us, you gain:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#F3F0F8] rounded-lg p-6">
                <h4 className="text-lg text-[#5B4B7A] mb-3">Access to Top Talent</h4>
                <p className="text-gray-700">McGill is one of Canada's top universities. Connect with ambitious young women entering the workforce.</p>
              </div>
              <div className="bg-[#F3F0F8] rounded-lg p-6">
                <h4 className="text-lg text-[#5B4B7A] mb-3">Campus Visibility</h4>
                <p className="text-gray-700">Strong presence in academic and student circles through events and conferences.</p>
              </div>
              <div className="bg-[#F3F0F8] rounded-lg p-6">
                <h4 className="text-lg text-[#5B4B7A] mb-3">Network Effects</h4>
                <p className="text-gray-700">Align with other corporate leaders already supporting these initiatives.</p>
              </div>
              <div className="bg-[#F3F0F8] rounded-lg p-6">
                <h4 className="text-lg text-[#5B4B7A] mb-3">Future-Focused Branding</h4>
                <p className="text-gray-700">Position your company as supporting the next generation of women leaders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-[#5B4B7A] mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how your organization can create measurable impact while achieving your CSR goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:514-274-8117"
              className="inline-block bg-[#FF8C00] hover:bg-[#FF7C00] text-white px-12 py-4 rounded-lg transition-colors text-lg"
            >
              Call 514-274-8117
            </a>
            <a
              href="mailto:evenement@bouclierdathena.com"
              className="inline-block bg-[#8B7BA8] hover:bg-[#7A6A97] text-white px-12 py-4 rounded-lg transition-colors text-lg"
            >
              Email Us
            </a>
          </div>
          <p className="text-gray-600 mt-6">
            Download our <a href="#" className="text-[#8B7BA8] hover:underline">sponsorship package</a> for detailed information
          </p>
        </div>
      </section>
    </div>
  );
}
