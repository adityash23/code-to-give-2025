import type { PageType } from '../App';

interface DonationReasonsPageProps {
  onNavigate: (page: PageType) => void;
}

export function DonationReasonsPage({ onNavigate }: DonationReasonsPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6">Why Donate?</h1>
          <p className="text-xl opacity-95">
            Your contribution makes a real difference in the lives of families
          </p>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0]">
              <h2 className="text-2xl text-[#5B4B7A] mb-4">Save Lives</h2>
              <p className="text-gray-700">
                Your donation provides critical emergency shelter and support services that can literally save lives. Every day, women and children come to us in crisis, and your support ensures we can be there for them.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-[#E8E3F0]">
              <h2 className="text-2xl text-[#5B4B7A] mb-4">Break the Cycle</h2>
              <p className="text-gray-700">
                Family violence often spans generations. By supporting counseling and support programs, you help break the cycle of violence and create a better future for children who have witnessed abuse.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0]">
              <h2 className="text-2xl text-[#5B4B7A] mb-4">Build Independence</h2>
              <p className="text-gray-700">
                Our programs don't just provide immediate safety—they help survivors rebuild their lives with job training, housing assistance, and long-term support that leads to independence and self-sufficiency.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-[#E8E3F0]">
              <h2 className="text-2xl text-[#5B4B7A] mb-4">Support Your Community</h2>
              <p className="text-gray-700">
                Family violence affects us all. By supporting Shield of Athena, you're investing in a safer, healthier community where everyone can thrive free from fear and violence.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('donation-amount')}
              className="bg-[#FF8C00] hover:bg-[#FF7C00] text-white text-lg py-4 px-8 rounded-lg transition-colors"
            >
              Make a Donation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

