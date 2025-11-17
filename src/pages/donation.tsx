import type { PageType } from '../App';

interface DonationPageProps {
  onNavigate: (page: PageType) => void;
}

export function DonationPage({ onNavigate }: DonationPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6">Make a Donation</h1>
          <p className="text-xl opacity-95">
            Your support helps us protect and empower families in crisis
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0]">
              <h2 className="text-2xl text-[#5B4B7A] mb-4">One-Time Donation</h2>
              <p className="text-gray-700 mb-6">
                Make an immediate impact with a one-time gift. Every dollar helps provide essential services to families in need.
              </p>
              <button
                onClick={() => onNavigate('donation-amount')}
                className="w-full bg-[#FF8C00] hover:bg-[#FF7C00] text-white py-3 px-6 rounded-lg transition-colors"
              >
                Donate Now
              </button>
            </div>

            <div className="bg-white rounded-lg p-8 border border-[#E8E3F0]">
              <h2 className="text-2xl text-[#5B4B7A] mb-4">Monthly Support</h2>
              <p className="text-gray-700 mb-6">
                Become a monthly donor and provide sustained support that helps us plan for the future and serve more families.
              </p>
              <button
                onClick={() => onNavigate('donation-amount')}
                className="w-full bg-[#8B7BA8] hover:bg-[#7A6A97] text-white py-3 px-6 rounded-lg transition-colors"
              >
                Set Up Monthly Giving
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0]">
            <h2 className="text-2xl text-[#5B4B7A] mb-4">Why Your Donation Matters</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl text-[#5B4B7A] mb-2">Emergency Shelter</h3>
                <p className="text-gray-700">
                  Your donation helps provide safe, temporary housing for women and children fleeing violence.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-[#5B4B7A] mb-2">Counseling Services</h3>
                <p className="text-gray-700">
                  Support professional counseling and therapy services for survivors and their children.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-[#5B4B7A] mb-2">Support Groups</h3>
                <p className="text-gray-700">
                  Fund support groups that provide community and healing for those affected by violence.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-[#5B4B7A] mb-2">Community Outreach</h3>
                <p className="text-gray-700">
                  Enable educational programs and awareness campaigns that prevent violence before it starts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

