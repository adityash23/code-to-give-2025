import { Button } from '../ui/button';
import { Heart, TrendingUp } from 'lucide-react';

interface FundraisingSectionProps {
  onDonateClick: () => void;
}

export function FundraisingSection({ onDonateClick }: FundraisingSectionProps) {
  // Mock data - in real implementation, this would come from a database
  const goalAmount = 500000; // $500,000 goal for 2026
  const currentAmount = 287500; // Current raised amount
  const percentage = (currentAmount / goalAmount) * 100;
  const capacityIncrease = 17; // 17 new apartments

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8B7BA8] rounded-full mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-5xl text-[#5B4B7A] mb-6">
            We've Just Opened a New Shelter
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 mb-8">
            <p>
              Our new facility in Laval has <span className="text-[#8B7BA8] font-semibold">{capacityIncrease} apartments</span>, allowing us to house significantly more women and children who need safety and support.
            </p>
            <p>
              <span className="text-[#5B4B7A] font-semibold">But we need your help.</span> We're run completely on donations from our generous sponsors and people like you. 
            </p>
            <p className="text-xl text-[#8B7BA8]">
              It's donations that make all this possible.
            </p>
          </div>

          {/* Donate Button */}
          <Button
            size="lg"
            onClick={onDonateClick}
            className="bg-[#FF8C00] hover:bg-[#FF7C00] text-white px-12 py-6 text-xl mb-12"
          >
            Donate Now
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 lg:p-12 border border-[#E8E3F0] shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-[#8B7BA8]" />
            <h3 className="text-2xl text-[#5B4B7A]">2026 Operating Fund Goal</h3>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{percentage.toFixed(1)}% of goal</span>
            </div>
            <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#8B7BA8] to-[#B5A3D4] rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
                style={{ width: `${percentage}%` }}
              >
                <span className="text-white text-xs font-semibold">{percentage.toFixed(0)}%</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 border border-[#E8E3F0]">
              <p className="text-sm text-gray-600 mb-1">Raised So Far</p>
              <p className="text-3xl text-[#8B7BA8]">
                ${currentAmount.toLocaleString()}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[#E8E3F0]">
              <p className="text-sm text-gray-600 mb-1">2026 Goal</p>
              <p className="text-3xl text-[#5B4B7A]">
                ${goalAmount.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="bg-[#8B7BA8]/10 rounded-lg p-6 text-center">
            <p className="text-gray-700">
              Help us reach our goal to operate our shelters and provide critical services throughout 2026. Every donation brings us closer to supporting more families in need.
            </p>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
            <div className="text-4xl text-[#8B7BA8] mb-2">1,200+</div>
            <p className="text-gray-700">Families supported annually</p>
          </div>
          <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
            <div className="text-4xl text-[#8B7BA8] mb-2">24/7</div>
            <p className="text-gray-700">Emergency shelter services</p>
          </div>
          <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
            <div className="text-4xl text-[#8B7BA8] mb-2">12+</div>
            <p className="text-gray-700">Languages offered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
