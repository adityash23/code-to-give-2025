import React from 'react';
import { Button } from '../components/ui/button';
import type { PageType } from '../App';
import { Heart, Phone, Mail, Gift, Calendar, Building } from 'lucide-react';

interface DonationPageProps {
  onNavigate: (page: PageType) => void;
}

export function DonationPage({ onNavigate }: DonationPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl mb-6">Support Our Mission</h1>
          <p className="text-xl opacity-95 mb-8">
            Since 1991, the Shield has helped thousands of women and children victims of family violence rebuild their lives. Your tax-deductible contributions help another woman and her children replenish their strength and develop a survival strategy.
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate('donation-reasons')}
            className="bg-[#FF8C00] hover:bg-[#FF7C00] text-white px-12"
          >
            Donate Now
          </Button>
        </div>
      </section>

      {/* Ways to Donate */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#5B4B7A] mb-12 text-center">Ways to Give</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#8B7BA8] rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-[#5B4B7A] mb-3">By Phone</h3>
              <p className="text-gray-700 mb-4">Make a personal donation today by phone</p>
              <p className="text-lg text-[#8B7BA8]">514-274-8117</p>
            </div>

            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#8B7BA8] rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-[#5B4B7A] mb-3">Online</h3>
              <p className="text-gray-700 mb-4">Give directly and securely through CanadaHelps</p>
              <a 
                href="https://www.canadahelps.org/en/dn/27709" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#8B7BA8] hover:underline"
              >
                Donate on CanadaHelps →
              </a>
            </div>

            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#8B7BA8] rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-[#5B4B7A] mb-3">By Mail</h3>
              <p className="text-gray-700 mb-4">Send your tax-deductible donation to:</p>
              <p className="text-sm text-gray-700">
                Shield of Athena<br />
                P.O. Box 25<br />
                Mount Royal, QC H3P 3B8
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#8B7BA8] rounded-full flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-[#5B4B7A] mb-3">Planned Giving</h3>
              <p className="text-gray-700">Pledge a gift through your will, insurance policy, annuity or real estate. Your donation will help women and children for years to come.</p>
            </div>

            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#8B7BA8] rounded-full flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-[#5B4B7A] mb-3">Memorial Giving</h3>
              <p className="text-gray-700">Honour someone who has passed away by making a donation in his or her name. An acknowledgement card will be sent to the family on your behalf.</p>
            </div>

            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#8B7BA8] rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-[#5B4B7A] mb-3">Tribute Gifts</h3>
              <p className="text-gray-700">Celebrate a joyous event by making a donation in the name of someone special. Perfect for birthdays, anniversaries, graduation, and retirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#5B4B7A] mb-8 text-center">Support Through Special Events</h2>
          <div className="bg-white rounded-lg p-8 lg:p-12 border border-[#E8E3F0] shadow-lg">
            <h3 className="text-2xl text-[#5B4B7A] mb-6">Christmas & Easter Activities</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Hold a non-perishable food drive or toy drive in your place of business</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Purchase food vouchers for the shelter to use</span>
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Purchase and assemble toiletry bags for women & children</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Buy a gift for the shelter from our wish list</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 text-center">
              For more information on how you can help, please call us at <span className="text-[#8B7BA8]">514-274-8117</span>
            </p>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#8B7BA8] to-[#9B89BC] text-white rounded-lg p-8 lg:p-12 text-center">
            <h2 className="text-3xl mb-6">Become a Member</h2>
            <p className="text-lg opacity-95 mb-8">
              Join our community of supporters with a membership donation. Members receive updates on our work and opportunities to get more involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => onNavigate('donation-reasons')}
                className="bg-white text-[#8B7BA8] hover:bg-gray-100"
              >
                Donate for Membership
              </Button>
              <a
                href="http://shieldofathena.com/sites/shieldofathena.com/files/2021-2022-membership_forms.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white text-white hover:bg-white/20 w-full"
                >
                  Download Membership Form
                </Button>
              </a>
            </div>
            <p className="text-sm opacity-80 mt-4">
              After donating, fill out the membership form to complete your registration
            </p>
          </div>
        </div>
      </section>

      {/* Tax Deductible Info */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg p-8 border border-[#E8E3F0]">
            <h3 className="text-2xl text-[#5B4B7A] mb-4">We make a positive difference in people's lives</h3>
            <p className="text-xl text-gray-700 mb-6">Please give generously. All contributions are tax deductible.</p>
            <Button
              size="lg"
              onClick={() => onNavigate('donation-reasons')}
              className="bg-[#FF8C00] hover:bg-[#FF7C00] text-white"
            >
              Make Your Donation Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
