import { Button } from '../ui/button';
import { Heart, TrendingUp, Share2 } from 'lucide-react';

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
    <section className="pt-4 pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8B7BA8] rounded-full mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-5xl text-[#5B4B7A] mb-6">
            To reach more women and children in need of safety, we’ve opened another shelter
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 mb-8">
            <p>
              Our new facility in Laval has{" "}
              <span className="text-[#8B7BA8] font-semibold">
                {capacityIncrease} apartments
              </span>
              , allowing us to house significantly more women and children who need safety
              and support.
            </p>
            <p>
              <span className="text-[#5B4B7A] font-semibold">But we need your help.</span>{" "}
              We're run completely on donations from our generous sponsors and people
              like you.
            </p>
            <p className="text-xl text-[#8B7BA8]">
              It's donations that make all this possible. And while we understand it's not always possible to give, we do encourage you to share our mission on social media
            </p>
          </div>

          {/* Donate + Share Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            {/* Donate Button */}
            <button
              onClick={onDonateClick}
              className="w-full sm:w-auto px-12 py-6 text-xl font-semibold text-white
                         bg-[#FF8C00] border border-[#FF8C00]
                         rounded-lg shadow-sm hover:bg-[#FF7C00]
                         hover:shadow-md transition-all duration-300"
            >
              Donate Now
            </button>

            {/* Share Button */}
            <button
              onClick={() => {
                const shareData = {
                  title: "Support Our Shelter",
                  text: "Help us reach our fundraising goal to support women and children in need.",
                  url: window.location.href,
                };
                if (navigator.share) {
                  navigator
                    .share(shareData)
                    .catch((err) => console.error("Error sharing:", err));
                } else {
                  navigator.clipboard.writeText(shareData.url);
                  alert("Link copied to clipboard! Share it with your friends 🧡");
                }
              }}
              className="w-full sm:w-auto px-12 py-6 text-xl font-semibold text-[#8B7BA8]
                         bg-gradient-to-br from-[#F3F0F8] to-white
                         border border-[#E8E3F0] rounded-lg shadow-sm
                         hover:shadow-md hover:brightness-105 transition-all duration-300
                         flex items-center justify-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </div>

        {/* Impactful Progress Bar */}
        <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-xl p-10 lg:p-12 border border-[#E8E3F0] shadow-xl">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-8 h-8 text-[#8B7BA8]" />
            <h3 className="text-2xl font-semibold text-[#5B4B7A]">
              2026 Operating Fund Goal
            </h3>
          </div>

          <p className="text-gray-700 mb-6 italic text-center max-w-2xl mx-auto">
            Every percentage point raised keeps our doors open — giving families warmth,
            counseling, and a safe place to start again.
          </p>

          {/* Stylized progress bar */}
          <div className="relative w-full h-8 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4]
                         flex items-center justify-end pr-3 text-white font-bold text-sm rounded-full
                         transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            >
              <span className="drop-shadow-sm">{percentage.toFixed(0)}%</span>
            </div>
          </div>

          {/* Goal + Raised display */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 text-center sm:text-left gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Raised So Far</p>
              <p className="text-3xl font-semibold text-[#8B7BA8]">
                ${currentAmount.toLocaleString()}
              </p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-[#E8E3F0]" />
            <div>
              <p className="text-sm text-gray-600 mb-1">2026 Goal</p>
              <p className="text-3xl font-semibold text-[#5B4B7A]">
                ${goalAmount.toLocaleString()}
              </p>
            </div>
          </div>

          <p className="mt-10 text-gray-700 text-center max-w-2xl mx-auto">
            Help us reach our goal to keep our shelters operating and expand support
            programs throughout 2026. Every donation brings us closer to welcoming more
            families to safety.
          </p>
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