import { HandHeart, Building2, Award } from 'lucide-react';

export function SponsorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HandHeart className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl mb-6">Become a Sponsor</h1>
          <p className="text-xl opacity-95">
            Partner with us to create lasting change in our community
          </p>
        </div>
      </section>

      {/* Sponsorship Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0] mb-8">
            <h2 className="text-3xl text-[#5B4B7A] mb-6">Why Sponsor Shield of Athena?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Corporate sponsorship is a powerful way to demonstrate your organization's commitment to social responsibility while making a tangible impact on the lives of families affected by violence.
            </p>
            <p className="text-lg text-gray-700">
              As a sponsor, you'll be part of a community dedicated to ending family violence and supporting survivors on their journey to safety and independence.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsorship Levels */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#5B4B7A] mb-8 text-center">Sponsorship Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-[#E8E3F0]">
              <div className="w-12 h-12 bg-[#8B7BA8] rounded-full flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-[#5B4B7A] mb-3">Program Sponsor</h3>
              <p className="text-gray-700 mb-4">
                Support specific programs like emergency shelter, counseling, or support groups.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Recognition in program materials</li>
                <li>• Logo placement on website</li>
                <li>• Impact reports</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-[#E8E3F0]">
              <div className="w-12 h-12 bg-[#8B7BA8] rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-[#5B4B7A] mb-3">Event Sponsor</h3>
              <p className="text-gray-700 mb-4">
                Sponsor our annual fundraising events, galas, or community awareness campaigns.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Prominent event recognition</li>
                <li>• Speaking opportunities</li>
                <li>• Media exposure</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-[#E8E3F0]">
              <div className="w-12 h-12 bg-[#8B7BA8] rounded-full flex items-center justify-center mb-4">
                <HandHeart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-[#5B4B7A] mb-3">Major Partner</h3>
              <p className="text-gray-700 mb-4">
                Long-term strategic partnerships with comprehensive benefits and recognition.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Exclusive partnership benefits</li>
                <li>• Customized recognition package</li>
                <li>• Direct impact reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#5B4B7A] mb-8 text-center">Sponsor Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
              <h3 className="text-xl text-[#5B4B7A] mb-3">Brand Visibility</h3>
              <p className="text-gray-700">
                Your organization's name and logo will be featured in our marketing materials, website, and at events, reaching thousands of community members.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
              <h3 className="text-xl text-[#5B4B7A] mb-3">Employee Engagement</h3>
              <p className="text-gray-700">
                Offer your employees meaningful volunteer opportunities and team-building activities that make a real difference.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
              <h3 className="text-xl text-[#5B4B7A] mb-3">Tax Benefits</h3>
              <p className="text-gray-700">
                Sponsorship contributions are tax-deductible, providing financial benefits while supporting a worthy cause.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
              <h3 className="text-xl text-[#5B4B7A] mb-3">Community Impact</h3>
              <p className="text-gray-700">
                Demonstrate your commitment to corporate social responsibility and make a lasting impact on your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 border border-[#E8E3F0] text-center">
            <h2 className="text-3xl text-[#5B4B7A] mb-4">Interested in Becoming a Sponsor?</h2>
            <p className="text-lg text-gray-700 mb-8">
              We'd love to discuss how your organization can partner with Shield of Athena to create meaningful change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:514-274-8117"
                className="inline-block bg-[#8B7BA8] hover:bg-[#7A6A97] text-white px-8 py-4 rounded-lg transition-colors"
              >
                Call 514-274-8117
              </a>
              <a
                href="mailto:bouclierdathena@bellnet.ca"
                className="inline-block bg-white border-2 border-[#8B7BA8] text-[#8B7BA8] hover:bg-[#F3F0F8] px-8 py-4 rounded-lg transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

