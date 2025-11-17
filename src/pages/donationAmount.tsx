import type { PageType } from '../App';

interface DonationAmountPageProps {
  onNavigate: (page: PageType) => void;
}

export function DonationAmountPage({ onNavigate }: DonationAmountPageProps) {
  const suggestedAmounts = [35, 50, 100, 250, 500, 1000];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6">Choose Your Amount</h1>
          <p className="text-xl opacity-95">
            Every contribution makes a meaningful impact
          </p>
        </div>
      </section>

      {/* Amount Selection */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0] mb-8">
            <h2 className="text-2xl text-[#5B4B7A] mb-6 text-center">Select Your Donation Amount</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {suggestedAmounts.map((amount) => (
                <button
                  key={amount}
                  className="bg-white hover:bg-[#F3F0F8] border-2 border-[#E8E3F0] hover:border-[#8B7BA8] rounded-lg p-6 text-2xl text-[#5B4B7A] transition-all"
                >
                  ${amount}
                </button>
              ))}
            </div>
            <div className="mb-6">
              <label className="block text-lg text-[#5B4B7A] mb-2">Or enter a custom amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl">$</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full pl-8 pr-4 py-4 text-xl border-2 border-[#E8E3F0] rounded-lg focus:border-[#8B7BA8] focus:outline-none"
                />
              </div>
            </div>
            <button
              onClick={() => onNavigate('donation')}
              className="w-full bg-[#FF8C00] hover:bg-[#FF7C00] text-white text-lg py-4 rounded-lg transition-colors"
            >
              Continue
            </button>
          </div>

          <div className="bg-white rounded-lg p-8 border border-[#E8E3F0]">
            <h2 className="text-2xl text-[#5B4B7A] mb-4">What Your Donation Can Do</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-3xl text-[#8B7BA8]">$35</div>
                <p className="text-gray-700 flex-1">Become a member and learn about violence and our services</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl text-[#8B7BA8]">$100</div>
                <p className="text-gray-700 flex-1">Provide 2 weeks of meals for a family preparing to leave our shelter</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl text-[#8B7BA8]">$500</div>
                <p className="text-gray-700 flex-1">Provide 10 weeks of meals for a family preparing to leave our shelter</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl text-[#8B7BA8]">$1,000+</div>
                <p className="text-gray-700 flex-1">Sponsor and furnish an apartment in our Second Step Resource</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

